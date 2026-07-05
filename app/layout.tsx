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
  title: 'Spa Sultana - Salon de Beaute Premium a Bizerte',
  description: 'Salon de beaute haut de gamme a Bizerte, Tunisie. Soins spa, hammam, massage, epilation, coiffure et rituels de beaute dans un cadre luxueux.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#F5E6D3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${lato.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
