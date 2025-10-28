import vitest from '@vitest/eslint-plugin'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import jestDom from 'eslint-plugin-jest-dom'
import playwright from 'eslint-plugin-playwright'
// import tailwind from 'eslint-plugin-tailwindcss'
import testingLibrary from 'eslint-plugin-testing-library'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  // Next.js Core Web Vitals rules
  ...nextVitals,

  // Next.js TypeScript rules
  ...nextTs,

  // Tailwind CSS rules TODO: Add back when it support tailwindcss v4
  // ...tailwind.configs['flat/recommended'],

  // Custom rules
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      // 'tailwindcss/no-custom-classname': 'off',
      // 'tailwindcss/classnames-order': 'off',
    },
  },

  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    ignores: ['e2e/**'],
    plugins: {
      vitest,
      'jest-dom': jestDom,
      'testing-library': testingLibrary,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...jestDom.configs['flat/recommended'].rules,
      ...testingLibrary.configs['flat/react'].rules,
    },
  },

  {
    ...playwright.configs['flat/recommended'],
    files: ['e2e/**/*.spec.ts'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
    },
  },

  // Prettier (must be last to override formatting rules)
  prettier,

  // Global ignores
  globalIgnores([
    '.next/**',
    'out/**',
    'dist/**',
    'build/**',
    'next-env.d.ts',
    '**/node_modules/',
    '**/.next/',
    '**/public/',
    '**/turbo/',
    '**/coverage/',
    '**/e2e-results/',
    '**/playwright-report/',
    'components/ui',
    '.cursor',
  ]),
])

export default eslintConfig
