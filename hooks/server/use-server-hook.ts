const useServerHook = () => {
  throw new Error('Attempted to call useMediaQuery from RSC')
}

export default useServerHook
