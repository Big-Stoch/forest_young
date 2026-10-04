import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Forest Young | Student Portfolio',
  description: 'Research, leadership, STEM, music, and service by Forest Young.',
=======
  title: 'Forest Young | Achievements & Portfolio',
  description: 'Explore Forest Young’s research, leadership, STEM achievements, music, and service.',
>>>>>>> b46af2d (updating my existing website pages)
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
