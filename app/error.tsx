'use client'

import React from 'react'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <svg
            className="mx-auto h-16 w-16 text-red-500 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>

          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Something went wrong
          </h1>

          <p className="text-muted-foreground">
            We encountered an unexpected error while processing your request
          </p>
        </div>

        <div className="mx-auto max-w-md space-y-3 text-left">
          <p className="text-muted-foreground text-sm font-medium">
            Error details:
          </p>
          <div className="bg-muted/50 rounded-md p-4">
            <code className="text-foreground/80 block text-sm break-words">
              {error?.message || 'An unknown error occurred'}
            </code>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={() => reset()}
            size="lg"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
            size="lg"
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}
