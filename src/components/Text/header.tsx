import type { ReactElement } from "react"
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  weight: ['300'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Header({ children }: any): ReactElement {
  return (
    <h1 className={`${figtree.className} text-2xl text-dusk-black-900 dark:text-dusk-white mb-10`}>
      { children }
    </h1>
  )
}