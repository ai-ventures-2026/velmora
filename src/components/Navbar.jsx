import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHomePage = location.pathname === '/'

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isHomePage && !scrolled ? 'navbar--transparent' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Velmora home">
          <span className="navbar__logo-v">V</span>
          <span className="navbar__logo-text">elmora</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <Link to="/products" className="navbar__shop-btn">
            Shop Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-list">
            <li><NavLink to="/" end className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/products" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Collections</NavLink></li>
            <li><NavLink to="/about" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Our Story</NavLink></li>
            <li><NavLink to="/contact" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          </ul>
          <Link to="/products" className="btn btn-primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
