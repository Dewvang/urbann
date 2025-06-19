// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '/public/assets/fonts/fonts.css',
  ],
  plugins: ['~/plugins/lazysizes.client.ts'],
  ssr: true,
  nitro: {
    preset: 'netlify'
  }
})

