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
    'next/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',

    // 'react-compiler/react-compiler': 'error',
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
      excludedFiles: ['e2e/**'],
      extends: [
        'plugin:vitest/legacy-recommended',
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
