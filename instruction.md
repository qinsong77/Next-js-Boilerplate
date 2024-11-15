# Next.js 15 Boilerplate

This is a [Next.js](https://nextjs.org/) 15 Boilerplate project base on [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- pnpm
- chore
  - husky
  - lint-stage
  - prettier
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
- Turbo for task cache
