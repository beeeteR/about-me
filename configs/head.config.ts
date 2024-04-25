import type { NuxtOptions } from '@nuxt/schema'

export default <Partial<NuxtOptions['app']['head']>> {
  title: process.env.NUXT_BASE_TITLE,
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
    {
      name: 'description',
      content: String(process.env.NUXT_PUBLIC_APP_DESCRIPTION),
    },
    {
      name: 'author',
      content: String(process.env.NUXT_PUBLIC_APP_AUTHOR),
    },
    {
      name: 'theme-color',
      content: String(process.env.NUXT_PUBLIC_APP_THEME_COLOR),
    },
    {
      name: 'copyright',
      content: 'Родионов Никита',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: "apple-mobile-web-app-title",
      content: "beet3R"
    },
    {
      name: "application-name",
      content: "beet3R"
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff"
    },
    {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml?v=1.0"
    },
    {
      name: "theme-color",
      content: "#121212"
    }
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/favicon/apple-touch-icon.png?v=1.0"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png?v=1.0"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png?v=1.0"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest?v=1.0"
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg?v=1.0",
      color: "#232323"
    },
    {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico?v=1.0"
    },
  ],
  style: [],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Родионов Никита (@beet3R) -  Веб-разработчик",
  "url": "https://beeter.ru/"
}
      `,
    },
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Никииа",
  "url": "https://beeter.ru/about",
  "image": "https://beeter.ru/images/me.png",
  "sameAs": [
    "https://vk.me/beeter_v2",
    "https://t.me/beet3R",
    "https://beeter.ru"
  ],
}
      `,
    },
  ],
  noscript: [],
}
