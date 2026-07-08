const DEFAULT_WIDGET_IMAGE = "https://www.ligastavok.ru/files/file/16326/Marketing_widgetProgressBar_Bg.webp";
const DEFAULT_TERM_IMAGE = "https://www.ligastavok.ru/files/file/11160/Freebet_3x.webp";
const TOURNAMENT_SECONDARY_BUTTON_TEXT = "Полные правила";

const templates = {
  offer: {
    switcherByPromoId: ["S_FBV_VGD500_2305", "TESTDV"],
    common: {
      title: "Акция",
      imageUrl: "https://www.ligastavok.ru/files/file/14559/freebetVsem_marketingPromoImg.webp",
      header: "Фрибет 500",
      content: "",
      rules: [
        {
          header: "Основная информация",
          content: "Пополни счёт от 500 ₽, затем сделай одну или несколько ставок с кэфом от 1,3 на 500 ₽ и получи фрибет 500",
          widgets: [
            {
              type: "progressBar",
              position: "bottom",
              enabled: true,
              campaignId: "S_FBV_VGD500_2305",
              title: "Твой прогресс",
              progressText: "Ставок сделано на сумму, ₽:",
              imageUrl: DEFAULT_WIDGET_IMAGE,
              remainingTime: { dateLabel: "Осталось дней", timeLabel: "Осталось:" }
            }
          ]
        },
        {
          header: "Какие ставки учитываются",
          content: "Учитываются все рассчитанные пари с кэфом от 1,3, кроме «систем», ставок на фрибет и на быстрые игры, а также ставок со статусом «Отмена», «Выкуп» и «Возврат»"
        },
        {
          header: "Успей до 6 июня",
          content: "Пополни счёт, сделай ставки и дождись их расчёта до 6 июня 12:00 МСК"
        },
        {
          header: "Когда начислят фрибет",
          content: "Фрибет будет начислен после расчёта всех ставок. Фрибет действует 7 дней с момента начисления для пари вида «одинар»"
        }
      ],
      primaryButtonText: "За фрибетом",
      primaryButtonUrl: "https://www.ligastavok.ru/PersonalFolder/Accounts/Deposit",
      secondaryButtonText: "Полные правила акции",
      secondaryButtonUrl: "https://www.ligastavok.ru/files/file/16671/FREEBETVSEM.pdf"
    }
  },
  tasks: {
    switcherByPromoId: ["TEST_REACT_TASK1", "TESTDV", "S_FBV_ZAD1000_2305"],
    common: {
      title: "Акция",
      imageUrl: "https://www.ligastavok.ru/files/file/16685/marketingimg_rebrand_2.webp",
      header: "Фрибет 1000",
      content: "",
      rules: [
        {
          header: "Основная информация",
          content: "Выполни все задания, получи фрибет 1000 и переходи к следующему этапу с бонусом 1500\n\nЗадания могут выполняться параллельно и в любом порядке. Учитываются рассчитанные пари, кроме «систем», ставок на фрибет и на быстрые игры, а также ставок со статусом «Отмена», «Выкуп» и «Возврат»\n\nПрогресс выполнения может обновляться до 5 минут"
        },
        makeWidgetRule("Задание №1", "Единоразово пополни счёт от 1000 ₽", "S_FBV_ZAD1000_2305_DEP", "Депозитов внесено:"),
        makeWidgetRule("Задание №2", "Заключи выигрышный «одинар» от 500 ₽ с кэфом от 1,7 в Live", "S_FBV_ZAD1000_2305_WIN_LIVE_BET", "Выигранных одинаров:"),
        makeWidgetRule("Задание №3", "Поставь «одинар» от 500 ₽ с кэфом от 1,5 в прематче", "S_FBV_ZAD1000_2305_PRE_BET", "Одинаров рассчитано:"),
        makeWidgetRule("Задание №4", "Поставь «экспресс» от 500 ₽ из 3+ событий с общим кэфом от 2,5", "S_FBV_ZAD1000_2305_EXP_BET", "Экспрессов рассчитано:"),
        {
          header: "Успей до 6 июня",
          content: "Выполни задания до 6 июня 12:00 МСК.\n\nПосле выполнения всех заданий тебе будет начислен фрибет 1000 и откроется третий этап с фрибетом 1500. Пройди все этапы и получи максимум бонусов:",
          terms: [
            { header: "ЭТАП 2", content: "1000", imageUrl: DEFAULT_TERM_IMAGE },
            { header: "ЭТАП 3", content: "1500", imageUrl: DEFAULT_TERM_IMAGE },
            { header: "ЭТАП 4", content: "2000", imageUrl: DEFAULT_TERM_IMAGE },
            { header: "ЭТАП 5", content: "10 000", imageUrl: DEFAULT_TERM_IMAGE }
          ]
        }
      ],
      primaryButtonText: "За фрибетом",
      primaryButtonUrl: "https://www.ligastavok.ru/home",
      secondaryButtonText: "Полные правила акции",
      secondaryButtonUrl: "https://www.ligastavok.ru/files/file/16671/FREEBETVSEM.pdf"
    }
  },
  bigGame: {
    switcherByPromoId: ["VERYVIPGRAND1"],
    common: {
      title: "Очень большая игра",
      imageUrl: "https://www.ligastavok.ru/files/file/17495/mail_1080_500.webp",
      header: "До 350 000 фрибетами",
      content:
        "Получи 35 фрибетов по 10 000, последовательно выполняя шаги в течение 30 дней. <br>После выполнения очередного шага заходи в раздел, чтобы отслеживать свой прогресс.<br>Подробности в правилах акции или в сторис. ",
      rules: [
        {
          header: "Шаг второй",
          content: "Заключи пари на общую сумму от 500 000 ₽ и получи 3 фрибета по 10 000.",
          widgets: [
            {
              type: "progressBar",
              position: "bottom",
              enabled: true,
              campaignId: "VERYVIPGRAND1",
              title: "Твой прогресс",
              progressText: "Ставок сделано на сумму, ₽:",
              imageUrl: DEFAULT_WIDGET_IMAGE,
              remainingTime: { dateLabel: "Осталось дней", timeLabel: "Осталось:" }
            }
          ]
        },
        {
          header: "Какие ставки учитываются",
          content: "Учитываются все рассчитанные пари, кроме «систем», ставок на фрибет, а также ставок со статусом «Отмена», «Выкуп» и «Возврат»."
        }
      ],
      primaryButtonText: "Заключить пари",
      primaryButtonUrl: "https://www.ligastavok.ru/home",
      secondaryButtonText: "Полные правила акции",
      secondaryButtonUrl: "https://www.ligastavok.ru/files/file/16671/FREEBETVSEM.pdf"
    }
  },
  blank: {
    switcherByPromoId: [""],
    common: {
      title: "Акция",
      imageUrl: "",
      header: "",
      content: "",
      rules: [{ header: "Основная информация", content: "" }],
      primaryButtonText: "Участвовать",
      primaryButtonUrl: "https://www.ligastavok.ru/home",
      secondaryButtonText: "Полные правила акции",
      secondaryButtonUrl: ""
    }
  }
};

