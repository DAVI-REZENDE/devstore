import { PropsWithChildren, Suspense } from 'react'

export default function LayoutSearch({ children }: PropsWithChildren) {
  return <Suspense>{children}</Suspense>
}
