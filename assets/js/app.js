const ICONS = {
  import: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 7h8" />
      <path d="M3 11h6" />
      <path d="M5 17h7" />
      <path d="M14 17h2l2-4h2l2 3v1h-2" />
      <circle cx="8" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  `,
  nuance: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86 2.93 16.6A2 2 0 0 0 4.66 19h14.68a2 2 0 0 0 1.73-2.4L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  `,
  contacts: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 20a8 8 0 0 1 16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  `,
  search: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  `,
  building: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
      <path d="M9 13h.01" />
      <path d="M15 13h.01" />
      <path d="M10 21v-4h4v4" />
    </svg>
  `,
  file: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h6" />
      <path d="M9 11h2" />
    </svg>
  `,
  filePdf: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M7 16h1.6a1.4 1.4 0 0 0 0-2.8H7v4.8" />
      <path d="M12 13.2V18h1.1a2.4 2.4 0 0 0 0-4.8H12Z" />
      <path d="M17 18v-4.8h3" />
      <path d="M17 15.4h2.4" />
    </svg>
  `,
  download: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  `,
  alert: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10.29 3.86 2.93 16.6A2 2 0 0 0 4.66 19h14.68a2 2 0 0 0 1.73-2.4L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  `,
  presentation: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 5h16v10H4z" />
      <path d="M12 15v4" />
      <path d="M9 19h6" />
      <path d="M8 9h8" />
    </svg>
  `,
  archive: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
      <path d="M23 3H1v5h22z" />
      <path d="M10 12h4" />
    </svg>
  `,
  star: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m12 3 2.7 5.47 6.03.88-4.36 4.24 1.03 5.99L12 16.77 6.6 19.6l1.03-5.99L3.27 9.35l6.03-.88L12 3Z" />
    </svg>
  `,
  video: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m16 13 5 3V8l-5 3" />
      <rect x="3" y="6" width="13" height="12" rx="2" />
    </svg>
  `,
  car: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 16H9m10 0h2v-3l-2-5H5l-2 5v3h2" />
      <path d="M6 16h.01" />
      <path d="M18 16h.01" />
      <path d="M5 11h14" />
      <path d="M7 16v2" />
      <path d="M17 16v2" />
    </svg>
  `,
  link: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10 14a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 14" />
      <path d="M14 10a5 5 0 0 1 0 7L12.5 18.5a5 5 0 0 1-7-7L7 10" />
    </svg>
  `,
  share: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 8 5-5 5 5" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </svg>
  `,
  image: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m21 16-5-5-4 4-2-2-5 5" />
    </svg>
  `,
  plusUser: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 19a6 6 0 0 0-12 0" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.39 2.57a2 2 0 0 1-.57 1.72l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.72-.57l2.57.39A2 2 0 0 1 22 16.92Z" />
    </svg>
  `,
  telegram: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21.5 4.5 3.8 11.3c-.9.3-.9 1.6 0 1.9l4.6 1.5 1.8 5.1c.3.8 1.4.9 1.8.2l2.7-4.1 4.8 3.5c.7.5 1.7.1 1.8-.8l1.4-12.7c.1-1-.9-1.7-1.8-1.4Z" />
      <path d="m8.4 14.7 10.8-8.6" />
    </svg>
  `,
  maxChat: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="m8 9 3 3 5-5" />
    </svg>
  `,
  home: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  `,
  arrowLeft: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  `,
  arrowRight: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,
  chevronDown: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  `
};

const HOME_SECTIONS = [
  {
    title: "Сценарий санкционного импорта",
    desc: "Сначала выберите формат сделки, затем откройте свой маршрут: этапы, документы, оплата, НДС, риски и результат.",
    href: "./import-process.html",
    icon: "import",
    direct: true
  },
  {
    title: "Важные нюансы",
    desc: "Вопросы и ответы, риски серого импорта, проверка предложения продавца и договор.",
    href: "./nuances.html",
    icon: "nuance",
    direct: true
  },
  {
    title: "Контакты Вашего менеджера",
    desc: "Каналы связи и быстрое сохранение контакта.",
    href: "./contacts.html",
    icon: "contacts",
    view: "managerContacts"
  }
];

const HOME_VIEWS = {
  verify: {
    title: "Выберите удобный источник",
    note: "Обязательно проверьте своего контрагента",
    noteIcon: "alert",
    noteAccent: true,
    actions: [
      {
        label: "Проверить компанию",
        view: "publicSource",
        icon: "search"
      },
      {
        label: "Презентация о компании",
        view: "companyPresentationPdf",
        icon: "presentation"
      },
      {
        label: "Карта партнёра и другие документы",
        view: "documents",
        icon: "file",
        breakBefore: true
      },
      {
        label: "Наши работы",
        view: "projects",
        icon: "image"
      },
      {
        label: "Наши каналы",
        view: "social",
        icon: "link",
        breakBefore: true
      }
    ]
  },
  publicSource: {
    title: "Выберите удобный публичный источник",
    actions: [
      {
        label: "Руспрофайл",
        href: "https://www.rusprofile.ru/id/1216300039339",
        external: true,
        icon: "building"
      },
      {
        label: "Чекко",
        href: "https://checko.ru/company/sgm-avto-grupp-1216300039339",
        external: true,
        icon: "search"
      }
    ]
  },
  documents: {
    title: "Документы",
    actions: [
      {
        label: "Типовой шаблон ДКП",
        href: "./assets/downloads/DKP FORMA.pdf",
        external: true,
        icon: "filePdf"
      },
      {
        label: "Карта партнёра",
        href: "./assets/downloads/Karta SGM Avto Group.pdf",
        external: true,
        icon: "filePdf"
      },
      {
        label: "Лист записи ЕГРЮЛ",
        href: "./assets/downloads/Leest zapisi ot 28.05.2025 (gen.direktor Umov S.V.).pdf",
        external: true,
        icon: "filePdf"
      },
      {
        label: "Официальный представитель федеральной таможенной службы с рег. №1904",
        href: "./assets/downloads/Pismo_o_vnesenii_v_reestr_tamozhennykh_predstavitelei.pdf",
        external: true,
        icon: "filePdf"
      }
    ]
  },
  projects: {
    title: "Наши работы",
    actions: [
      {
        label: "Что привезли",
        href: "https://disk.yandex.ru/d/f5Wamw0J5cX0GA",
        external: true,
        icon: "image"
      },
      {
        label: "Кому передали",
        href: "https://disk.yandex.ru/d/JTC7wdOgOFyNTA",
        external: true,
        icon: "image"
      }
    ]
  },
  social: {
    title: "Наши каналы",
    text: "Подписывайтесь на обновления: в каналах показываем новости, поставки и живые движения склада. Auto.ru и Avito — витрина автомобилей, сайт — главная точка входа.",
    actions: [
      {
        label: "MAX канал",
        href: "https://max.ru/id6312208990_biz",
        external: true,
        iconImage: "./assets/site/logo_max.svg"
      },
      {
        label: "Telegram канал",
        href: "https://t.me/SGM_auto_group",
        external: true,
        iconImage: "./assets/site/telegram-logo.svg"
      },
      {
        label: "Магазин на Auto.ru",
        href: "https://auto.ru/diler/cars/all/sgm_avto_grupp_samara/",
        external: true,
        iconImage: "./assets/site/autoru.svg"
      },
      {
        label: "Магазин на Avito",
        href: "https://www.avito.ru/brands/sgm-auto-group-avtosalon-samara/all/avtomobili?sellerId=c8016100bea4127dda1cd276f3c0fb87",
        external: true,
        iconImage: "./assets/site/avito.svg"
      },
      {
        label: "Канал Rutube",
        href: "https://rutube.ru/channel/38241441/",
        external: true,
        iconImage: "./assets/site/rutube.svg"
      },
      {
        label: "Наш официальный сайт",
        href: "https://sgmautogroup.ru/",
        external: true,
        iconImage: "./assets/site/icon.svg",
        breakBefore: true
      }
    ]
  },
  companyPresentationPdf: {
    title: "Презентация о компании",
    actions: [
      {
        label: "Интерактивная",
        view: "interactiveInDevelopment",
        icon: "presentation",
        accent: true
      },
      {
        label: "Традиционная",
        href: "./assets/downloads/Prezentatciia SGM Avto Grupp.pdf",
        downloadHref: "./assets/downloads/Prezentatciia SGM Avto Grupp.pdf",
        external: true,
        icon: "filePdf",
        breakBefore: true
      }
    ]
  },
  interactiveInDevelopment: {
    title: "Интерактивная презентация",
    text: "Этот интерактивный раздел пока в разработке. Мы уже готовим удобную версию внутри сайта, чтобы материал открывался быстро и читался одинаково хорошо на телефоне и компьютере.",
    note: "PDF-материалы рядом остаются доступными для просмотра, скачивания и пересылки.",
    noteIcon: "alert",
    noteAccent: true
  },
  grayRisksPdfStub: {
    title: "Риски серого импорта",
    text: "Интерактивная версия пока в разработке. Сейчас можно открыть или скачать PDF-материал.",
    actions: [
      {
        label: "Риски серого импорта",
        href: "./assets/downloads/SGM_Auto_Group_kratko.pdf",
        downloadHref: "./assets/downloads/SGM_Auto_Group_kratko.pdf",
        external: true,
        icon: "filePdf"
      }
    ]
  },
  sanctionImportPdf: {
    title: "Сценарий санкционного импорта",
    text: "Часть интерактивных разделов временно в разработке. PDF-файлы оставлены как традиционные материалы для просмотра, скачивания и пересылки.",
    note: "Если нажать на интерактивный раздел, появится короткая заглушка о разработке.",
    actions: [
      {
        label: "Сценарий санкционного импорта",
        href: "./import-process.html",
        icon: "import",
        accent: true
      },
      {
        label: "Риски серого импорта",
        view: "grayRisksPdfStub",
        icon: "alert"
      },
      {
        label: "RAM 1500: выбор версии",
        href: "./ram-choice.html",
        icon: "car"
      },
      {
        label: "SGM Auto Group кратко",
        href: "./assets/downloads/SGM_Auto_Group_kratko.pdf",
        downloadHref: "./assets/downloads/SGM_Auto_Group_kratko.pdf",
        external: true,
        icon: "filePdf",
        breakBefore: true
      },
      {
        label: "Письмо о заниженной стоимости и калькуляция расчётов",
        href: "./assets/downloads/Pismo po zanizhennoi stoimosti.pdf",
        downloadHref: "./assets/downloads/Pismo po zanizhennoi stoimosti.pdf",
        external: true,
        icon: "filePdf",
        breakBefore: true
      },
      {
        label: "Контакты Вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  ramIntroPdf: {
    title: "Общее знакомство с RAM",
    text: "Интерактивная страница RAM 1500 уже доступна. PDF оставлен как быстрый файл для скачивания.",
    note: "Откройте страницу для выбора версии, сравнения моторов и перехода к формату покупки.",
    actions: [
      {
        label: "Открыть RAM 1500",
        href: "./ram-choice.html",
        icon: "car",
        accent: true
      },
      {
        label: "Общее знакомство с RAM",
        href: "./assets/downloads/Obshchee znakomstvo s RAM.pdf",
        downloadHref: "./assets/downloads/Obshchee znakomstvo s RAM.pdf",
        external: true,
        icon: "filePdf",
        breakBefore: true
      },
      {
        label: "Контакты Вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  importArticlePdf: {
    title: "Как привезти а/м из-за рубежа",
    text: "Интерактивная версия временно в разработке. PDF-статья оставлена как традиционный материал для просмотра, скачивания и пересылки.",
    note: "Для конкретного автомобиля лучше сразу связать сценарий ввоза с менеджером.",
    actions: [
      {
        label: "Сценарий санкционного импорта",
        href: "./import-process.html",
        icon: "import",
        accent: true
      },
      {
        label: "Риски серого импорта",
        view: "grayRisksPdfStub",
        icon: "alert"
      },
      {
        label: "Архитектура безопасной сделки",
        view: "interactiveInDevelopment",
        icon: "import"
      },
      {
        label: "Как привезти а/м из-за рубежа",
        href: "./assets/downloads/Statya.pdf",
        downloadHref: "./assets/downloads/Statya.pdf",
        external: true,
        icon: "filePdf",
        breakBefore: true
      },
      {
        label: "Контакты Вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  techWorks: {
    title: "Важные нюансы",
    text: "Часть интерактивных разделов временно в разработке. Открытые материалы и PDF-файлы оставлены рядом, чтобы ими уже можно было пользоваться.",
    note: "PDF-статья оставлена рядом как дополнительный материал.",
    actions: [
      {
        label: "Открыть важные нюансы",
        href: "./nuances.html",
        icon: "nuance",
        accent: true
      },
      {
        label: "Вопросы и ответы",
        href: "./faq.html",
        icon: "contacts"
      },
      {
        label: "Риски серого импорта",
        view: "grayRisksPdfStub",
        icon: "alert"
      },
      {
        label: "Договор, приемка и зоны внимания",
        view: "interactiveInDevelopment",
        icon: "file"
      },
      {
        label: "Как привезти а/м из-за рубежа",
        href: "./assets/downloads/Statya.pdf",
        downloadHref: "./assets/downloads/Statya.pdf",
        external: true,
        icon: "filePdf",
        breakBefore: true
      },
      {
        label: "Контакты Вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  managerContacts: {
    hideTitle: true,
    className: "modalCard--contacts",
    html: `
      <div class="contactSheet">
        <div class="contactHero">
          <img class="contactAvatar" src="./assets/site/avatar_safrutin_pro.png" alt="Максим Сафрутин" />
          <div class="contactHero__content">
            <h3 class="contactName">Максим Сафрутин</h3>
            <p class="contactRole">Менеджер отдела продаж</p>
            <a class="contactCompany contactCompanyLink" href="./index.html">ООО "СГМ АВТО ГРУПП"</a>
          </div>
        </div>
        <div class="contactTopActions">
          <a class="modalAction modalAction--accent modalAction--no-shine" href="./assets/downloads/Dobavit%20v%20kontakty.vcf" download>
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("plusUser")}</span>
            <span>Сохранить в контакты</span>
          </a>
          <button class="modalAction modalAction--shareAction" type="button" data-contact-share="./contacts.html">
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("share")}</span>
            <span>Поделиться</span>
          </button>
        </div>
        <div class="contactMethod contactMethod--primary">
          <div class="contactMethod__main">
            <a class="contactMethod__number" href="tel:+79016285661">+7 (901) 628-56-61</a>
            <span class="contactMethod__label">Рабочий</span>
          </div>
          <div class="contactMethod__actions">
            <a class="contactQuick" href="tel:+79016285661" aria-label="Позвонить на рабочий" title="Позвонить" data-tooltip="Позвонить">
              <img src="./assets/site/phone-logo.svg" alt="" />
            </a>
            <a class="contactQuick" href="https://t.me/m_safrutin_sgm" target="_blank" rel="noreferrer noopener" aria-label="Telegram" title="Telegram" data-tooltip="Telegram">
              <img src="./assets/site/telegram-logo.svg" alt="" />
            </a>
            <a class="contactQuick" href="https://max.ru/u/f9LHodD0cOLkDYc7WRUvUlW3iTYHH3vBKhI2CVKRwNAwSRLmo_0ty6cL3VM" target="_blank" rel="noreferrer noopener" aria-label="Max" title="Max" data-tooltip="Max">
              <img src="./assets/site/logo_max.svg" alt="" />
            </a>
            <a class="contactQuick" href="https://vk.com/id1112271997" target="_blank" rel="noreferrer noopener" aria-label="VK" title="VK" data-tooltip="VK">
              <img src="./assets/site/vk-logo.svg" alt="" />
            </a>
          </div>
        </div>
        <details class="contactAccordion">
          <summary>
            <span>Рабочая почта и ещё контакты</span>
            <span class="contactAccordion__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
          </summary>
          <div class="contactAccordion__body">
            <div class="contactMethod contactMethod--email">
              <div class="contactMethod__main">
                <a class="contactMethod__number" href="mailto:m.safrutin@sgmautogroup.ru">m.safrutin@sgmautogroup.ru</a>
                <span class="contactMethod__label">Рабочая почта</span>
              </div>
            </div>
            <div class="contactMethod">
              <div class="contactMethod__main">
                <a class="contactMethod__number" href="tel:+79272961107">+7 (927) 296-11-07</a>
                <span class="contactMethod__label">Доп. рабочий</span>
              </div>
              <div class="contactMethod__actions">
                <a class="contactQuick" href="tel:+79272961107" aria-label="Позвонить на дополнительный рабочий" title="Позвонить" data-tooltip="Позвонить">
                  <img src="./assets/site/phone-logo.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://t.me/max_safrutin_sgm" target="_blank" rel="noreferrer noopener" aria-label="Telegram" title="Telegram" data-tooltip="Telegram">
                  <img src="./assets/site/telegram-logo.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://max.ru/u/f9LHodD0cOKG8uj7UYmHlO_AQH3slMNYWgGfvvIiPKMF0sidhEN-bxuUz4I" target="_blank" rel="noreferrer noopener" aria-label="Max" title="Max" data-tooltip="Max">
                  <img src="./assets/site/logo_max.svg" alt="" />
                </a>
              </div>
            </div>
            <div class="contactMethod">
              <div class="contactMethod__main">
                <a class="contactMethod__number" href="tel:+79272651777">+7 (927) 265-17-77</a>
                <span class="contactMethod__label">Личный</span>
              </div>
              <div class="contactMethod__actions">
                <a class="contactQuick" href="tel:+79272651777" aria-label="Позвонить на личный" title="Позвонить" data-tooltip="Позвонить">
                  <img src="./assets/site/phone-logo.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://t.me/max_safrutin" target="_blank" rel="noreferrer noopener" aria-label="Telegram" title="Telegram" data-tooltip="Telegram">
                  <img src="./assets/site/telegram-logo.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://max.ru/u/f9LHodD0cOKKZU5YzAy-jy-s9GFJHXWaHHYEv7Bq4vrV8HM_H0nirqXVKRE" target="_blank" rel="noreferrer noopener" aria-label="Max" title="Max" data-tooltip="Max">
                  <img src="./assets/site/logo_max.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://vk.com/max_safrutin" target="_blank" rel="noreferrer noopener" aria-label="VK" title="VK" data-tooltip="VK">
                  <img src="./assets/site/vk-logo.svg" alt="" />
                </a>
              </div>
            </div>
            <div class="contactMethod">
              <div class="contactMethod__main">
                <a class="contactMethod__number" href="tel:88002220032">8 (800) 222-00-32</a>
                <span class="contactMethod__label">Горячая линия</span>
              </div>
              <div class="contactMethod__actions">
                <a class="contactQuick" href="tel:88002220032" aria-label="Позвонить на горячую линию" title="Позвонить" data-tooltip="Позвонить">
                  <img src="./assets/site/phone-logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    `,
    actions: []
  }
};

