// https://www.nico.fyi/blog/next-js-sequential-tasks-progress-stepper-with-rsc-and-suspense

import { ExternalLink } from '@/components/site-layout'

import { StepComponent } from './_components/step-component'
import { unsafe_createSequentialProcesses } from './utils'

async function firstProcess(id: string) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`First process done for ${id}`), 1000),
  )
}

async function secondProcess(result: unknown) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Second process done after ${result}`), 1500),
  )
}

async function thirdProcess(result: unknown) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Third process done after ${result}`), 2000),
  )
}

export default async function AsyncWorks({
  params: { id },
}: {
  params: { id: string }
}) {
  const [first, second, third] = unsafe_createSequentialProcesses(
    () => firstProcess(id),
    secondProcess,
    thirdProcess,
  )

  return (
    <div className="flex flex-col space-y-4 px-4 py-8">
      <h2 className="py-3 text-lg font-semibold">
        Task Sequence Progress demo{' '}
        <ExternalLink href="https://www.nico.fyi/blog/next-js-sequential-tasks-progress-stepper-with-rsc-and-suspense">
          refer
        </ExternalLink>
      </h2>
      <VerticalSteps>
        <StepComponent
          title="This is process 1"
          description="It starts immediately when the page is loaded. After it finishes, the UI will automatically update and show the green checkmark."
          work={first}
          isLast={false}
        />
        <StepComponent
          title="This is process 2"
          description="This process will run after the first one finishes."
          work={second}
          isLast={false}
        />
        <StepComponent
          title="This is process 3"
          description="While waiting, the component is suspended and shows the loader."
          work={third}
          isLast={true}
        />
      </VerticalSteps>
    </div>
  )
}

const VerticalSteps = ({ children }: { children: React.ReactNode }) => {
  return <ul className="relative">{children}</ul>
}
