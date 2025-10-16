import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z
  .object({
    userName: z.string().min(2, 'Username must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>

export type LoginFormState = {
  errors?: Partial<Record<keyof LoginFormData, string[]>>
  message?: string
  success?: boolean
  formData?: Partial<LoginFormData>
}

export type RegisterFormState = {
  errors?: Partial<Record<keyof RegisterFormData, string[]>>
  message?: string
  success?: boolean
  formData?: Partial<RegisterFormData>
}

export function initialAuthFormState<T>(): {
  errors?: Partial<Record<keyof T, string[]>>
  message?: string
  success?: boolean
  formData?: Partial<T>
} {
  return {
    errors: {},
    message: '',
    success: false,
    formData: undefined,
  }
}
