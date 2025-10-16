export type User = {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
}

export type Session = {
  id: string
  userId: string
  expiresAt: Date
  user?: User
}

export type AuthSession = {
  user: User | null
  session: Session | null
}
