'use client'

import { useState } from 'react'
import { ChevronDown, Mail, Menu, X } from 'lucide-react'

const sections = [
  { id: 'research', label: 'Research', kicker: '01', tone: 'sage', intro: 'Turning complex questions into useful, evidence-based work.', items: [
    ['NanoVLM', 'Published · 2026', 'A vision-language model for electron microscopy characterization, validated on 12,847 annotated images with 90.2% defect classification accuracy.'],
    ['Sustainable Olympic Events', 'Published · 2025', 'Built a hybrid AHP, EWM, and Natural Breaks model across 132 years of Olympic history, 47 events, and 987 samples.'],
    ['Computerpreter', 'Copyright registered · 2026', 'A multimodal ASL translation system using Random Forests, LSTMs, temporal convolutional networks, and Transformers.'],
  ]},
  { id: 'leadership', label: 'Leadership & Service', kicker: '02', tone: 'peach', intro: 'Making technical learning and communication more accessible.', items: [
    ['Salt Lake AI & App Collective', 'Co-Founder & President', 'Built a nationwide student AI education community, organized a 130+ participant workshop, and co-judged a student AI championship.'],
    ['Frontlines Summer Policy Fellowship', 'Salt Lake City Chapter Director', 'Led outreach and fellow training while authoring a policy brief on AI and rural healthcare equity.'],
    ['STEM access through ASL', 'Community education', 'Produced four ASL-interpreted STEM laboratory videos and partnered with Sorenson to expand real-world testing.'],
  ]},
  { id: 'stem', label: 'STEM Achievements', kicker: '03', tone: 'blue', intro: 'Competing, building, and learning across computer science, math, biology, chemistry, and physics.', items: [
    ['AI & Computing', 'National and international', 'USAAIO National Bronze Medal; USACO Platinum; Presidential AI Challenge Utah and West Region Champion; CAC National 2nd Place.'],
    ['iGEM 2025', 'Student Team Leader', 'Led human practices, community outreach, commercialization, and final defenses in Paris. Global First Runner-up and Gold Medal.'],
    ['Mathematics & Sciences', 'Olympiads and fairs', 'USAMO/USAJMO finalist, AIME qualifier, Physics Bowl Global Tied 1st, USNCO National High Honors, and USEF placements.'],
  ]},
  { id: 'creative', label: 'Music & Humanities', kicker: '04', tone: 'lilac', intro: 'A creative practice that keeps my work human, expressive, and connected.', items: [
    ['Piano', 'National 1st place · MTNA 2025', 'Utah 1st place, Southwest Region 1st place, and National 1st place in piano duet; WPTA International Gold Award.'],
    ['Languages & culture', 'Chinese and ASL', 'Chinese-language speech honors, ASL Literature Competition 1st place, and Utah ASL State Competition wins.'],
  ]},
]

const headlineAchievements = ['USACO Platinum', 'iGEM Global First Runner-up', 'USAAIO National Bronze', 'MTNA National 1st Place']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState<string | null>('research')
  return <main>
    <header className="topbar">
      <a className="brand" href="#top"><span>FY</span><div><strong>Forest Young</strong><small>Student portfolio · 2026</small></div></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
        <a href="#highlights" onClick={() => setMenuOpen(false)}>Highlights</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Explore work</a>
      </nav>
      <a className="contact" href="mailto:annyniu1970@gmail.com"><Mail /> Say hello</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Student · Researcher · Builder · Musician</p>
        <h1>Forest Young<span className="period">.</span></h1>
        <p className="hero-statement">I build things that make difficult ideas more useful, more accessible, and more human.</p>
        <div className="hero-meta"><span>Skyline High School</span><span>Salt Lake City, Utah</span></div>
      </div>
      <div className="achievement-panel" id="highlights">
        <p className="eyebrow">Start here</p><h2>Selected achievements</h2>
        <div className="achievement-list">{headlineAchievements.map((achievement, index) => <div className="achievement" key={achievement}><span>0{index + 1}</span><strong>{achievement}</strong></div>)}</div>
        <a className="panel-link" href="#work">See the full story <ChevronDown /></a>
      </div>
    </section>

    <section className="about" id="about"><div className="about-label"><p className="eyebrow">About me</p><span>01</span></div><div><h2>Curiosity, made useful.</h2><p>I am a high school student exploring the space where artificial intelligence, science, accessibility, and creative expression meet. My portfolio is organized around the questions I care about and the work I have made in response.</p></div></section>

    <section className="work" id="work"><div className="section-intro"><p className="eyebrow">Explore my work</p><h2>Choose a chapter.</h2><p>Open a category to see the projects, competitions, and communities behind each achievement.</p></div><div className="category-list">{sections.map(section => <article className={`category ${section.tone}`} id={section.id} key={section.id}><button className="category-head" onClick={() => setOpen(open === section.id ? null : section.id)} aria-expanded={open === section.id}><span className="category-number">{section.kicker}</span><span className="category-title"><strong>{section.label}</strong><small>{section.intro}</small></span><ChevronDown className={open === section.id ? 'rotated' : ''} /></button>{open === section.id && <div className="category-items">{section.items.map(([title, meta, text]) => <div className="story" key={title}><div><h3>{title}</h3><p className="story-meta">{meta}</p></div><p>{text}</p></div>)}</div>}</article>)}</div></section>

    <footer><strong>Forest Young</strong><span>Research · service · STEM · music</span><a href="mailto:annyniu1970@gmail.com">Get in touch</a></footer>
  </main>
}

