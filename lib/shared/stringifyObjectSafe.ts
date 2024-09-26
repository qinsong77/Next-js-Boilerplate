export const stringifyObjectSafe = (
  obj: object | unknown,
  ...args: never[]
) => {
  if (typeof obj === 'string') return obj
  try {
    return JSON.stringify(obj, ...args)
  } catch (e) {
    console.error('stringify error: %o', e)
    return ''
  }
}
