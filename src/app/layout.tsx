'use client'

import { Lexend } from 'next/font/google'
import { Providers } from '@/components'

const lexend = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={lexend.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
