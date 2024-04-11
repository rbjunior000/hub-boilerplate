import { useRouter as NextUseRouter } from 'next/navigation'

type UseRouterProps = {
  push: (url: string) => void
  replace: (url: string) => void
  back: () => void
  prefetch: (url: string) => void
  forward: () => void
  refresh: () => void
}

export const useRouter = (): UseRouterProps => {
  const nextRouter = NextUseRouter()

  const router: UseRouterProps = {
    push: nextRouter.push,
    replace: nextRouter.replace,
    back: nextRouter.back,
    prefetch: nextRouter.prefetch,
    forward: nextRouter.forward,
    refresh: nextRouter.refresh,
  }
  return router
}
