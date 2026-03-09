import { useState } from 'react'
import './Contact.css'

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Boutique',
    lines: ['14 Rue de la Lumière', 'London, W1K 2BN', 'United Kingdom'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Telephone',
    lines: ['+44 (0) 207 123 4567'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    lines: ['hello@velmora.com', 'press@velmora.com'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Opening Hours',
    lines: ['Monday – Friday: 10am – 7pm', 'Saturday: 10am – 6pm', 'Sunday: 12pm – 5pm'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.subject) newErrors.subject = 'Please select a subject'
    if (!formData.message.trim()) newErrors.message = 'A message is required'
    if (!formData.consent) newErrors.consent = 'Please accept the privacy policy to continue'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">

      {/* ── Page Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero__bg"></div>
        <div className="container contact-hero__content">
          <span className="overline">Get in Touch</span>
          <h1 className="contact-hero__title">
            We Would Love<br />
            <em>to Hear from You</em>
          </h1>
          <div className="divider"></div>
          <p className="contact-hero__lead">
            Whether you wish to visit our London boutique, enquire about a bespoke service, or simply seek guidance on your ritual — we are here.
          </p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-layout">

            {/* Left – Contact Details */}
            <aside className="contact-sidebar">
              <div className="contact-sidebar__header">
                <span className="overline">Our Boutique</span>
                <h2 className="contact-sidebar__title">Visit Velmora</h2>
                <div className="divider divider-left"></div>
                <p className="contact-sidebar__intro">
                  Our Mayfair boutique is an immersive experience — a curated sanctuary where you can explore the full Velmora collection and receive a complimentary skin consultation.
                </p>
              </div>

              <div className="contact-details">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="contact-detail">
                    <div className="contact-detail__icon" aria-hidden="true">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="contact-detail__label">{detail.label}</span>
                      {detail.lines.map((line, i) => (
                        <p key={i} className="contact-detail__text">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="contact-map-placeholder" aria-label="Map showing Velmora boutique location">
                <div className="contact-map-inner">
                  <span className="contact-map-pin" aria-hidden="true">
                    <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24s16-12 16-24C32 7.163 24.837 0 16 0z" fill="#c9a96e"/>
                      <circle cx="16" cy="16" r="6" fill="white"/>
                    </svg>
                  </span>
                  <p className="contact-map-label">14 Rue de la Lumière, London W1K 2BN</p>
                </div>
              </div>
            </aside>

            {/* Right – Form */}
            <div className="contact-form-container">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon" aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="contact-success__title">Thank You</h3>
                  <p className="contact-success__text">
                    Your message has been received. A member of our team will be in touch within one business day.
                  </p>
                  <p className="contact-success__sub">
                    We look forward to welcoming you to the world of Velmora.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '', consent: false }) }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__header">
                    <span className="overline">Send a Message</span>
                    <h2 className="contact-form__title">Begin the Conversation</h2>
                    <div className="divider divider-left"></div>
                  </div>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`form-input ${errors.firstName ? 'form-input--error' : ''}`}
                        placeholder="Isabelle"
                        autoComplete="given-name"
                      />
                      {errors.firstName && <span className="form-error" role="alert">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`form-input ${errors.lastName ? 'form-input--error' : ''}`}
                        placeholder="Moreau"
                        autoComplete="family-name"
                      />
                      {errors.lastName && <span className="form-error" role="alert">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                        placeholder="hello@example.com"
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Telephone <span className="form-label-optional">(Optional)</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+44 207 000 0000"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-select ${errors.subject ? 'form-input--error' : ''}`}
                    >
                      <option value="" disabled>Please select a subject…</option>
                      <option value="product">Product Enquiry</option>
                      <option value="consultation">Skin Consultation</option>
                      <option value="bespoke">Bespoke Formulation</option>
                      <option value="stockist">Stockist Enquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <span className="form-error" role="alert">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
                      rows={6}
                      placeholder="Please share your enquiry and we will respond with all the care it deserves…"
                    />
                    {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                  </div>

                  <div className="form-group form-group--checkbox">
                    <label className={`form-checkbox-label ${errors.consent ? 'form-checkbox-label--error' : ''}`}>
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="form-checkbox-custom" aria-hidden="true"></span>
                      <span className="form-checkbox-text">
                        I have read and agree to the{' '}
                        <a href="#" className="form-link">Privacy Policy</a>
                        {' '}and consent to Velmora storing my information to respond to this enquiry.
                      </span>
                    </label>
                    {errors.consent && <span className="form-error" role="alert">{errors.consent}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary contact-form__submit">
                    Send Message
                  </button>

                  <p className="contact-form__note">
                    We typically respond within one business day. Your information is handled with the utmost discretion.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Private Appointments ── */}
      <section className="appointments-section">
        <div className="appointments-bg"></div>
        <div className="container appointments-inner">
          <span className="overline">Exclusive Service</span>
          <h2 className="appointments-title">
            Private Appointments<br /><em>& Consultations</em>
          </h2>
          <div className="divider"></div>
          <p className="appointments-desc">
            For a truly personalised experience, we offer private after-hours consultations with our founder Celeste Langford, or a dedicated skin therapist. Available by appointment at our Mayfair boutique.
          </p>
          <div className="appointments-features">
            <div className="appointment-feature">
              <span className="appointment-feature__icon" aria-hidden="true">◈</span>
              <span>90-minute skin analysis</span>
            </div>
            <div className="appointment-feature">
              <span className="appointment-feature__icon" aria-hidden="true">◈</span>
              <span>Bespoke ritual curation</span>
            </div>
            <div className="appointment-feature">
              <span className="appointment-feature__icon" aria-hidden="true">◈</span>
              <span>Complimentary champagne</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
