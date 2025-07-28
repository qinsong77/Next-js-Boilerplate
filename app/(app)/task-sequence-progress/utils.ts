export function unsafe_createSequentialProcesses<T extends unknown[], R>(
  ...processes: [
    (argument?: unknown) => Promise<T[0]>,
    ...((argument: unknown) => Promise<unknown>)[],
  ]
): Promise<R>[] {
  return processes.reduce((accumulator, process, index) => {
    if (index === 0) {
      return [process(index)]
    }
    return [...accumulator, accumulator.at(-1)!.then(process)]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [] as Promise<any>[])
}
