// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ]
})
// yarn add @nuxtjs/color-mode
// yarn add nuxt-vuefire
// yarn add @nuxtjs/turnstile
// yarn add @nuxtjs/turnstile
// yarn add nuxt-icons
// yarn add nuxt-gtag
// yarn add nuxt-security