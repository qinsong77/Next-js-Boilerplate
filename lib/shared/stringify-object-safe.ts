export const stringifyObjectSafe = (
  object: object | unknown,
  ...arguments_: never[]
) => {
  if (typeof object === 'string') return object
  try {
    return JSON.stringify(object, ...arguments_)
  } catch (error) {
    console.error('stringify error: %o', error)
    return ''
  }
}
