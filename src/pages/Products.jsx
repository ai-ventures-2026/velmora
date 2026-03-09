import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const collections = [
  {
    id: 'skincare',
    label: 'Skincare',
    title: 'Skincare Collection',
    description: 'Advanced botanical formulations that address the skin\'s deepest needs with the gentlest touch.',
    products: [
      {
        id: 'sc-1',
        name: 'Renewal Serum',
        subtitle: 'Radiance Concentrate',
        description: 'A potent elixir of bakuchiol, vitamin C, and 24k gold micro-particles that visibly transforms dull skin into luminous, youthful radiance. Clinical trials show 94% improvement in brightness after 28 days.',
        price: '£148',
        size: '30ml',
        gradient: 'linear-gradient(145deg, #c9a96e 0%, #dfc196 50%, #f5e6d3 100%)',
        tag: 'Bestseller',
      },
      {
        id: 'sc-2',
        name: 'Velvet Moisture Veil',
        subtitle: 'Hydrating Day Cream SPF 30',
        description: 'A weightless yet deeply nourishing day cream infused with hyaluronic acid, sea kelp extract, and our signature rose complex. Provides 72-hour hydration and broad-spectrum sun protection.',
        price: '£124',
        size: '50ml',
        gradient: 'linear-gradient(145deg, #f5e6d3 0%, #ead5bb 60%, #c9a96e 100%)',
        tag: null,
      },
      {
        id: 'sc-3',
        name: 'Clarity Mist',
        subtitle: 'Botanical Toning Mist',
        description: 'A crystalline blend of Bulgarian rosewater, hyaluronic acid, and alpine herbs that tones, refreshes and hydrates. Use over makeup or bare skin — morning, afternoon, evening.',
        price: '£64',
        size: '100ml',
        gradient: 'linear-gradient(145deg, #6b8b9e 0%, #8bafc4 50%, #c8dce8 100%)',
        tag: null,
      },
      {
        id: 'sc-4',
        name: 'Overnight Repair Mask',
        subtitle: 'Intensive Night Treatment',
        description: 'A rich, transformative sleep mask that harnesses the skin\'s nocturnal repair cycle. Bakuchiol, retinol alternatives, and ceramides work in harmony to resurface, plump, and restore.',
        price: '£96',
        size: '60ml',
        gradient: 'linear-gradient(145deg, #2d1a28 0%, #6d3855 50%, #8b4a6b 100%)',
        tag: 'New',
      },
    ],
  },
  {
    id: 'body',
    label: 'Body',
    title: 'Body Wellness',
    description: 'Sumptuous body rituals that extend the luxury of your skincare regimen from face to fingertip.',
    products: [
      {
        id: 'bw-1',
        name: 'Velvet Body Oil',
        subtitle: 'Silky Nourishment',
        description: 'A dry-touch blend of rosehip, jasmine, and Moroccan argan oil that melts into the skin, leaving a weightless veil of nourishment and a signature floral warmth that lingers for hours.',
        price: '£96',
        size: '100ml',
        gradient: 'linear-gradient(145deg, #8b4a6b 0%, #a85e85 50%, #c9a96e 100%)',
        tag: 'Bestseller',
      },
      {
        id: 'bw-2',
        name: 'Rose Petal Bath Soak',
        subtitle: 'Mineral-Rich Bathing Ritual',
        description: 'A decadent blend of Dead Sea minerals, dried rose petals, and cold-pressed rose oil. Transform your bath into a restorative ceremony of deep relaxation and exquisite fragrance.',
        price: '£72',
        size: '300g',
        gradient: 'linear-gradient(145deg, #c9a96e 0%, #8b4a6b 60%, #6d3855 100%)',
        tag: null,
      },
      {
        id: 'bw-3',
        name: 'Velvet Body Butter',
        subtitle: 'Intensive Moisture Treatment',
        description: 'An indulgently rich body butter that melts on contact with skin, delivering intense moisture through a blend of shea, cocoa, and mango butters with a whisper of warm vanilla and sandalwood.',
        price: '£84',
        size: '200ml',
        gradient: 'linear-gradient(145deg, #dfc196 0%, #c9a96e 50%, #a8824a 100%)',
        tag: null,
      },
    ],
  },
  {
    id: 'aroma',
    label: 'Aromatherapy',
    title: 'Aromatherapy',
    description: 'The art of fragrance as medicine — botanical compositions that shift mood, soothe the nervous system, and elevate space.',
    products: [
      {
        id: 'ar-1',
        name: 'The Calm Diffuser Blend',
        subtitle: 'Lavender & Vetiver Complex',
        description: 'A grounding blend of French lavender, Haitian vetiver, and Roman chamomile that induces a state of serene calm. Formulated to support the parasympathetic nervous system.',
        price: '£48',
        size: '15ml',
        gradient: 'linear-gradient(145deg, #7a6b8a 0%, #9a8baa 50%, #c4b8d0 100%)',
        tag: null,
      },
      {
        id: 'ar-2',
        name: 'Luminous Room Candle',
        subtitle: 'Rose & Sandalwood',
        description: 'A hand-poured soy wax candle in a hand-blown Murano glass vessel. The fragrance — Bulgarian rose, white sandalwood, and a whisper of orris — transforms any room into a sanctuary.',
        price: '£110',
        size: '220g / 55hrs',
        gradient: 'linear-gradient(145deg, #c9a96e 0%, #dfc196 40%, #f5e6d3 100%)',
        tag: 'Limited Edition',
      },
      {
        id: 'ar-3',
        name: 'The Ritual Mist',
        subtitle: 'Linen & Space Fragrance',
        description: 'A fine botanical mist for linen, clothing, and living spaces. Notes of neroli, bergamot, and white musk create a signature scent environment that is unmistakably, beautifully Velmora.',
        price: '£58',
        size: '200ml',
        gradient: 'linear-gradient(145deg, #8bafc4 0%, #6b8b9e 50%, #4a6b7e 100%)',
        tag: null,
      },
    ],
  },
]