const GUIDE_NAV = [
  {
    title: "О компании",
    icon: "building",
    children: [
      { title: "Кто мы", href: "./about.html#trust/2", presentation: "trust", slide: 2 },
      { title: "Чем занимаемся", href: "./about.html#trust/3", presentation: "trust", slide: 3 },
      { title: "Почему нам можно доверять", href: "./about.html#trust/4", presentation: "trust", slide: 4 },
      {
        title: "Проверка компании",
        children: [
          { title: "Реквизиты", href: "./about.html#trust/5", presentation: "trust", slide: 5 },
          { title: "ЕГРЮЛ", href: "./about.html#trust/6", presentation: "trust", slide: 6 },
          { title: "Документы", view: "documents", icon: "file" }
        ]
      },
      { title: "Контакты", href: "./contacts.html" }
    ]
  },
  {
    title: "Сценарий санкционного импорта",
    icon: "import",
    children: [
      {
        title: "Покупка на физическое лицо — СГМ как брокер",
        children: [
          { title: "Роль СГМ и клиента", href: "./import-process.html#sanction-scenario/2", presentation: "sanction-scenario", slide: 2 },
          { title: "Оплата, маршрут и документы", href: "./import-process.html#sanction-scenario/3", presentation: "sanction-scenario", slide: 3 },
          { title: "Результат для физлица", href: "./import-process.html#sanction-scenario/4", presentation: "sanction-scenario", slide: 4 }
        ]
      },
      {
        title: "Покупка на юридическое лицо — СГМ как брокер",
        children: [
          { title: "Роль СГМ и компании", href: "./import-process.html#sanction-scenario/5", presentation: "sanction-scenario", slide: 5 },
          { title: "НДС, бухгалтерия и оплата", href: "./import-process.html#sanction-scenario/6", presentation: "sanction-scenario", slide: 6 },
          { title: "Результат для компании", href: "./import-process.html#sanction-scenario/7", presentation: "sanction-scenario", slide: 7 }
        ]
      },
      {
        title: "Покупка на физическое лицо — СГМ ввозит и передаёт",
        children: [
          { title: "Почему это спокойнее", href: "./import-process.html#sanction-scenario/8", presentation: "sanction-scenario", slide: 8 },
          { title: "Оплата и договор", href: "./import-process.html#sanction-scenario/9", presentation: "sanction-scenario", slide: 9 },
          { title: "Готовый результат", href: "./import-process.html#sanction-scenario/10", presentation: "sanction-scenario", slide: 10 }
        ]
      },
      {
        title: "Покупка на юридическое лицо / лизинг — СГМ ввозит и передаёт",
        children: [
          { title: "Безопасный контур для бизнеса", href: "./import-process.html#sanction-scenario/11", presentation: "sanction-scenario", slide: 11 },
          { title: "НДС, ЭДО и лизинг", href: "./import-process.html#sanction-scenario/12", presentation: "sanction-scenario", slide: 12 },
          { title: "Передача и учет", href: "./import-process.html#sanction-scenario/13", presentation: "sanction-scenario", slide: 13 }
        ]
      },
      {
        title: "Серый импорт",
        children: [
          { title: "Рискованный сценарий", href: "./import-process.html#sanction-scenario/14", presentation: "sanction-scenario", slide: 14 },
          { title: "Где прячется риск", href: "./import-process.html#sanction-scenario/15", presentation: "sanction-scenario", slide: 15 },
          { title: "Прозрачная схема против серой", href: "./import-process.html#sanction-scenario/16", presentation: "sanction-scenario", slide: 16 }
        ]
      }
    ]
  },
  {
    title: "Важные нюансы",
    icon: "nuance",
    children: [
      { title: "Оглавление нюансов", href: "./nuances.html#nuances/1", presentation: "nuances", slide: 1 },
      { title: "Вопросы и ответы", href: "./faq.html#faq/1", presentation: "faq", slide: 1 },
      { title: "Риски серого импорта", href: "./gray-import-risks.html#gray-risks/1", presentation: "gray-risks", slide: 1 },
      { title: "Архитектура безопасной сделки", href: "./deal-structure.html#deal/1", presentation: "deal", slide: 1 },
      { title: "RAM 1500", href: "./ram-choice.html#ram/1", presentation: "ram", slide: 1 },
      { title: "Чек-лист проверки предложения продавца", href: "./seller-checklist.html" }
    ]
  },
  {
    title: "Контакты Вашего менеджера",
    icon: "contacts",
    href: "./contacts.html"
  }
];

const SCENARIO_BOOKS = [
  {
    id: "physical-broker",
    title: "Покупка на физическое лицо — СГМ как брокер",
    startIndex: 1,
    endIndex: 3,
    slides: [
      { title: "Роль СГМ и клиента", slide: 2 },
      { title: "Оплата, маршрут и документы", slide: 3 },
      { title: "Результат для физлица", slide: 4 }
    ]
  },
  {
    id: "company-broker",
    title: "Покупка на юридическое лицо — СГМ как брокер",
    startIndex: 4,
    endIndex: 6,
    slides: [
      { title: "Роль СГМ и компании", slide: 5 },
      { title: "НДС, бухгалтерия и оплата", slide: 6 },
      { title: "Результат для компании", slide: 7 }
    ]
  },
  {
    id: "physical-sgm-import",
    title: "Покупка на физическое лицо — СГМ ввозит и передаёт",
    startIndex: 7,
    endIndex: 9,
    slides: [
      { title: "Почему это спокойнее", slide: 8 },
      { title: "Оплата и договор", slide: 9 },
      { title: "Готовый результат", slide: 10 }
    ]
  },
  {
    id: "company-sgm-import",
    title: "Покупка на юридическое лицо / лизинг — СГМ ввозит и передаёт",
    startIndex: 10,
    endIndex: 12,
    slides: [
      { title: "Безопасный контур для бизнеса", slide: 11 },
      { title: "НДС, ЭДО и лизинг", slide: 12 },
      { title: "Передача и учет", slide: 13 }
    ]
  },
  {
    id: "gray-import",
    title: "Серый импорт",
    startIndex: 13,
    endIndex: 15,
    slides: [
      { title: "Рискованный сценарий", slide: 14 },
      { title: "Где прячется риск", slide: 15 },
      { title: "Прозрачная схема против серой", slide: 16 }
    ]
  }
];

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

function renderIcon(name) {
  return ICONS[name] || "";
}

const PRESENTATION_ICON_MAP = {
  ShieldCheck: "alert",
  FileSignature: "file",
  Landmark: "building",
  Building2: "building",
  BadgeCheck: "star",
  ListChecks: "file",
  Route: "link",
  ContactRound: "contacts",
  AlertTriangle: "alert",
  ReceiptText: "filePdf",
  MapPinned: "link",
  Files: "file",
  BanknoteArrowUp: "archive",
  CarFront: "car",
  CheckCircle: "star",
  Truck: "import",
  SearchCheck: "search",
  Workflow: "import",
  SlidersHorizontal: "search",
  LockKeyhole: "archive",
  CalendarDays: "file",
  Globe2: "link",
  KeyRound: "archive",
  ClipboardCheck: "file",
  MousePointerClick: "search",
  UsersRound: "contacts",
  UserRound: "contacts",
  Footprints: "link",
  BriefcaseBusiness: "building",
  FileCheck2: "file",
  ChartNoAxesColumnIncreasing: "archive",
  HandCoins: "archive",
  MapPinCheck: "link",
  Target: "search",
  WalletCards: "archive",
  GitCompareArrows: "link",
  Columns3: "file",
  CircleCheckBig: "star",
  Compass: "search",
  HelpCircle: "contacts",
  Sparkles: "star",
  Timer: "file",
  Scale: "file",
  Layers3: "file",
  Frame: "car",
  Gauge: "search",
  Zap: "star",
  Armchair: "building",
  Mountain: "import",
  Crown: "star",
  Flame: "alert",
  AlertCircle: "alert",
  CheckCheck: "star",
  FileSearch: "search",
  ScanLine: "search",
  Lock: "archive",
  ListTodo: "file",
  Clock3: "file",
  CalendarClock: "file",
  PenLine: "file",
  Wrench: "file",
  ShieldOff: "alert",
  FileKey2: "file",
  Eye: "search",
  MessageCircleQuestion: "contacts",
  TimerReset: "file",
  ShieldQuestion: "alert",
  ArrowRightCircle: "arrowRight",
  Undo2: "arrowLeft",
  FolderCheck: "file"
};

function renderPresentationIcon(name) {
  return renderIcon(PRESENTATION_ICON_MAP[name] || name || "presentation") || renderIcon("presentation");
}

function getPresentationById(id) {
  return (window.PRESENTATIONS || []).find((item) => item && item.id === id) || null;
}

function getPresentationPath(id) {
  const presentation = getPresentationById(id);
  return presentation?.path || "./index.html";
}

function makePresentationHref(presentationId, slideNumber) {
  const path = getPresentationPath(presentationId);
  const slide = Math.max(1, Number(slideNumber) || 1);
  return `${path}#${presentationId}/${slide}`;
}

const ARTICLE_LANDING_PRESENTATIONS = new Set([
  "trust",
  "gray-risks",
  "deal",
  "format",
  "car-choice",
  "ram",
  "contract"
]);

const ARTICLE_LANDING_MEDIA = {
  trust: { folder: "about", prefix: "about image" },
  "gray-risks": { folder: "gray-import-risks", prefix: "gray-import-risks image" },
  deal: { folder: "deal-structure", prefix: "Deal-structure image" },
  contract: { folder: "contract-acceptance", prefix: "Contract-acceptance image" }
};

function getScenarioBookByIndex(index) {
  const numericIndex = Number(index);
  if (!Number.isFinite(numericIndex)) return null;
  return SCENARIO_BOOKS.find((book) => numericIndex >= book.startIndex && numericIndex <= book.endIndex) || null;
}

function getScenarioBookBySlide(slideNumber) {
  const index = Number(slideNumber) - 1;
  return getScenarioBookByIndex(index);
}

function getScenarioBookNav(book) {
  if (!book) return [];

  return [
    {
      title: book.title,
      icon: "import",
      children: book.slides.map((item) => ({
        title: item.title,
        href: `./import-process.html#sanction-scenario/${item.slide}`,
        presentation: "sanction-scenario",
        slide: item.slide
      }))
    }
  ];
}

function renderOverviewCard(item, index) {
  const go = index + 1;
  return `
    <button class="tocCard" type="button" data-go="${go}">
      <span class="tocCard__index">${String(go).padStart(2, "0")}</span>
      <span class="tocCard__text">${escapeHtml(item.heading || item.title || "Раздел")}</span>
    </button>
  `;
}

function buildFaqOverviewHtml(slides) {
  const questions = slides.slice(1).map((item, index) => {
    const slideNumber = index + 2;
    const answer = getFaqContent(item.heading || item.title || "", item.text || item.body || "", slideNumber);
    return `
      <details class="faqItem">
        <summary>
          <span>${escapeHtml(item.heading || item.title || "Вопрос")}</span>
          <span class="faqItem__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
        </summary>
        <div class="faqItem__answer">
          ${answer.paragraphs.map((part) => `<p>${part}</p>`).join("")}
          ${answer.links.length ? renderNuanceLinks(answer.links) : ""}
        </div>
      </details>
    `;
  }).join("");

  return `
    ${buildPurchaseSchemeAccordion()}
    <div class="faqList">
      ${questions}
    </div>
  `;
}

