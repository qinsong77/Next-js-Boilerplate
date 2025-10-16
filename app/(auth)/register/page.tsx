'use client'

import { signUpAction } from '@/app/actions/auth'
import Form from 'next/form'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState } from 'react'
import { z } from 'zod'

import { AuthSSO } from '@/components/auth-sso'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  type RegisterFormData,
  type RegisterFormState,
  initialAuthFormState,
  registerSchema,
} from '@/lib/schemas/auth'

const initialState: RegisterFormState = initialAuthFormState<RegisterFormData>()

export default function RegisterPage() {
  const router = useRouter()

  async function registerAction(
    prevState: RegisterFormState,
    formData: FormData,
  ): Promise<RegisterFormState> {
    const rawData = {
      userName: formData.get('userName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    }

    try {
      // Parse and validate form data
      const validatedFields = registerSchema.safeParse(rawData)

      if (!validatedFields.success) {
        return {
          errors: z.flattenError(validatedFields.error).fieldErrors,
          message: 'Please fix the errors above',
          formData: rawData,
        }
      }

      // Call server action
      const result = await signUpAction(formData)

      if (result.error) {
        return {
          errors: {},
          message: result.error,
          formData: rawData,
        }
      }

      // Redirect on success
      router.push('/')
      return {
        errors: {},
        message: '',
        formData: rawData,
      }
    } catch (e: unknown) {
      console.error('Registration error:', e)
      return {
        errors: {},
        message: 'An unexpected error occurred. Please try again.',
        formData: rawData,
      }
    }
  }

  const [state, formAction, isPending] = useActionState(
    registerAction,
    initialState,
  )

  return (
    <div className="mx-auto w-full max-w-xs md:max-w-sm">
      <div className="space-y-6">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-medium">Create an account</h1>
          <p className="text-muted-foreground/80 text-sm">
            Get started with Next.js Boilerplate today
          </p>
        </div>

        <Form
          action={formAction}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2.5">
            <Label htmlFor="userName">Username</Label>

            <Input
              id="userName"
              name="userName"
              className="bg-muted text-md md:text-sm"
              type="text"
              placeholder="johndoe"
              autoComplete="username"
              required
              autoFocus
              defaultValue={state.formData?.userName || ''}
              aria-describedby={
                state.errors?.userName ? 'userName-error' : undefined
              }
            />
            {state.errors?.userName && (
              <p
                id="userName-error"
                className="text-sm text-red-600"
              >
                {state.errors.userName.join(' ')}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="email">Email Address</Label>

            <Input
              id="email"
              name="email"
              className="bg-muted text-md md:text-sm"
              type="email"
              placeholder="user@example.com"
              autoComplete="email"
              required
              defaultValue={state.formData?.email || ''}
              aria-describedby={state.errors?.email ? 'email-error' : undefined}
            />
            {state.errors?.email && (
              <p
                id="email-error"
                className="text-sm text-red-600"
              >
                {state.errors.email.join(' ')}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              name="password"
              className="bg-muted text-md md:text-sm"
              type="password"
              placeholder="At least 6 characters"
              required
              defaultValue={state.formData?.password || ''}
              aria-describedby={
                state.errors?.password ? 'password-error' : undefined
              }
            />
            {state.errors?.password && (
              <p
                id="password-error"
                className="text-sm text-red-600"
              >
                {state.errors.password.join(' ')}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <Input
              id="confirmPassword"
              name="confirmPassword"
              className="bg-muted text-md md:text-sm"
              type="password"
              placeholder="Re-enter your password"
              required
              defaultValue={state.formData?.confirmPassword || ''}
              aria-describedby={
                state.errors?.confirmPassword
                  ? 'confirmPassword-error'
                  : undefined
              }
            />
            {state.errors?.confirmPassword && (
              <p
                id="confirmPassword-error"
                className="text-sm text-red-600"
              >
                {state.errors.confirmPassword.join(' ')}
              </p>
            )}
          </div>

          {state.message && !state.success && (
            <p className="text-sm text-red-600">{state.message}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? 'Creating account...' : 'Create account'}
          </Button>
        </Form>

        <AuthSSO />

        <div className="space-y-4 pt-6">
          <p className="text-muted-foreground/60 text-center text-[11px] leading-relaxed">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>

          <p className="text-muted-foreground text-center text-sm">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