const form = document.querySelector("#promoForm");
const fields = {
  promoIds: document.querySelector("#promoIds"),
  title: document.querySelector("#title"),
  header: document.querySelector("#header"),
  imageUrl: document.querySelector("#imageUrl"),
  content: document.querySelector("#content"),
  primaryButtonText: document.querySelector("#primaryButtonText"),
  primaryButtonUrl: document.querySelector("#primaryButtonUrl"),
  secondaryButtonText: document.querySelector("#secondaryButtonText"),
  secondaryButtonUrl: document.querySelector("#secondaryButtonUrl")
};
const rulesList = document.querySelector("#rulesList");
const ruleTemplate = document.querySelector("#ruleTemplate");
const termTemplate = document.querySelector("#termTemplate");
const jsonOutput = document.querySelector("#jsonOutput");
const templateSelect = document.querySelector("#templateSelect");
const jsonImportPanel = document.querySelector("#jsonImportPanel");
const jsonImportInput = document.querySelector("#jsonImportInput");
const jsonImportStatus = document.querySelector("#jsonImportStatus");
const jsonFileInput = document.querySelector("#jsonFileInput");
const preview = document.querySelector("#preview");
const previewTitle = document.querySelector("#previewTitle");
const statusBadge = document.querySelector("#statusBadge");
let jsonImportTimer = 0;
let tournamentJsonImportTimer = 0;
let activeView = "promo";

const viewTabs = document.querySelectorAll(".view-tab");
const topbarEyebrow = document.querySelector("#topbarEyebrow");
const topbarTitle = document.querySelector("#topbarTitle");
const promoTemplateActions = document.querySelector("#promoTemplateActions");
const tournamentForm = document.querySelector("#tournamentForm");
const tournamentList = document.querySelector("#tournamentList");
const tournamentTemplate = document.querySelector("#tournamentTemplate");
const tournamentJsonImportInput = document.querySelector("#tournamentJsonImportInput");
const tournamentJsonImportStatus = document.querySelector("#tournamentJsonImportStatus");
const tournamentJsonFileInput = document.querySelector("#tournamentJsonFileInput");
const tournamentTemplateSelect = document.querySelector("#tournamentTemplateSelect");
let baseTournamentData = {
  secondaryButtonText: TOURNAMENT_SECONDARY_BUTTON_TEXT,
  tournamentParameters: []
};

const currentTournamentTemplates = window.TOURNAMENT_TEMPLATES || [
  {
    label: "ID 402 — ЧМ-2026, лайв",
    data: {
      id: 402,
      events: { values: { d: "Чемпионат мира по Футболу 2026, сделанные в лайве." } },
      bets: { values: { d: "одинар и экспресс", c: "1,25", b: "100" } },
      score: {
        values: {
          d: "чистому выигрышу игрока, то есть сумме выигрыша за минусом суммы ставки.<br>Пример:<br>зашла ставка на 1000 рублей с коэффициентом 1,8. Игрок получит 1000*1,8-1000 = 800 очков"
        }
      },
      boosters: {
        values: {
          d: "&bull; бустер 1,25 при коэффициенте от 3 <br> &bull; бустер 1,5 при коэффициенте от 5 <br> &bull; бустер 2 при коэффициенте от 7 <br> &bull; бустер 2,5 при коэффициенте от 10 "
        }
      },
      places: {
        values: {
          d: "&bull; 1 место - 150 000<br> &bull; 2 место - 120 000<br> &bull; 3 место - 90 000<br> &bull; 4 место - 75 000<br> &bull; 5 место - 60 000<br> &bull; 6 место - 50 000<br> &bull; 7 место - 30 000<br> &bull; 8 место - 20 000<br> &bull; 9 место - 10 000<br> &bull; 10 место - 5 000<br> &bull; 11-25 места - 3 500<br> &bull; 26-50 места - 2 000<br> &bull; 51-100 места - 1 000<br> &bull; 101-250 места - 750<br> &bull; 251-500 места - 500"
        }
      },
      dates: { values: { d: "12:00 28.06.2026", c: "12:00 07.07.2026" } },
      fullRulesUrl: "https://www.ligastavok.ru/files/file/14296/Правила турниры .pdf",
      appMakeBetUrl: "https://www.ligastavok.ru/championships/chm-2026-ssha-kanada-meksika-id-30659",
      webMakeBetUrl: "https://www.ligastavok.ru/championships/chm-2026-ssha-kanada-meksika-id-30659"
    }
  },
  {
    label: "ID 403 — ЧМ-2026, прематч",
    data: {
      id: 403,
      events: { values: { d: "Чемпионат мира по Футболу 2026, сделанные в прематче." } },
      bets: { values: { d: "одинар и экспресс", c: "1,25", b: "100" } },
      score: {
        values: {
          d: "чистому выигрышу игрока, то есть сумме выигрыша за минусом суммы ставки.<br>Пример:<br>зашла ставка на 1000 рублей с коэффициентом 1,8. Игрок получит 1000*1,8-1000 = 800 очков"
        }
      },
      boosters: {
        values: {
          d: "&bull; бустер 1,25 при коэффициенте от 3 <br> &bull; бустер 1,5 при коэффициенте от 5 <br> &bull; бустер 2 при коэффициенте от 7 <br> &bull; бустер 2,5 при коэффициенте от 10 "
        }
      },
      places: {
        values: {
          d: "&bull; 1 место - 150 000<br> &bull; 2 место - 120 000<br> &bull; 3 место - 90 000<br> &bull; 4 место - 75 000<br> &bull; 5 место - 60 000<br> &bull; 6 место - 50 000<br> &bull; 7 место - 30 000<br> &bull; 8 место - 20 000<br> &bull; 9 место - 10 000<br> &bull; 10 место - 5 000<br> &bull; 11-25 места - 3 500<br> &bull; 26-50 места - 2 000<br> &bull; 51-100 места - 1 000<br> &bull; 101-250 места - 750<br> &bull; 251-500 места - 500"
        }
      },
      dates: { values: { d: "12:00 28.06.2026", c: "12:00 07.07.2026" } },
      fullRulesUrl: "https://www.ligastavok.ru/files/file/14296/Правила турниры .pdf",
      appMakeBetUrl: "https://www.ligastavok.ru/championships/chm-2026-ssha-kanada-meksika-id-30659",
      webMakeBetUrl: "https://www.ligastavok.ru/championships/chm-2026-ssha-kanada-meksika-id-30659"
    }
  },
  {
    label: "ID 404 — ЧМ-2026, турбо",
    data: {
      id: 404,
      events: { values: { d: "турбо на Чемпионат мира по Футболу 2026 только в мобильном приложении." } },
      bets: { values: { d: "одинар и экспресс", c: "1", b: "100" } },
      score: {
        values: {
          d: "сумме ставки.<br>Пример:<br>ставка на 1000 рублей дает 1000 очков."
        }
      },
      boosters: { values: { d: "&bull; по данному турниру бустеры не предусмотрены" } },
      places: {
        values: {
          d: "&bull; 1 место - 20 000<br> &bull; 2 место - 15 000<br> &bull; 3 место - 12 000<br> &bull; 4 место - 10 000<br> &bull; 5 место - 8 000<br> &bull; 6 место - 7 000<br> &bull; 7 место - 6 000<br> &bull; 8 место - 5 000<br> &bull; 9 место - 4 000<br> &bull; 10 место - 3 000<br> &bull; 11-20 места - 2 000<br> &bull; 21-40 места - 1 500<br> &bull; 41-60 места - 1 300<br> &bull; 61-80 места - 1 000<br> &bull; 81-100 места - 700"
        }
      },
      dates: { values: { d: "16:00 28.06.2026", c: "12:00 07.07.2026" } },
      fullRulesUrl: "https://www.ligastavok.ru/files/file/14296/Правила турниры .pdf",
      appMakeBetUrl: "https://www.ligastavok.ru/microbetting/soccer",
      webMakeBetUrl: "https://www.ligastavok.ru/promos/37"
    }
  },
  {
    label: "ID 405 — экспрессы",
    data: {
      id: 405,
      events: { values: { d: "экспрессы с любыми видами спорта и чемпионатами." } },
      bets: { values: { d: "экспресс", c: "1,25", b: "100" } },
      score: {
        values: {
          d: "чистому выигрышу игрока, то есть сумме выигрыша за минусом суммы ставки.<br>Пример:<br>зашла ставка на 1000 рублей с коэффициентом 1,8. Игрок получит 1000*1,8-1000 = 800 очков"
        }
      },
      boosters: {
        values: {
          d: "&bull; бустер 1,25 при коэффициенте от 3 <br> &bull; бустер 1,5 при коэффициенте от 5 <br> &bull; бустер 2 при коэффициенте от 7 <br> &bull; бустер 2,5 при коэффициенте от 10 "
        }
      },
      places: {
        values: {
          d: "&bull; 1 место - 150 000<br> &bull; 2 место - 120 000<br> &bull; 3 место - 90 000<br> &bull; 4 место - 75 000<br> &bull; 5 место - 60 000<br> &bull; 6 место - 50 000<br> &bull; 7 место - 30 000<br> &bull; 8 место - 20 000<br> &bull; 9 место - 10 000<br> &bull; 10 место - 5 000<br> &bull; 11-25 места - 3 500<br> &bull; 26-50 места - 2 000<br> &bull; 51-100 места - 1 000<br> &bull; 101-250 места - 750<br> &bull; 251-500 места - 500"
        }
      },
      dates: { values: { d: "12:00 28.06.2026", c: "12:00 07.07.2026" } },
      fullRulesUrl: "https://www.ligastavok.ru/files/file/14296/Правила турниры .pdf",
      appMakeBetUrl: "https://ligastavok.ru/bets/my-line",
      webMakeBetUrl: ""
    }
  },
  {
    label: "ID 412 — Уимблдон",
    data: {
      id: 412,
      events: { values: { d: "Уимблдон." } },
      bets: { values: { d: "одинар и экспресс", c: "1,25", b: "100" } },
      score: {
        values: {
          d: "чистому выигрышу игрока, то есть сумме выигрыша за минусом суммы ставки.<br>Пример:<br>зашла ставка на 1000 рублей с коэффициентом 1,8. Игрок получит 1000*1,8-1000 = 800 очков"
        }
      },
      boosters: {
        values: {
          d: "&bull; бустер 1,25 при коэффициенте от 3 <br> &bull; бустер 1,5 при коэффициенте от 5 <br> &bull; бустер 2 при коэффициенте от 7 <br> &bull; бустер 2,5 при коэффициенте от 10 "
        }
      },
      places: {
        values: {
          d: "&bull; 1 место - 150 000<br> &bull; 2 место - 120 000<br> &bull; 3 место - 90 000<br> &bull; 4 место - 75 000<br> &bull; 5 место - 60 000<br> &bull; 6 место - 50 000<br> &bull; 7 место - 30 000<br> &bull; 8 место - 20 000<br> &bull; 9 место - 10 000<br> &bull; 10 место - 5 000<br> &bull; 11-25 места - 3 500<br> &bull; 26-50 места - 2 000<br> &bull; 51-100 места - 1 000<br> &bull; 101-250 места - 750<br> &bull; 251-500 места - 500"
        }
      },
      dates: { values: { d: "12:00 28.06.2026", c: "12:00 12.07.2026" } },
      fullRulesUrl: "https://www.ligastavok.ru/files/file/14296/Правила турниры .pdf",
      appMakeBetUrl: "https://www.ligastavok.ru/wimbledon-2026",
      webMakeBetUrl: "https://www.ligastavok.ru/wimbledon-2026"
    }
  }
];

