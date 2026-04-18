import './globals.css'

export const metadata = {
  title: 'Cogniq AI - Intelligent AI Solutions',
  description: 'Building Intelligent, scalable AI solutions for the Next Generation. Your premier AI & Software engineering partner.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
