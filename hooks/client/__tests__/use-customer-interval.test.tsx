import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useCustomerInterval } from '@/hooks/client/use-customer-interval'

describe('[hooks] -useCustomerInterval', () => {
  it('should re', async () => {
    const mockFn = vi.fn()
    renderHook(() => useCustomerInterval(mockFn, 200))
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalled()
    })
  })
})
