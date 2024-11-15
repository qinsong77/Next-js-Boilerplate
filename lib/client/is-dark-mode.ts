export const isDarkMode = () =>
  globalThis.matchMedia &&
  globalThis.matchMedia('(prefers-color-scheme: dark)').matches
