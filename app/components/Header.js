'use client';
import { useState, useEffect } from 'react';

const NAV = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Equipment',    href: '/#equipment'    },
  { label: 'For drivers',  href: '/#for-drivers'  },
  { label: 'About',        href: '/about'         },
  { label: 'Contact',      href: '/contact'       },
];

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [threshold]);
  return scrolled;
}

export default function Header() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #E8E5DE' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="KisanYantra" style={{ width: 40, height: 40, objectFit: 'contain' }} />
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.5px', color: scrolled ? '#1B4332' : '#fff', fontFamily: 'Fraunces, serif' }}>KisanYantra</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
          {NAV.map(item => (
            <a key={item.label} href={item.href} style={{
              fontSize: 14, fontWeight: 600,
              color: scrolled ? '#4A4A4A' : 'rgba(255,255,255,0.85)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A017'}
            onMouseLeave={e => e.target.style.color = scrolled ? '#4A4A4A' : 'rgba(255,255,255,0.85)'}
            >
              {item.label}
            </a>
          ))}
          <a href="/#download" style={{
            background: '#1B4332', color: '#fff', fontWeight: 700,
            padding: '10px 22px', borderRadius: 100, fontSize: 14,
            textDecoration: 'none', transition: 'all 0.2s',
            boxShadow: '0 2px 12px rgba(27,67,50,0.3)',
          }}
          onMouseEnter={e => { e.target.style.background = '#2D6A4F'; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.background = '#1B4332'; e.target.style.transform = 'translateY(0)'; }}
          >
            Launching Soon 🌾
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: scrolled ? '#1B4332' : '#fff', padding: 4 }}
          className="md:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #E8E5DE', padding: '16px 24px 24px' }}>
          {NAV.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '14px 0', color: '#1A1A1A',
              fontWeight: 600, fontSize: 16, textDecoration: 'none',
              borderBottom: '1px solid #F0EDE6',
            }}>
              {item.label}
            </a>
          ))}
          <a href="/#download" onClick={() => setMenuOpen(false)} style={{
            display: 'block', marginTop: 20, background: '#1B4332', color: '#fff',
            fontWeight: 700, padding: '14px 24px', borderRadius: 14, fontSize: 15,
            textDecoration: 'none', textAlign: 'center',
          }}>
            Launching Soon 🌾
          </a>
        </div>
      )}
    </header>
  );
}