const tournamentTemplateData = {
  secondaryButtonText: "Полные правила",
  tournamentParameters: [
    {
      id: 24,
      events: { values: { d: "матчи Чемпионата мира по футболу 2026, сделанные в лайве." } },
      bets: { values: { d: "одинар и экспресс", c: "1,25", b: "100" } },
      score: {
        values: {
          d: "сумме выигрыша за минусом суммы ставки.<br>Пример:<br>зашла ставка на 1000 рублей с коэффициентом 1,8. Игрок получит 1000*1,8-1000 = 800 очков"
        }
      },
      boosters: {
        values: {
          d: "&bull; бустер 1,25 при коэффициенте от 3<br>&bull; бустер 1,5 при коэффициенте от 5<br>&bull; бустер 2 при коэффициенте от 7<br>&bull; бустер 2,5 при коэффициенте от 10"
        }
      },
      places: {
        values: {
          d: "&bull; 1 место - 150 000<br>&bull; 2 место - 120 000<br>&bull; 3 место - 90 000<br>&bull; 4 место - 75 000<br>&bull; 5 место - 60 000<br>&bull; 6 место - 50 000<br>&bull; 7 место - 30 000<br>&bull; 8 место - 20 000<br>&bull; 9 место - 10 000<br>&bull; 10 место - 5 000<br>&bull; 11-25 места - 3 500<br>&bull; 26-50 места - 2 000<br>&bull; 51-100 места - 1 000<br>&bull; 101-250 места - 750<br>&bull; 251-500 места - 500"
        }
      },
      dates: { values: { d: "12:00 28.06.2026", c: "12:00 07.07.2026" } },
      fullRulesUrl: "",
      makeBetUrl: ""
    }
  ]
};

