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
const templateSelect = document.querySelector("#templateSelect");
const jsonImportPanel = document.querySelector("#jsonImportPanel");
const jsonImportInput = document.querySelector("#jsonImportInput");
const jsonImportStatus = document.querySelector("#jsonImportStatus");
const jsonFileInput = document.querySelector("#jsonFileInput");
const preview = document.querySelector("#preview");
const previewTitle = document.querySelector("#previewTitle");
const statusBadge = document.querySelector("#statusBadge");
let jsonImportTimer = 0;

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

function htmlBreaksToText(value) {
  return String(value ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\u00a0/g, " ");
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

function getJsonText(data) {
  return JSON.stringify(data, null, 2);
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

function updateAll() {
  const data = buildJson();
  jsonOutput.textContent = getJsonText(data);
  renderPreview(data);
  const hasPromoId = Boolean(data.switcherByPromoId.length);
  statusBadge.textContent = hasPromoId ? "JSON готов" : "Укажите Promo ID";
  statusBadge.classList.toggle("warning", !hasPromoId);
}

function getDownloadFileName(data, suffix = "") {
  const promoId = data.switcherByPromoId[0] || "promo-action";
  const safePromoId = promoId
    .toLowerCase()
    .replace(/[^a-z0-9а-яё_-]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${safePromoId || "promo-action"}${suffix}.json`;
}

function downloadJsonFile(data, suffix) {
  const blob = new Blob([getJsonText(data)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getDownloadFileName(data, suffix);
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function copyJsonFromButton(button, data, doneText) {
  const originalText = button.textContent;
  await copyText(getJsonText(data));
  triggerConfetti(button);
  button.textContent = doneText;
  setTimeout(() => {
    button.textContent = originalText;
  }, 1200);
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
document.querySelector("#addRuleButton").addEventListener("click", () => {
  addRule();
  updateAll();
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
jsonFileInput.addEventListener("change", async () => {
  const [file] = jsonFileInput.files;
  if (!file) {
    return;
  }

  jsonImportInput.value = await file.text();
  importJsonText(jsonImportInput.value);
});
document.querySelector("#copyAppButton").addEventListener("click", async () => {
  await copyJsonFromButton(document.querySelector("#copyAppButton"), buildJson(), "APP скопирован");
});
document.querySelector("#copyWebButton").addEventListener("click", async () => {
  await copyJsonFromButton(document.querySelector("#copyWebButton"), buildWebJson(), "WEB скопирован");
});
document.querySelector("#downloadButton").addEventListener("click", () => {
  const appData = buildJson();
  downloadJsonFile(appData, "-app");
  downloadJsonFile(buildWebJson(), "-web");
  triggerConfetti(document.querySelector("#downloadButton"));
});

templateSelect.value = "offer";
loadTemplate("offer");
