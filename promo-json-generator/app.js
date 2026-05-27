const DEFAULT_WIDGET_IMAGE = "https://www.ligastavok.ru/files/file/16326/Marketing_widgetProgressBar_Bg.webp";
const DEFAULT_TERM_IMAGE = "https://www.ligastavok.ru/files/file/11160/Freebet_3x.webp";

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
const preview = document.querySelector("#preview");
const previewTitle = document.querySelector("#previewTitle");
const statusBadge = document.querySelector("#statusBadge");

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

function loadTemplate(name) {
  const data = cloneData(templates[name]);
  fields.promoIds.value = "";
  fields.title.value = data.common.title || "";
  fields.header.value = data.common.header || "";
  fields.imageUrl.value = data.common.imageUrl || "";
  fields.content.value = data.common.content || "";
  fields.primaryButtonText.value = data.common.primaryButtonText || "";
  fields.primaryButtonUrl.value = data.common.primaryButtonUrl || "";
  fields.secondaryButtonText.value = data.common.secondaryButtonText || "";
  fields.secondaryButtonUrl.value = data.common.secondaryButtonUrl || "";
  rulesList.innerHTML = "";
  data.common.rules.forEach(addRule);
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
    node.remove();
    renumberRules();
    updateAll();
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

function parsePromoIds(value) {
  return value
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
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

  return {
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
  };
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

function updateAll() {
  const data = buildJson();
  jsonOutput.textContent = JSON.stringify(data, null, 2);
  renderPreview(data);
  const hasPromoId = Boolean(data.switcherByPromoId.length);
  statusBadge.textContent = hasPromoId ? "JSON готов" : "! Укажите Promo ID";
  statusBadge.classList.toggle("warning", !hasPromoId);
}

function getDownloadFileName(data) {
  const promoId = data.switcherByPromoId[0] || "promo-action";
  const safePromoId = promoId
    .toLowerCase()
    .replace(/[^a-z0-9а-яё_-]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${safePromoId || "promo-action"}.json`;
}

form.addEventListener("input", updateAll);
document.querySelector("#addRuleButton").addEventListener("click", () => {
  addRule();
  updateAll();
});
document.querySelector("#loadTemplateButton").addEventListener("click", () => {
  loadTemplate(document.querySelector("#templateSelect").value);
});
document.querySelector("#copyButton").addEventListener("click", async () => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(jsonOutput.textContent);
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(jsonOutput);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  }
  const button = document.querySelector("#copyButton");
  button.textContent = "Скопировано";
  setTimeout(() => {
    button.textContent = "Скопировать";
  }, 1200);
});
document.querySelector("#downloadButton").addEventListener("click", () => {
  const data = buildJson();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getDownloadFileName(data);
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

document.querySelector("#templateSelect").value = "offer";
loadTemplate("offer");