function makeWidgetRule(header, content, campaignId, progressText, title = "Твой прогресс", imageUrl = DEFAULT_WIDGET_IMAGE) {
  return {
    header,
    content,
    widgets: [
      {
        type: "progressBar",
        position: "bottom",
        enabled: true,
        campaignId,
        title,
        progressText,
        imageUrl,
        remainingTime: { dateLabel: "Осталось дней", timeLabel: "Осталось:" }
      }
    ]
  };
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function createEmptyData() {
  return {
    switcherByPromoId: [],
    common: {
      title: "",
      imageUrl: "",
      header: "",
      content: "",
      rules: [],
      primaryButtonText: "",
      primaryButtonUrl: "",
      secondaryButtonText: "",
      secondaryButtonUrl: ""
    }
  };
}

function loadTemplate(name) {
  if (name === "json") {
    applyDataToForm(createEmptyData());
    jsonImportPanel.classList.remove("hidden");
    jsonImportStatus.textContent = "";
    jsonImportStatus.classList.remove("error");
    jsonImportInput.value = "";
    jsonFileInput.value = "";
    jsonImportInput.focus();
    return;
  }

  jsonImportPanel.classList.add("hidden");
  const data = cloneData(templates[name]);
  applyDataToForm(data, { clearPromoIds: true });
}

function applyDataToForm(data, options = {}) {
  const common = data.common || {};
  const promoIds = Array.isArray(data.switcherByPromoId) ? data.switcherByPromoId : [];

  fields.promoIds.value = options.clearPromoIds ? "" : promoIds.join(", ");
  fields.title.value = common.title || "";
  fields.header.value = common.header || "";
  fields.imageUrl.value = common.imageUrl || "";
  fields.content.value = htmlBreaksToText(common.content || "");
  fields.primaryButtonText.value = common.primaryButtonText || "";
  fields.primaryButtonUrl.value = common.primaryButtonUrl || "";
  fields.secondaryButtonText.value = common.secondaryButtonText || "";
  fields.secondaryButtonUrl.value = common.secondaryButtonUrl || "";
  rulesList.innerHTML = "";
  (Array.isArray(common.rules) ? common.rules : []).forEach((rule) => {
    const safeRule = rule && typeof rule === "object" ? rule : {};
    addRule({
      ...safeRule,
      content: htmlBreaksToText(safeRule.content || "")
    });
  });
  updateAll();
}

function addRule(rule = { header: "", content: "" }) {
  const node = ruleTemplate.content.firstElementChild.cloneNode(true);
  const index = rulesList.children.length + 1;
  node.querySelector("h3").textContent = `Раздел ${index}`;
  node.querySelector(".rule-header").value = rule.header || "";
  node.querySelector(".rule-content").value = rule.content || "";

  const widget = rule.widgets?.[0];
  const widgetEnabled = node.querySelector(".rule-widget-enabled");
  const widgetFields = node.querySelector(".widget-fields");
  widgetEnabled.checked = Boolean(widget);
  widgetFields.classList.toggle("hidden", !widget);
  node.querySelector(".widget-campaign-id").value = widget?.campaignId || "";
  node.querySelector(".widget-title").value = widget?.title || "Твой прогресс";
  node.querySelector(".widget-progress-text").value = widget?.progressText || "";
  node.querySelector(".widget-image-url").value = widget?.imageUrl || DEFAULT_WIDGET_IMAGE;

  const termsEnabled = node.querySelector(".rule-terms-enabled");
  const termsFields = node.querySelector(".terms-fields");
  const termsList = node.querySelector(".terms-list");
  termsEnabled.checked = Array.isArray(rule.terms);
  termsFields.classList.toggle("hidden", !Array.isArray(rule.terms));
  (rule.terms || []).forEach((term) => addTermCard(termsList, term));

  widgetEnabled.addEventListener("change", () => {
    widgetFields.classList.toggle("hidden", !widgetEnabled.checked);
    updateAll();
  });
  termsEnabled.addEventListener("change", () => {
    termsFields.classList.toggle("hidden", !termsEnabled.checked);
    if (termsEnabled.checked && !termsList.children.length) {
      addTermCard(termsList);
    }
    updateAll();
  });
  node.querySelector(".add-term").addEventListener("click", () => {
    addTermCard(termsList);
    updateAll();
  });
  node.querySelector(".remove-rule").addEventListener("click", () => {
    animateRuleRemoval(node, () => {
      node.remove();
      renumberRules();
      updateAll();
    });
  });

  rulesList.append(node);
  renumberRules();
}

function addTermCard(termsList, term = { header: "", content: "", imageUrl: DEFAULT_TERM_IMAGE }) {
  const node = termTemplate.content.firstElementChild.cloneNode(true);
  node.querySelector(".term-header").value = term.header || "";
  node.querySelector(".term-content").value = term.content || "";
  node.querySelector(".term-image-url").value = term.imageUrl || DEFAULT_TERM_IMAGE;
  node.querySelector(".remove-term").addEventListener("click", () => {
    node.remove();
    renumberTerms(termsList);
    updateAll();
  });
  termsList.append(node);
  renumberTerms(termsList);
}

function addTournamentCard(tournament = {}) {
  const node = tournamentTemplate.content.firstElementChild.cloneNode(true);
  const events = getNestedValue(tournament, "events");
  const bets = getNestedValue(tournament, "bets");
  const score = getNestedValue(tournament, "score");
  const boosters = getNestedValue(tournament, "boosters");
  const places = getNestedValue(tournament, "places");
  const dates = getNestedValue(tournament, "dates");

  node.querySelector(".tournament-id").value = tournament.id ?? "";
  node.querySelector(".tournament-events").value = htmlListTextToEditor(events.d || "");
  node.querySelector(".tournament-bet-types").value = bets.d || "";
  node.querySelector(".tournament-min-coef").value = bets.c || "";
  node.querySelector(".tournament-min-bet").value = bets.b || "";
  node.querySelector(".tournament-score").value = htmlListTextToEditor(score.d || "");
  node.querySelector(".tournament-boosters").value = htmlListTextToEditor(boosters.d || "");
  node.querySelector(".tournament-places").value = htmlListTextToEditor(places.d || "");
  node.querySelector(".tournament-start-date").value = dates.d || "";
  node.querySelector(".tournament-end-date").value = dates.c || "";
  node.querySelector(".tournament-full-rules-url").value = tournament.fullRulesUrl || "";
  node.querySelector(".tournament-app-bet-url").value = tournament.appMakeBetUrl || "";
  node.querySelector(".tournament-web-bet-url").value = tournament.webMakeBetUrl || "";
  node.querySelector(".remove-tournament").addEventListener("click", () => {
    node.remove();
    renumberTournaments();
    updateAll();
  });

  tournamentList.append(node);
  renumberTournaments();
}

function renumberTerms(termsList) {
  [...termsList.children].forEach((node, index) => {
    node.querySelector(".term-editor-head strong").textContent = `Плитка ${index + 1}`;
  });
}

function renumberRules() {
  [...rulesList.children].forEach((node, index) => {
    node.querySelector("h3").textContent = `Раздел ${index + 1}`;
  });
}

function renumberTournaments() {
  [...tournamentList.children].forEach((node, index) => {
    const id = node.querySelector(".tournament-id").value.trim();
    node.querySelector("h3").textContent = id ? `Турнир ID ${id}` : `Турнир ${index + 1}`;
  });
}

function parsePromoIds(value) {
  return value
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function htmlBreaksToText(value) {
  return String(value ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\u00a0/g, " ");
}

function htmlListTextToEditor(value) {
  return htmlBreaksToText(value)
    .replace(/&bull;/gi, "•")
    .replace(/&nbsp;/gi, " ")
    .replace(/^\s+/gm, "");
}

function textToTournamentHtml(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trimStart().replace(/^•\s*/, "&bull; "))
    .join("<br>");
}

function getNestedValue(source, key) {
  return source?.[key]?.values || {};
}

function normalizeBetPath(value) {
  return String(value || "").trim().replace(/^https?:\/\/(?:www\.)?ligastavok\.ru/i, "");
}

function makeAppBetUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  if (/^https?:\/\//i.test(raw)) {
    return raw;
  }

  const path = normalizeBetPath(raw).replace(/^\/+/, "");
  if (!path) {
    return "";
  }

  if (path === "quick-games") {
    return "https://www.ligastavok.ru/quick-games";
  }

  if (path.startsWith("prematch/")) {
    return `https://ligastavok.ru/bets/my-line/${path.replace(/^prematch\/+/, "")}`;
  }

  return `https://www.ligastavok.ru/${path}`;
}

function makeWebBetUrl(value) {
  const raw = String(value || "").trim();
  if (!raw || !/^https?:\/\//i.test(raw)) {
    return raw;
  }

  const path = normalizeBetPath(raw);
  const myLineMatch = path.match(/^\/bets\/my-line\/(.+)$/);

  if (path === "/quick-games") {
    return "/quick-games";
  }

  if (myLineMatch?.[1]) {
    return `/prematch/${myLineMatch[1]}`;
  }

  return raw;
}

