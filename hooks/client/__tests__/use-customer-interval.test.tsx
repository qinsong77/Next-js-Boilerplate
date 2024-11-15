import { renderHook, waitFor } from '@/__tests__/react-test-utils'
import { useCustomerInterval } from '@/hooks/client/use-customer-interval'

describe('[hooks] -useCustomerInterval', () => {
  it('should re', async () => {
    const mockFunction = vi.fn()
    renderHook(() => useCustomerInterval(mockFunction, 200))
    await waitFor(() => {
      expect(mockFunction).toHaveBeenCalled()
    })
  })
})
