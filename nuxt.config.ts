// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-socket-io',
    '@davestewart/nuxt-scrollbar',
    'nuxt-svgo'
  ],
  
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'https://back.marketwall.ir'
    }]
  },
  nitro: {
  experimental: {
      websocket: true
    },
  },

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
      //   baseURL: 'https://back.marketwall.ir'
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },

  experimental: {
    writeEarlyHints: false,
  },
})