function normalizeTournamentData(value) {
  const source = value && typeof value === "object" ? value : {};
  const tournaments = Array.isArray(source.tournamentParameters) ? source.tournamentParameters : [];

  return {
    secondaryButtonText: TOURNAMENT_SECONDARY_BUTTON_TEXT,
    tournamentParameters: tournaments.map((item) => {
      const makeBetUrl = item.makeBetUrl || "";
      return {
        id: item.id ?? "",
        events: { values: { d: getNestedValue(item, "events").d || "" } },
        bets: {
          values: {
            d: getNestedValue(item, "bets").d || "",
            c: getNestedValue(item, "bets").c || "",
            b: getNestedValue(item, "bets").b || ""
          }
        },
        score: { values: { d: getNestedValue(item, "score").d || "" } },
        boosters: { values: { d: getNestedValue(item, "boosters").d || "" } },
        places: { values: { d: getNestedValue(item, "places").d || "" } },
        dates: {
          values: {
            d: getNestedValue(item, "dates").d || "",
            c: getNestedValue(item, "dates").c || ""
          }
        },
        fullRulesUrl: item.fullRulesUrl || "",
        appMakeBetUrl: item.appMakeBetUrl || makeAppBetUrl(makeBetUrl),
        webMakeBetUrl: item.webMakeBetUrl || makeWebBetUrl(makeBetUrl)
      };
    })
  };
}

function mergeTournamentWebLinks(appData, webData) {
  const merged = normalizeTournamentData(appData);
  const web = normalizeTournamentData(webData);
  const webLinksById = new Map(
    web.tournamentParameters.map((item) => [String(item.id), item.webMakeBetUrl || item.appMakeBetUrl || ""])
  );

  merged.tournamentParameters = merged.tournamentParameters.map((item) => ({
    ...item,
    webMakeBetUrl: webLinksById.get(String(item.id)) || item.webMakeBetUrl
  }));

  return merged;
}

function applyTournamentDataToForm(data) {
  const normalized = normalizeTournamentData(data);
  tournamentList.innerHTML = "";
  normalized.tournamentParameters.forEach(addTournamentCard);
  if (!tournamentList.children.length) {
    addTournamentCard(tournamentTemplateData.tournamentParameters[0]);
  }
  updateAll();
}

function applyTournamentBaseData(data) {
  const normalized = normalizeTournamentData(data);
  baseTournamentData = normalized;
  tournamentJsonImportStatus.textContent = `Основа принята: ${normalized.tournamentParameters.length} турниров`;
  tournamentJsonImportStatus.classList.remove("error");
  updateAll();
}

function getSelectedTournamentTemplate() {
  if (tournamentTemplateSelect.value === "__blank") {
    return { data: {} };
  }

  return currentTournamentTemplates.find((template) => template.data.id === Number(tournamentTemplateSelect.value));
}

function fillTournamentTemplateSelect() {
  tournamentTemplateSelect.innerHTML = [
    `<option value="__blank">Пустой турнир</option>`,
    ...currentTournamentTemplates.map((template) => `<option value="${template.data.id}">${escapeHtml(template.label)}</option>`)
  ]
    .join("");
}

function getNextTournamentId() {
  const baseIds = baseTournamentData.tournamentParameters.map((item) => Number(item.id));
  const newIds = collectTournamentCards().map((item) => Number(item.id));
  const maxId = [...baseIds, ...newIds]
    .filter((id) => Number.isFinite(id))
    .reduce((max, id) => Math.max(max, id), 0);

  return maxId + 1;
}

function addSelectedTournamentTemplate() {
  const template = getSelectedTournamentTemplate();
  if (!template) {
    return;
  }

  const tournament = cloneData(template.data);
  tournament.id = getNextTournamentId();
  addTournamentCard(tournament);
  updateAll();
}

function importTournamentJsonText(value) {
  if (!value.trim()) {
    baseTournamentData = {
      secondaryButtonText: TOURNAMENT_SECONDARY_BUTTON_TEXT,
      tournamentParameters: []
    };
    tournamentJsonImportStatus.textContent = "";
    tournamentJsonImportStatus.classList.remove("error");
    updateAll();
    return;
  }

  try {
    const appData = JSON.parse(value);
    applyTournamentBaseData(appData);
  } catch (error) {
    tournamentJsonImportStatus.textContent = "Не удалось прочитать JSON";
    tournamentJsonImportStatus.classList.add("error");
  }
}

function scheduleTournamentJsonImport() {
  window.clearTimeout(tournamentJsonImportTimer);
  tournamentJsonImportTimer = window.setTimeout(() => {
    importTournamentJsonText(tournamentJsonImportInput.value);
  }, 250);
}

function normalizeImportedJsonData(value) {
  const source = value && typeof value === "object" ? value : {};
  const common = source.common && typeof source.common === "object" ? source.common : source;
  const switcherByPromoId = Array.isArray(source.switcherByPromoId)
    ? source.switcherByPromoId.map(String).filter(Boolean)
    : typeof source.switcherByPromoId === "string"
      ? parsePromoIds(source.switcherByPromoId)
      : [];

  return {
    switcherByPromoId,
    common: {
      title: common.title || "",
      imageUrl: common.imageUrl || "",
      header: common.header || "",
      content: common.content || "",
      rules: Array.isArray(common.rules) ? common.rules : [],
      primaryButtonText: common.primaryButtonText || "",
      primaryButtonUrl: common.primaryButtonUrl || "",
      secondaryButtonText: common.secondaryButtonText || "",
      secondaryButtonUrl: common.secondaryButtonUrl || ""
    }
  };
}

function importJsonText(value) {
  if (!value.trim()) {
    jsonImportStatus.textContent = "";
    jsonImportStatus.classList.remove("error");
    return;
  }

  try {
    const data = normalizeImportedJsonData(JSON.parse(value));
    applyDataToForm(data);
    jsonImportStatus.textContent = "Поля заполнены из JSON";
    jsonImportStatus.classList.remove("error");
  } catch (error) {
    jsonImportStatus.textContent = "Не удалось прочитать JSON";
    jsonImportStatus.classList.add("error");
  }
}

function scheduleJsonImport() {
  window.clearTimeout(jsonImportTimer);
  jsonImportTimer = window.setTimeout(() => {
    importJsonText(jsonImportInput.value);
  }, 250);
}

function normalizeNumericSpaces(value) {
  return value.replace(/(\d)[ \u00a0](?=\d)/g, "$1\u00a0");
}

function normalizeJsonText(value) {
  if (typeof value === "string") {
    return normalizeNumericSpaces(value);
  }

  if (Array.isArray(value)) {
    return value.map(normalizeJsonText);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeJsonText(item)]));
  }

  return value;
}

function collectTerms(node) {
  return [...node.querySelectorAll(".term-editor")]
    .map((termNode) => {
      const imageUrl = termNode.querySelector(".term-image-url").value.trim();
      return {
        header: termNode.querySelector(".term-header").value.trim(),
        content: termNode.querySelector(".term-content").value.trim(),
        imageUrl: imageUrl || DEFAULT_TERM_IMAGE,
        hasCustomImage: Boolean(imageUrl)
      };
    })
    .filter((term) => term.header || term.content || term.hasCustomImage)
    .map(({ hasCustomImage, ...term }) => term);
}

function collectRules() {
  return [...rulesList.children].map((node) => {
    const rule = {
      header: node.querySelector(".rule-header").value.trim(),
      content: node.querySelector(".rule-content").value
    };

    if (node.querySelector(".rule-widget-enabled").checked) {
      rule.widgets = [
        {
          type: "progressBar",
          position: "bottom",
          enabled: true,
          campaignId: node.querySelector(".widget-campaign-id").value.trim(),
          title: node.querySelector(".widget-title").value.trim() || "Твой прогресс",
          progressText: node.querySelector(".widget-progress-text").value.trim(),
          imageUrl: node.querySelector(".widget-image-url").value.trim() || DEFAULT_WIDGET_IMAGE,
          remainingTime: { dateLabel: "Осталось дней", timeLabel: "Осталось:" }
        }
      ];
    }

    if (node.querySelector(".rule-terms-enabled").checked) {
      rule.terms = collectTerms(node);
    }

    return rule;
  });
}

