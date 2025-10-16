import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

import { AppProvider } from '@/components/providers'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) =>
  render(ui, {
    wrapper: ({ children }) => <AppProvider>{children}</AppProvider>,
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
