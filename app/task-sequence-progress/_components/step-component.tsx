import { CircleCheckBig, LoaderCircle } from 'lucide-react'
import { Suspense, use } from 'react'

type Step = {
  title: string
  description: string
  work: Promise<unknown>
}

type StepProps = Step & {
  isLast: boolean
}

export function StepComponent({ title, description, work, isLast }: StepProps) {
  return (
    <li className={`ml-6 ${isLast ? '' : 'mb-10'}`}>
      <span className="absolute -left-4 flex size-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
        <Suspense fallback={<StepIcon status={'in-progress'} />}>
          <Asyncable work={work}>
            <StepIcon status={'done'} />
          </Asyncable>
        </Suspense>
      </span>
      <Suspense fallback={<Title disabled={true}>{title}</Title>}>
        <Asyncable work={work}>
          <Title>{title}</Title>
        </Asyncable>
      </Suspense>
      <p className="text-sm">{description}</p>
    </li>
  )
}

const Asyncable = ({
  work,
  children,
}: {
  work: Promise<unknown>
  children: React.ReactNode
}) => {
  use(work) // tell React to suspend the component until the promise is resolved which will show the nearest fallback component

  return <>{children}</>
}

const Title = ({
  children,
  disabled,
}: {
  children: React.ReactNode
  disabled?: boolean
}) => {
  return (
    <h3
      className={`font-medium leading-tight text-green-500 dark:text-green-400 ${disabled ? 'text-gray-500' : ''}`}
    >
      {children}
    </h3>
  )
}

const StepIcon = ({ status }: { status: 'in-progress' | 'done' }) => {
  return status === 'done' ? (
    <CircleCheckBig
      className="size-6"
      color="green"
    />
  ) : (
    <LoaderCircle
      className="size-6 animate-spin"
      color="gray"
    />
  )
}
