import type { Metadata } from 'next'
import { Inter, Raleway, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIWA Health',
  description: 'Empowering healthcare providers with cutting-edge technology solutions that streamline operations, improve patient care, and drive better outcomes.',
  icons: {
    icon: '/favicon-aiwa.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}