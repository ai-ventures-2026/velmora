import { Link } from 'react-router-dom'
import './Home.css'

const featuredProducts = [
  {
    id: 1,
    name: 'Renewal Serum',
    subtitle: 'Radiance Concentrate',
    description: 'A potent elixir of bakuchiol, vitamin C, and 24k gold micro-particles that visibly transforms dull skin into luminous, youthful radiance.',
    price: '£148',
    gradient: 'linear-gradient(145deg, #c9a96e 0%, #dfc196 50%, #f5e6d3 100%)',
    accent: '#c9a96e',
  },
  {
    id: 2,
    name: 'Velvet Body Oil',
    subtitle: 'Silky Nourishment',
    description: 'Dry-touch rosehip, jasmine, and argan oil blend that melts into skin, leaving a weightless veil of luxury and a signature floral warmth.',
    price: '£96',
    gradient: 'linear-gradient(145deg, #8b4a6b 0%, #a85e85 50%, #c9a96e 100%)',
    accent: '#8b4a6b',
  },
  {
    id: 3,
    name: 'Clarity Mist',
    subtitle: 'Botanical Toning Mist',
    description: 'A crystalline blend of rosewater, hyaluronic acid, and alpine herbs that sets, refreshes and hydrates throughout the day.',
    price: '£64',
    gradient: 'linear-gradient(145deg, #6b8b9e 0%, #8bafc4 50%, #c8dce8 100%)',
    accent: '#6b8b9e',
  },
]

const rituals = [
  {
    time: 'Morning',
    icon: '◑',
    title: 'The Awakening Ritual',
    steps: ['Clarity Mist', 'Renewal Serum', 'Moisture Veil SPF 30', 'Lip & Cheek Tint'],
    description: 'Begin each morning with intention. This four-step ritual primes skin for the day with protection, hydration, and a subtle luminosity.',
  },
  {
    time: 'Evening',
    icon: '◐',
    title: 'The Restoration Ritual',
    steps: ['Cleansing Balm', 'Renewal Serum', 'Overnight Repair Mask', 'Velvet Body Oil'],
    description: 'The night is when the skin rebuilds itself. Our evening ritual works in concert with your body\'s natural renewal processes.',
  },
  {
    time: 'Weekly',
    icon: '○',
    title: 'The Indulgence Ritual',
    steps: ['Enzyme Exfoliant', 'Clay Detox Mask', 'Rose Petal Bath Soak', 'Full Body Scrub'],
    description: 'Dedicate one evening a week to a deeper ritual of purification and restoration. A ceremony of self, for the self.',
  },
]

