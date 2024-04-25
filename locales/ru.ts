export default defineI18nLocale(() => {
  return {
    navigation: {
      home: 'главная',
      projects: 'проекты',
      aboutMe: 'обо мне',
      contact: 'контакты',
    },
    aboutMe: {
      title: 'Обо мне',
      biography: {
        name: 'Родионов Никита',
        description: `Разработка высокопроизводительных и оптимизированных веб-приложений`,
        linkList: {
          telegram: `https://t.me/beet3R`,
          email: `mailto:nikita.rodionov201555{'@'}yandex.ru`,
          cv: `/documents/cv-ru.pdf`,
        },
      },
      skillsList: {
        first: {
          title: 'Soft Skills',
        },
        second: {
          title: 'Frontend',
        },
        third: {
          title: 'Other',
        },
      },
    },
    contactMe: {
      title: 'Контакты',
    },
    main: {
      title: 'Родионов Никита',
    },
  }
})
