import type { Metadata, Viewport } from 'next'
import { Outfit, Righteous, Caveat } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const righteous = Righteous({ 
  subsets: ["latin"],
  weight: '400',
  variable: '--font-righteous',
  display: 'swap',
})

const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Custom & Print Ghana | Design Your Own T-Shirts, Mugs & More',
  description: "Ghana's #1 online design studio. Create custom t-shirts, hoodies, mugs, hats, and tote bags. You design, we print and deliver in Accra.",
  keywords: ['custom printing', 'ghana', 'accra', 't-shirt printing', 'custom mugs', 'hoodies', 'design studio'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${righteous.variable} ${caveat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
