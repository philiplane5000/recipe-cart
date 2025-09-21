// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /**
   * Nuxt application configuration
   */
  app: {
    /**
     * Set default configuration for <head> on every page
     */
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      noscript: [{ textContent: 'JavaScript is required' }],
    },
  },

  /**
   * Specify a compatibility date for your app.
   */
  compatibilityDate: '2025-07-15',

  /**
   * Configure Nuxt component auto-registration (default)
   */
  components: [
    { path: '~/components/atoms', prefix: 'A' },
    { path: '~/components/molecules', prefix: 'M' },
    { path: '~/components/organisms', prefix: 'O' },
    { path: '~/components/templates', prefix: 'T' },
  ],

  /**
   * Application-wide Styles
   */
  css: ['~/assets/css/main.css'],

  /**
   * Enable Nuxt DevTools for development.
   */
  devtools: { enabled: true },

  /**
   * The modules directory, each file in which will be auto-registered as a Nuxt module.
   */
  modules: [
    /* The Nuxt Icon module */
    /* (https://eslint.nuxt.com/packages/module) */
    '@nuxt/eslint',

    /* The Nuxt Icon module */
    /* (https://nuxt.com/modules/icon) */
    '@nuxt/icon',

    /* Nuxt UI */
    '@nuxt/ui',

    /* The Nuxt Google Fonts module */
    /* (https://google-fonts.nuxtjs.org/) */
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: true,
        },
        display: 'swap',
        preconnect: true,
        prefetch: true,
        preload: true,
      },
    ],

    // /* The Tailwind CSS Nuxt module */
    // /* (https://nuxt.com/modules/tailwindcss) */
    // '@nuxtjs/tailwindcss',
  ],
  // vite: {
  //   plugins: [tailwindcss()],
  // },
});
