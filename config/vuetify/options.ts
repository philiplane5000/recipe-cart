import type { VOptions } from 'vuetify-nuxt-module';
import { lightTheme } from '../colors/tokens';

/**
 * Gather Recipe App Vuetify Configuration
 * Colors sourced from centralized tokens file
 */
export const VuetifyNuxtOptions: VOptions = {
  // Theme configuration - Light theme only
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: lightTheme,
      },
    },
  },

  /**
   * Material Design Icons via CDN
   */
  icons: {
    defaultSet: 'mdi',
    sets: [
      {
        name: 'mdi',
        cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
      },
    ],
  },

  /**
   * Responsive breakpoints aligned with Tailwind CSS
   */
  display: {
    thresholds: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    mobileBreakpoint: 'sm',
  },
};

export default VuetifyNuxtOptions;