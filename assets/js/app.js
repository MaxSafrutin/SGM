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
    title: "Сценарии санкционного импорта",
    desc: "PDF уже готов, интерактивная версия в работе.",
    icon: "import",
    view: "sanctionImportPdf"
  },
  {
    title: "Важные нюансы",
    desc: "Раздел готовим к публикации, детали сейчас через менеджера.",
    icon: "nuance",
    view: "techWorks"
  },
  {
    title: "Контакты вашего менеджера",
    desc: "Каналы связи и точки входа.",
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
        label: "Публичный источник",
        view: "publicSource",
        icon: "search"
      },
      {
        label: "Презентация о компании",
        view: "companyPresentationPdf",
        icon: "presentation"
      },
      {
        label: "Документы",
        view: "documents",
        icon: "file",
        breakBefore: true
      },
      {
        label: "Реализованные проекты",
        view: "projects",
        icon: "image"
      },
      {
        label: "Присутствие в сети",
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
    title: "Реализованные проекты",
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
    hideTitle: true,
    actions: [
      {
        label: "Канал Rutube",
        href: "https://rutube.ru/channel/38241441/",
        external: true,
        icon: "video"
      },
      {
        label: "Auto.ru",
        href: "https://auto.ru/diler/cars/all/sgm_avto_grupp_samara/",
        external: true,
        icon: "car"
      },
      {
        label: "Avito",
        href: "https://www.avito.ru/brands/sgm-auto-group-avtosalon-samara/all/avtomobili?sellerId=c8016100bea4127dda1cd276f3c0fb87",
        external: true,
        icon: "car"
      },
      {
        label: "Наш официальный сайт",
        href: "https://sgmautogroup.ru/",
        external: true,
        icon: "link",
        breakBefore: true
      }
    ]
  },
  companyPresentationPdf: {
    title: "Презентация о компании",
    text: "Интерактивную версию сейчас обновляем под первую публикацию. Пока можно открыть или скачать актуальный PDF из материалов проекта.",
    note: "Мы продолжаем улучшать подачу, чтобы знакомство с компанией было быстрее, понятнее и приятнее.",
    actions: [
      {
        label: "Презентация о компании",
        href: "./assets/downloads/Prezentatciia SGM Avto Grupp.pdf",
        downloadHref: "./assets/downloads/Prezentatciia SGM Avto Grupp.pdf",
        external: true,
        icon: "filePdf",
        accent: true
      },
      {
        label: "Контакты вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  sanctionImportPdf: {
    title: "Сценарии санкционного импорта",
    text: "Интерактивный сценарий готовим в более удобном формате. На сегодня доступны PDF-материалы: краткая презентация и письмо о заниженной стоимости с калькуляцией.",
    note: "Презентация уже есть, просто сейчас она в PDF. Мы продолжаем работать над тем, чтобы следующий просмотр ощущался как полноценный интерактив.",
    actions: [
      {
        label: "SGM Auto Group кратко",
        href: "./assets/downloads/SGM_Auto_Group_kratko.pdf",
        downloadHref: "./assets/downloads/SGM_Auto_Group_kratko.pdf",
        external: true,
        icon: "filePdf",
        accent: true
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
        label: "Общее знакомство с RAM",
        href: "./ram-choice.html",
        icon: "car",
        breakBefore: true
      },
      {
        label: "Контакты вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  ramIntroPdf: {
    title: "Общее знакомство с RAM",
    text: "Интерактивная страница по RAM еще в работе, но материал уже можно посмотреть или скачать в PDF.",
    note: "Пока оставляем быстрый доступ к файлу, а красивую интерактивную версию доводим отдельно.",
    actions: [
      {
        label: "Общее знакомство с RAM",
        href: "./assets/downloads/Obshchee znakomstvo s RAM.pdf",
        downloadHref: "./assets/downloads/Obshchee znakomstvo s RAM.pdf",
        external: true,
        icon: "filePdf",
        accent: true
      },
      {
        label: "Контакты вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  importArticlePdf: {
    title: "Как привезти а/м из-за рубежа",
    text: "Раздел готовим в интерактивном виде. Статья уже доступна в PDF, ее можно открыть или скачать.",
    note: "Если нужен разбор по конкретному автомобилю, лучше сразу написать менеджеру.",
    actions: [
      {
        label: "Как привезти а/м из-за рубежа",
        href: "./assets/downloads/Statya.pdf",
        downloadHref: "./assets/downloads/Statya.pdf",
        external: true,
        icon: "filePdf",
        accent: true
      },
      {
        label: "Контакты вашего менеджера",
        view: "managerContacts",
        icon: "contacts",
        breakBefore: true
      }
    ]
  },
  techWorks: {
    title: "Раздел в работе",
    text: "Ведутся технические работы: презентационная часть уже есть в черновой архитектуре, но контент еще дорабатываем. Пока все подробности лучше получать через вашего менеджера.",
    note: "Мы продолжаем улучшать восприятие проекта, чтобы к публикации все открывалось быстро и понятно на любом устройстве.",
    actions: [
      {
        label: "Как привезти а/м из-за рубежа",
        href: "./assets/downloads/Statya.pdf",
        downloadHref: "./assets/downloads/Statya.pdf",
        external: true,
        icon: "filePdf",
        accent: true
      },
      {
        label: "Контакты вашего менеджера",
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
            <a class="contactQuick" href="https://t.me/max_safrutin" target="_blank" rel="noreferrer noopener" aria-label="Telegram" title="Telegram" data-tooltip="Telegram">
              <img src="./assets/site/telegram-logo.svg" alt="" />
            </a>
            <a class="contactQuick" href="https://max.ru/u/f9LHodD0cOKgZ2JizGOkGFarK61dFBSM_z1p5ADsR4gFp5qC4QzP6z8ShJE" target="_blank" rel="noreferrer noopener" aria-label="Max" title="Max" data-tooltip="Max">
              <img src="./assets/site/logo_max.svg" alt="" />
            </a>
            <a class="contactQuick" href="https://vk.com/id1112271997" target="_blank" rel="noreferrer noopener" aria-label="VK" title="VK" data-tooltip="VK">
              <img src="./assets/site/vk-logo.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="contactMethod contactMethod--email">
          <div class="contactMethod__main">
            <a class="contactMethod__number" href="mailto:m.safrutin@sgmautogroup.ru">m.safrutin@sgmautogroup.ru</a>
            <span class="contactMethod__label">Почта</span>
          </div>
        </div>
        <details class="contactAccordion">
          <summary>
            <span>Ещё контакты</span>
            <span class="contactAccordion__chevron" aria-hidden="true">${renderIcon("chevronDown")}</span>
          </summary>
          <div class="contactAccordion__body">
            <div class="contactMethod">
              <div class="contactMethod__main">
                <a class="contactMethod__number" href="tel:+79272961107">+7 (927) 296-11-07</a>
                <span class="contactMethod__label">Доп. рабочий</span>
              </div>
              <div class="contactMethod__actions">
                <a class="contactQuick" href="tel:+79272961107" aria-label="Позвонить на дополнительный рабочий" title="Позвонить" data-tooltip="Позвонить">
                  <img src="./assets/site/phone-logo.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://t.me/max_safrutin" target="_blank" rel="noreferrer noopener" aria-label="Telegram" title="Telegram" data-tooltip="Telegram">
                  <img src="./assets/site/telegram-logo.svg" alt="" />
                </a>
                <a class="contactQuick" href="https://max.ru/u/f9LHodD0cOKgZ2JizGOkGFarK61dFBSM_z1p5ADsR4gFp5qC4QzP6z8ShJE" target="_blank" rel="noreferrer noopener" aria-label="Max" title="Max" data-tooltip="Max">
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
                <a class="contactQuick" href="https://max.ru/u/f9LHodD0cOKgZ2JizGOkGFarK61dFBSM_z1p5ADsR4gFp5qC4QzP6z8ShJE" target="_blank" rel="noreferrer noopener" aria-label="Max" title="Max" data-tooltip="Max">
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
    const icon = action.icon ? `<span class="modalAction__icon">${renderIcon(action.icon)}</span>` : "";
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
    const icon = action.icon ? `<span class="modalAction__icon">${renderIcon(action.icon)}</span>` : "";
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

function initPresentation() {
  const config = window.PRESENTATION_CONFIG;
  if (!config || !Array.isArray(config.slides)) return;
  const presentationModal = setupPresentationHomeViewModals();

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
    next: document.getElementById("btnNext"),
    home: document.querySelector(".nav__right .btn, .nav__right .link")
  };

  if (!els.slide || !els.title || !els.body || !els.counter || !els.back || !els.next || !els.kicker) {
    return;
  }

  function decorateNavButton(el, iconName, fallbackLabel) {
    if (!el || el.dataset.navDecorated === "true") return;

    const label = (el.textContent || fallbackLabel || "").trim();
    el.dataset.navDecorated = "true";
    el.setAttribute("aria-label", label);
    el.innerHTML = `
      <span class="btn__icon" aria-hidden="true">${renderIcon(iconName)}</span>
      <span class="btn__label">${escapeHtml(label)}</span>
    `;
  }

  decorateNavButton(els.back, "arrowLeft", "Назад");
  decorateNavButton(els.next, "arrowRight", "Далее");
  decorateNavButton(els.home, "home", "На главную");

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
    const progress = slides.length > 1 ? (i + 1) / slides.length : 1;
    els.back.disabled = i <= 0;
    els.next.disabled = i >= slides.length - 1;
    els.counter.textContent = "";

    if (counterWrap) {
      counterWrap.style.setProperty("--progress", String(progress));
    }
  }

  function renderExtra(slide) {
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

    els.extra.querySelectorAll("[data-home-view]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const viewKey = btn.getAttribute("data-home-view");
        const view = HOME_VIEWS[viewKey];
        if (!view) return;

        event.preventDefault();
        presentationModal.openView(view);
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

