import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  [
    {
      files: ['**/*.{js,mjs,cjs}'],
      plugins: { js },
      extends: ['js/recommended'],
    },
    {
      files: ['**/*.{js,mjs,cjs}'],
      languageOptions: { globals: globals.browser },
    },
  ],
  globalIgnores(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js'])
);
