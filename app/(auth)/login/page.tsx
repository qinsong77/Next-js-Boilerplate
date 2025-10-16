'use client'

import { signInAction } from '@/app/actions/auth'
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
  type LoginFormData,
  type LoginFormState,
  initialAuthFormState,
  loginSchema,
} from '@/lib/schemas/auth'

const initialState: LoginFormState = initialAuthFormState<LoginFormData>()

export default function LoginPage() {
  const router = useRouter()

  async function loginAction(
    prevState: LoginFormState,
    formData: FormData,
  ): Promise<LoginFormState> {
    const rawData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    try {
      // Parse and validate form data
      const validatedFields = loginSchema.safeParse(rawData)

      if (!validatedFields.success) {
        return {
          errors: z.flattenError(validatedFields.error).fieldErrors,
          message: 'Please fix the errors above',
          formData: rawData,
        }
      }

      // Call server action
      const result = await signInAction(formData)

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
        success: true,
        message: '',
        formData: rawData,
      }
    } catch (e: unknown) {
      console.error('Login error:', e)
      return {
        errors: {},
        message: 'An unexpected error occurred. Please try again.',
        formData: rawData,
      }
    }
  }

  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  )

  return (
    <div className="mx-auto w-full max-w-xs md:max-w-sm">
      <div className="space-y-6">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-medium">Welcome back</h1>
          <p className="text-muted-foreground/80 text-sm">
            Sign in to your account to continue
          </p>
        </div>

        <Form
          action={formAction}
          className="flex flex-col gap-4"
        >
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
              autoFocus
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
              required
              autoComplete="current-password"
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

          {state.message && !state.success && (
            <p className="text-sm text-red-600">{state.message}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? 'Signing in...' : 'Sign in'}
          </Button>
        </Form>

        <AuthSSO />

        <div className="space-y-4 pt-6">
          <div className="bg-muted/30 border-border rounded-lg border p-4">
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Demo Account
            </p>
            <p className="text-foreground/80 text-sm">
              Email: <code className="text-xs">demo@example.com</code>
            </p>
            <p className="text-foreground/80 text-sm">
              Password: <code className="text-xs">any password</code>
            </p>
          </div>

          <p className="text-muted-foreground text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
