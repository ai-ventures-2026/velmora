import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Top stripe */}
      <div className="footer__top-stripe"></div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Brand column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span className="footer__logo-v">V</span>
                <span>elmora</span>
              </Link>
              <p className="footer__tagline">
                Luxury wellness rituals for the<br />
                <em>discerning woman.</em>
              </p>
              <div className="footer__social">
                <a href="#" aria-label="Instagram" className="footer__social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" aria-label="Pinterest" className="footer__social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.548 2.143-.83 3.333-.236.995.499 1.806 1.476 1.806 1.77 0 3.135-1.866 3.135-4.56 0-2.384-1.714-4.052-4.16-4.052-2.835 0-4.497 2.126-4.497 4.323 0 .856.33 1.773.741 2.273.082.099.094.185.07.286-.075.316-.243.995-.276 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="footer__social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navigate</h4>
              <ul className="footer__links">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li><Link to="/products" className="footer__link">Collections</Link></li>
                <li><Link to="/about" className="footer__link">Our Story</Link></li>
                <li><Link to="/contact" className="footer__link">Contact</Link></li>
              </ul>
            </div>

            {/* Collections column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Collections</h4>
              <ul className="footer__links">
                <li><Link to="/products" className="footer__link">Skincare</Link></li>
                <li><Link to="/products" className="footer__link">Body Wellness</Link></li>
                <li><Link to="/products" className="footer__link">Aromatherapy</Link></li>
                <li><Link to="/products" className="footer__link">Gift Sets</Link></li>
              </ul>
            </div>

            {/* Contact column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Visit Us</h4>
              <address className="footer__address">
                <p>14 Rue de la Lumière</p>
                <p>London, W1K 2BN</p>
                <p>United Kingdom</p>
              </address>
              <div className="footer__contact-links">
                <a href="tel:+442071234567" className="footer__link">+44 (0) 207 123 4567</a>
                <a href="mailto:hello@velmora.com" className="footer__link">hello@velmora.com</a>
              </div>
              <p className="footer__hours">Mon – Sat: 10am – 7pm</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              &copy; {year} Velmora. All rights reserved.
            </p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Privacy Policy</a>
              <span className="footer__legal-divider">·</span>
              <a href="#" className="footer__legal-link">Terms of Service</a>
              <span className="footer__legal-divider">·</span>
              <a href="#" className="footer__legal-link">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
