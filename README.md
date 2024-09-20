# Next.js 14 Boilerplate

This is a [Next.js](https://nextjs.org/) 14 Boilerplate project base on [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- pnpm
- chore
  - husky
  - lint-stage
  - prettier
    - use [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) ? current is `eslint-plugin-simple-import-sort`
  - commitlint
- css: tailwindcss
- UI Library: [shadcn/ui](https://ui.shadcn.com/)
- bundle-analyzer: [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- logger: [pino](https://github.com/pinojs/pino) && development pretty logging [pino-pretty](https://github.com/pinojs/pino-pretty)
- test:
  - [vitest](https://vitest.dev/)
  - [react testing library](https://testing-library.com/)
- i18n(TBD)
  - [setting-tutorials](https://i18nexus.com/tutorials/nextjs/react-i18next)
  - [next-intl](https://github.com/amannn/next-intl) not compatible with turbo mode `Module not found: Can't resolve 'next-intl/config' `
  - [next-international](https://github.com/QuiiBz/next-international) seems better, but not compatible with Not found page
  - Maybe the best choice is official Example: [app-dir-i18n-routing](https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing)
- Docker
- Playwright: Write end-to-end tests like a pro or cypress
- Github actions/CI

## TODO

- i18n
- ~~E2E test~~
- Zustand
- after gpr, run pnpm install automatically
- how to update rsc in client?
- Update to Next.js 15

## Know issues

- [x] `eslint-plugin-vitest` can't updated, otherwise eslint will be broken. => `'plugin:prettier/recommended',`

## Refers:

- [Next.js App Router Playground](https://github.com/vercel/app-playground)
- [nodejs.org doc web repo](https://github.com/nodejs/nodejs.org/tree/main)
- [Next.js Full Stack App Architecture Guide](https://arno.surfacew.com/posts/en/nextjs-architecture)

## Getting Started

First, run the development server:

```bash
# or
pnpm dev
# or
pnpm dev:turbo
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
