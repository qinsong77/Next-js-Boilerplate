import react from '@vitejs/plugin-react'
import path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defaultExclude, defineConfig } from 'vitest/config'

// todo msw: https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/src/mocks/server.ts
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    // css: true,
    coverage: {
      // todo check coverage
      include: ['**/*.test.ts'],
      exclude: ['e2e'],
      reporter: ['text', 'json', 'html'],
    },
    exclude: [...defaultExclude, 'e2e'],
  },
})