function buildJson() {
  const common = {
    title: fields.title.value.trim(),
    imageUrl: fields.imageUrl.value.trim(),
    header: fields.header.value.trim()
  };

  if (fields.content.value.trim()) {
    common.content = fields.content.value;
  }

  common.rules = collectRules();
  common.primaryButtonText = fields.primaryButtonText.value.trim();
  common.primaryButtonUrl = fields.primaryButtonUrl.value.trim();
  common.secondaryButtonText = fields.secondaryButtonText.value.trim();
  common.secondaryButtonUrl = fields.secondaryButtonUrl.value.trim();

  return normalizeJsonText({
    switcherByPromoId: parsePromoIds(fields.promoIds.value),
    common,
    failures: [
      {
        type: "common",
        header: "Не смогли загрузить данные",
        content: "Обновите страницу или вернитесь позже",
        buttonText: "Обновить"
      },
      {
        type: "noAccess",
        header: "Текущая акция для вас недоступна",
        content: "Вы можете обратиться в службу<br>поддержки для выяснения причин"
      }
    ]
  });
}

function toWebLineBreaks(value) {
  return String(value).replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\n/g, "<br>");
}

function buildWebJson() {
  const data = cloneData(buildJson());

  if (typeof data.common.content === "string") {
    data.common.content = toWebLineBreaks(data.common.content);
  }

  data.common.rules = data.common.rules.map((rule) => ({
    ...rule,
    content: toWebLineBreaks(rule.content || "")
  }));

  return data;
}

function collectTournamentCards() {
  return [...tournamentList.children].map((node) => ({
    id: node.querySelector(".tournament-id").value.trim(),
    events: node.querySelector(".tournament-events").value,
    betTypes: node.querySelector(".tournament-bet-types").value.trim(),
    minCoef: node.querySelector(".tournament-min-coef").value.trim(),
    minBet: node.querySelector(".tournament-min-bet").value.trim(),
    score: node.querySelector(".tournament-score").value,
    boosters: node.querySelector(".tournament-boosters").value,
    places: node.querySelector(".tournament-places").value,
    startDate: node.querySelector(".tournament-start-date").value.trim(),
    endDate: node.querySelector(".tournament-end-date").value.trim(),
    fullRulesUrl: node.querySelector(".tournament-full-rules-url").value.trim(),
    appMakeBetUrl: node.querySelector(".tournament-app-bet-url").value.trim(),
    webMakeBetUrl: node.querySelector(".tournament-web-bet-url").value.trim()
  }));
}

function buildTournamentParameter(card, target) {
  const idNumber = Number(card.id);
  return {
    id: Number.isFinite(idNumber) && card.id !== "" ? idNumber : card.id,
    events: { values: { d: textToTournamentHtml(card.events) } },
    bets: { values: { d: card.betTypes, c: card.minCoef, b: card.minBet } },
    score: { values: { d: textToTournamentHtml(card.score) } },
    boosters: { values: { d: textToTournamentHtml(card.boosters) } },
    places: { values: { d: textToTournamentHtml(card.places) } },
    dates: { values: { d: card.startDate, c: card.endDate } },
    fullRulesUrl: card.fullRulesUrl,
    makeBetUrl: target === "web" ? card.webMakeBetUrl : card.appMakeBetUrl
  };
}

function buildStoredTournamentParameter(tournament, target) {
  return {
    id: tournament.id,
    events: cloneData(tournament.events || { values: { d: "" } }),
    bets: cloneData(tournament.bets || { values: { d: "", c: "", b: "" } }),
    score: cloneData(tournament.score || { values: { d: "" } }),
    boosters: cloneData(tournament.boosters || { values: { d: "" } }),
    places: cloneData(tournament.places || { values: { d: "" } }),
    dates: cloneData(tournament.dates || { values: { d: "", c: "" } }),
    fullRulesUrl: tournament.fullRulesUrl || "",
    makeBetUrl: target === "web" ? tournament.webMakeBetUrl || "" : tournament.appMakeBetUrl || ""
  };
}

function buildTournamentJson(target = "app") {
  const baseTournaments = baseTournamentData.tournamentParameters.map((tournament) =>
    buildStoredTournamentParameter(tournament, target)
  );
  const newTournaments = collectTournamentCards().map((card) => buildTournamentParameter(card, target));

  return normalizeJsonText({
    secondaryButtonText: TOURNAMENT_SECONDARY_BUTTON_TEXT,
    tournamentParameters: [...baseTournaments, ...newTournaments]
  });
}

function getJsonText(data) {
  return JSON.stringify(data, null, 2);
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let value = i;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    table[i] = value >>> 0;
  }
  return table;
})();

function getCrc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function getDosDateTime(date = new Date()) {
  const year = Math.max(date.getFullYear(), 1980);
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

function writeUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}