function makeTextLink(label, presentation, slide = 1) {
  return `<a class="inlineTextLink" href="${escapeHtml(normalizeHref(makePresentationHref(presentation, slide)))}">${escapeHtml(label)}</a>`;
}

function renderParagraphs(paragraphs) {
  return (paragraphs || [])
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderNestedAccordion(items, depth = 0) {
  return `
    <div class="nestedGuide nestedGuide--depth${depth}">
      ${(items || []).map((item) => `
        <details class="faqItem nestedGuide__item">
          <summary>
            <span>${escapeHtml(item.title)}</span>
            <span class="faqItem__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
          </summary>
          <div class="faqItem__answer nestedGuide__answer">
            ${renderParagraphs(item.paragraphs)}
            ${Array.isArray(item.children) && item.children.length ? renderNestedAccordion(item.children, depth + 1) : ""}
            ${item.html || ""}
          </div>
        </details>
      `).join("")}
    </div>
  `;
}

function getPurchaseSchemeSections() {
  return [
    {
      title: "Введение",
      paragraphs: [
        "При покупке автомобиля через параллельный импорт или из-за рубежа возникает ключевой вопрос: какую схему выбрать — простую, быструю или максимально прозрачную?",
        "Разные варианты отличаются не только ценой, но и уровнем юридической защиты, прозрачностью платежей, рисками со стороны банков и государства, а также сроками поставки.",
        "Ниже — разбор основных схем без оценок «правильно/неправильно». Только факты, логика и последствия."
      ]
    },
    {
      title: "1. Покупка и ввоз в РФ без стран ЕАЭС на физическое лицо",
      children: [
        { title: "Как устроено", paragraphs: ["Физлицо покупает авто за рубежом, платит напрямую продавцу, брокер оформляет таможню в РФ, автомобиль оформляется на физлицо."] },
        { title: "Участники", paragraphs: ["Покупатель-физлицо, иностранный продавец, таможенный брокер."] },
        { title: "Плюсы", paragraphs: ["Нет НДС, прямое владение автомобилем, относительно понятная структура."] },
        { title: "Минусы", paragraphs: ["Вся ответственность на физлице, сложнее с валютными платежами, есть ограничения по количеству автомобилей."] },
        { title: "Риски", paragraphs: ["Блокировка международного платежа банком, вопросы по происхождению средств, ошибки в таможенной декларации."] },
        { title: "Когда выбирают", paragraphs: ["Покупка для себя, когда бюджет важнее налоговой прозрачности."] }
      ]
    },
    {
      title: "2. Покупка на физлицо в РФ от юрлица",
      children: [
        { title: "Как устроено", paragraphs: ["Юрлицо в РФ ввозит автомобиль, оформляет на себя и продает физлицу."] },
        { title: "Участники", paragraphs: ["Покупатель-физлицо, российское юрлицо, поставщик."] },
        { title: "Плюсы", paragraphs: ["Покупка похожа на салонную: нет валютных операций у покупателя, есть понятный договор."] },
        { title: "Минусы", paragraphs: ["Цена выше из-за маржи и налогов, есть зависимость от продавца."] },
        { title: "Риски", paragraphs: ["Непрозрачная себестоимость, скрытые комиссии в цепочке."] },
        { title: "Когда выбирают", paragraphs: ["Важна простота сделки и нет желания самостоятельно разбираться в импорте."] }
      ]
    },
    {
      title: "3. Покупка и ввоз в РФ без стран ЕАЭС на юридическое лицо",
      children: [
        { title: "Как устроено", paragraphs: ["Компания покупает автомобиль за рубежом, оформляет на себя и проходит таможню в РФ."] },
        { title: "Участники", paragraphs: ["Юрлицо, брокер, иностранный поставщик."] },
        { title: "Плюсы", paragraphs: ["Полный НДС, прозрачная бухгалтерия, подходит для бизнеса."] },
        { title: "Минусы", paragraphs: ["Сложный документооборот и необходимость валютных операций."] },
        { title: "Риски", paragraphs: ["Валютный контроль банка и санкционные ограничения."] },
        { title: "Когда выбирают", paragraphs: ["Покупка на компанию, когда важны НДС и учет."] }
      ]
    },
    {
      title: "4. Покупка на юридическое лицо или лизинг в РФ без стран ЕАЭС",
      children: [
        { title: "Как устроено", paragraphs: ["Автомобиль уже ввезен и продается юрлицу или оформляется через лизинг."] },
        { title: "Участники", paragraphs: ["Клиент-юрлицо, продавец, лизинговая компания."] },
        { title: "Плюсы", paragraphs: ["Быстро, понятно, с минимальными организационными сложностями."] },
        { title: "Минусы", paragraphs: ["Цена выше, выбор может быть ограничен."] },
        { title: "Риски", paragraphs: ["Завышенная стоимость и непрозрачная цепочка ввоза."] },
        { title: "Когда выбирают", paragraphs: ["Нужна скорость и простота."] }
      ]
    },
    {
      title: "5. Покупка и ввоз через страны ЕАЭС на физическое лицо",
      children: [
        { title: "Как устроено", paragraphs: ["Автомобиль ввозится в ЕАЭС, оформляется там, затем попадает в РФ."] },
        { title: "Участники", paragraphs: ["Физлицо, посредники, поставщик."] },
        { title: "Плюсы", paragraphs: ["Ниже цена, больше гибкости в схемах."] },
        { title: "Минусы", paragraphs: ["Сложная структура и меньше прозрачности."] },
        { title: "Риски", paragraphs: ["Занижение стоимости, доначисления в РФ, сложности при перепродаже."] },
        { title: "Когда выбирают", paragraphs: ["Когда главный приоритет — цена."] }
      ]
    },
    {
      title: "6. Покупка на физлицо через ЕАЭС от юрлица",
      children: [
        { title: "Как устроено", paragraphs: ["Юрлицо в ЕАЭС ввозит автомобиль, продает физлицу, автомобиль попадает в РФ."] },
        { title: "Участники", paragraphs: ["Физлицо, юрлицо в ЕАЭС, посредники."] },
        { title: "Плюсы", paragraphs: ["Проще, чем самостоятельный ввоз, нет валютных операций у покупателя."] },
        { title: "Минусы", paragraphs: ["Зависимость от посредника и слабый контроль цепочки."] },
        { title: "Риски", paragraphs: ["Недостоверные документы и сложности при регистрации."] },
        { title: "Когда выбирают", paragraphs: ["Компромисс между ценой и удобством."] }
      ]
    },
    {
      title: "7. Покупка и ввоз через ЕАЭС на юридическое лицо",
      children: [
        { title: "Как устроено", paragraphs: ["Юрлицо закупает автомобиль через ЕАЭС, затем оформляет его в РФ."] },
        { title: "Участники", paragraphs: ["Юрлицо, посредники в ЕАЭС, поставщик."] },
        { title: "Плюсы", paragraphs: ["Ниже стоимость, возможна оптимизация."] },
        { title: "Минусы", paragraphs: ["Сложный учет и вопросы с НДС."] },
        { title: "Риски", paragraphs: ["Претензии налоговой, корректировки стоимости."] },
        { title: "Когда выбирают", paragraphs: ["При фокусе на экономии."] }
      ]
    },
    {
      title: "8. Покупка на юридическое лицо или лизинг через ЕАЭС",
      children: [
        { title: "Как устроено", paragraphs: ["Автомобиль проходит через ЕАЭС и продается юрлицу или через лизинг в РФ."] },
        { title: "Участники", paragraphs: ["Юрлицо, продавец, лизинговая компания."] },
        { title: "Плюсы", paragraphs: ["Быстро и проще, чем прямой импорт."] },
        { title: "Минусы", paragraphs: ["Меньше прозрачности и сложность с НДС."] },
        { title: "Риски", paragraphs: ["Налоговые вопросы и проблемы при проверках."] },
        { title: "Когда выбирают", paragraphs: ["Нужна скорость и умеренная цена."] }
      ]
    },
    {
      title: "Дополнительно: альтернативные и серые схемы",
      children: [
        { title: "Как устроено", paragraphs: ["Используются нестандартные цепочки платежей и документов."] },
        { title: "Примеры", paragraphs: ["Занижение инвойса, дробление платежей, оплата через третьих лиц, фиктивные договоры."] },
        { title: "Плюсы", paragraphs: ["Ниже цена."] },
        { title: "Минусы", paragraphs: ["Отсутствие прозрачности."] },
        { title: "Риски", paragraphs: ["Доначисления, блокировки платежей, отказ в регистрации, проверки."] },
        { title: "Когда выбирают", paragraphs: ["При максимальном фокусе на цене."] }
      ]
    },
    {
      title: "Сравнительная логика схем",
      children: [
        { title: "Основные параметры", paragraphs: ["Стоимость: от низкой к высокой. Риски: от низких к высоким. Прозрачность: от низкой к высокой. Скорость: от долгой к быстрой. Сложность: от простой к сложной."] }
      ]
    },
    {
      title: "Как понять, какая схема подходит именно Вам",
      children: [
        { title: "Основные критерии", paragraphs: ["Цель покупки: личная или бизнес. Форма оплаты: наличные, безнал, лизинг. Готовность к риску. Сроки."] }
      ]
    },
    {
      title: "Какие документы нужно запросить и проверить",
      children: [
        { title: "Базовый набор", paragraphs: ["Договор, инвойс, платежные документы, таможенная декларация, документы по утильсбору, транспортные документы."] },
        { title: "Дополнительно", paragraphs: ["Цепочка договоров, информация о продавце, подтверждение происхождения автомобиля."] }
      ]
    },
    {
      title: "Риски, о которых часто забывают",
      children: [
        { title: "Банковский контроль", paragraphs: ["Блокировка платежей, запрос источника средств."] },
        { title: "Налоговые проверки", paragraphs: ["Корректировка стоимости, доначисления."] },
        { title: "Санкционные ограничения", paragraphs: ["Ограничения по оплате и поставкам."] },
        { title: "Проверки", paragraphs: ["Банк, налоговая, ОБЭП, международные системы."] },
        { title: "Юридическая квалификация", paragraphs: ["В отдельных случаях цепочка платежей может вызвать вопросы со стороны финансового мониторинга."] }
      ]
    },
    {
      title: "Почему важно понимать движение денег",
      children: [
        { title: "Суть", paragraphs: ["Деньги проходят через несколько участников: продавец, посредники, логистика, таможня."] },
        { title: "Что это значит", paragraphs: ["Чем длиннее цепочка, тем сложнее проверка и тем выше вероятность вопросов от банка и государства."] }
      ]
    },
    {
      title: "Вывод",
      paragraphs: [
        "Разные схемы — это баланс цены, прозрачности, рисков и скорости.",
        "Простые схемы понятнее и дороже. Сложные могут быть дешевле, но требуют контроля.",
        "Итоговый выбор всегда зависит от задач конкретного покупателя."
      ]
    }
  ];
}

function getPurchaseSchemeSections() {
  return [
    {
      title: "Физическое лицо",
      paragraphs: [
        "Для личной покупки главный выбор — покупать напрямую с сопровождением СГМ или брать готовый автомобиль у понятного продавца в РФ.",
        "Сравнивайте не только цену: смотрите, кто ввозит, где таможня, как подтверждены платежи и какой пакет документов будет на финише."
      ],
      children: [
        {
          title: "Наличными или переводом как физлицо",
          paragraphs: [
            "Плюс — простая логика личного владения.",
            "Зона внимания — валютные платежи, утильсбор, категория автомобиля и отсутствие возврата НДС."
          ]
        },
        {
          title: "Покупка у юрлица в РФ",
          paragraphs: [
            "Плюс — ближе к привычной покупке: договор, продавец в РФ, понятная передача.",
            "Зона внимания — нужно видеть, как автомобиль был ввезен и нет ли риска доначисления по утильсбору или таможенной стоимости."
          ]
        }
      ]
    },
    {
      title: "Юридическое лицо, ИП и лизинг",
      paragraphs: [
        "Для бизнеса важны НДС, безнал, ЭДО, УПД или счет-фактура, акт, ЭПТС и возможность объяснить сделку бухгалтерии или лизинговой компании.",
        "Самый спокойный сценарий — когда продавец, декларант, платежи и закрывающие документы сходятся в одном понятном контуре."
      ],
      children: [
        {
          title: "Безналичная покупка на компанию",
          paragraphs: [
            "Плюс — прозрачный учет, документы и возможность работать с НДС.",
            "Зона внимания — проверяйте декларанта, НДС, инвойс, платежи и полную цепочку документов."
          ]
        },
        {
          title: "Лизинг",
          paragraphs: [
            "Плюс — управляемый платежный график и понятная передача на баланс.",
            "Зона внимания — лизинговая компания обычно строже смотрит на чистоту ввоза, НДС и документы."
          ]
        }
      ]
    },
    {
      title: "Что сравнить перед выбором",
      paragraphs: [
        "Цена, НДС, вход в сделку, срок поставки, кто ввозит автомобиль, кто заявитель на таможне, какие платежки есть и какой пакет документов Вы получите.",
        "Если схема дешевле, но не объясняет эти пункты, это не экономия, а риск, который просто вынесли за скобки."
      ]
    }
  ];
}

function buildPurchaseSchemeAccordion() {
  return `
    <div class="standaloneAccordion">
      <details class="faqItem nuanceFeatureAccordion">
        <summary>
          <span>Как выгоднее купить автомобиль: наличными или по безналу</span>
          <span class="faqItem__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
        </summary>
        <div class="faqItem__answer">
          ${renderNestedAccordion(getPurchaseSchemeSections())}
        </div>
      </details>
    </div>
  `;
}

function getVehicleImportChecklistSections() {
  return [
    {
      title: "Чек-лист проверки схем ввоза автомобиля: РФ / ЕАЭС",
      children: [
        {
          title: "1. Физлицо, прямой ввоз в РФ через брокера",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ на физлицо, платежки по пошлине, НДС если применялся, утильсбору, первичный ПТС, договор с брокером, инвойс и SWIFT или другое подтверждение оплаты."] },
            { title: "Почему это важно", paragraphs: ["Если ДТ не на физлицо, схема идет через другое лицо. Занижение таможенной стоимости может привести к доначислениям. Льготный утиль на физлицо нельзя безопасно переносить на сделку с юрлицом. Ошибки брокера могут создать проблемы при регистрации."] }
          ]
        },
        {
          title: "2. Покупка в РФ у юрлица, но ввоз был на физика",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ на физлицо, договор купли-продажи физлицо -> юрлицо, подтверждение уплаты утильсбора, основание владения юрлица и цепочку перехода права."] },
            { title: "Почему это важно", paragraphs: ["Юрлицо может быть только промежуточной прокладкой. Льготный утиль физлица может создать риск доначисления новому владельцу. Разрыв цепочки вызывает налоговые вопросы, а лизинг часто отказывает по таким схемам."] }
          ]
        },
        {
          title: "3. Юрлицо, прямой ввоз в РФ через брокера",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ на юрлицо, платежки по пошлине, НДС и утильсбору, инвойс, контракт ВЭД, брокерский договор и ПТС."] },
            { title: "Почему это важно", paragraphs: ["Отсутствие НДС может указывать на схему. Заниженная стоимость ведет к риску корректировки таможни. Несовпадение декларанта может означать прокладку. При полном пакете это одна из самых чистых схем."] }
          ]
        },
        {
          title: "4. Покупка в РФ у юрлица, которое само ввозило автомобиль",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ, где декларант — это же юрлицо, платежки всех таможенных платежей, договор поставки, счет-фактуру с НДС и ПТС."] },
            { title: "Почему это важно", paragraphs: ["Нет счет-фактуры — НДС может быть формальным. Если юрлицо не декларант, цепочка скрыта. Стоимость ниже рынка может означать занижение. Для лизинга это обычно самый понятный вариант."] }
          ]
        },
        {
          title: "5. Физлицо, ввоз через страны ЕАЭС",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ страны ЕАЭС, подтверждение уплаты утильсбора в ЕАЭС, документы ввоза в РФ и российский ПТС."] },
            { title: "Почему это важно", paragraphs: ["Занижение стоимости в ЕАЭС может привести к доначислениям в РФ. Неверный утиль может быть пересчитан. Отсутствие прозрачной таможни РФ — ключевой риск. Это частый серый сегмент."] }
          ]
        },
        {
          title: "6. Покупка у юрлица РФ, но ввоз через ЕАЭС",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ ЕАЭС, документы ввоза в РФ, договор между физлицом или участником ЕАЭС и юрлицом, подтверждение уплаты утильсбора и ПТС."] },
            { title: "Почему это важно", paragraphs: ["Сложная цепочка легко скрывает нарушения. Утиль часто занижен, юрлицо не всегда реальный импортер, по цепочке могут возникнуть налоговые вопросы."] }
          ]
        },
        {
          title: "7. Юрлицо, ввоз через ЕАЭС через брокера",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ ЕАЭС, документы перемещения в РФ, платежки по утилю и таможенным платежам, контракт и ПТС."] },
            { title: "Почему это важно", paragraphs: ["НДС РФ может отсутствовать, что рискованно для бизнеса. Двойная юрисдикция усложняет подтверждение чистоты, а экономия часто достигается за счет схем."] }
          ]
        },
        {
          title: "8. Покупка у юрлица РФ, которое ввозило через ЕАЭС",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ ЕАЭС, документы ввоза в РФ, счет-фактуру, подтверждение уплаты утильсбора, ПТС или ЭПТС и полную цепочку поставки."] },
            { title: "Почему это важно", paragraphs: ["НДС может быть формальным, ввоз не в РФ создает риски для лизинга, а таможенная стоимость может быть занижена."] }
          ]
        },
        {
          title: "Универсальный контрольный вопрос",
          children: [
            { title: "Что спросить", paragraphs: ["Пришлите ДТ, платежки по утильсбору и таможне, и уточните, на кого был оформлен ввоз."] },
            { title: "Как интерпретировать", paragraphs: ["Дают быстро и полностью — высокая вероятность чистой схемы. Дают частично или уходят от ответа — высокий риск. Говорят «потом пришлю» — почти всегда проблема."] }
          ]
        },
        {
          title: "Ключевые ориентиры для сделки",
          children: [
            { title: "Самая безопасная схема", paragraphs: ["Юрлицо, ДТ на него, полный НДС, прямой ввоз в РФ."] },
            { title: "Самая рискованная схема", paragraphs: ["Физлицо, ввоз через ЕАЭС, заниженный утиль."] },
            { title: "Для лизинга", paragraphs: ["Физлицо почти всегда ведет к отказу. ЕАЭС часто вызывает отказы. РФ + НДС + прозрачная таможня — зеленый свет."] }
          ]
        }
      ]
    }
  ];
}