export default function Products() {
  const [activeCollection, setActiveCollection] = useState('skincare')

  const current = collections.find(c => c.id === activeCollection)

  return (
    <div className="products-page">

      {/* ── Page Hero ── */}
      <section className="products-hero">
        <div className="products-hero__bg"></div>
        <div className="container products-hero__content">
          <span className="overline">Our Collections</span>
          <h1 className="products-hero__title">
            Crafted for<br />
            <em>Discerning Women</em>
          </h1>
          <div className="divider"></div>
          <p className="products-hero__lead">
            Each formula is a marriage of botanical intelligence and sensorial artistry. Discover the collection that speaks to your ritual.
          </p>
        </div>
      </section>

      {/* ── Collection Tabs ── */}
      <section className="section products-main">
        <div className="container">

          {/* Tab navigation */}
          <div className="collection-tabs" role="tablist">
            {collections.map((col) => (
              <button
                key={col.id}
                role="tab"
                aria-selected={activeCollection === col.id}
                className={`collection-tab ${activeCollection === col.id ? 'collection-tab--active' : ''}`}
                onClick={() => setActiveCollection(col.id)}
              >
                {col.label}
              </button>
            ))}
          </div>

          {/* Collection header */}
          <div className="collection-header">
            <div className="collection-header__text">
              <h2 className="collection-header__title">{current.title}</h2>
              <p className="collection-header__desc">{current.description}</p>
            </div>
          </div>

          {/* Products grid */}
          <div className="products-grid" key={activeCollection}>
            {current.products.map((product) => (
              <article key={product.id} className="product-card">
                {/* Visual */}
                <div className="product-card__visual" style={{ background: product.gradient }}>
                  <div className="product-card__visual-shine"></div>
                  {/* Decorative bottle/jar shape */}
                  <div className="product-card__vessel">
                    <div className="product-card__vessel-body"></div>
                    <div className="product-card__vessel-cap"></div>
                  </div>
                  {/* Tags */}
                  {product.tag && (
                    <span className="product-card__tag">{product.tag}</span>
                  )}
                  {/* Price badge */}
                  <div className="product-card__price-badge">
                    <span className="product-card__price">{product.price}</span>
                    <span className="product-card__size">{product.size}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="product-card__body">
                  <p className="product-card__subtitle">{product.subtitle}</p>
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__desc">{product.description}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price-inline">{product.price}</span>
                    <button className="btn btn-primary product-card__btn" type="button">
                      Add to Ritual
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── Bespoke Banner ── */}
      <section className="bespoke-banner">
        <div className="bespoke-banner__bg"></div>
        <div className="container bespoke-banner__inner">
          <div className="bespoke-banner__text">
            <span className="overline">Private Client Services</span>
            <h2 className="bespoke-banner__title">
              Bespoke Formulation<br />
              <em>for the Individual</em>
            </h2>
            <p className="bespoke-banner__desc">
              For our most discerning clients, Velmora offers a private formulation service — a bespoke skincare ritual designed around your unique skin profile, lifestyle, and preferences, crafted by our lead biochemist in partnership with our founder.
            </p>
            <Link to="/contact" className="btn btn-gold-outline">Enquire Privately</Link>
          </div>
          <div className="bespoke-banner__visual" aria-hidden="true">
            <div className="bespoke-visual-ring bespoke-visual-ring--1"></div>
            <div className="bespoke-visual-ring bespoke-visual-ring--2"></div>
            <div className="bespoke-visual-ring bespoke-visual-ring--3"></div>
            <span className="bespoke-visual-letter">V</span>
          </div>
        </div>
      </section>

      {/* ── Ingredient Promise ── */}
      <section className="section ingredients-promise">
        <div className="container">
          <div className="text-center">
            <span className="overline">Our Standards</span>
            <h2 className="section-title">The Velmora Promise</h2>
            <div className="divider"></div>
          </div>
          <div className="promise-grid">
            {[
              { label: 'Always', items: ['100% Natural Origin', 'Cruelty Free', 'Vegan Certified', 'Refillable Packaging'] },
              { label: 'Never', items: ['Synthetic Fragrance', 'Parabens or Sulphates', 'Mineral Oil or Petrolatum', 'Microplastics'] },
            ].map((col) => (
              <div key={col.label} className={`promise-col promise-col--${col.label.toLowerCase()}`}>
                <h3 className="promise-col__label">{col.label}</h3>
                <ul className="promise-col__list">
                  {col.items.map(item => (
                    <li key={item} className="promise-col__item">
                      <span className="promise-col__icon" aria-hidden="true">
                        {col.label === 'Always' ? '✓' : '✗'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
