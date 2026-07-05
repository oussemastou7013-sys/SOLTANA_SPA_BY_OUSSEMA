import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  variable: '--font-heading',
  subsets: ['latin']
})

const lato = Lato({ 
  weight: ['300', '400', '700'],
  variable: '--font-body',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Spa Sultana - Premium Beauty Salon in Bizerte, Tunisia',
  description: 'Luxury beauty salon offering professional skincare, spa treatments, bridal beauty, and premium beauty services in Bizerte, Tunisia.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5E6D3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lato.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