function getVehicleImportChecklistSections() {
  return [
    {
      title: "Физическое лицо",
      children: [
        {
          title: "Прямой ввоз в РФ на физлицо",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ/ГТД на физлицо, инвойс, контракт или договор с продавцом, платежные поручения, подтверждение уплаты пошлины и утильсбора, документы лаборатории и ЭПТС/ПТС."] },
            { title: "Что проверить", paragraphs: ["Совпадает ли покупатель, стоимость в инвойсе, платежи и заявитель; нет ли занижения стоимости и разрыва между фактическим владельцем и документами."] }
          ]
        },
        {
          title: "Покупка в РФ у юрлица после ввоза на физлицо",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ/ГТД на физлицо, договор физлицо -> юрлицо, основание владения продавца, подтверждение утильсбора, ЭПТС/ПТС и всю цепочку перехода прав."] },
            { title: "Что проверить", paragraphs: ["Не было ли льготного утильсбора, который может создать риск доначисления; совпадает ли цепочка собственников с тем, что говорит продавец."] }
          ]
        },
        {
          title: "Ввоз или продажа через ЕАЭС",
          children: [
            { title: "Что запросить", paragraphs: ["Декларацию страны ЕАЭС, документы ввоза в РФ, подтверждение утильсбора, ЭПТС/ПТС, инвойс, платежи и документы продавца в РФ."] },
            { title: "Что проверить", paragraphs: ["Нет ли занижения стоимости, отсутствия прозрачной российской таможни и спорного утильсбора. Это частая зона серых схем."] }
          ]
        }
      ]
    },
    {
      title: "Юридическое лицо и лизинг",
      children: [
        {
          title: "Прямой ввоз в РФ на юрлицо",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ/ГТД на юрлицо, контракт ВЭД, инвойс, платежки по пошлине, НДС и утильсбору, брокерский договор, ЭПТС/ПТС и закрывающие документы."] },
            { title: "Что проверить", paragraphs: ["Совпадает ли декларант с продавцом, есть ли НДС и закрывающий пакет, объяснима ли таможенная стоимость."] }
          ]
        },
        {
          title: "Покупка у юрлица РФ, которое само ввезло автомобиль",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ/ГТД, где декларант — это же юрлицо, платежки всех таможенных платежей, договор поставки, счет-фактуру или УПД с НДС, акт, ЭПТС/ПТС."] },
            { title: "Что проверить", paragraphs: ["Для бизнеса и лизинга это обычно самый понятный вариант, если НДС, документы и декларант сходятся."] }
          ]
        },
        {
          title: "Схемы с ЕАЭС или промежуточным продавцом",
          children: [
            { title: "Что запросить", paragraphs: ["ДТ/ГТД ЕАЭС, документы перемещения в РФ, договоры по всей цепочке, подтверждение утильсбора, УПД/счет-фактуру, ЭПТС/ПТС."] },
            { title: "Что проверить", paragraphs: ["Есть ли российский НДС, не теряется ли реальный импортер, примет ли такую схему бухгалтерия или лизинговая компания."] }
          ]
        }
      ]
    },
    {
      title: "Универсальный контрольный вопрос",
      children: [
        { title: "Что спросить", paragraphs: ["Пришлите ДТ/ГТД, инвойс, контракт, платежки по таможне и утильсбору, ЭПТС/ПТС и уточните, на кого был оформлен ввоз."] },
        { title: "Как читать ответ", paragraphs: ["Дают быстро и полностью — высока вероятность прозрачной схемы. Дают частично, уходят от ответа или обещают «потом пришлю» — это повод остановиться до оплаты."] }
      ]
    }
  ];
}

function buildSellerChecklistPopupTemplate() {
  return `
    <template id="sellerChecklistPopup">
      <p>До оплаты нужно видеть не только цену, но и маршрут, документы, кто ввозит автомобиль и кто несет ответственность.</p>
      <p>7 вопросов продавцу: кто импортер, где таможня, какая инвойсная стоимость, есть ли платежки, что с НДС, кто заявитель, какой пакет документов.</p>
      ${renderNestedAccordion(getVehicleImportChecklistSections())}
    </template>
  `;
}

function buildDealArchitecturePopupTemplate() {
  return `
    <template id="dealArchitecturePopup">
      <div class="modalActions">
        <div class="modalActionWrap">
          <button class="modalAction modalAction--accent" type="button" data-presentation-view="interactiveInDevelopment">
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("presentation")}</span>
            <span>Интерактивная презентация</span>
          </button>
        </div>
        <div class="modalActionWrap modalActionWrap--pdf">
          <a class="modalAction" href="./assets/downloads/SGM_Auto_Group_kratko.pdf" target="_blank" rel="noreferrer noopener">
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("filePdf")}</span>
            <span>Традиционная презентация</span>
          </a>
          <a class="modalIconAction" href="./assets/downloads/SGM_Auto_Group_kratko.pdf" download aria-label="Скачать файл">
            ${renderIcon("download")}
          </a>
        </div>
      </div>
    </template>
  `;
}

function buildImportArticlePopupTemplate() {
  return `
    <template id="importArticlePopup">
      <div class="modalActions">
        <div class="modalActionWrap">
          <button class="modalAction modalAction--accent" type="button" data-presentation-view="interactiveInDevelopment">
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("presentation")}</span>
            <span>Интерактивная презентация</span>
          </button>
        </div>
        <div class="modalActionWrap modalActionWrap--pdf">
          <a class="modalAction" href="./assets/downloads/Statya.pdf" target="_blank" rel="noreferrer noopener">
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("filePdf")}</span>
            <span>Традиционная презентация</span>
          </a>
          <a class="modalIconAction" href="./assets/downloads/Statya.pdf" download aria-label="Скачать файл">
            ${renderIcon("download")}
          </a>
        </div>
      </div>
    </template>
  `;
}

function buildGrayRisksPopupTemplate() {
  return `
    <template id="grayRisksPopup">
      <p class="modalText">Интерактивная версия пока в разработке. Сейчас можно открыть или скачать PDF-материал.</p>
      <div class="modalActions">
        <div class="modalActionWrap modalActionWrap--pdf">
          <a class="modalAction" href="./assets/downloads/SGM_Auto_Group_kratko.pdf" target="_blank" rel="noreferrer noopener">
            <span class="modalAction__icon" aria-hidden="true">${renderIcon("filePdf")}</span>
            <span>Риски серого импорта</span>
          </a>
          <a class="modalIconAction" href="./assets/downloads/SGM_Auto_Group_kratko.pdf" download aria-label="Скачать файл">
            ${renderIcon("download")}
          </a>
        </div>
      </div>
    </template>
  `;
}

function getPopupParagraphs(slide) {
  if (!slide?.popup) return [];
  if (typeof slide.popup === "string") return [slide.popup];
  if (slide.popup && typeof slide.popup === "object") {
    return Object.entries(slide.popup).map(([key, value]) => `${key === "default" ? "Подробнее" : key}: ${value}`);
  }
  return [];
}

function buildPresentationMirror(presentationId, nestedTitle) {
  const presentation = getPresentationById(presentationId);
  if (!presentation?.slides?.length) return "";

  const slideItems = presentation.slides.map((slide) => {
    const actionChildren = (slide.actions || [])
      .map((action) => {
        if (action.popup) {
          const popupText = action.popupText || (typeof slide.popup === "object" ? (slide.popup[action.popup] || slide.popup.default) : slide.popup);
          return popupText ? { title: action.label || "Подробнее", paragraphs: [popupText] } : null;
        }

        if (action.href) {
          return { title: action.label || "Документ", paragraphs: [`Связанный материал: ${action.href}`] };
        }

        if (action.homeView) {
          return { title: action.label || "Связанный блок", paragraphs: ["Этот пункт открывает связанный блок на главной странице или контактный попап."] };
        }

        if (action.presentation) {
          const target = getPresentationById(action.presentation);
          return { title: action.label || "Связанный раздел", paragraphs: [`Связанный раздел: ${target?.sectionTitle || target?.title || action.presentation}.`] };
        }

        return null;
      })
      .filter(Boolean);

    const popupChildren = getPopupParagraphs(slide)
      .filter((text) => !actionChildren.some((child) => child.paragraphs?.[0] === text))
      .map((text) => ({ title: "Дополнительное пояснение", paragraphs: [text] }));

    return {
      title: slide.heading || slide.title || "Слайд",
      paragraphs: [slide.text || slide.body || ""].filter(Boolean),
      children: [...actionChildren, ...popupChildren]
    };
  });

  return renderNestedAccordion([
    {
      title: nestedTitle || presentation.sectionTitle || presentation.title,
      paragraphs: [presentation.title || ""].filter(Boolean),
      children: slideItems
    }
  ]);
}

function renderNuanceLinks(links) {
  return `
    <div class="nuanceLinkGrid">
      ${links.map((item) => {
        if (item.popupId) {
          return `
            <button class="bookIndexLink nuanceLink" type="button" data-inline-popup="${escapeHtml(item.popupId)}" data-inline-popup-title="${escapeHtml(item.popupTitle || item.label)}">
              <span class="bookIndex__icon">${renderPresentationIcon(item.icon || "ArrowRightCircle")}</span>
              <span>${escapeHtml(item.label)}</span>
            </button>
          `;
        }

        if (item.homeView) {
          return `
            <button class="bookIndexLink nuanceLink" type="button" data-home-view="${escapeHtml(item.homeView)}">
              <span class="bookIndex__icon">${renderPresentationIcon(item.icon || "ArrowRightCircle")}</span>
              <span>${escapeHtml(item.label)}</span>
            </button>
          `;
        }

        const href = item.href || (item.presentation ? makePresentationHref(item.presentation, item.slide || 1) : "#");
        return `
          <a class="bookIndexLink nuanceLink" href="${escapeHtml(normalizeHref(href))}">
            <span class="bookIndex__icon">${renderPresentationIcon(item.icon || "ArrowRightCircle")}</span>
            <span>${escapeHtml(item.label)}</span>
          </a>
        `;
      }).join("")}
    </div>
  `;
}

