import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: '✦',
    title: 'Botanical Purity',
    description: 'Every ingredient is sourced from certified organic farms and ethical wild-craft suppliers. We trace each botanical from its origin to the final formulation.',
  },
  {
    icon: '◈',
    title: 'Scientific Rigour',
    description: 'Our formulations are developed in partnership with leading dermatologists and biochemists. Efficacy is never an afterthought — it is the foundation.',
  },
  {
    icon: '❋',
    title: 'Sensorial Artistry',
    description: 'Beauty should be a pleasure. Each product is crafted to engage the senses fully — texture, scent, and feel are as considered as the active ingredients.',
  },
  {
    icon: '◎',
    title: 'Enduring Elegance',
    description: 'We believe in timelessness over trends. Our packaging is refillable, our formulas are perennial, and our aesthetic endures beyond any season.',
  },
]

const certifications = [
  {
    name: 'COSMOS Organic',
    body: 'Ecocert',
    description: 'Certified organic cosmetics standard verifying the use of natural and organic ingredients with respect to human health and the environment.',
  },
  {
    name: 'Leaping Bunny',
    body: 'Cruelty Free International',
    description: 'The globally recognised gold standard certification confirming that no animal testing occurs at any stage of product development.',
  },
  {
    name: 'B Corp Certified',
    body: 'B Lab Global',
    description: 'Awarded to companies meeting the highest standards of social and environmental performance, transparency, and accountability.',
  },
  {
    name: 'Vegan Society',
    body: 'The Vegan Society',
    description: 'Certifying that all Velmora products are entirely free from animal derivatives and are not tested on animals at any stage.',
  },
]

const sustainabilityPillars = [
  {
    title: 'Refill Programme',
    description: 'Every Velmora product can be refilled at our boutique or via our postal refill service, reducing packaging waste by up to 90%.',
    stat: '90% less packaging waste',
  },
  {
    title: 'Carbon Neutral Shipping',
    description: 'We offset 120% of our shipping emissions through verified carbon removal projects and ship exclusively in recycled, compostable materials.',
    stat: '120% emissions offset',
  },
  {
    title: 'Regenerative Sourcing',
    description: 'Our partner farms practise regenerative agriculture, actively rebuilding soil health and biodiversity with every harvest cycle.',
    stat: '14 regenerative farms',
  },
]

export default function About() {
  return (
    <div className="about-page">

      {/* ── Page Hero ── */}
      <section className="page-hero about-hero">
        <div className="about-hero__bg"></div>
        <div className="container about-hero__content">
          <span className="overline">Our Story</span>
          <h1 className="about-hero__title">
            A Philosophy of<br />
            <em>Conscious Luxury</em>
          </h1>
          <div className="divider"></div>
          <p className="about-hero__lead">
            Velmora was born from a belief that the most powerful beauty rituals honour both the woman and the world she inhabits.
          </p>
        </div>
      </section>

      {/* ── Brand Philosophy ── */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <span className="overline">Our Belief</span>
              <h2 className="philosophy-title">
                Beauty as a<br /><em>Daily Ceremony</em>
              </h2>
              <div className="divider divider-left"></div>
              <p>
                We exist at the intersection of botanical science and sensorial artistry. Our conviction is simple: that the most effective skincare is also the most luxurious, and that caring for yourself deeply is an act of profound self-respect.
              </p>
              <p>
                Velmora does not follow trends. We follow the rhythms of nature and the needs of the skin — formulating products that work with the body's innate intelligence rather than against it. Every drop is an invitation to slow down, to be present, and to treat the ritual of beauty as the ceremony it deserves to be.
              </p>
              <p>
                This is luxury redefined: not as excess, but as intention. Not as price, but as purity. Not as spectacle, but as substance.
              </p>
            </div>
            <div className="philosophy-visual">
              <div className="philosophy-card philosophy-card--1">
                <span className="philosophy-card__word">Purity</span>
              </div>
              <div className="philosophy-card philosophy-card--2">
                <span className="philosophy-card__word">Ritual</span>
              </div>
              <div className="philosophy-card philosophy-card--3">
                <span className="philosophy-card__word">Grace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section values-section">
        <div className="container">
          <div className="text-center">
            <span className="overline">What We Stand For</span>
            <h2 className="section-title">Our Four Pillars</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Each product we create is shaped by four non-negotiable commitments.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <article key={v.title} className="value-card">
                <div className="value-card__icon" aria-hidden="true">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Story ── */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-layout">
            <div className="founder-portrait">
              <div className="founder-portrait__frame">
                <div className="founder-portrait__img"></div>
                <div className="founder-portrait__quote-mark" aria-hidden="true">"</div>
              </div>
            </div>
            <div className="founder-text">
              <span className="overline">The Founder</span>
              <h2 className="founder-title">Celeste Langford</h2>
              <p className="founder-subtitle">Botanist, Perfumer & Founder</p>
              <div className="divider divider-left"></div>
              <p>
                Before founding Velmora, Celeste spent over a decade researching plant biochemistry at the Royal Botanic Gardens, Kew. Her academic rigour, combined with her passion for the sensory traditions of French apothecary culture, led her to a revelation: the most extraordinary skincare already existed in nature — it simply needed to be listened to.
              </p>
              <p>
                "I wanted to create something that my grandmother would have recognised — formulas built on plants she knew, in textures that felt like gifts. But with everything we know today about how the skin actually works."
              </p>
              <p>
                In 2018, Celeste launched Velmora from a small laboratory above her London townhouse. Six years later, the brand is stocked in the finest boutiques across Europe — but the laboratory, and the intention, remain the same.
              </p>
              <blockquote className="founder-pullquote">
                "Luxury is not about rarity. It is about reverence — for ingredients, for the woman who uses them, and for the world from which they come."
                <cite>— Celeste Langford</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section className="section sustainability-section">
        <div className="container">
          <div className="text-center">
            <span className="overline">Our Commitment</span>
            <h2 className="section-title">Beauty with Conscience</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Sustainability is not a marketing position. It is a daily practice embedded in every decision we make.
            </p>
          </div>
          <div className="sustainability-pillars">
            {sustainabilityPillars.map((p) => (
              <article key={p.title} className="sustainability-card">
                <div className="sustainability-card__stat">{p.stat}</div>
                <h3 className="sustainability-card__title">{p.title}</h3>
                <p className="sustainability-card__desc">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section certifications-section">
        <div className="container">
          <div className="text-center">
            <span className="overline">Verified Standards</span>
            <h2 className="section-title">Our Certifications</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Our claims are not aspirations. They are independently verified commitments.
            </p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="cert-card">
                <div className="cert-card__badge" aria-hidden="true">✓</div>
                <div className="cert-card__body">
                  <h4 className="cert-card__name">{cert.name}</h4>
                  <p className="cert-card__body-text">{cert.body}</p>
                  <p className="cert-card__desc">{cert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="about-cta-bg"></div>
        <div className="container about-cta-inner">
          <span className="overline">Begin Your Ritual</span>
          <h2 className="about-cta-title">
            Experience<br /><em>Velmora</em>
          </h2>
          <div className="divider"></div>
          <p className="about-cta-desc">
            Browse our collections and discover the ritual that was made for you.
          </p>
          <div className="about-cta-btns">
            <Link to="/products" className="btn btn-primary">Explore Collections</Link>
            <Link to="/contact" className="btn btn-outline-light">Visit Our Boutique</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
