import './globals.css'
import { Metadata } from 'next'

export const metadata = {
  title: 'Cogniq AI - Intelligent AI Solutions',
  description: 'Building Intelligent, scalable AI solutions for the Next Generation. Your premier AI & Software engineering partner.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
