/*
  Single JS entry for the whole site (no libraries).

  - Home menu: builds compact section buttons and modal dialogs
  - Presentations: runs when window.PRESENTATION_CONFIG exists

  Keep all configuration in one place:
  - Home sections list is here
  - Home popups are here
  - Each presentation page defines window.PRESENTATION_CONFIG locally
*/

// -------------------------
// Home menu (index.html)
// -------------------------

const HOME_SECTIONS = [
  {
    title: "Структура сделки",
    desc: "Презентация: slide 1 → slide 2 → slide 3 → …",
    href: "./deal-structure.html"
  },
  {
    title: "О компании",
    desc: "Презентация: кто мы, чем полезны, как работаем.",
    href: "./about.html"
  },
  {
    title: "Контакты",
    desc: "Презентация: каналы связи и точки входа.",
    href: "./contacts.html"
  },
  {
    title: "Форматы оплаты",
    desc: "Выбор сценария/модели сделки внутри раздела.",
    href: "./payment-formats.html"
  },
  {
    title: "Процесс импорта",
    desc: "Заглушка для будущей презентации. Архитектура уже готова.",
    href: "./import-process.html"
  },
  {
    title: "Вопросы и ответы",
    desc: "Заглушка для будущей презентации. Архитектура уже готова.",
    href: "./faq.html"
  }
];

const HOME_VIEWS = {
  verify: {
    title: "Проверить компанию",
    text: "Выберите удобный публичный источник для проверки компании и связанных открытых данных.",
    actions: [
      {
        label: "Руспрофайл",
        href: "https://www.rusprofile.ru/id/1216300039339",
        external: true
      },
      {
        label: "Чекко",
        href: "https://checko.ru/company/sgm-avto-grupp-1216300039339",
        external: true
      },
      {
        label: "Презентация о компании",
        href: "./about.html"
      },
      {
        label: "Документы",
        view: "documents"
      },
      {
        label: "Соц. сети, отзывы и сайт",
        view: "social"
      }
    ]
  },
  documents: {
    title: "Документы",
    actions: [
      {
        label: "Форма ДКП",
        href: "./assets/downloads/DKP FORMA.pdf",
        external: true
      },
      {
        label: "Карта партнёра",
        href: "./assets/downloads/Karta SGM Avto Group.pdf",
        external: true
      },
      {
        label: "Лист записи ЕГРЮЛ о смене ген. директора",
        href: "./assets/downloads/Leest zapisi ot 28.05.2025 (gen.direktor Umov S.V.).pdf",
        external: true
      },
      {
        label: "ФТС - рег. №1904",
        href: "./assets/downloads/Pismo_o_vnesenii_v_reestr_tamozhennykh_predstavitelei.pdf",
        external: true
      }
    ]
  },
  social: {
    title: "Соц. сети, отзывы и сайт",
    actions: [
      {
        label: "Канал Rutube",
        href: "https://rutube.ru/channel/38241441/",
        external: true
      },
      {
        label: "Auto.ru",
        href: "https://auto.ru/diler/cars/all/sgm_avto_grupp_samara/",
        external: true
      },
      {
        label: "Avito",
        href: "https://www.avito.ru/brands/sgm-auto-group-avtosalon-samara/all/avtomobili?sellerId=c8016100bea4127dda1cd276f3c0fb87",
        external: true
      },
      {
        label: "Наш сайт",
        href: "https://sgmautogroup.ru/protsessy",
        external: true
      },
      {
        label: "Счастливые владельцы",
        href: "https://disk.yandex.ru/d/JTC7wdOgOFyNTA",
        external: true
      }
    ]
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeHref(href) {
  return encodeURI(String(href));
}

function initHome() {
  const sectionsRoot = document.getElementById("sectionsList");
  const modalRoot = document.getElementById("homeModalRoot");
  const verifyBtn = document.getElementById("btnVerifyCompany");

  if (!sectionsRoot || !modalRoot) return;

  const modalStack = [];

  function sectionView(section) {
    return {
      title: section.title,
      text: section.desc,
      actions: [
        {
          label: "Открыть",
          href: section.href
        }
      ]
    };
  }

  function renderSectionButton(section, index) {
    return `
      <button class="sectionButton" type="button" data-section-index="${index}">
        <span class="sectionButton__label">${escapeHtml(section.title)}</span>
      </button>
    `;
  }

  function renderAction(action) {
    if (action.view) {
      return `
        <button class="modalAction" type="button" data-view="${escapeHtml(action.view)}">
          ${escapeHtml(action.label)}
        </button>
      `;
    }

    const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";

    return `
      <a class="modalAction" href="${escapeHtml(normalizeHref(action.href))}"${target}>
        ${escapeHtml(action.label)}
      </a>
    `;
  }

  function renderModal() {
    const current = modalStack[modalStack.length - 1];

    if (!current) {
      modalRoot.hidden = true;
      modalRoot.innerHTML = "";
      document.body.classList.remove("modal-open");
      return;
    }

    const hasBack = modalStack.length > 1;

    modalRoot.hidden = false;
    document.body.classList.add("modal-open");
    modalRoot.innerHTML = `
      <div class="modalShell" role="presentation">
        <button class="modalOverlay" type="button" data-close="true" aria-label="Закрыть"></button>
        <section class="modalCard" role="dialog" aria-modal="true" aria-labelledby="homeModalTitle">
          <div class="modalHead">
            <div class="modalHead__start">
              ${hasBack ? '<button class="modalBack" type="button" data-back="true">Назад</button>' : ""}
            </div>
            <button class="modalClose" type="button" data-close="true" aria-label="Закрыть">✕</button>
          </div>
          <h2 class="modalTitle" id="homeModalTitle">${escapeHtml(current.title)}</h2>
          ${current.text ? `<p class="modalText">${escapeHtml(current.text)}</p>` : ""}
          <div class="modalActions">
            ${(current.actions || []).map(renderAction).join("")}
          </div>
        </section>
      </div>
    `;
  }

  function openView(view) {
    modalStack.push(view);
    renderModal();
  }

  function closeModal() {
    modalStack.length = 0;
    renderModal();
  }

  function goBack() {
    if (modalStack.length > 1) {
      modalStack.pop();
      renderModal();
      return;
    }

    closeModal();
  }

  sectionsRoot.className = "sectionButtons";
  sectionsRoot.innerHTML = HOME_SECTIONS.map(renderSectionButton).join("");

  sectionsRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-section-index]");
    if (!button) return;

    const index = Number(button.getAttribute("data-section-index"));
    const section = HOME_SECTIONS[index];
    if (!section) return;

    openView(sectionView(section));
  });

  if (verifyBtn) {
    verifyBtn.addEventListener("click", () => {
      openView(HOME_VIEWS.verify);
    });
  }

  modalRoot.addEventListener("click", (event) => {
    const closeBtn = event.target.closest("[data-close]");
    if (closeBtn) {
      closeModal();
      return;
    }

    const backBtn = event.target.closest("[data-back]");
    if (backBtn) {
      goBack();
      return;
    }

    const viewBtn = event.target.closest("[data-view]");
    if (viewBtn) {
      const nextView = HOME_VIEWS[viewBtn.getAttribute("data-view")];
      if (nextView) {
        openView(nextView);
      }
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalStack.length > 0) {
      closeModal();
    }
  });
}