function makeZipFile(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const centralDirectory = [];
  let offset = 0;
  const { dosDate, dosTime } = getDosDateTime();

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const contentBytes = encoder.encode(file.content);
    const crc = getCrc32(contentBytes);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);

    writeUint32(localView, 0, 0x04034b50);
    writeUint16(localView, 4, 20);
    writeUint16(localView, 6, 0x0800);
    writeUint16(localView, 8, 0);
    writeUint16(localView, 10, dosTime);
    writeUint16(localView, 12, dosDate);
    writeUint32(localView, 14, crc);
    writeUint32(localView, 18, contentBytes.length);
    writeUint32(localView, 22, contentBytes.length);
    writeUint16(localView, 26, nameBytes.length);
    writeUint16(localView, 28, 0);
    localHeader.set(nameBytes, 30);

    chunks.push(localHeader, contentBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    writeUint32(centralView, 0, 0x02014b50);
    writeUint16(centralView, 4, 20);
    writeUint16(centralView, 6, 20);
    writeUint16(centralView, 8, 0x0800);
    writeUint16(centralView, 10, 0);
    writeUint16(centralView, 12, dosTime);
    writeUint16(centralView, 14, dosDate);
    writeUint32(centralView, 16, crc);
    writeUint32(centralView, 20, contentBytes.length);
    writeUint32(centralView, 24, contentBytes.length);
    writeUint16(centralView, 28, nameBytes.length);
    writeUint16(centralView, 30, 0);
    writeUint16(centralView, 32, 0);
    writeUint16(centralView, 34, 0);
    writeUint16(centralView, 36, 0);
    writeUint32(centralView, 38, 0);
    writeUint32(centralView, 42, offset);
    centralHeader.set(nameBytes, 46);
    centralDirectory.push(centralHeader);

    offset += localHeader.length + contentBytes.length;
  });

  const centralOffset = offset;
  const centralSize = centralDirectory.reduce((sum, chunk) => sum + chunk.length, 0);
  const endHeader = new Uint8Array(22);
  const endView = new DataView(endHeader.buffer);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 4, 0);
  writeUint16(endView, 6, 0);
  writeUint16(endView, 8, files.length);
  writeUint16(endView, 10, files.length);
  writeUint32(endView, 12, centralSize);
  writeUint32(endView, 16, centralOffset);
  writeUint16(endView, 20, 0);

  return new Blob([...chunks, ...centralDirectory, endHeader], { type: "application/zip" });
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPreview(data) {
  const { common } = data;
  previewTitle.textContent = common.title || "Акция";
  const image = common.imageUrl
    ? `<img class="hero-image" src="${escapeHtml(common.imageUrl)}" alt="">`
    : `<div class="hero-image"></div>`;
  const intro = common.content ? `<p class="preview-intro">${escapeHtml(common.content)}</p>` : "";
  const rules = common.rules.map(renderRulePreview).join("");

  preview.innerHTML = `
    ${image}
    <h2 class="preview-header">${escapeHtml(common.header || "Заголовок акции")}</h2>
    ${intro}
    ${rules}
    ${common.primaryButtonText ? `<a class="primary-preview" href="${escapeHtml(common.primaryButtonUrl || "#")}">${escapeHtml(common.primaryButtonText)}</a>` : ""}
    ${common.secondaryButtonText ? `<a class="secondary-preview" href="${escapeHtml(common.secondaryButtonUrl || "#")}">${escapeHtml(common.secondaryButtonText)}</a>` : ""}
  `;
}

function renderRulePreview(rule) {
  const widget = rule.widgets?.[0] ? renderWidget(rule.widgets[0]) : "";
  const terms = Array.isArray(rule.terms) && rule.terms.length ? renderTerms(rule.terms) : "";
  return `
    <section class="rule-preview">
      <h3>${escapeHtml(rule.header || "Раздел")}</h3>
      <p class="rule-content-preview">${escapeHtml(rule.content || "")}</p>
      ${widget}
      ${terms}
    </section>
  `;
}

function renderWidget(widget) {
  const bg = widget.imageUrl ? ` style="background-image: linear-gradient(rgba(9, 18, 16, 0.45), rgba(9, 18, 16, 0.45)), url('${escapeHtml(widget.imageUrl)}')"` : "";
  return `
    <div class="progress-widget"${bg}>
      <strong>${escapeHtml(widget.title || "Твой прогресс")}</strong>
      <div class="progress-row">
        <span>${escapeHtml(widget.progressText || "Прогресс:")}</span>
        <span>1 280 из 2 000</span>
      </div>
      <div class="bar"><span></span></div>
    </div>
  `;
}

function renderTerms(terms) {
  return `
    <div class="terms-grid">
      ${terms
        .map(
          (term) => `
          <div class="term-card">
            ${term.imageUrl ? `<img src="${escapeHtml(term.imageUrl)}" alt="">` : `<span class="term-icon-fallback"></span>`}
            <div>
              <small>${escapeHtml(term.header)}</small>
              <strong>${escapeHtml(term.content)}</strong>
            </div>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function tournamentHtmlToPreviewText(value) {
  return htmlListTextToEditor(value).trim();
}

function renderTournamentPreview(data) {
  const tournament = data.tournamentParameters[data.tournamentParameters.length - 1];
  previewTitle.textContent = "Основная информация";

  if (!tournament) {
    preview.innerHTML = `<section class="rule-preview"><p class="rule-content-preview">Добавьте турнир, чтобы увидеть превью правил.</p></section>`;
    return;
  }

  const events = tournamentHtmlToPreviewText(tournament.events?.values?.d || "");
  const bets = tournament.bets?.values || {};
  const score = tournamentHtmlToPreviewText(tournament.score?.values?.d || "");
  const boosters = tournamentHtmlToPreviewText(tournament.boosters?.values?.d || "");
  const places = tournamentHtmlToPreviewText(tournament.places?.values?.d || "");
  const dates = tournament.dates?.values || {};

  preview.innerHTML = `
    <section class="tournament-preview">
      <p>Делайте подходящие ставки, увеличивайте количество очков и продвигайтесь в турнирной таблице. Войдите в число лидеров и получите фрибет.</p>
      ${renderTournamentPreviewBlock("Какие ставки учитываются", events)}
      ${renderTournamentPreviewBlock(
        "Как засчитываются ставки",
        `Учитываются только рассчитанные или выкупленные ставки внутри периода проведения турнира после нажатия на кнопку “Участвовать”.\n• ставки типа ${bets.d || "одинар и экспресс"}\n• коэффициент ставки от ${bets.c || "1,25"}\n• сумма минимальной ставки - ${bets.b || "100"} рублей\n\nЕсли ставка типа экспресс включает несколько событий, то очки начисляются, если хотя бы одно из событий соответствует условиям турнира.\n\nПри расчете очков учитывается итоговый коэффициент экспресса.\n\nПри выкупе ставки очки рассчитываются только в случае, если сумма ставки при выкупе больше изначальной суммы ставки.\n\nНе учитываются\n• ставки на фрибет\n• системы\n• ставки, сделанные за рамками проведения турнира.`
      )}
      ${renderTournamentPreviewBlock("Расчет очков", score)}
      ${renderTournamentPreviewBlock("Бустеры", `Бустеры увеличивают количество очков, получаемых за выигранную ставку. Очки, начисленные за ставку, умножаются на значение бустера.\n${boosters}`)}
      ${renderTournamentPreviewBlock("Начисление и распределение призов", `Фрибет начисляется в день завершения турнира до 18:00.\nСрок действия фрибета - 7 дней с момента зачисления.\nФрибет может быть использован для заключения пари только вида «одинар».\n\nВы можете выиграть один из призов, войдя в призовые места:\n${places}`)}
      ${renderTournamentPreviewBlock("Даты проведения турнира", `Начало турнира в ${dates.d || "12:00 28.06.2026"} по МСК.\nОкончание турнира в ${dates.c || "12:00 07.07.2026"} по МСК.`)}
      ${data.secondaryButtonText ? `<a class="primary-preview outline-preview" href="${escapeHtml(tournament.fullRulesUrl || "#")}">${escapeHtml(data.secondaryButtonText)}</a>` : ""}
    </section>
  `;
}

function renderTournamentPreviewBlock(title, content) {
  if (!content.trim()) {
    return "";
  }

  return `
    <section class="tournament-rule-block">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(content)}</p>
    </section>
  `;
}

function updateAll() {
  if (activeView === "tournaments") {
    const data = buildTournamentJson("app");
    jsonOutput.textContent = getJsonText(data);
    renderTournamentPreview(data);
    const hasTournament = Boolean(data.tournamentParameters.length);
    statusBadge.textContent = hasTournament ? "JSON готов" : "Добавьте турнир";
    statusBadge.classList.toggle("warning", !hasTournament);
    return;
  }

  const data = buildJson();
  jsonOutput.textContent = getJsonText(data);
  renderPreview(data);
  const hasPromoId = Boolean(data.switcherByPromoId.length);
  statusBadge.textContent = hasPromoId ? "JSON готов" : "Укажите Promo ID";
  statusBadge.classList.toggle("warning", !hasPromoId);
}

function getSafeFileBaseName(data) {
  if (Array.isArray(data.tournamentParameters)) {
    const firstId = data.tournamentParameters[0]?.id;
    return firstId ? `tournament_${firstId}` : "tournaments";
  }

  const rawName = data.common?.header || "promo-action";
  return rawName
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\wа-яё-]+/gi, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

function getDownloadFileName(data, suffix = "") {
  const safeName = getSafeFileBaseName(data);
  return `${safeName || "promo-action"}${suffix}.json`;
}

function getZipFileName(data) {
  return `${getSafeFileBaseName(data) || "promo-action"}.zip`;
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadJsonFile(data, suffix) {
  downloadBlob(new Blob([getJsonText(data)], { type: "application/json;charset=utf-8" }), getDownloadFileName(data, suffix));
}

function downloadZipFile(appData, webData) {
  const blob = makeZipFile([
    { name: getDownloadFileName(appData, "_MOB"), content: getJsonText(appData) },
    { name: getDownloadFileName(webData, "_WEB"), content: getJsonText(webData) }
  ]);
  downloadBlob(blob, getZipFileName(appData));
}

async function copyJsonFromButton(button, data, doneText) {
  const originalHtml = button.innerHTML;
  await copyText(getJsonText(data));
  triggerConfetti(button);
  button.textContent = doneText;
  setTimeout(() => {
    button.innerHTML = originalHtml;
  }, 1200);
}

function setActiveView(view) {
  activeView = view;
  const isTournamentView = view === "tournaments";

  viewTabs.forEach((tab) => {
    const isActive = tab.dataset.view === view;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  form.classList.toggle("hidden", isTournamentView);
  tournamentForm.classList.toggle("hidden", !isTournamentView);
  promoTemplateActions.classList.toggle("hidden", isTournamentView);
  topbarEyebrow.textContent = isTournamentView ? "Турниры" : "Маркетинговые акции";
  topbarTitle.textContent = isTournamentView ? "Генератор JSON турниров" : "Генератор JSON";
  updateAll();
}

function getCurrentAppJson() {
  return activeView === "tournaments" ? buildTournamentJson("app") : buildJson();
}

function getCurrentWebJson() {
  return activeView === "tournaments" ? buildTournamentJson("web") : buildWebJson();
}

function triggerConfetti(sourceElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const sourceRect = sourceElement.getBoundingClientRect();
  const origin = {
    x: sourceRect.left + sourceRect.width / 2,
    y: sourceRect.top + sourceRect.height / 2
  };
  const colors = ["#25d75a", "#7c5ce5", "#64c8f6", "#ffc107", "#ff5e8a", "#ffffff"];
  const particles = Array.from({ length: 84 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 5 + Math.random() * 8;
    return {
      x: origin.x,
      y: origin.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: 5 + Math.random() * 7,
      rotation: Math.random() * Math.PI,
      rotationSpeed: -0.22 + Math.random() * 0.44,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.45 ? "rect" : "circle"
    };
  });
  let startTime = 0;

  canvas.className = "confetti-canvas";
  document.body.append(canvas);

  function resizeCanvas() {
    canvas.width = Math.floor(window.innerWidth * pixelRatio);
    canvas.height = Math.floor(window.innerHeight * pixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function drawFrame(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const progress = Math.min((timestamp - startTime) / 1250, 1);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.24;
      particle.vx *= 0.985;
      particle.rotation += particle.rotationSpeed;

      context.save();
      context.globalAlpha = Math.max(1 - progress, 0);
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.fillStyle = particle.color;

      if (particle.shape === "circle") {
        context.beginPath();
        context.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillRect(-particle.size / 2, -particle.size / 3, particle.size, particle.size * 0.66);
      }

      context.restore();
    });

    if (progress < 1) {
      requestAnimationFrame(drawFrame);
    } else {
      canvas.remove();
    }
  }

  resizeCanvas();
  requestAnimationFrame(drawFrame);
}

function animateRuleRemoval(ruleNode, onComplete) {
  if (ruleNode.classList.contains("rule-card-collapsing")) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onComplete();
    return;
  }

  const rect = ruleNode.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(ruleNode);
  const ghost = document.createElement("div");
  const stripCount = Math.max(10, Math.min(18, Math.round(rect.height / 42)));
  const stripHeight = rect.height / stripCount;
  const formControls = ruleNode.querySelectorAll("input, textarea, select");

  ghost.className = "snap-ghost";
  ghost.style.left = `${rect.left}px`;
  ghost.style.top = `${rect.top}px`;
  ghost.style.width = `${rect.width}px`;
  ghost.style.height = `${rect.height}px`;

  Array.from({ length: stripCount }, (_, index) => {
    const strip = document.createElement("div");
    const clone = ruleNode.cloneNode(true);
    const cloneControls = clone.querySelectorAll("input, textarea, select");
    const offset = Math.round(index * stripHeight);
    const direction = index % 2 ? 1 : -1;

    formControls.forEach((control, controlIndex) => {
      const cloneControl = cloneControls[controlIndex];
      if (!cloneControl) {
        return;
      }
      if (control.type === "checkbox") {
        cloneControl.checked = control.checked;
      } else {
        cloneControl.value = control.value;
      }
    });

    strip.className = "snap-strip";
    strip.style.top = `${offset}px`;
    strip.style.height = `${Math.ceil(stripHeight) + 1}px`;
    strip.style.setProperty("--delay", `${index * 13}ms`);
    strip.style.setProperty("--tx", `${26 + Math.random() * 34}px`);
    strip.style.setProperty("--ty", `${direction * (2 + Math.random() * 14)}px`);

    clone.classList.remove("rule-card-collapsing");
    clone.classList.add("snap-strip-inner");
    clone.style.setProperty("--strip-offset", offset);
    clone.style.setProperty("--snap-width", `${rect.width}px`);
    clone.style.margin = "0";

    strip.append(clone);
    ghost.append(strip);
  });

  document.body.append(ghost);

  ruleNode.style.setProperty("--collapse-height", `${rect.height}px`);
  ruleNode.style.setProperty("--collapse-margin", computedStyle.marginBottom);
  ruleNode.style.height = `${rect.height}px`;
  ruleNode.classList.add("rule-card-collapsing");

  window.setTimeout(() => {
    ghost.remove();
  }, 920);
  window.setTimeout(onComplete, 620);
}

form.addEventListener("input", updateAll);
tournamentForm.addEventListener("input", () => {
  renumberTournaments();
  updateAll();
});
viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveView(tab.dataset.view);
  });
});
document.querySelector("#addRuleButton").addEventListener("click", () => {
  addRule();
  updateAll();
});
document.querySelector("#addTournamentButton").addEventListener("click", () => {
  addSelectedTournamentTemplate();
});
document.querySelector("#loadTemplateButton").addEventListener("click", () => {
  loadTemplate(templateSelect.value);
});
templateSelect.addEventListener("change", () => {
  if (templateSelect.value === "json") {
    loadTemplate("json");
  }
});
document.querySelector("#applyJsonButton").addEventListener("click", () => {
  importJsonText(jsonImportInput.value);
});
jsonImportInput.addEventListener("input", scheduleJsonImport);
tournamentJsonImportInput.addEventListener("input", scheduleTournamentJsonImport);
jsonFileInput.addEventListener("change", async () => {
  const [file] = jsonFileInput.files;
  if (!file) {
    return;
  }

  jsonImportInput.value = await file.text();
  importJsonText(jsonImportInput.value);
});
tournamentJsonFileInput.addEventListener("change", async () => {
  const [file] = tournamentJsonFileInput.files;
  if (!file) {
    return;
  }

  tournamentJsonImportInput.value = await file.text();
  importTournamentJsonText(tournamentJsonImportInput.value);
});
document.querySelector("#copyAppButton").addEventListener("click", async () => {
  await copyJsonFromButton(document.querySelector("#copyAppButton"), getCurrentAppJson(), "APP скопирован");
});
document.querySelector("#copyWebButton").addEventListener("click", async () => {
  await copyJsonFromButton(document.querySelector("#copyWebButton"), getCurrentWebJson(), "WEB скопирован");
});
document.querySelector("#downloadButton").addEventListener("click", () => {
  const appData = getCurrentAppJson();
  downloadZipFile(appData, getCurrentWebJson());
  triggerConfetti(document.querySelector("#downloadButton"));
});

templateSelect.value = "offer";
loadTemplate("offer");
fillTournamentTemplateSelect();
updateAll();
setActiveView("promo");
