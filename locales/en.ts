export default defineI18nLocale(() => {
  return {
    navigation: {
      home: 'home',
      projects: 'projects',
      aboutMe: 'about',
      contact: 'contact',
    },
    aboutMe: {
      title: 'About Me',
      biography: {
        name: 'Rodionov Nikita',
        description: `A leading software developer. Main direction: web development.`,
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
      title: 'Write me',
    },
    main: {
      title: 'Rodionov Nikita',
    },
  }
})
