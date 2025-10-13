import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tailwind from 'eslint-plugin-tailwindcss'
import { defineConfig, globalIgnores } from 'eslint/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

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
    plugins: {},

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
    '**/turbo/',
    '**/coverage/',
    '**/e2e-results/',
    '**/playwright-report/',
    'components/ui',
    '.cursor',
  ]),
])

export default eslintConfig
