'use client';

import { useState } from 'react';
import { content } from '../../lib/content';
import { useReveal } from '../../hooks/useReveal';
import TeamSection from '../../components/TeamSection';

// SVG Icons
const CompassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21l-2.99 1.42c-.53.24-1.04.37-1.04.37"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21l2.99 1.42c.53.24 1.04.37 1.04.37"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    hp: '' // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize reveal animations
  useReveal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.hp) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          hp: formData.hp
        }),
      });

      if (response.ok) {
        alert('Sent!');
        setFormData({ name: '', email: '', phone: '', message: '', hp: '' });
      } else {
        alert('Error sending request. Please try again.');
      }
    } catch (error) {
      alert('Error sending request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getBenefitIcon = (icon: string) => {
    switch (icon) {
      case 'compass': return <CompassIcon />;
      case 'shield': return <ShieldIcon />;
      case 'clock': return <ClockIcon />;
      default: return <CompassIcon />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="heroWrap">
        <video className="heroVideo" autoPlay muted loop playsInline><source src="/videos/promo.MP4" type="video/mp4"/></video>
        <div className="heroOverlay"></div>
        <div className="heroInner reveal">
          <h1 className="heroTitle">Nautical Survey Solutions</h1>
          <p className="heroLead">Independent marine & cargo surveys. Clear calculations. Fast reporting.</p>
          <div className="heroCtas">
            <a href="#contact" className="btn btnPrimary">Get a quote</a>
            <a href="#services" className="btn btnGhost">Our services</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section sectionLight" style={{paddingTop: '20px'}}>
        <div className="container" style={{padding: '0'}}>
          <div className="text-center reveal">
            <h2 className="sectionTitle" style={{marginBottom: '0'}}>About Us</h2>
            <div className="revealScale" style={{
              margin: '0 auto',
              padding: '48px 40px',
              backgroundColor: 'transparent',
              position: 'relative',
              borderBottom: '1px solid #5BC0EB',
              boxShadow: '0 4px 8px rgba(91, 192, 235, 0.3)'
            }}>
              <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '24px', textAlign: 'justify', color: '#0b1220'}}>
                Nautical Survey Solutions is an independent marine surveying company based in Hamburg, Germany, providing professional inspection services across European ports.
              </p>
              <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '24px', textAlign: 'justify', color: '#0b1220'}}>
                Our team consists of experienced Master Mariners and Marine Engineers with years of hands-on seagoing experience. This dual expertise allows us to deliver accurate, objective, and reliable assessments of vessel condition, cargo operations, and safety compliance.
              </p>
              <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '24px', textAlign: 'justify', color: '#0b1220'}}>
                We specialize in bunker quantity verification, draft and condition surveys, cargo inspections, hold cleanliness checks, and pre-purchase surveys, ensuring every report meets the highest professional standards.
              </p>
              <p style={{fontSize: '18px', lineHeight: '1.6', textAlign: 'justify', color: '#0b1220'}}>
                At Nautical Survey Solutions, we combine technical knowledge, practical experience, and transparency to provide experience you can trust.
              </p>
            </div>
          </div>
        </div>
        <div className="wave"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="section sectionLight">
        <div className="container">
          <div className="text-center reveal" style={{marginTop: '-40px'}}>
            <h2 className="sectionTitle" style={{marginBottom: '10px'}}>Our Services</h2>
            <p className="sectionSub" style={{marginTop: '0', color: '#0a2540'}}>Comprehensive marine survey solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{marginTop: '32px', paddingTop: '32px'}}>
            {content.services.map((service, index) => (
              <div key={index} className="card p-8 revealRight" style={{transitionDelay: `${index * 0.15}s`}}>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="wave"></div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section sectionLight" style={{padding: '60px 0'}}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="sectionTitle">Why Choose Us</h2>
            <p className="sectionSub">Professional marine survey services with unmatched reliability</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="card p-8 text-center revealRight" style={{transitionDelay: `${index * 0.15}s`}}>
                <div className="iconBadge mx-auto mb-4">
                  <span className="text-2xl">⚓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="wave"></div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="section sectionAreas">
        <div className="container" style={{position: 'relative', display: 'flex', alignItems: 'center', minHeight: '400px'}}>
        </div>
        <div className="wave"></div>
      </section>

      {/* Team Section */}
      <TeamSection members={[
        {name:"Andrei M.", role:"Senior Surveyor", photo:"/team/expert1.png", socials:{linkedin:"#"}},
        {name:"Halyna B.", role:"Cargo Specialist", photo:"/team/expert2.png", socials:{linkedin:"#"}},
        {name:"Venseslas B.", role:"Operations", photo:"/team/exprt3.png", socials:{linkedin:"#"}},
      ]} />

      {/* Contact Section */}
      <section id="contact" className="section sectionContact">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="sectionTitle">Get In Touch</h2>
            <p className="sectionSub">Ready to discuss your marine survey needs?</p>
          </div>
          <div className="w-full h-px bg-gray-600 mx-auto mt-8 mb-8" style={{maxWidth: '200px'}}></div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card p-8 reveal" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full p-3 bg-surface border border-white/20 rounded-lg text-text"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full p-3 bg-surface border border-white/20 rounded-lg text-text"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-surface border border-white/20 rounded-lg text-text"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full p-3 bg-surface border border-white/20 rounded-lg text-text"
                />
              </div>
              
              {/* Honeypot field */}
              <input
                type="text"
                name="hp"
                value={formData.hp}
                onChange={handleInputChange}
                style={{position:'absolute',left:'-9999px',opacity:0}}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btnPrimary"
                aria-describedby="submit-status"
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </button>
              
              {submitMessage && (
                <div id="submit-status" className={`mt-4 p-3 rounded ${submitMessage.includes('Error') ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`} role="alert">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="wave"></div>
      </section>
    </>
  );
}
