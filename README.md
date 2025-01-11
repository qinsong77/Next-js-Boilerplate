# Next.js 15 Boilerplate

This is a [Next.js](https://nextjs.org/) 15 Boilerplate project base on [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For Next.js 14, check this: [Next.js 14 Boilerplate](https://github.com/qinsong77/Next-js-Boilerplate/tree/nextjs14-v2)

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
- Turbo for task cache

## Demos

- [loading and streaming UI](./app/loading-and-streaming)
- [table pagination](./app/pagination-demo) RSC + RCC, RCC will update the data

## TODO

- i18n
- ~~E2E test~~
- Zustand, too simplify, maybe RTK or [xstate](https://stately.ai/docs/xstate-react) if needed
- after gpr, run pnpm install automatically
- how to update rsc in client?
  ~~- Update to Next.js 15~~
- How to test, the test strategy/architecture with RSC
- in [table pagination demo](./app/pagination-demo/page.tsx), Suspense fallback will cover table pagination and header when paginate on client, how to show them when request on client
  - Fixed by using [useTransition](https://19.react.dev/reference/react/useTransition), refer: [Preventing unwanted loading indicators ](https://19.react.dev/reference/react/useTransition#preventing-unwanted-loading-indicators)
- ~~Remove `"react-is": "19.0.0-rc-1631855f-20241023"` in `package.json` for support React 19~~
- eslint v9

## Best Practices

- `server-only`, [Keeping Server-only Code out of the Client Environment](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment)

### Practices Refers

- [next authentication](https://www.robinwieruch.de/next-authentication/)
- [How to Set Up Next.js 15 for Production in 2024](https://www.reactsquad.io/blog/how-to-set-up-next-js-15-for-production)

### Good Articles

- [How to fetch data in React [2024]](https://www.robinwieruch.de/react-fetching-data/)
- [Component composition is great btw](https://tkdodo.eu/blog/component-composition-is-great-btw)

## Later Enhancement Libraries

- [nuqs](https://github.com/47ng/nuqs) Type-safe search params state manager for Next.js - Like React.useState, but stored in the URL query string.
- [next-safe-action](https://github.com/TheEdoRan/next-safe-action) Type safe and validated Server Actions in your Next.js project.
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) strict lint rules for a more consistent codebase.

### fancy components

- [shadcn/ui](https://ui.shadcn.com/)
- [MagicUI](https://www.magicui.com/)
- [fancycomponents](https://www.fancycomponents.dev/docs/introduction)
- [reactbits](https://www.reactbits.dev/)

## Know issues

- Standalone building output can't run if copy its folder, cause pnpm `symlink`, `node_module` cant resolve correctly. It can be avoided by installing the package with `node-linker=hoisted` in the pnpm configuration before standalone output.

## Refers

- [Next.js App Router Playground](https://github.com/vercel/app-playground)
- [nodejs.org doc web repo](https://github.com/nodejs/nodejs.org/tree/main)
- [Next.js Full Stack App Architecture Guide](https://arno.surfacew.com/posts/en/nextjs-architecture)

## LLM Guide

- V0
- Cursor

### Cursor

#### Guideline

1. Brainstorm first, code second

Claude/o1 are your best friends here. You should create a whole document containing every single detail of your project.

- core features
- goals & objectives
- tech stack & packages
- project folder structure
- database design
- landing page components
- color palette
- copyrighting
- etc.

All this should be put into an instruction.md (name it however you want) so Cursor can index at any time.

2. Get a `.cursorrules` file

https://docs.cursor.com/context/rules-for-ai#cursorrules

Take an example from:

- https://cursor.directory/
- https://github.com/PatrickJS/awesome-cursorrules

3. Use `v0` for landing page

Get your core features, color palette and components from your `instructions.md` file you got.

Bonus tip is to use screenshots as reference from other landing pages just so v0 gets your idea.

Use component libraries shadcn since v0 works great with it. or with MagicUI.

Remember, you don’t have to get it perfect with v0.

You only need something good enough you can take and edit later in cursor.

4.  Chat vs Composer

Use chat for smaller tasks and for explaining code/commands. Use it to ask questions and navigate your.

Use composer for writing the code, tag your `instructions.md` inside the composer always and tell him to update it as the project progresses.

Only ask composer to do one task at a time. Make it make the changes step by step, if you ask to it to edit multiple files it will hallucinate and you will lose control.

Always verify the code is clean before approving the change.

Save your claude credits for the composer and use gpt-4o-mini with chat.

5. Tag your docs

Copy the documentation for the framework you use.

Go to Cursor Settings > Features > Docs

Paste the links and use them inside chat/composer with `@Docs`

---

## Getting Started

First, run the development server:

```bash
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
