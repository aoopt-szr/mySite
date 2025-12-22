// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  // Custom domain - no base path needed
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Fix for nuxt-studio H3Error
  vite: {
    optimizeDeps: {
      include: ['brace-expansion']
    }
  },

  studio: {
    development: {
      sync: true
    },
    repository: {
      provider: 'github',
      owner: 'aoopt-szr',
      repo: 'mySite',
      branch: 'main',
      rootDir: ''
    }
  }
})
