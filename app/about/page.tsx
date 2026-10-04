import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/site-header'

export const metadata: Metadata = {
  title: 'About Me | Forest Young',
  description: 'About Forest Young, a student, researcher, builder, and musician in Salt Lake City, Utah.',
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <article className="about-page">
        <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Back to achievements</Link>
        <header className="page-heading about-heading">
          <p className="eyebrow">A first introduction</p>
          <h1>About me<span className="accent-dot">.</span></h1>
          <p className="page-lede">I'm Forest, a student at Skyline High School in Salt Lake City, Utah. I'm drawn to questions that sit between fields, especially where technology, science, accessibility, and creative expression meet.</p>
        </header>
        <div className="about-columns">
          <section>
            <span className="small-index">01 / What I'm curious about</span>
            <h2>Ideas that travel beyond one subject.</h2>
            <p>My work moves between artificial intelligence, biomedical research, accessibility, and the humanities. I enjoy learning the technical details, then asking how an idea might be tested, communicated, or made more useful to someone else.</p>
          </section>
          <section>
            <span className="small-index">02 / How I like to work</span>
            <h2>Build, question, share.</h2>
            <p>Research gives me a way to investigate difficult questions; projects turn those questions into something people can try. Teaching, service, collaboration, and music keep that work connected to community.</p>
          </section>
        </div>
        <section className="about-signoff">
          <p className="eyebrow">A work in progress</p>
          <p>This is the first sketch. I'll add the more personal stories, interests, and small details here as the portfolio grows.</p>
          <Link className="text-link" href="/portfolio">Explore my work <ArrowUpRight aria-hidden="true" /></Link>
        </section>
      </article>
      <SiteFooter />
    </main>
  )
}
