import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from './components/site-header'
import { portfolioSections } from '../data/portfolio'

const featured: Record<string, string[]> = {
  research: ['Published AI and sustainability research', 'Original accessibility, science, and medical AI systems'],
  leadership: ['130+ students reached through AI workshops', '161.5 verified service hours'],
  academics: ['USACO Platinum and USAAIO National Bronze', 'iGEM Global First Runner-up'],
  creative: ['MTNA National Piano Duet 1st place', 'Carnegie Hall Winner Recital'],
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-intro" aria-labelledby="home-title">
        <div className="intro-block">
          <p className="eyebrow">Student / Researcher / Builder / Musician</p>
          <h1 id="home-title">Forest Young<span className="accent-dot">.</span></h1>
          <p className="intro-copy">A high school portfolio focused on research, leadership, STEM projects, music, and service.</p>
        </div>
        <div className="intro-actions">
          <Link className="primary-action" href="/portfolio">View full portfolio <ArrowUpRight aria-hidden="true" /></Link>
          <a className="jump-link" href="#achievements">Four categories <ArrowDownRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="achievement-overview" id="achievements" aria-labelledby="achievement-title">
        <div className="overview-heading">
          <div>
            <p className="eyebrow">Start with the big picture</p>
            <h2 id="achievement-title">Four achievement areas</h2>
          </div>
          <Link className="text-link" href="/about">About Forest <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="achievement-grid">
          {portfolioSections.map((section) => (
            <article className={`achievement-card tone-${section.id}`} key={section.id}>
              <div className="achievement-card-top">
                <span>{section.number}</span>
                <span className="card-count">{section.entries.length} entries</span>
              </div>
              <h3>{section.label}</h3>
              <p className="card-intro">{section.intro}</p>
              <ul>
                {featured[section.id].map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href={`/portfolio#${section.id}`} className="card-link">
                Open category <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-note">
        <p className="eyebrow">Portfolio note</p>
        <p>The full portfolio is now its own page with a readable index, not a dropdown inside a dropdown. About Me is also a separate page.</p>
        <Link className="text-link" href="/portfolio">Read the full record <ArrowUpRight aria-hidden="true" /></Link>
      </section>
      <SiteFooter />
    </main>
  )
}