const testimonials = [
  {
    id: 1,
    quote: 'Velmora has fundamentally changed my relationship with skincare. Each product feels like a ritual rather than a routine — the Renewal Serum alone has transformed my complexion in ways I never thought possible.',
    author: 'Isabelle Moreau',
    title: 'Creative Director, Paris',
  },
  {
    id: 2,
    quote: 'The Velvet Body Oil is unlike anything I have ever experienced. It absorbs instantly yet leaves my skin feeling nourished for days. Velmora understands what true luxury actually means.',
    author: 'Charlotte Ashford',
    title: 'Wellness Editor, London',
  },
  {
    id: 3,
    quote: 'From the moment you open the packaging to the last drop of each formula, everything about Velmora is considered, deliberate, and extraordinary. This is beauty elevated to an art form.',
    author: 'Serena Kato',
    title: 'Architect & Design Enthusiast, Tokyo',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__content container">
          <p className="overline hero__overline">Est. 2018 · London</p>
          <h1 className="hero__title">
            Rediscover Your<br />
            <em>Natural Radiance</em>
          </h1>
          <div className="divider"></div>
          <p className="hero__lead">
            Luxury botanical rituals crafted for the woman who understands<br className="hero__br" />
            that true beauty is nurtured, not manufactured.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn-primary hero__btn">Explore Collections</Link>
            <Link to="/about" className="btn btn-outline-light hero__btn">Our Philosophy</Link>
          </div>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span className="hero__scroll-line"></span>
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="marquee-item">
              Radiance &nbsp;·&nbsp; Luxury &nbsp;·&nbsp; Purity &nbsp;·&nbsp; Ritual &nbsp;·&nbsp; Wellbeing &nbsp;·&nbsp; Indulgence &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured Products ── */}
      <section className="section featured-products">
        <div className="container">
          <div className="text-center">
            <span className="overline">Hero Collection</span>
            <h2 className="section-title">Signature Formulas</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Three transformative products, each a masterwork of botanical science and luxury craftsmanship.
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="featured-card">
                <div className="featured-card__visual" style={{ background: product.gradient }}>
                  <div className="featured-card__shine"></div>
                  <div className="featured-card__bottle">
                    <div className="featured-card__bottle-body" style={{ background: `linear-gradient(160deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 100%)` }}></div>
                    <div className="featured-card__bottle-cap"></div>
                  </div>
                  <span className="featured-card__price">{product.price}</span>
                </div>
                <div className="featured-card__body">
                  <p className="featured-card__subtitle">{product.subtitle}</p>
                  <h3 className="featured-card__name">{product.name}</h3>
                  <p className="featured-card__desc">{product.description}</p>
                  <Link to="/products" className="featured-card__link">
                    Discover More
                    <span className="featured-card__arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center featured-cta">
            <Link to="/products" className="btn btn-outline">View All Collections</Link>
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="brand-story">
        <div className="brand-story__layout container">
          <div className="brand-story__visual">
            <div className="brand-story__img-frame">
              <div className="brand-story__img-inner"></div>
              <div className="brand-story__img-badge">
                <span>Since</span>
                <strong>2018</strong>
              </div>
            </div>
          </div>
          <div className="brand-story__text">
            <span className="overline">The Velmora Story</span>
            <h2 className="brand-story__title">
              Beauty Born from<br /><em>Intention</em>
            </h2>
            <div className="divider divider-left"></div>
            <p>
              Velmora was born from a conviction that luxury and sustainability are not opposing forces — they are natural allies. Founded in 2018 by botanist and perfumer Celeste Langford, every product is a love letter to the earth and to the women who tend it.
            </p>
            <p>
              We source only the finest botanical ingredients, cold-pressed and distilled using time-honoured methods. Our formulas are free from compromise: no synthetic fillers, no empty claims — only concentrated, purposeful efficacy wrapped in enduring elegance.
            </p>
            <div className="brand-story__stats">
              <div className="brand-story__stat">
                <strong>100%</strong>
                <span>Natural Origin</span>
              </div>
              <div className="brand-story__stat">
                <strong>42</strong>
                <span>Botanicals</span>
              </div>
              <div className="brand-story__stat">
                <strong>6</strong>
                <span>Years of Mastery</span>
              </div>
            </div>
            <Link to="/about" className="btn btn-outline">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── Rituals ── */}
      <section className="section rituals-section">
        <div className="container">
          <div className="text-center">
            <span className="overline">Daily Practice</span>
            <h2 className="section-title">The Velmora Rituals</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Skincare is not a task to be completed — it is a ceremony to be savoured.
            </p>
          </div>

          <div className="rituals-grid">
            {rituals.map((ritual) => (
              <article key={ritual.time} className="ritual-card">
                <div className="ritual-card__header">
                  <span className="ritual-card__icon" aria-hidden="true">{ritual.icon}</span>
                  <span className="ritual-card__time">{ritual.time}</span>
                </div>
                <h3 className="ritual-card__title">{ritual.title}</h3>
                <p className="ritual-card__desc">{ritual.description}</p>
                <ul className="ritual-card__steps">
                  {ritual.steps.map((step, i) => (
                    <li key={i} className="ritual-card__step">
                      <span className="ritual-card__step-num">{String(i + 1).padStart(2, '0')}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="testimonials-bg"></div>
        <div className="container testimonials-inner">
          <span className="overline">Client Love</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Words of Devotion</h2>
          <div className="divider"></div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="testimonial-card">
                <div className="testimonial-card__marks" aria-hidden="true">"</div>
                <p className="testimonial-card__quote">{t.quote}</p>
                <footer className="testimonial-card__footer">
                  <div className="testimonial-card__avatar" aria-hidden="true">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="testimonial-card__author">{t.author}</cite>
                    <span className="testimonial-card__title">{t.title}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="newsletter-section section">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-box__content">
              <span className="overline">Inner Circle</span>
              <h2 className="newsletter-box__title">
                Join the Velmora<br /><em>Inner Circle</em>
              </h2>
              <p className="newsletter-box__desc">
                Receive exclusive access to new formulas, ritual guides, and members-only privileges.
                A curated correspondence for those who appreciate the finer things.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="newsletter-form__group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="newsletter-form__input"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="btn btn-primary newsletter-form__btn">
                    Subscribe
                  </button>
                </div>
                <p className="newsletter-form__note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
            <div className="newsletter-box__visual" aria-hidden="true">
              <div className="newsletter-visual-inner">
                <span className="newsletter-visual-text">V</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
