/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['simple-import-sort'],
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.js',
    },
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: ['plugin:vitest/recommended', 'plugin:testing-library/react'],
    },
    {
      files: ['e2e/**/*.spec.ts'],
      extends: ['plugin:playwright/recommended'],
    },
  ],
  ignorePatterns: ['node_modules/', '.next/', 'public/', 'components/ui'],
}