// -------------------------
// Presentation engine
// -------------------------

function initPresentation() {
  const config = window.PRESENTATION_CONFIG;
  if (!config || !Array.isArray(config.slides)) return;

  const slides = config.slides;
  const sectionTitle = String(config.sectionTitle || "");

  const els = {
    slide: document.getElementById("slide"),
    kicker: document.getElementById("kicker"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    extra: document.getElementById("extra"),
    counter: document.getElementById("counter"),
    back: document.getElementById("btnBack"),
    next: document.getElementById("btnNext")
  };

  if (!els.slide || !els.title || !els.body || !els.counter || !els.back || !els.next || !els.kicker) {
    return;
  }

  let currentIndex = 0;

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function parseIndexFromHash() {
    const hash = window.location.hash || "";
    const match = hash.match(/s=(\d+)/);
    if (!match) return 0;

    const oneBased = Number(match[1]);
    if (!Number.isFinite(oneBased)) return 0;

    return clamp(oneBased - 1, 0, slides.length - 1);
  }

  function setHashFromIndex(i) {
    const nextHash = `#s=${i + 1}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }

  function setNavState(i) {
    els.back.disabled = i <= 0;
    els.next.disabled = i >= slides.length - 1;
    els.counter.textContent = `${i + 1} / ${slides.length}`;
  }

  function renderExtra(slide) {
    if (!els.extra) return;

    const html = slide && (slide.extraHtml || slide.bodyHtml)
      ? String(slide.extraHtml || slide.bodyHtml)
      : "";

    els.extra.innerHTML = html;

    els.extra.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = Number(btn.getAttribute("data-go"));
        if (Number.isFinite(target)) {
          showSlide(target);
        }
      });
    });
  }

  function showSlide(i) {
    currentIndex = clamp(i, 0, slides.length - 1);
    const slide = slides[currentIndex] || { title: "", body: "" };

    els.slide.classList.remove("is-active");

    requestAnimationFrame(() => {
      const labelEl = els.kicker.querySelector("[data-kicker-label]");
      if (labelEl) {
        labelEl.textContent = sectionTitle;
      }

      els.title.textContent = String(slide.title || "");
      els.body.textContent = String(slide.body || "");

      renderExtra(slide);
      setNavState(currentIndex);
      setHashFromIndex(currentIndex);

      requestAnimationFrame(() => {
        els.slide.classList.add("is-active");
      });
    });
  }

  function go(delta) {
    showSlide(currentIndex + delta);
  }

  els.back.addEventListener("click", () => go(-1));
  els.next.addEventListener("click", () => go(1));

  window.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      go(1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      go(-1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      showSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      showSlide(slides.length - 1);
    }
  });

  window.addEventListener("hashchange", () => {
    const idx = parseIndexFromHash();
    if (idx !== currentIndex) {
      showSlide(idx);
    }
  });

  showSlide(parseIndexFromHash());
}

document.addEventListener("DOMContentLoaded", () => {
  initHome();
  initPresentation();
});
