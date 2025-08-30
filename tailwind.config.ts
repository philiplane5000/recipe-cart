import type { Config } from 'tailwindcss';
import { colorTokens } from './config/colors/tokens';

/**
 * Tailwind CSS configuration for Gather Recipe App
 * Colors sourced from centralized tokens file
 */
export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './app/**/*.{js,vue,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.{js,ts}',
  ],
  plugins: [
    function ({ addUtilities }) {
      const overlayUtils = {
        '.overlay-dim': {
          'background-color': 'oklab(0% 0 0 / 0.5)',
        },
        '.overlay-light': {
          'background-color': 'oklab(10% 0 0 / 0.4)',
        },
        '.overlay-dark': {
          'background-color': 'oklab(0% 0 0 / 0.7)',
        },
        '.overlay-cool': {
          'background-color': 'oklab(5% 0 -0.1 / 0.5)',
        },
        '.overlay-warm': {
          'background-color': 'oklab(5% 0.05 0.05 / 0.5)',
        },
      };

      addUtilities(overlayUtils, ['responsive', 'hover']);
    },
  ],
  theme: {
    /**
     * Responsive breakpoints aligned with Vuetify
     */
    screens: {
      'sm': '40rem', // 640px
      'md': '48rem', // 768px
      'lg': '64rem', // 1024px
      'xl': '80rem', // 1280px
      '2xl': '96rem', // 1536px
    },
    extend: {
      colors: {
        // Brand colors from tokens
        'primary': colorTokens.primary,
        'secondary': colorTokens.secondary,
        'accent': colorTokens.accent,

        // Semantic colors from tokens
        'success': colorTokens.success,
        'warning': colorTokens.warning,
        'error': colorTokens.error,
        'info': colorTokens.info,

        // Neutral colors
        'gray': colorTokens.neutral,
        'neutral': colorTokens.neutral,

        // Custom surface colors
        'cream': colorTokens.custom.cream,
        'blush': colorTokens.custom.blush,
        'surface': colorTokens.custom.white,

        // Semantic aliases using tokens
        'background': colorTokens.custom.cream,
        'foreground': colorTokens.neutral[800],
        'muted': colorTokens.neutral[500],
        'muted-foreground': colorTokens.neutral[400],
        'border': colorTokens.neutral[200],
        'input': colorTokens.neutral[100],
        'ring': colorTokens.primary[400],

        // Card colors
        'card': colorTokens.custom.white,
        'card-foreground': colorTokens.neutral[800],

        // Popover colors
        'popover': colorTokens.custom.white,
        'popover-foreground': colorTokens.neutral[800],

        // Destructive alias
        'destructive': colorTokens.error[500],
        'destructive-foreground': colorTokens.custom.white,
      },

      // Material Design elevation shadows
      boxShadow: {
        'material-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'material-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'material-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'material-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'material-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      },

      // // Typography for recipe content
      // fontFamily: {
      //   display: ['Inter', 'system-ui', 'sans-serif'],
      //   body: ['Inter', 'system-ui', 'sans-serif'],
      // },
    },
  },
};
