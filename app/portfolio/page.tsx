import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/site-header'
import { education, portfolioSections } from '../../data/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | Forest Young',
  description: 'Research, education, leadership, competition results, projects, music, and service by Forest Young.',
}

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <div className="portfolio-layout">
        <aside className="portfolio-index" aria-label="Portfolio contents">
          <p className="eyebrow">Contents</p>
          <a href="#education">Education</a>
          {portfolioSections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.number} / {section.label}</a>)}
        </aside>
        <article className="portfolio-content">
          <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Back to achievements</Link>
          <header className="page-heading portfolio-heading">
            <p className="eyebrow">Selected work, in full</p>
            <h1>Portfolio<span className="accent-dot">.</span></h1>
            <p className="page-lede">A detailed record of my education, research, leadership, competitions, projects, music, and service.</p>
          </header>

          <section className="portfolio-section education-section" id="education">
            <div className="portfolio-section-heading"><span className="section-number">00</span><div><p className="eyebrow">Academic foundation</p><h2>Education</h2></div></div>
            <div className="portfolio-entries">
              {education.map((entry) => (
                <article className="portfolio-entry" key={entry.title}>
                  <h3>{entry.title}</h3>
                  <p className="entry-meta">{entry.meta}</p>
                  {entry.body.map((line) => <p className="entry-copy" key={line}>{line}</p>)}
                </article>
              ))}
            </div>
          </section>

          {portfolioSections.map((section) => (
            <section className={`portfolio-section detail-${section.id}`} id={section.id} key={section.id}>
              <div className="portfolio-section-heading"><span className="section-number">{section.number}</span><div><p className="eyebrow">{section.intro}</p><h2>{section.label}</h2></div></div>
              <div className="portfolio-entries">
                {section.entries.map((entry) => (
                  <article className="portfolio-entry" key={entry.title}>
                    <h3>{entry.title}</h3>
                    {entry.meta && <p className="entry-meta">{entry.meta}</p>}
                    {entry.body.map((line) => <p className="entry-copy" key={line}>{line}</p>)}
                  </article>
                ))}
              </div>
            </section>
          ))}
          <p className="portfolio-endnote">Supporting links, images, and documents can be added to each entry as they're ready.</p>
          <Link className="text-link portfolio-home-link" href="/">Return to achievements <ArrowUpRight aria-hidden="true" /></Link>
        </article>
      </div>
      <SiteFooter />
    </main>
  )
}
