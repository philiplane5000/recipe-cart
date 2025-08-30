/**
 * @see https://prettier.io/docs/configuration
 */
const config = {
  // Format trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',

  // Number of spaces per indentation-level
  tabWidth: 2,

  // Print semicolons at the ends of statements
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Additional recommended options for Vue/JS/TS projects:
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'css',
  printWidth: 100,
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'avoid',
  embeddedLanguageFormatting: 'auto',
  proseWrap: 'preserve',

  // Tailwind CSS plugin (for util class ordering)
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
