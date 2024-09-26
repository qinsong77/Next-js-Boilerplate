// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ProcessEnv {
    DB_HOST: string
    DB_USER: string
    DB_PASSWORD: string

    // prefix with `NEXT_PUBLIC_` will replace at build time, into the js bundle, to the client/browser
    NEXT_PUBLIC_API_URL: string
  }
}
