export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
}

export const AUTH_ROUTES = ['/login', '/register']
export const PUBLIC_API_ROUTES = ['/api/auth']

export const isProductionEnvironment = process.env.NODE_ENV === 'production'
export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development'
