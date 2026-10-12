import eslint from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['build/', 'dist/', '.svelte-kit/', 'node_modules/', 'playwright-report/', 'test-results/'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs.recommended,
  {
    files: ['**/*.{ts,svelte}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tseslint.parser,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tseslint.parser,
      },
    },
  },
)
