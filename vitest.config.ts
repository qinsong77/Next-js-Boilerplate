import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defaultExclude, defineConfig } from 'vitest/config'

// todo msw: https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/src/mocks/server.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
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
    },
    exclude: [...defaultExclude, 'e2e'],
  },
})
