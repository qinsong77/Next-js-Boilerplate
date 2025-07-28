import { defineConfig, globalIgnores } from 'eslint/config'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tailwind from 'eslint-plugin-tailwindcss'

import js from '@eslint/js'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  // allConfig: js.configs.all,
  eslintPluginPrettierRecommended,
  ...tailwind.configs['flat/recommended'],
})

const eslintConfig = defineConfig([
  {
    plugins: {
      // 'simple-import-sort': simpleImportSort, // import simpleImportSort from "eslint-plugin-simple-import-sort";
    },

    extends: compat.extends('next', 'next/typescript'),

    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      // 'tailwindcss/no-custom-classname': 'off',
      // 'tailwindcss/classnames-order': 'off',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    ignores: ['e2e/**'],

    extends: compat.extends(
      'plugin:@vitest/legacy-recommended',
      'plugin:jest-dom/recommended',
      'plugin:testing-library/react',
    ),
  },
  {
    files: ['e2e/**/*.spec.ts'],
    extends: compat.extends('plugin:playwright/recommended'),
  },
  globalIgnores([
    '**/node_modules/',
    '**/.next/',
    '**/public/',
    'components/ui',
  ]),
])

export default eslintConfig
