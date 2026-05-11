import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { LanguageProvider } from './language-context'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BAR | Brew Area Roastery - Premium Specialty Coffee',
  description: 'Discover artisanal specialty coffee from BAR. Freshly roasted beans with exceptional flavor profiles. Order premium coffee online.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-bar.jpg',
    apple: '/logo-bar.jpg',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SplashScreen } from '@/components/splash-screen'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background">
        <LanguageProvider>
          <SplashScreen />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
