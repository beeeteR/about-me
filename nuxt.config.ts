import { defineNuxtConfig } from 'nuxt/config'

import headConfig from './configs/head.config'
import experimentalConfig from './configs/experimental.config'
import viteConfig from './configs/vite.config'

export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config
  app: {
    head: headConfig,
  },
  components: {
    dirs: [
      {
        path: '~/components/common',
        pathPrefix: true,
        prefix: 'Common',
      },
      {
        path: '~/components/layout',
        pathPrefix: true,
        prefix: 'Layout',
      },
      {
        path: '~/components/ui',
        pathPrefix: true,
        prefix: 'Ui',
      },
      {
        path: '~/components',
        pathPrefix: true,
        prefix: 'App',
      },
    ],
  },
  css: [
    '~/assets/stylesheets/main.scss',
  ],
  devServer: {
    host: String(process.env.NITRO_DEV_HOST) || '0.0.0.0',
    port: Number(process.env.NITRO_DEV_PORT) || 3000,
  },
  devtools: {
    enabled: Boolean(process.env.APP_DEVTOOLS),
  },
  experimental: experimentalConfig,
  modules: [
    // https://nuxt.com/modules/icons
    'nuxt-icons',
    // https://v8.i18n.nuxtjs.org/options/vue-i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/device
    '@nuxtjs/device',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
  ],
  postcss: {
    plugins: {
      cssnano: { preset: 'default' },
      autoprefixer: {
        cascade: false,
      },
    },
  },
  i18n: {
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      useCookie: true,
    },
    langDir: 'locales',
    lazy: true,
    locales: [
      {
        code: 'ru',
        file: 'ru.ts',
      },
      {
        code: 'en',
        file: 'en.ts',
      },
    ],
    strategy: 'prefix_except_default',
    vueI18n: './configs/i18n.config.ts',
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    families: {
      'DotGothic16': [400],
      'Manrope': '300..800',
    },
  },
  runtimeConfig: {
    public: {
      APP_DEBUG: Boolean(process.env.APP_DEBUG),
      APP_IS_PROD: Boolean(process.env.APP_IS_PROD),
      BASE_URL: String(process.env.BASE_URL),
      DEBUG: Boolean(process.env.DEBUG),
      NUXT_SSR: Boolean(process.env.NUXT_SSR),
    },
  },
  ssr: Boolean(process.env.NUXT_SSR),
  vite: viteConfig,
})
