import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import './styles/main.scss'
import type { Metadata } from 'next'
import ToasterProvider from '@/components/ToasterProvider'

export const metadata: Metadata = {
  title: 'Axle Gaming',
  description: 'Empowering Gamers and Revolutionizing Gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          {children}

          <ToasterProvider/>
        </ThemeProvider>
      </body>
    </html>
  )
}
