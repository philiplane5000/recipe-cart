import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS configuration for Gather Recipe App
 * Colors sourced from centralized tokens file
 */
export default <Config>{
  content: [
    '{srcDir}/components/**/*.{js,vue,ts}',
    '{srcDir}/layouts/**/*.vue',
    '{srcDir}/pages/**/*.vue',
    '{srcDir}/plugins/**/*.{js,ts}',
    '{srcDir}/composables/**/*.{js,ts}',
    '{srcDir}/utils/**/*.{js,ts}',
    '{srcDir}/app/**/*.{js,vue,ts}',
    '{srcDir}/app.vue',
    '{srcDir}/error.vue',
    '{srcDir}/nuxt.config.{js,ts}',
  ],
};
