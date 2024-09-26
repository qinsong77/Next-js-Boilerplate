export function unsafe_createSequentialProcesses<T extends unknown[], R>(
  ...processes: [
    (arg?: unknown) => Promise<T[0]>,
    ...((arg: unknown) => Promise<unknown>)[],
  ]
): Promise<R>[] {
  return processes.reduce((acc, process, index) => {
    if (index === 0) {
      return [process(undefined)]
    }
    return [...acc, acc[acc.length - 1].then(process)]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [] as Promise<any>[])
}