function buildNuancesOverviewHtml() {
  const faqCta = `
    <div class="nuancePrimaryAction nuancePrimaryAction--shine">
      <a class="smartAction smartAction--accent" href="${escapeHtml(normalizeHref(makePresentationHref("faq", 1)))}">
        <span class="smartAction__icon" aria-hidden="true">${renderPresentationIcon("MessageCircleQuestion")}</span>
        <span>Самые частые вопросы и ответы</span>
      </a>
    </div>
  `;
  const riskCta = `
    <div class="nuancePrimaryAction nuancePrimaryAction--plain">
      <button class="smartAction smartAction--accent" type="button" data-inline-popup="grayRisksPopup" data-inline-popup-title="Риски серого импорта">
        <span class="smartAction__icon" aria-hidden="true">${renderPresentationIcon("AlertTriangle")}</span>
        <span>Риски серого импорта</span>
      </button>
    </div>
  `;
  const items = [
    {
      title: "Как проверять предложение продавца",
      paragraphs: [
        "7 вопросов продавцу: кто импортер, где таможня, какая инвойсная стоимость, есть ли платежки, что с НДС, кто заявитель, какой пакет документов.",
        "Смотрите инвойс, контракт, платежные поручения, ДТ/ГТД и документы по утильсбору.",
        "Запросите таможенные документы, платежки по утилю и таможне, уточните, на кого был оформлен ввоз, и перешлите пакет Вашему менеджеру.",
        "Менеджер подсветит, куда обратить внимание и что это значит для Вас. Если все чисто и прозрачно, он так и ответит Вам: можно работать с этим продавцом. Если есть поле для честной конкуренции, СГМ покажет свое предложение."
      ],
      links: [
        { label: "Чек-лист рисков", popupId: "sellerChecklistPopup", popupTitle: "Чек-лист проверки предложения продавца", icon: "ListChecks" }
      ]
    },
    {
      title: "Архитектура безопасной сделки",
      paragraphs: [
        "Это тот же смысловой материал, что и в готовой презентации, но здесь он раскрыт прямо на странице: слайды превращены в последовательные аккордеоны.",
        "Так можно изучить логику сделки без переходов между экранами."
      ],
      html: buildPresentationMirror("deal")
    },
    {
      title: "Формат покупки",
      paragraphs: [
        "Формат определяет документы, НДС, платежи, риски и удобство сделки.",
        "Материал из презентации собран здесь в виде аккордеонов: каждый слайд можно раскрыть и прочитать на месте."
      ],
      html: buildPresentationMirror("format")
    },
    {
      title: "Как выбрать автомобиль",
      paragraphs: [
        "Сначала задача, потом модель.",
        "Для города, семьи, бизнеса, статуса или работы с грузом будут разные критерии: бюджет, срок, комплектация, категория, НДС, утильсбор и ликвидность.",
        "Ниже — материал из раздела выбора автомобиля и отдельный блок RAM 1500 как пример, где комплектация, категория и документы напрямую влияют на итог сделки."
      ],
      html: `${buildPresentationMirror("car-choice")}${buildPresentationMirror("ram", "RAM 1500")}`
    },
    {
      title: "Оплата, НДС, договор и приемка",
      paragraphs: [
        "Сначала структура сделки, потом деньги.",
        "До оплаты должны быть понятны предмет сделки, реквизиты, договор, график платежей, статус автомобиля, маршрут, пакет документов и условия изменения срока или цены.",
        "В договоре нужно фиксировать модель, VIN или порядок его подтверждения, комплектацию, цену, НДС, график оплаты, сроки, приемку, ЭПТС и последствия отказа. НДС и закрывающие документы особенно важны для юридических лиц."
      ],
      links: [
        { label: "Что важно до оплаты", presentation: "nuances", slide: 1, icon: "ClipboardCheck" },
        { label: "НДС и бухгалтерский след", presentation: "gray-risks", slide: 11, icon: "FileCheck2" },
        { label: "Договор и приемка", presentation: "contract", slide: 1, icon: "FileSearch" },
        { label: "Форма ДКП", href: "./assets/downloads/DKP FORMA.pdf", icon: "filePdf" }
      ]
    }
  ];

  return `
    ${faqCta}
    ${riskCta}
    ${buildGrayRisksPopupTemplate()}
    ${buildSellerChecklistPopupTemplate()}
    ${buildDealArchitecturePopupTemplate()}
    ${buildImportArticlePopupTemplate()}
    <div class="nuancePrimaryAction">
      <button class="smartAction smartAction--accent" type="button" data-inline-popup="sellerChecklistPopup" data-inline-popup-title="Чек-лист проверки предложения продавца">
        <span class="smartAction__icon" aria-hidden="true">${renderPresentationIcon("ListChecks")}</span>
        <span>Как проверять предложение продавца</span>
      </button>
    </div>
    <div class="nuancePrimaryAction">
      <button class="smartAction" type="button" data-inline-popup="dealArchitecturePopup" data-inline-popup-title="Наша архитектура безопасной сделки">
        <span class="smartAction__icon" aria-hidden="true">${renderPresentationIcon("Workflow")}</span>
        <span>Наша архитектура безопасной сделки</span>
      </button>
    </div>
    <div class="nuancePrimaryAction">
      <button class="smartAction" type="button" data-inline-popup="importArticlePopup" data-inline-popup-title="Как привезти а/м из-за рубежа">
        <span class="smartAction__icon" aria-hidden="true">${renderPresentationIcon("Route")}</span>
        <span>Как привезти а/м из-за рубежа</span>
      </button>
    </div>
    <div class="nuancePrimaryAction">
      <a class="smartAction" href="./assets/downloads/Pismo po zanizhennoi stoimosti.pdf" target="_blank" rel="noreferrer noopener" download>
        <span class="smartAction__icon" aria-hidden="true">${renderIcon("download")}</span>
        <span>Письмо о заниженной стоимости и калькуляция расчётов на примере пикапа RAM</span>
      </a>
    </div>
    <div class="faqList nuanceList">
      ${items.filter((item) => ![
        "Как проверять предложение продавца",
        "Архитектура безопасной сделки",
        "Формат покупки",
        "Как выбрать автомобиль",
        "Оплата, НДС, договор и приемка"
      ].includes(item.title)).map((item) => `
        <details class="faqItem">
          <summary>
            <span>${escapeHtml(item.title)}</span>
            <span class="faqItem__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
          </summary>
          <div class="faqItem__answer">
            ${item.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
            ${item.html || ""}
            ${(item.links || []).length ? renderNuanceLinks(item.links || []) : ""}
          </div>
        </details>
      `).join("")}
    </div>
  `;
}

function getFaqContent(title, fallback, slideNumber) {
  const chooseScenario = makeTextLink("выберите свой сценарий", "sanction-scenario", 1);
  const risks = makeTextLink("рисках серого импорта", "gray-risks", 1);
  const contract = makeTextLink("договоре и приемке", "contract", 1);
  const deal = makeTextLink("архитектуре безопасной сделки", "deal", 1);
  const ram = makeTextLink("RAM 1500", "ram", 1);
  const answers = {
    "Почему у других дешевле?": {
      paragraphs: [
        `Дешевле не всегда значит выгоднее, если из цены убрали риски и обязательные платежи. Подробно это разобрано в разделе о ${risks}.`,
        "Слишком низкое предложение может не учитывать корректную таможенную стоимость, НДС, утилизационный сбор, прозрачный маршрут, документы или ответственность импортера.",
        "На старте это выглядит привлекательно, но позже может привести к доначислениям, проблемам с документами или невозможности нормально учесть автомобиль."
      ],
      links: []
    },
    "Я плачу за машину, которую еще не вижу?": {
      paragraphs: [
        `Вы платите не за обещание, а за зафиксированный сценарий сделки. Логика этапов раскрыта в ${deal}.`,
        "В параллельном импорте автомобиль может быть у поставщика, в пути или на этапе оформления. Поэтому важно, чтобы договор, платеж и действия по выкупу или резерву были связаны между собой.",
        "Без такой связки Вы не понимаете, за что внесли деньги и кто отвечает за следующий этап."
      ],
      links: []
    },
    "Договор — это всего лишь бумажка?": {
      paragraphs: [
        `Нет. Договор — это юридическая карта сделки, а не декоративная бумага. Что именно фиксировать, смотрите в разделе ${contract}.`,
        "В нем закрепляются автомобиль, цена, график платежей, сроки, документы, приемка, ЭПТС, ответственность сторон и условия отказа.",
        "Договор подписывается сторонами и регистрируется в документообороте, поэтому спорные условия остаются не в переписке, а в юридически значимом документе."
      ],
      links: [{ label: "Форма ДКП", href: "./assets/downloads/DKP FORMA.pdf", icon: "filePdf" }]
    },
    "Как понять, что цена не вырастет?": {
      paragraphs: [
        "Смотрите не на устное обещание, а на договорную логику цены.",
        "В документах должны быть понятны цена, НДС, график платежей, условия возможных доплат, сроки и то, какие платежи уже включены.",
        "Если цена выглядит ниже рынка, но продавец не раскрывает состав платежей, риск роста цены просто отложен на следующий этап."
      ],
      links: [{ label: "Проверить договорную логику", presentation: "contract", slide: 1, icon: "FileSignature" }]
    },
    "Почему нужен аванс?": {
      paragraphs: [
        `Аванс нужен, чтобы закрепить конкретный автомобиль, цену или действие по сделке. График платежей и условия отказа лучше заранее смотреть в ${contract}.`,
        "Обычно деньги нужны для резерва, запуска выкупа, удержания условий поставщика или подтверждения серьезности намерений.",
        "Важно заранее понимать, что происходит с авансом при отказе, задержке или изменении условий."
      ],
      links: []
    },
    "Могу ли я отказаться после того, как увижу автомобиль?": {
      paragraphs: [
        "Да, такую возможность можно заранее описать в договоре. Обычно там фиксируются условия отказа и возможные штрафные санкции.",
        "Мы стараемся закрывать такие ситуации без последствий для Вас: если автомобиль ликвидный, редкий или востребованный, СГМ может предложить его другому покупателю.",
        `Если автомобиль очень сложный или специфичный, условия отказа обязательно обсуждаются заранее и фиксируются в ${contract}.`
      ],
      links: [{ label: "Обсудить условия с менеджером", homeView: "managerContacts", icon: "ContactRound" }]
    },
    "Что если автомобиль задержится?": {
      paragraphs: [
        "Задержка не всегда означает проблему, но Вы должны видеть причину и следующий контрольный этап.",
        "На срок влияют статус автомобиля, логистика, границы, таможня, лаборатория и документы. Поэтому важны не только обещанные дни, но и маршрут с понятными статусами.",
        `Это снижает тревогу: Вы видите, где автомобиль сейчас, что уже сделано и какой шаг следующий. Общий маршрут показан в ${deal}.`
      ],
      links: []
    },
    "Что если приедет не та комплектация?": {
      paragraphs: [
        "Критичные параметры нужно фиксировать до запуска сделки.",
        `Версия, двигатель, цвет, салон, ключевые пакеты, VIN или порядок подтверждения VIN должны быть понятны заранее. Для пикапов и комплектаций вроде ${ram} это особенно важно.`,
        "Если часть спецификации справочная, нужно заранее понять, что является допустимым отличием, а что нет."
      ],
      links: []
    },
    "Когда я становлюсь собственником?": {
      paragraphs: [
        `Физическая передача автомобиля и оформление в ЭПТС связаны, но это не одно и то же. Порядок приемки и перехода права лучше заранее проверить в ${contract}.`,
        "Обычно ключевые точки — оплата, акт приема-передачи и перевод права в системе электронных паспортов.",
        "Рискованная схема — когда Вам говорят: «сейчас купили, а в собственность передадим через полгода», например из-за обхода утильсбора или не до конца закрытых платежей. Это оставляет Вас без нормального контроля над автомобилем."
      ],
      links: []
    },
    "Что я получу на финише?": {
      paragraphs: [
        "Итог сделки — это автомобиль плюс пакет документов, а не только ключи.",
        "Вы должны получить акт, платежные документы, ЭПТС, подтверждения таможенного оформления, документы по сертификации и закрывающие документы по формату сделки.",
        "Именно этот пакет делает покупку проверяемой при регистрации, учете, продаже и возможных проверках."
      ],
      links: [{ label: "Пакет документов", homeView: "documents", icon: "Files" }]
    },
    "Что с гарантией?": {
      paragraphs: [
        "Параллельный импорт не равен официальной дилерской гарантии в РФ, но решение есть: гарантийный полис от страховой компании.",
        "Такой полис часто удобнее классической гарантии: страховая выплачивает средства, после чего Вы приходите в сервис с деньгами, а сервис заказывает и устанавливает детали.",
        "Сервисы есть в разных городах: можно использовать партнерские варианты или выбрать удобный сервис самостоятельно по условиям полиса."
      ],
      links: [{ label: "Приемка и осмотр", presentation: "contract", slide: 8, icon: "PenLine" }]
    },
    "Как СГМ работает с санкциями, банками и границами?": {
      paragraphs: [
        "СГМ работает не реактивно, а на опережение: заранее адаптирует маршруты, страхует платежи через разные каналы, контролирует юридическую часть до проблем и строит собственную логистику.",
        "Мы не просто привозим автомобиль — мы управляем рисками на каждом этапе.",
        "Санкции, банки, логистика и границы — это не Ваша проблема, а зона нашей ответственности."
      ],
      links: [{ label: "Радар рисков СГМ", presentation: "deal", slide: 11, icon: "ShieldCheck" }]
    },
    "Как Вы закрываете риск?": {
      paragraphs: [
        "Риск закрывается не словами, а структурой сделки.",
        "Мы показываем реквизиты, договор, официальный платежный контур, маршрут, документы, таможенную логику, статусы и ответственного менеджера.",
        "Так Вы видите не хаотичную поставку, а управляемый процесс, где у каждого этапа есть подтверждение."
      ],
      links: [{ label: "Почему нам можно доверять", presentation: "trust", slide: 1, icon: "ShieldCheck" }]
    },
    "Что мне сделать сейчас?": {
      paragraphs: [
        `Сначала ${chooseScenario}, затем сравните расчет по полной структуре: цена, НДС, платежи, сроки, документы, маршрут и риски.`,
        "После этого менеджер сможет предложить 2-3 понятных варианта, а не просто одну красивую цифру."
      ],
      links: [{ label: "Контакты Вашего менеджера", homeView: "managerContacts", icon: "ContactRound" }]
    }
  };

  return answers[title] || {
    paragraphs: [
      "Этот вопрос нужно смотреть через документы, маршрут и ответственность сторон.",
      escapeHtml(fallback || ""),
      "Если ответ продавца нельзя проверить документами, это повод остановиться и разобрать схему до оплаты."
    ],
    links: [{ label: "Подробнее", presentation: "faq", slide: slideNumber, icon: "MessageCircleQuestion" }]
  };
}

function buildScenarioChoiceHtml() {
  const groups = [
    {
      title: "Физическое лицо",
      accordion: true,
      choices: [
        ["СГМ как брокер", "Вы покупаете для личного владения, а СГМ сопровождает сделку: маршрут, документы, платежи и риски.", 1],
        ["СГМ ввозит и передаёт", "СГМ берет процесс ввоза на себя, а Вы получаете автомобиль и понятный пакет документов.", 7]
      ]
    },
    {
      title: "Юридическое лицо, ИП или лизинг",
      accordion: true,
      choices: [
        ["СГМ как брокер", "СГМ контролирует сделку для компании: НДС, безнал, ЭДО, закрывающие документы и учет.", 4],
        ["СГМ ввозит и передаёт", "Сценарий для бизнеса: официальный продавец, НДС, ЭДО, лизинговая логика и передача на баланс.", 10]
      ]
    },
    {
      title: "Сравнить рискованный вариант",
      choices: [
        ["Серый импорт", "Где скрывается низкая цена, какие документы могут не сойтись и чем это опасно.", 13]
      ]
    }
  ];

  return `
    ${buildPurchaseSchemeAccordion()}
    <div class="scenarioChoice">
      ${groups.map((group) => {
        const grid = `
          <div class="scenarioChoice__groupGrid">
            ${group.choices.map(([title, text, go]) => `
              <button class="scenarioChoice__item" type="button" data-go="${go}">
                <span class="scenarioChoice__title">${escapeHtml(title)}</span>
                <span class="scenarioChoice__text">${escapeHtml(text)}</span>
              </button>
            `).join("")}
          </div>
        `;

        if (group.accordion) {
          return `
            <details class="scenarioChoice__group scenarioChoice__group--accordion">
              <summary>
                <span>${escapeHtml(group.title)}</span>
                <span class="scenarioChoice__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
              </summary>
              ${grid}
            </details>
          `;
        }

        return `
          <div class="scenarioChoice__group">
            <h2>${escapeHtml(group.title)}</h2>
            ${grid}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderBookIndex(items, depth = 0) {
  return `
    <div class="bookIndex bookIndex--depth${depth}">
      ${items.map((item) => {
        const children = Array.isArray(item.children) && item.children.length ? item.children : null;
        const icon = item.icon ? `<span class="bookIndex__icon">${renderIcon(item.icon)}</span>` : "";

        if (children) {
          return `
            <details class="bookIndexGroup" open>
              <summary>
                ${icon}
                <span>${escapeHtml(item.title)}</span>
                <span class="bookIndexGroup__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
              </summary>
              ${renderBookIndex(children, depth + 1)}
            </details>
          `;
        }

        if (item.view) {
          return `
            <button class="bookIndexLink" type="button" data-home-view="${escapeHtml(item.view)}">
              ${icon}
              <span>${escapeHtml(item.title)}</span>
            </button>
          `;
        }

        return `
          <a class="bookIndexLink" href="${escapeHtml(normalizeHref(item.href || "#"))}">
            ${icon}
            <span>${escapeHtml(item.title)}</span>
          </a>
        `;
      }).join("")}
    </div>
  `;
}

function makeOverviewSlide(config, sourceSlides) {
  const isFaq = config.id === "faq";
  const isNuances = config.id === "nuances";
  const isScenarioChoice = config.id === "sanction-scenario";
  const cardsHtml = sourceSlides.map(renderOverviewCard).join("");
  const relatedHtml = Array.isArray(config.related) && config.related.length
    ? `
      <div class="tocRelated">
        ${config.related.map((id) => {
          const presentation = getPresentationById(id);
          if (!presentation) return "";
          return `<a class="textLink" href="${escapeHtml(normalizeHref(makePresentationHref(id, 1)))}">${escapeHtml(presentation.sectionTitle || presentation.title)}</a>`;
        }).join("")}
      </div>
    `
    : "";

  return {
    heading: isScenarioChoice ? "Выберите сценарий сделки" : isFaq ? "Самые частые вопросы и ответы" : isNuances ? "Важные нюансы" : config.title,
    text: isScenarioChoice
      ? "Сначала выберите, как именно планируется покупка. Дальше гайд покажет маршрут, документы, оплату, риски и финальный результат под Ваш формат."
      : isFaq
      ? "Мы заранее собрали вопросы, которые обычно возникают до сделки, и отвечаем на них прямо здесь: спокойно, по делу и с привязкой к документам."
      : isNuances
      ? "Здесь собраны точки, которые отличают спокойную прозрачную сделку от рискованной покупки: документы, платежи, маршрут, договор, приемка и ответственность."
      : "Содержание раздела. Можно идти по порядку кнопками внизу или сразу перейти к нужной теме.",
    bodyHtml: isScenarioChoice
      ? buildScenarioChoiceHtml()
      : isFaq
      ? buildFaqOverviewHtml(sourceSlides)
      : isNuances
      ? buildNuancesOverviewHtml()
      : `
        <div class="tocGrid">
          ${cardsHtml}
        </div>
        ${relatedHtml}
      `
  };
}

function initGuideMenu(presentationModal) {
  const body = document.body;
  const presentationId = body?.getAttribute("data-presentation-id") || "";

  if (presentationId === "faq" || presentationId === "nuances") {
    return;
  }

  if (!body?.classList.contains("presentation") || !presentationId || document.querySelector(".guideMenuButton")) {
    return;
  }

  const button = document.createElement("button");
  button.className = "guideMenuButton";
  button.type = "button";
  button.setAttribute("aria-label", "Открыть содержание");
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = '<span></span><span></span><span></span>';

  const root = document.createElement("div");
  root.className = "guideMenuRoot";
  root.innerHTML = `
    <button class="guideMenuOverlay" type="button" data-guide-close aria-label="Закрыть содержание"></button>
    <aside class="guideMenu" aria-label="Содержание гайда">
      <div class="guideMenu__head">
        <div>
          <span class="guideMenu__eyebrow">Содержание</span>
          <h2 data-guide-heading>Гайд по безопасной покупке автомобиля</h2>
        </div>
        <button class="guideMenu__close" type="button" data-guide-close aria-label="Закрыть">×</button>
      </div>
      <div class="guideMenu__body">
      </div>
    </aside>
  `;

  document.body.append(button, root);
  refreshGuideMenuTree();

  function openMenu() {
    if (body.classList.contains("guide-menu-disabled")) {
      return;
    }

    refreshGuideMenuTree();
    body.classList.add("guide-menu-open");
    button.setAttribute("aria-expanded", "true");
    updateGuideActiveState();
  }

  function closeMenu() {
    body.classList.remove("guide-menu-open");
    button.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (body.classList.contains("guide-menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  button.addEventListener("click", toggleMenu);
  root.addEventListener("click", (event) => {
    if (event.target.closest("[data-guide-close]")) {
      closeMenu();
      return;
    }

    const viewButton = event.target.closest("[data-guide-view]");
    if (viewButton) {
      const view = HOME_VIEWS[viewButton.getAttribute("data-guide-view")];
      if (view && presentationModal) {
        presentationModal.openView(view);
        closeMenu();
      }
      return;
    }

    const link = event.target.closest(".guideTocLink");
    if (link) {
      window.setTimeout(closeMenu, 60);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("hashchange", updateGuideActiveState);
  updateGuideActiveState();
}

function renderGuideTree(items, depth) {
  return `
    <div class="guideToc guideToc--depth${depth}">
      ${items.map((item) => renderGuideItem(item, depth)).join("")}
    </div>
  `;
}

function renderGuideItem(item, depth) {
  const icon = item.icon ? `<span class="guideToc__icon">${renderIcon(item.icon)}</span>` : "";
  const children = Array.isArray(item.children) && item.children.length ? item.children : null;

  if (children) {
    return `
      <details class="guideTocGroup" data-guide-group>
        <summary>
          ${icon}
          <span>${escapeHtml(item.title)}</span>
          <span class="guideTocGroup__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
        </summary>
        ${renderGuideTree(children, depth + 1)}
      </details>
    `;
  }

  if (item.view) {
    return `
      <button class="guideTocLink" type="button" data-guide-view="${escapeHtml(item.view)}" data-guide-title="${escapeHtml(item.title)}">
        ${icon}
        <span>${escapeHtml(item.title)}</span>
      </button>
    `;
  }

  const attrs = [
    `href="${escapeHtml(normalizeHref(item.href || "#"))}"`,
    `data-guide-title="${escapeHtml(item.title)}"`
  ];

  if (item.presentation) attrs.push(`data-guide-presentation="${escapeHtml(item.presentation)}"`);
  if (item.slide) attrs.push(`data-guide-slide="${escapeHtml(item.slide)}"`);

  return `
    <a class="guideTocLink" ${attrs.join(" ")}>
      ${icon}
      <span>${escapeHtml(item.title)}</span>
    </a>
  `;
}

function getGuideNavForCurrentContext() {
  const presentationId = document.body?.getAttribute("data-presentation-id") || "";
  const currentSlide = Number(document.body?.getAttribute("data-current-slide") || "0");

  if (presentationId === "sanction-scenario") {
    return getScenarioBookNav(getScenarioBookBySlide(currentSlide));
  }

  const currentPresentation = getPresentationById(presentationId);
  if (currentPresentation?.slides?.length) {
    return [
      {
        title: currentPresentation.sectionTitle || currentPresentation.title || "Раздел",
        icon: "presentation",
        children: currentPresentation.slides.map((slide, index) => ({
          title: slide.heading || slide.title || `Слайд ${index + 1}`,
          href: makePresentationHref(presentationId, index + 1),
          presentation: presentationId,
          slide: index + 1
        }))
      }
    ];
  }

  return GUIDE_NAV;
}

function getGuideTreeKey(items) {
  return JSON.stringify(items.map((item) => ({
    title: item.title,
    href: item.href || "",
    children: Array.isArray(item.children) ? item.children.map((child) => ({
      title: child.title,
      href: child.href || "",
      slide: child.slide || 0
    })) : []
  })));
}

function refreshGuideMenuTree() {
  const bodyEl = document.querySelector(".guideMenu__body");
  if (!bodyEl) return;

  const items = getGuideNavForCurrentContext();
  const key = getGuideTreeKey(items);
  if (bodyEl.dataset.guideKey === key) return;

  bodyEl.dataset.guideKey = key;
  bodyEl.innerHTML = items.length
    ? renderGuideTree(items, 0)
    : '<p class="guideMenu__empty">Сначала выберите сценарий сделки.</p>';

  const heading = document.querySelector("[data-guide-heading]");
  const currentBook = document.body?.getAttribute("data-presentation-id") === "sanction-scenario"
    ? getScenarioBookBySlide(Number(document.body?.getAttribute("data-current-slide") || "0"))
    : null;

  if (heading) {
    heading.textContent = currentBook?.title || "Гайд по безопасной покупке автомобиля";
  }
}

function updateGuideActiveState() {
  refreshGuideMenuTree();

  const presentationId = document.body?.getAttribute("data-presentation-id") || "";
  const currentSlide = Number(document.body?.getAttribute("data-current-slide") || "0");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".guideTocLink");

  links.forEach((link) => {
    const linkPresentation = link.getAttribute("data-guide-presentation") || "";
    const linkSlide = Number(link.getAttribute("data-guide-slide") || "0");
    const hrefPath = (link.getAttribute("href") || "").split("#")[0].split("/").pop();
    const isActive = linkPresentation
      ? linkPresentation === presentationId && linkSlide === currentSlide
      : hrefPath && hrefPath === currentPath;
    link.classList.toggle("is-active", Boolean(isActive));
  });

  document.querySelectorAll("[data-guide-group]").forEach((group) => {
    group.open = Boolean(group.querySelector(".guideTocLink.is-active"));
  });
}

function ensureHomeModalRoot() {
  let modalRoot = document.getElementById("homeModalRoot");
  if (modalRoot) return modalRoot;

  modalRoot = document.createElement("div");
  modalRoot.className = "modalRoot";
  modalRoot.id = "homeModalRoot";
  modalRoot.hidden = true;
  document.body.appendChild(modalRoot);
  return modalRoot;
}

function resolveContactCardUrl(path) {
  const target = path || window.location.href;

  try {
    return new URL(target, window.location.href).href;
  } catch {
    return String(target);
  }
}

let toastTimer = 0;

function showToast(message) {
  const text = String(message || "").trim();
  if (!text) return;

  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

async function copyPlainText(value) {
  const text = String(value || "");
  if (!text) return false;

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {}
  }

  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    area.style.pointerEvents = "none";
    document.body.appendChild(area);
    area.select();
    area.setSelectionRange(0, text.length);
    const copied = document.execCommand("copy");
    document.body.removeChild(area);
    return copied;
  } catch {
    return false;
  }
}

function getSharePayload(button) {
  const customUrl = button?.getAttribute("data-contact-share") || button?.getAttribute("data-contact-copy");
  const url = resolveContactCardUrl(customUrl || window.location.href);

  return {
    url,
    title: "Максим Сафрутин",
    text: "ООО \"СГМ АВТО ГРУПП\", менеджер отдела продаж"
  };
}

async function shareContactCard(button) {
  const payload = getSharePayload(button);

  if (navigator.share) {
    try {
      await navigator.share(payload);
      showToast("Ссылка готова к отправке");
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }

  const copied = await copyPlainText(payload.url);
  showToast(copied ? "Ссылка скопирована" : "Не удалось скопировать ссылку");
}

async function copyContactCardLink(button) {
  const payload = getSharePayload(button);
  const copied = await copyPlainText(payload.url);
  showToast(copied ? "Ссылка скопирована" : "Не удалось скопировать ссылку");
}

function initContactSharing() {
  document.addEventListener("click", async (event) => {
    const shareButton = event.target.closest("[data-contact-share]");
    if (shareButton) {
      event.preventDefault();
      await shareContactCard(shareButton);
      return;
    }

    const copyButton = event.target.closest("[data-contact-copy]");
    if (copyButton) {
      event.preventDefault();
      await copyContactCardLink(copyButton);
    }
  });
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
          href: section.href,
          icon: "presentation"
        }
      ]
    };
  }

  function renderSectionEntry(section, index) {
    const icon = `<span class="sectionButton__icon">${renderIcon(section.icon)}</span>`;
    const label = `<span class="sectionButton__label">${escapeHtml(section.title)}</span>`;

    if (section.direct) {
      return `
        <a class="sectionButton" href="${escapeHtml(normalizeHref(section.href))}" data-section-index="${index}">
          ${icon}
          ${label}
        </a>
      `;
    }

    return `
      <button class="sectionButton" type="button" data-section-index="${index}">
        ${icon}
        ${label}
      </button>
    `;
  }

  function renderAction(action) {
    const actionClass = action.breakBefore ? "modalActionWrap modalActionWrap--spaced" : "modalActionWrap";
    const modifiers = `${action.accent ? " modalAction--accent" : ""}${action.presentation ? " modalAction--presentation" : ""}`;
    const icon = action.iconImage
      ? `<span class="modalAction__icon modalAction__icon--image"><img src="${escapeHtml(action.iconImage)}" alt="" /></span>`
      : action.icon
      ? `<span class="modalAction__icon">${renderIcon(action.icon)}</span>`
      : "";
    const label = action.subtitle
      ? `<span class="modalAction__text"><strong>${escapeHtml(action.label)}</strong><small>${escapeHtml(action.subtitle)}</small></span>`
      : `<span>${escapeHtml(action.label)}</span>`;

    if (action.contactShare) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-contact-share="${escapeHtml(action.contactShare)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    if (action.contactCopy) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-contact-copy="${escapeHtml(action.contactCopy)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    if (action.view) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-view="${escapeHtml(action.view)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    if (action.downloadHref) {
      const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";
      return `
        <div class="${actionClass} modalActionWrap--pdf">
          <a class="modalAction${modifiers}" href="${escapeHtml(normalizeHref(action.href))}"${target}>
            ${icon}
            ${label}
          </a>
          <a class="modalIconAction" href="${escapeHtml(normalizeHref(action.downloadHref))}" download aria-label="Скачать файл">
            ${renderIcon("download")}
          </a>
        </div>
      `;
    }

    const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";
    const download = action.download ? " download" : "";

    return `
      <div class="${actionClass}">
        <a class="modalAction${modifiers}" href="${escapeHtml(normalizeHref(action.href))}"${target}${download}>
          ${icon}
          ${label}
        </a>
      </div>
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
    const titleHtml = current.hideTitle ? "" : `<h2 class="modalTitle" id="homeModalTitle">${escapeHtml(current.title || "")}</h2>`;
    const textHtml = current.text ? `<p class="modalText">${escapeHtml(current.text)}</p>` : "";
    const noteIcon = current.noteIcon ? renderIcon(current.noteIcon) : "◆";
    const noteHtml = current.note
      ? `
        <div class="modalNote${current.noteAccent ? " modalNote--accent" : ""}">
          <span class="modalNote__pin" aria-hidden="true">${noteIcon}</span>
          <span>${escapeHtml(current.note)}</span>
        </div>
      `
      : "";
    const bodyHtml = current.html ? `<div class="modalBody">${current.html}</div>` : "";

    modalRoot.hidden = false;
    document.body.classList.add("modal-open");
    modalRoot.innerHTML = `
      <div class="modalShell" role="presentation">
        <button class="modalOverlay" type="button" data-close="true" aria-label="Закрыть"></button>
        <section class="modalCard ${escapeHtml(current.className || "")}" role="dialog" aria-modal="true"${current.hideTitle ? "" : ' aria-labelledby="homeModalTitle"'}>
          <div class="modalHead">
            <div class="modalHead__start">
              ${hasBack ? '<button class="modalBack" type="button" data-back="true">Назад</button>' : ""}
            </div>
            <button class="modalClose" type="button" data-close="true" aria-label="Закрыть">✕</button>
          </div>
          ${titleHtml}
          ${textHtml}
          ${noteHtml}
          ${bodyHtml}
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
  sectionsRoot.innerHTML = HOME_SECTIONS.map(renderSectionEntry).join("");

  sectionsRoot.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-section-index]");
    if (!button) return;

    const index = Number(button.getAttribute("data-section-index"));
    const section = HOME_SECTIONS[index];
    if (!section) return;

    if (section.view && HOME_VIEWS[section.view]) {
      openView(HOME_VIEWS[section.view]);
      return;
    }

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

function setupPresentationHomeViewModals() {
  const modalRoot = ensureHomeModalRoot();
  if (modalRoot.__presentationController) {
    return modalRoot.__presentationController;
  }

  const modalStack = [];

  function renderAction(action) {
    const actionClass = action.breakBefore ? "modalActionWrap modalActionWrap--spaced" : "modalActionWrap";
    const modifiers = `${action.accent ? " modalAction--accent" : ""}${action.presentation ? " modalAction--presentation" : ""}`;
    const icon = action.iconImage
      ? `<span class="modalAction__icon modalAction__icon--image"><img src="${escapeHtml(action.iconImage)}" alt="" /></span>`
      : action.icon
      ? `<span class="modalAction__icon">${renderIcon(action.icon)}</span>`
      : "";
    const label = action.subtitle
      ? `<span class="modalAction__text"><strong>${escapeHtml(action.label)}</strong><small>${escapeHtml(action.subtitle)}</small></span>`
      : `<span>${escapeHtml(action.label)}</span>`;

    if (action.contactShare) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-contact-share="${escapeHtml(action.contactShare)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    if (action.contactCopy) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-contact-copy="${escapeHtml(action.contactCopy)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    if (action.view) {
      return `
        <div class="${actionClass}">
          <button class="modalAction${modifiers}" type="button" data-presentation-view="${escapeHtml(action.view)}">
            ${icon}
            ${label}
          </button>
        </div>
      `;
    }

    if (action.downloadHref) {
      const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";
      return `
        <div class="${actionClass} modalActionWrap--pdf">
          <a class="modalAction${modifiers}" href="${escapeHtml(normalizeHref(action.href))}"${target}>
            ${icon}
            ${label}
          </a>
          <a class="modalIconAction" href="${escapeHtml(normalizeHref(action.downloadHref))}" download aria-label="Скачать файл">
            ${renderIcon("download")}
          </a>
        </div>
      `;
    }

    const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";
    const download = action.download ? " download" : "";

    return `
      <div class="${actionClass}">
        <a class="modalAction${modifiers}" href="${escapeHtml(normalizeHref(action.href))}"${target}${download}>
          ${icon}
          ${label}
        </a>
      </div>
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
    const titleHtml = current.hideTitle ? "" : `<h2 class="modalTitle" id="presentationModalTitle">${escapeHtml(current.title || "")}</h2>`;
    const textHtml = current.text ? `<p class="modalText">${escapeHtml(current.text)}</p>` : "";
    const noteIcon = current.noteIcon ? renderIcon(current.noteIcon) : "◆";
    const noteHtml = current.note
      ? `
        <div class="modalNote${current.noteAccent ? " modalNote--accent" : ""}">
          <span class="modalNote__pin" aria-hidden="true">${noteIcon}</span>
          <span>${escapeHtml(current.note)}</span>
        </div>
      `
      : "";
    const bodyHtml = current.html ? `<div class="modalBody">${current.html}</div>` : "";

    modalRoot.hidden = false;
    document.body.classList.add("modal-open");
    modalRoot.innerHTML = `
      <div class="modalShell" role="presentation">
        <button class="modalOverlay" type="button" data-presentation-close="true" aria-label="Закрыть"></button>
        <section class="modalCard ${escapeHtml(current.className || "")}" role="dialog" aria-modal="true"${current.hideTitle ? "" : ' aria-labelledby="presentationModalTitle"'}>
          <div class="modalHead">
            <div class="modalHead__start">
              ${hasBack ? '<button class="modalBack" type="button" data-presentation-back="true">Назад</button>' : ""}
            </div>
            <button class="modalClose" type="button" data-presentation-close="true" aria-label="Закрыть">✕</button>
          </div>
          ${titleHtml}
          ${textHtml}
          ${noteHtml}
          ${bodyHtml}
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

  modalRoot.addEventListener("click", (event) => {
    const closeBtn = event.target.closest("[data-presentation-close]");
    if (closeBtn) {
      closeModal();
      return;
    }

    const backBtn = event.target.closest("[data-presentation-back]");
    if (backBtn) {
      goBack();
      return;
    }

    const viewBtn = event.target.closest("[data-presentation-view]");
    if (viewBtn) {
      const nextView = HOME_VIEWS[viewBtn.getAttribute("data-presentation-view")];
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

  const controller = { openView, closeModal };
  modalRoot.__presentationController = controller;
  return controller;
}

function decoratePresentationNavButton(el, iconName, fallbackLabel) {
  if (!el || el.dataset.navDecorated === "true") return;

  const label = (el.textContent || fallbackLabel || "").trim();
  el.dataset.navDecorated = "true";
  el.setAttribute("aria-label", label);
  el.innerHTML = `
    <span class="btn__icon" aria-hidden="true">${renderIcon(iconName)}</span>
    <span class="btn__label">${escapeHtml(label)}</span>
  `;
}

function getLandingPopupText(slide) {
  if (!slide) return "";
  if (typeof slide.popup === "string") return slide.popup;
  if (slide.popup && typeof slide.popup === "object") {
    return slide.popup.default || Object.values(slide.popup)[0] || "";
  }
  return "";
}

function makeLandingVisualPrompt(heading, text) {
  const cleanHeading = String(heading || "раздел").replace(/\s+/g, " ").trim();
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();
  const detail = cleanText ? `, смысл: ${cleanText.slice(0, 120)}` : "";
  return `Промт для изображения: деловой премиальный визуал для раздела «${cleanHeading}»${detail}, темный стиль SGM Auto Group, автомобиль, документы и проверяемая сделка.`;
}

function getLandingImageSrc(presentationId, sectionIndex, isIntro = false) {
  if (isIntro) return "";
  const media = ARTICLE_LANDING_MEDIA[presentationId];
  if (!media) return "";
  const fileName = `${media.prefix} ${sectionIndex}.png`;
  return `./assets/media/${encodeURIComponent(media.folder)}/${encodeURIComponent(fileName)}`;
}

function createArticleImageLightbox(galleryItems, scrollToSection) {
  if (!Array.isArray(galleryItems) || galleryItems.length === 0) return;

  const root = document.createElement("div");
  root.className = "articleImageLightbox";
  root.hidden = true;
  root.innerHTML = `
    <button class="articleImageLightbox__backdrop" type="button" data-lightbox-close aria-label="Закрыть изображение"></button>
    <div class="articleImageLightbox__panel" role="dialog" aria-modal="true" aria-label="Просмотр изображения">
      <button class="articleImageLightbox__close" type="button" data-lightbox-close aria-label="Закрыть">×</button>
      <button class="articleImageLightbox__arrow articleImageLightbox__arrow--prev" type="button" data-lightbox-prev aria-label="Предыдущее изображение">${renderIcon("arrowLeft")}</button>
      <figure class="articleImageLightbox__figure">
        <img class="articleImageLightbox__image" alt="" />
        <figcaption class="articleImageLightbox__caption"></figcaption>
      </figure>
      <button class="articleImageLightbox__arrow articleImageLightbox__arrow--next" type="button" data-lightbox-next aria-label="Следующее изображение">${renderIcon("arrowRight")}</button>
      <div class="articleImageLightbox__counter" aria-live="polite"></div>
    </div>
  `;
  document.body.append(root);

  const image = root.querySelector(".articleImageLightbox__image");
  const caption = root.querySelector(".articleImageLightbox__caption");
  const counter = root.querySelector(".articleImageLightbox__counter");
  let currentIndex = 0;
  let touchStartX = 0;

  function setIndex(nextIndex, shouldScroll = true) {
    currentIndex = (nextIndex + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    image.src = item.src;
    image.alt = item.alt || item.title || "Изображение раздела";
    caption.textContent = item.title || "";
    counter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
    if (shouldScroll && typeof scrollToSection === "function") {
      scrollToSection(item.sectionIndex);
    }
  }

  function open(index) {
    setIndex(index, false);
    root.hidden = false;
    document.body.classList.add("image-lightbox-open");
  }

  function close() {
    root.hidden = true;
    document.body.classList.remove("image-lightbox-open");
  }

  galleryItems.forEach((item, index) => {
    item.figure.addEventListener("click", () => open(index));
    item.figure.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(index);
      }
    });
  });

  root.addEventListener("click", (event) => {
    if (event.target.closest("[data-lightbox-close]")) {
      close();
      return;
    }
    if (event.target.closest("[data-lightbox-prev]")) {
      setIndex(currentIndex - 1);
      return;
    }
    if (event.target.closest("[data-lightbox-next]")) {
      setIndex(currentIndex + 1);
    }
  });

  root.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches?.[0]?.clientX || 0;
  }, { passive: true });

  root.addEventListener("touchend", (event) => {
    const endX = event.changedTouches?.[0]?.clientX || 0;
    const delta = endX - touchStartX;
    if (Math.abs(delta) > 46) {
      setIndex(currentIndex + (delta < 0 ? 1 : -1));
    }
  }, { passive: true });

  window.addEventListener("keydown", (event) => {
    if (root.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") setIndex(currentIndex - 1);
    if (event.key === "ArrowRight") setIndex(currentIndex + 1);
  });
}

function renderLandingSection(section, index, total, isIntro = false, presentationId = "") {
  const heading = isIntro ? section.title : section.heading;
  const text = isIntro ? section.text : section.text;
  const note = isIntro ? "" : getLandingPopupText(section);
  const iconName = isIntro ? "presentation" : section.visualIcon;
  const stepLabel = isIntro ? `${total - 1} разделов` : `Раздел ${index}`;
  const tag = isIntro ? "h1" : "h2";
  const id = isIntro ? "intro" : `section-${index}`;
  const imageSrc = getLandingImageSrc(presentationId, index, isIntro);

  return `
    <section class="articleSection" id="${escapeHtml(id)}" data-landing-section data-menu-title="${escapeHtml(heading || "Раздел")}" data-menu-sub="${escapeHtml(stepLabel)}">
      <header class="articleHeader">
        <${tag}>${escapeHtml(heading || "Раздел")}</${tag}>
        <span class="articleStep">${escapeHtml(stepLabel)}</span>
      </header>
      <figure class="articleVisual${imageSrc ? " articleVisual--image" : ""}"${imageSrc ? ` data-gallery-item data-section-index="${index}" tabindex="0" role="button" aria-label="Открыть изображение раздела"` : ""}>
        ${imageSrc ? `
          <img class="articleVisual__image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(heading || "Изображение раздела")}" loading="lazy" />
          <figcaption class="srOnly">${escapeHtml(makeLandingVisualPrompt(heading, text))}</figcaption>
        ` : `
          <figcaption class="articleVisual__prompt">${escapeHtml(makeLandingVisualPrompt(heading, text))}</figcaption>
        `}
      </figure>
      <div class="articleBody">
        ${text ? `<p>${escapeHtml(text)}</p>` : ""}
        ${note ? `
          <div class="articleNote">
            <span class="articleNote__icon" aria-hidden="true">${renderPresentationIcon(iconName)}</span>
            <div class="articleNote__content"><p>${escapeHtml(note)}</p></div>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function initPresentationLanding(config) {
  const body = document.body;
  const stage = document.querySelector(".stage");
  const modal = setupPresentationHomeViewModals();
  const presentationId = String(config.id || body?.getAttribute("data-presentation-id") || "");
  const sourceSlides = Array.isArray(config.slides) ? config.slides : [];
  const sections = [
    {
      title: config.sectionTitle || config.title || "Презентация",
      text: config.title || ""
    },
    ...sourceSlides
  ];

  if (!stage || sections.length <= 1) return false;

  body.classList.add("article-landing");
  stage.className = "articleShell";
  stage.setAttribute("aria-label", config.title || "Презентация");
  stage.innerHTML = sections.map((section, index) => renderLandingSection(section, index, sections.length, index === 0, presentationId)).join("");

  const guideButton = document.createElement("button");
  guideButton.className = "guideMenuButton";
  guideButton.type = "button";
  guideButton.setAttribute("aria-label", "Открыть содержание");
  guideButton.setAttribute("aria-expanded", "false");
  guideButton.innerHTML = "<span></span><span></span><span></span>";

  const guideRoot = document.createElement("div");
  guideRoot.className = "guideMenuRoot";
  guideRoot.hidden = true;
  guideRoot.innerHTML = `
    <button class="guideMenuOverlay" type="button" data-landing-menu-close aria-label="Закрыть содержание"></button>
    <aside class="guideMenu" aria-label="Содержание гайда">
      <div class="guideMenu__head">
        <div>
          <span class="guideMenu__eyebrow">Содержание</span>
          <h2>${escapeHtml(config.sectionTitle || config.title || "Презентация")}</h2>
        </div>
        <button class="guideMenu__close" type="button" data-landing-menu-close aria-label="Закрыть">×</button>
      </div>
      <div class="guideMenu__body">
        <nav class="articleToc" data-landing-toc aria-label="Разделы"></nav>
      </div>
    </aside>
  `;
  document.body.append(guideButton, guideRoot);

  const renderedSections = Array.from(document.querySelectorAll("[data-landing-section]"));
  const galleryItems = Array.from(document.querySelectorAll("[data-gallery-item]")).map((figure) => {
    const image = figure.querySelector(".articleVisual__image");
    const sectionIndex = Number(figure.dataset.sectionIndex || "0");
    const section = renderedSections[sectionIndex];
    return {
      figure,
      sectionIndex,
      src: image?.getAttribute("src") || "",
      alt: image?.getAttribute("alt") || "",
      title: section?.dataset.menuTitle || image?.getAttribute("alt") || ""
    };
  }).filter((item) => item.src);
  const toc = guideRoot.querySelector("[data-landing-toc]");
  const els = {
    counter: document.getElementById("counter"),
    back: document.getElementById("btnBack"),
    next: document.getElementById("btnNext"),
    home: document.querySelector(".nav__right .btn, .nav__right .link")
  };
  const counterWrap = els.counter?.closest(".nav__counter");
  let activeIndex = 0;

  decoratePresentationNavButton(els.back, "arrowLeft", "Назад");
  decoratePresentationNavButton(els.next, "arrowRight", "Далее");
  decoratePresentationNavButton(els.home, "home", "На главную");

  if (els.home) {
    els.home.setAttribute("href", "./index.html");
  }

  if (counterWrap && !counterWrap.querySelector(".nav__progress")) {
    const progress = document.createElement("div");
    progress.className = "nav__progress";
    progress.innerHTML = '<span class="nav__progressFill"></span>';
    counterWrap.appendChild(progress);
  }

  toc.innerHTML = renderedSections.map((section, index) => `
    <a class="guideTocLink" href="#${escapeHtml(section.id)}" data-landing-toc-link data-index="${index}">
      <span class="guideToc__icon">${index === 0 ? renderIcon("presentation") : renderPresentationIcon(sourceSlides[index - 1]?.visualIcon)}</span>
      <span>
        <span>${escapeHtml(section.dataset.menuTitle || "Раздел")}</span>
        <small>${escapeHtml(section.dataset.menuSub || "")}</small>
      </span>
    </a>
  `).join("");

  function getActiveIndex() {
    const midpoint = window.scrollY + window.innerHeight * 0.42;
    let index = 0;
    renderedSections.forEach((section, sectionIndex) => {
      if (section.offsetTop <= midpoint) index = sectionIndex;
    });
    return index;
  }

  function scrollToSection(index) {
    const target = renderedSections[Math.max(0, Math.min(renderedSections.length - 1, index))];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  createArticleImageLightbox(galleryItems, scrollToSection);

  function updateState() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    activeIndex = getActiveIndex();

    if (counterWrap) {
      counterWrap.style.setProperty("--progress", String(progress));
    }

    if (els.counter) {
      els.counter.textContent = `${activeIndex + 1} / ${renderedSections.length}`;
    }

    if (els.back) els.back.disabled = activeIndex === 0;
    if (els.next) els.next.disabled = activeIndex === renderedSections.length - 1;

    guideRoot.querySelectorAll("[data-landing-toc-link]").forEach((link) => {
      link.classList.toggle("is-active", Number(link.dataset.index) === activeIndex);
    });
  }

  function openMenu() {
    guideRoot.hidden = false;
    body.classList.add("guide-menu-open");
    guideButton.setAttribute("aria-expanded", "true");
    updateState();
  }

  function closeMenu() {
    body.classList.remove("guide-menu-open");
    guideButton.setAttribute("aria-expanded", "false");
    window.setTimeout(() => {
      if (!body.classList.contains("guide-menu-open")) {
        guideRoot.hidden = true;
      }
    }, 260);
  }

  guideButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (body.classList.contains("guide-menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  guideRoot.addEventListener("click", (event) => {
    if (event.target.closest("[data-landing-menu-close]")) {
      event.preventDefault();
      closeMenu();
      return;
    }

    const link = event.target.closest("[data-landing-toc-link]");
    if (link) {
      event.preventDefault();
      closeMenu();
      scrollToSection(Number(link.dataset.index));
    }
  });

  els.back?.addEventListener("click", () => scrollToSection(activeIndex - 1));
  els.next?.addEventListener("click", () => scrollToSection(activeIndex + 1));
  els.home?.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "./index.html";
  });

  window.addEventListener("scroll", updateState, { passive: true });
  window.addEventListener("resize", updateState);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("guide-menu-open")) {
      closeMenu();
    }
  });

  updateState();
  return true;
}

function initPresentation() {
  const bodyPresentationId = document.body?.getAttribute("data-presentation-id");
  const dataPresentation = bodyPresentationId ? getPresentationById(bodyPresentationId) : null;
  const config = window.PRESENTATION_CONFIG || dataPresentation;
  if (!config || !Array.isArray(config.slides)) return;

  if (ARTICLE_LANDING_PRESENTATIONS.has(String(config.id || bodyPresentationId || ""))) {
    initPresentationLanding(config);
    return;
  }

  const presentationModal = setupPresentationHomeViewModals();
  initGuideMenu(presentationModal);

  const presentationId = String(config.id || bodyPresentationId || "");
  const sourceSlides = config.slides;
  const isStandalonePage = presentationId === "faq" || presentationId === "nuances";
  const slides = isStandalonePage
    ? [makeOverviewSlide(config, sourceSlides)]
    : [makeOverviewSlide(config, sourceSlides), ...sourceSlides];
  const sectionTitle = String(config.sectionTitle || config.title || "");

  const els = {
    slide: document.getElementById("slide"),
    kicker: document.getElementById("kicker"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    extra: document.getElementById("extra"),
    counter: document.getElementById("counter"),
    back: document.getElementById("btnBack"),
    next: document.getElementById("btnNext"),
    home: document.querySelector(".nav__right .btn, .nav__right .link")
  };

  if (!els.slide || !els.title || !els.body || !els.counter || !els.back || !els.next || !els.kicker) {
    return;
  }

  decoratePresentationNavButton(els.back, "arrowLeft", "Назад");
  decoratePresentationNavButton(els.next, "arrowRight", "Далее");
  decoratePresentationNavButton(els.home, "home", "На главную");

  const counterWrap = els.counter.closest(".nav__counter");

  if (counterWrap && !counterWrap.querySelector(".nav__progress")) {
    const progress = document.createElement("div");
    progress.className = "nav__progress";
    progress.innerHTML = '<span class="nav__progressFill"></span>';
    counterWrap.appendChild(progress);
  }

  let currentIndex = 0;

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function parseIndexFromHash() {
    const hash = window.location.hash || "";
    const deepLinkMatch = hash.match(/^#([a-z0-9-]+)\/(\d+)$/i);
    if (deepLinkMatch) {
      const targetId = deepLinkMatch[1];
      const oneBased = Number(deepLinkMatch[2]);

      if (presentationId && targetId !== presentationId) {
        const target = getPresentationById(targetId);
        if (target?.path) {
          window.location.href = `${target.path}#${targetId}/${oneBased || 1}`;
        }
      }

      if (Number.isFinite(oneBased)) {
        return clamp(oneBased - 1, 0, slides.length - 1);
      }
    }

    const match = hash.match(/s=(\d+)/);
    if (!match) return 0;

    const oneBased = Number(match[1]);
    if (!Number.isFinite(oneBased)) return 0;

    return clamp(oneBased - 1, 0, slides.length - 1);
  }

  function setHashFromIndex(i) {
    const nextHash = presentationId ? `#${presentationId}/${i + 1}` : `#s=${i + 1}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }

  function setNavState(i) {
    const progress = slides.length > 1 ? (i + 1) / slides.length : 1;
    const scenarioGate = presentationId === "sanction-scenario" && i === 0;
    const scenarioBook = presentationId === "sanction-scenario" ? getScenarioBookByIndex(i) : null;
    els.back.disabled = scenarioBook ? i <= scenarioBook.startIndex : i <= 0;
    els.next.disabled = scenarioGate || (scenarioBook ? i >= scenarioBook.endIndex : i >= slides.length - 1);
    els.counter.textContent = "";
    els.back.hidden = isStandalonePage;
    els.next.hidden = isStandalonePage;

    if (counterWrap) {
      counterWrap.hidden = isStandalonePage;
      counterWrap.style.setProperty("--progress", String(progress));
    }
  }

  function getPopupText(slide, key) {
    if (!slide) return "";
    if (typeof slide.popup === "string") return slide.popup;
    if (slide.popup && typeof slide.popup === "object") {
      return slide.popup[key] || slide.popup.default || Object.values(slide.popup)[0] || "";
    }
    return "";
  }

  function renderSmartAction(action, index) {
    const icon = action.icon ? `<span class="smartAction__icon">${renderPresentationIcon(action.icon)}</span>` : "";
    const label = `<span>${escapeHtml(action.label || "Подробнее")}</span>`;

    if (action.popup) {
      return `<button class="smartAction${action.accent ? " smartAction--accent" : ""}" type="button" data-slide-popup="${escapeHtml(String(action.popup))}" data-action-index="${index}">${icon}${label}</button>`;
    }

    if (action.homeView) {
      return `<button class="smartAction${action.accent ? " smartAction--accent" : ""}" type="button" data-home-view="${escapeHtml(action.homeView)}">${icon}${label}</button>`;
    }

    if (action.href) {
      const target = action.external ? ' target="_blank" rel="noreferrer noopener"' : "";
      return `<a class="smartAction${action.accent ? " smartAction--accent" : ""}" href="${escapeHtml(normalizeHref(action.href))}"${target}>${icon}${label}</a>`;
    }

    if (action.presentation) {
      const slideNumber = action.slide || 1;
      const href = `${getPresentationPath(action.presentation)}#${action.presentation}/${slideNumber}`;
      return `<a class="smartAction${action.accent ? " smartAction--accent" : ""}" href="${escapeHtml(normalizeHref(href))}">${icon}${label}</a>`;
    }

    return `<button class="smartAction${action.accent ? " smartAction--accent" : ""}" type="button" data-slide-popup="default" data-action-index="${index}">${icon}${label}</button>`;
  }

  function renderSmartExtra(slide) {
    if (!slide || slide.extraHtml || slide.bodyHtml) return "";

    const visualIcon = slide.visualIcon
      ? `<div class="smartVisual__icon">${renderPresentationIcon(slide.visualIcon)}</div>`
      : "";
    const imageHint = slide.imageHint
      ? `<span class="smartVisual__hint">${escapeHtml(slide.imageHint)}</span>`
      : `<span class="smartVisual__hint">Место для изображения: премиальный реалистичный кадр по теме «${escapeHtml(slide.heading || slide.title || "раздел")}», автомобильный импорт, документы, логистика, деловой стиль SGM Auto Group.</span>`;
    const actions = Array.isArray(slide.actions) && slide.actions.length
      ? `<div class="smartActions">${slide.actions.map(renderSmartAction).join("")}</div>`
      : "";
    const related = Array.isArray(slide.relatedLinks) && slide.relatedLinks.length
      ? `
        <div class="smartRelated">
          ${slide.relatedLinks.map((link) => {
            const href = link.href || (link.presentation ? `${getPresentationPath(link.presentation)}#${link.presentation}/${link.slide || 1}` : "#");
            return `<a href="${escapeHtml(normalizeHref(href))}">${escapeHtml(link.label || "Связанный раздел")}</a>`;
          }).join("")}
        </div>
      `
      : "";
    const scenarioBack = presentationId === "sanction-scenario" && currentIndex > 0
      ? `
        <div class="smartActions smartActions--scenarioChange">
          <button class="smartAction smartAction--scenarioChange" type="button" data-go="0">
            <span class="smartAction__icon" aria-hidden="true">${renderPresentationIcon("MousePointerClick")}</span>
            <span>Изменить сценарий</span>
          </button>
        </div>
      `
      : "";

    return `
      <div class="smartSlide">
        <div class="smartVisual">
          ${visualIcon}
          ${imageHint}
        </div>
        <div class="smartSlide__actions">
          ${actions}
          ${related}
          ${scenarioBack}
        </div>
      </div>
    `;
  }

  function renderExtra(slide) {
    const html = slide && (slide.extraHtml || slide.bodyHtml)
      ? String(slide.extraHtml || slide.bodyHtml)
      : renderSmartExtra(slide);

    els.extra.innerHTML = html;

    els.extra.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = Number(btn.getAttribute("data-go"));
        if (Number.isFinite(target)) {
          showSlide(target);
        }
      });
    });

    els.extra.querySelectorAll("[data-home-view]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const viewKey = btn.getAttribute("data-home-view");
        const view = HOME_VIEWS[viewKey];
        if (!view) return;

        event.preventDefault();
        presentationModal.openView(view);
      });
    });

    els.extra.querySelectorAll("[data-inline-popup]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();

        const templateId = btn.getAttribute("data-inline-popup");
        const template = templateId ? document.getElementById(templateId) : null;
        if (!template) return;

        presentationModal.openView({
          title: btn.getAttribute("data-inline-popup-title") || btn.textContent || "Подробнее",
          html: template.innerHTML
        });
      });
    });

    els.extra.querySelectorAll("[data-slide-popup]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();

        const popupKey = btn.getAttribute("data-slide-popup") || "default";
        const actionIndex = Number(btn.getAttribute("data-action-index"));
        const action = Number.isFinite(actionIndex) ? (slide.actions || [])[actionIndex] : null;
        const text = action?.popupText || getPopupText(slide, popupKey);

        if (!text) return;

        presentationModal.openView({
          title: action?.popupTitle || action?.label || slide.heading || slide.title || "Подробнее",
          text,
          note: action?.note || "",
          actions: action?.modalActions || []
        });
      });
    });
  }

  function showSlide(i) {
    currentIndex = clamp(i, 0, slides.length - 1);
    const slide = slides[currentIndex] || { title: "", body: "" };
    document.body.dataset.currentSlide = String(currentIndex + 1);
    const scenarioGate = presentationId === "sanction-scenario" && currentIndex === 0;
    document.body.classList.toggle("guide-menu-disabled", scenarioGate);
    document.body.classList.toggle("standalone-info-page", isStandalonePage);
    document.body.classList.toggle("faq-single-page", presentationId === "faq");
    document.body.classList.toggle("nuances-single-page", presentationId === "nuances");

    if (scenarioGate) {
      document.body.classList.remove("guide-menu-open");
      document.querySelector(".guideMenuButton")?.setAttribute("aria-expanded", "false");
    }

    els.slide.classList.remove("is-active");

    requestAnimationFrame(() => {
      const labelEl = els.kicker.querySelector("[data-kicker-label]");
      if (labelEl) {
        labelEl.textContent = sectionTitle;
      }

      els.title.textContent = String(slide.heading || slide.title || "");
      els.body.textContent = String(slide.text || slide.body || "");

      renderExtra(slide);
      setNavState(currentIndex);
      setHashFromIndex(currentIndex);
      updateGuideActiveState();

      requestAnimationFrame(() => {
        els.slide.classList.add("is-active");
      });
    });
  }

  function go(delta) {
    const scenarioBook = presentationId === "sanction-scenario" ? getScenarioBookByIndex(currentIndex) : null;
    const nextIndex = currentIndex + delta;

    if (scenarioBook && (nextIndex < scenarioBook.startIndex || nextIndex > scenarioBook.endIndex)) {
      return;
    }

    showSlide(nextIndex);
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
      const scenarioBook = presentationId === "sanction-scenario" ? getScenarioBookByIndex(currentIndex) : null;
      showSlide(scenarioBook ? scenarioBook.startIndex : 0);
    }

    if (event.key === "End") {
      event.preventDefault();
      const scenarioBook = presentationId === "sanction-scenario" ? getScenarioBookByIndex(currentIndex) : null;
      showSlide(scenarioBook ? scenarioBook.endIndex : slides.length - 1);
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

function initAutoHomeView() {
  const viewKey = document.body?.getAttribute("data-auto-home-view");
  const view = viewKey ? HOME_VIEWS[viewKey] : null;
  if (!view) return;

  setupPresentationHomeViewModals().openView(view);
}

document.addEventListener("DOMContentLoaded", () => {
  initContactSharing();
  initHome();
  initPresentation();
  initAutoHomeView();
});

