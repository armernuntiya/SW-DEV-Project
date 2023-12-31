import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopMenu from '@/components/TopMenu'
import NextAuthProvider from '@/providers/NextAuthProvider'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EatEase'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (

    
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <TopMenu/>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
