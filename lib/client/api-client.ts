/**
 * https://github.com/SurfaceW/arno-packages/blob/main/client/api-client/api-client.ts
 */
import { stringifyObjectSafe } from '@/lib/shared'

function processResponse(response: {
  success: boolean
  message?: boolean
  content: unknown
}) {
  if (response.success) {
    return response.content
  }
  return Promise.reject('fetch error: ' + response.message)
}

async function processErrorContent(response: Response) {
  return `Response Error:[${response.status}][${response.statusText}]:${await response.text()}`
}

/**
 * fetch encapsulation for biz-call
 *
 * - general api client, with error handling inset
 * - RESTful api client design
 *
 * @description work with server-side success / fail response error-code and etc.
 */
export const api = {
  async get<Response = unknown>(
    requestUrl: string,
    searchParameters?: URLSearchParams,
    options?: RequestInit,
  ) {
    const search = searchParameters?.toString() || ''
    const response = await fetch(`${requestUrl}${search ? `?${search}` : ''}`, {
      ...options,
    })
    if (!response.ok) {
      throw await processErrorContent(response)
    }
    const r = await response.json()
    return processResponse(r) as Response
  },

  async post<P = unknown, R = unknown>(
    requestUrl: string,
    body: P,
    options?: RequestInit,
  ) {
    const response = await fetch(requestUrl, {
      method: 'POST',
      body: stringifyObjectSafe(body),
      ...options,
    })
    if (!response.ok) {
      throw await processErrorContent(response)
    }
    const r = await response.json()
    return processResponse(r) as R
  },

  async patch<P = unknown, R = unknown>(
    requestUrl: string,
    body: P,
    options?: RequestInit,
  ) {
    const response = await fetch(requestUrl, {
      method: 'PATCH',
      body: stringifyObjectSafe(body),
      ...options,
    })
    if (!response.ok) {
      throw await processErrorContent(response)
    }
    const r = await response.json()
    return processResponse(r) as R
  },

  async postStream<P = unknown>(
    requestUrl: string,
    body: P,
    options?: RequestInit,
  ) {
    const response = await fetch(requestUrl, {
      method: 'POST',
      body: stringifyObjectSafe(body),
      ...options,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw await processErrorContent(response)
        }
        return response
      })
      .catch((error) => {
        throw error?.message || error?.toString() || stringifyObjectSafe(error)
      })
    return response
  },

  async put<T, Resource>(requestUrl: string, data: T, options?: RequestInit) {
    const response = await fetch(requestUrl, {
      method: 'PUT',
      body: stringifyObjectSafe(data),
      ...options,
    })
    if (!response.ok) {
      throw await processErrorContent(response)
    }
    const r = await response.json()
    return processResponse(r) as Resource
  },

  /**
   * @description general delete method
   * - requestUrl
   * - searchStr request searchParams e.g. `id=1&ame=2`
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async delete<P, R>(
    requestUrl: string,
    searchString?: string,
    options?: RequestInit,
  ) {
    const response = await fetch(
      `${requestUrl}${searchString ? '?' : ''}${searchString || ''}`,
      {
        method: 'DELETE',
        ...options,
      },
    )
    if (!response.ok) {
      throw await processErrorContent(response)
    }
    const r = await response.json()
    return processResponse(r) as R
  },
}
/**
 * alias for api
 */
export const apiClient = api
