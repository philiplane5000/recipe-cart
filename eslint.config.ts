import stylistic from '@stylistic/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import prettierPlugin from 'eslint-plugin-prettier';
import vue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(jsdoc.configs['flat/recommended-typescript-error'], {
  files: ['**/*.js', '**/*.ts', '**/*.vue'],
  plugins: {
    '@stylistic': stylistic,
    jsdoc,
    vue,
    'prettier': prettierPlugin,
  },
  rules: {
    'jsdoc/require-description': 'warn',
    '@stylistic/indent': ['error', 2],

    // Useful Vue structural rules
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],

    // Disable Vue formatting rules handled by Prettier
    'vue/html-indent': 'off',
    'vue/script-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/max-attributes-per-line': 'off',

    // Nuxt 4 supports multiple roots, so this is fine
    'vue/no-multiple-template-root': 'off',

    // Prettier handles formatting
    'prettier/prettier': 'error',
  },
});
