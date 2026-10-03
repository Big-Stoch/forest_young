import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forest Young | Student Portfolio',
  description: 'Research, leadership, STEM, music, and service by Forest Young.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
