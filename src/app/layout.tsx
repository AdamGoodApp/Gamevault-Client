import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Providers } from "./providers";
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Dam Good Gamevault',
  description: 'Play games. Have fun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white dark:bg-dusk-black-900'>
      <Script id="theme">
        {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
      </Script>

      <body className={`${inter.className}bg-white dark:bg-dusk-black-900`}>
        <Providers>
          <main className="min-h-screen overflow-hidden bg-white dark:bg-dusk-black-900 text-dusk-black-900 dark:text-dusk-white" >
            <Nav />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
