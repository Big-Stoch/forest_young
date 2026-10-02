import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forest Young | Portfolio',
  description: 'A living portfolio of research, service, STEM, and music by Forest Young.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
