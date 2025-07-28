/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: [
    'simple-import-sort',
    // https://react.dev/learn/react-compiler#installing-eslint-plugin-react-compiler
    // 'eslint-plugin-react-compiler',
  ],
  extends: [
    // 'next/core-web-vitals',
    'next',
    // 'plugin:unicorn/recommended',
    'next/typescript', // or use 'plugin:@typescript-eslint/recommended-type-checked'
    // 'plugin:tailwindcss/recommended',
    // 'plugin:prettier/recommended',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',

    // 'react-compiler/react-compiler': 'error',

    // 'unicorn/no-array-reduce': 'off',
    // 'unicorn/no-null': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      excludedFiles: ['e2e/**'],
      extends: [
        'plugin:@vitest/legacy-recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
    },
    {
      files: ['e2e/**/*.spec.ts'],
      extends: ['plugin:playwright/recommended'],
    },
  ],
  ignorePatterns: ['node_modules/', '.next/', 'public/', 'components/ui'],
}
