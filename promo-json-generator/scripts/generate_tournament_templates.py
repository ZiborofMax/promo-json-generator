import json
import re
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
APP_JSON = Path("/Users/MVZiborov/Downloads/app.message (1).txt")
WEB_JSON = Path("/Users/MVZiborov/Downloads/web.message.txt")
OUTPUT = ROOT / "tournament-templates.js"
MAX_TEMPLATES = 30


def get_values(item, key):
    return item.get(key, {}).get("values", {})


def html_to_text(value):
    return (
        str(value or "")
        .replace("<br>", "\n")
        .replace("<br/>", "\n")
        .replace("<br />", "\n")
        .replace("&bull;", "•")
        .replace("&nbsp;", " ")
    )


def clean_label(value, limit=58):
    text = " ".join(html_to_text(value).split())
    if len(text) > limit:
        text = text[: limit - 1].rstrip() + "..."
    return text or "без названия"


def parse_date(value):
    text = str(value or "").strip()
    for fmt in ("%H:%M %d.%m.%Y", "%H:%M %d.%m.%y"):
        try:
            return datetime.strptime(text, fmt)
        except ValueError:
            pass
    return datetime.min


def prize_places_count(value):
    text = html_to_text(value)
    places = set()

    for start, end in re.findall(r"(\d+)\s*[-–]\s*(\d+)\s+мест", text, flags=re.IGNORECASE):
        left = int(start)
        right = int(end)
        if right >= left:
            places.update(range(left, right + 1))

    for single in re.findall(r"(?<![-–])\b(\d+)\s+место\b", text, flags=re.IGNORECASE):
        places.add(int(single))

    return len(places)


def score_mode(value):
    text = html_to_text(value).lower()
    if "сумме ставки" in text and "чистому выигрыш" not in text:
        return "stake"
    if "чистому выигрыш" in text:
        return "net-win"
    return re.sub(r"\s+", " ", text)[:80]


def booster_mode(value):
    text = html_to_text(value).lower()
    if "не предусмотр" in text:
        return "none"
    return re.sub(r"\s+", " ", text)[:120]


def event_family(value):
    text = html_to_text(value).lower()
    text = text.replace("ё", "е")
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"[.,;:]+$", "", text).strip()
    return text


def normalize_item(source, web_by_id):
    item = json.loads(json.dumps(source, ensure_ascii=False))
    tournament_id = str(item.get("id"))
    app_url = item.pop("makeBetUrl", "")
    item["appMakeBetUrl"] = app_url
    item["webMakeBetUrl"] = web_by_id.get(tournament_id, "")
    return item


def signature(item):
    bets = get_values(item, "bets")
    places_count = prize_places_count(get_values(item, "places").get("d", ""))
    return (
        event_family(get_values(item, "events").get("d", "")),
        str(bets.get("d", "")).lower().strip(),
        str(bets.get("c", "")).strip(),
        str(bets.get("b", "")).strip(),
        score_mode(get_values(item, "score").get("d", "")),
        booster_mode(get_values(item, "boosters").get("d", "")),
        places_count,
    )


def make_label(item):
    tournament_id = item.get("id")
    event = clean_label(get_values(item, "events").get("d", ""))
    dates = get_values(item, "dates")
    places_count = prize_places_count(get_values(item, "places").get("d", ""))
    count_label = f"{places_count} призовых мест" if places_count else "призовые места не распознаны"
    return f"ID {tournament_id} - {event} | {count_label} | {dates.get('d', '')} - {dates.get('c', '')}"


def sort_key(item):
    dates = get_values(item, "dates")
    return (parse_date(dates.get("c")), parse_date(dates.get("d")), int(item.get("id") or 0))


def main():
    app = json.loads(APP_JSON.read_text())
    web = json.loads(WEB_JSON.read_text())
    web_by_id = {str(item.get("id")): item.get("makeBetUrl", "") for item in web.get("tournamentParameters", [])}
    items = [normalize_item(item, web_by_id) for item in app.get("tournamentParameters", [])]

    selected_by_signature = {}
    for item in sorted(items, key=sort_key, reverse=True):
        selected_by_signature.setdefault(signature(item), item)

    selected = sorted(selected_by_signature.values(), key=sort_key, reverse=True)[:MAX_TEMPLATES]
    templates = [{"label": make_label(item), "data": item} for item in selected]

    OUTPUT.write_text(
        "window.TOURNAMENT_TEMPLATES = "
        + json.dumps(templates, ensure_ascii=False, separators=(",", ":"))
        + ";\n"
    )
    print(f"Wrote {len(templates)} templates to {OUTPUT}")


if __name__ == "__main__":
    main()
