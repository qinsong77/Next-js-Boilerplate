import { TypingAnimation } from '@/components/ui/typing-animation'

const orgText = 'React 19 & Next.js 15'
export const TextSplitter = () => {
  return (
    <>
      <h1 className="min-h-28 text-2xl leading-relaxed font-bold md:text-3xl 2xl:text-4xl">
        This is a Next.js Boilerplate
        <br />
        Base on{' '}
        <TypingAnimation
          words={[orgText]}
          cursorStyle="underscore"
          loop
        />
      </h1>
    </>
  )
}
