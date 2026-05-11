import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { LanguageProvider } from './language-context'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'BAR | Brew Area Roastery - Premium Specialty Coffee',
    template: '%s | BAR Roastery'
  },
  description: 'Experience the art of artisanal roasting. BAR (Brew Area Roastery) delivers premium specialty coffee from the world’s finest highlands to your cup with uncompromising precision.',
  keywords: ['specialty coffee', 'artisanal roasting', 'coffee roastery', 'premium coffee beans', 'manual brew guide', 'coffee education'],
  authors: [{ name: 'BAR Roastery' }],
  creator: 'BAR Roastery',
  metadataBase: new URL('https://brewamdroastery.com'), // Replace with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brewamdroastery.com',
    title: 'BAR | Brew Area Roastery - Premium Specialty Coffee',
    description: 'Experience the art of artisanal roasting. Premium specialty coffee delivered fresh.',
    siteName: 'BAR Brew Area Roastery',
    images: [
      {
        url: '/logo-bar.jpg',
        width: 1200,
        height: 630,
        alt: 'BAR Brew Area Roastery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAR | Brew Area Roastery',
    description: 'Experience the art of artisanal roasting.',
    images: ['/logo-bar.jpg'],
  },
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
