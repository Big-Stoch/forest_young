import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Forest Young, home">
        <span className="brand-mark">FY</span>
        <span className="brand-copy"><strong>Forest Young</strong><small>Skyline High School · Salt Lake City, Utah</small></span>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="/">Achievements</Link>
        <Link href="/about">About Me</Link>
        <Link href="/portfolio">Portfolio</Link>
      </nav>
      <a className="contact-link" href="mailto:annyniu1970@gmail.com">
        <Mail aria-hidden="true" /> <span>Contact</span> <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-name">Forest Young</Link>
      <span>Research · service · STEM · music</span>
      <a href="mailto:annyniu1970@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" /></a>
    </footer>
  )
}
