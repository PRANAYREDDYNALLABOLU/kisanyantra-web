'use client';
import { useState, useEffect, useRef } from 'react';

const C = {
  forest950: '#0A1B12',
  forest900: '#0D2818',
  forest800: '#14301F',
  forest700: '#1B4332',
  forest600: '#235240',
  forest500: '#2D6A4F',
  gold600:   '#B9800F',
  gold500:   '#D4A017',
  gold300:   '#F0C040',
  cream:     '#FAFAF8',
  cream100:  '#F0EDE6',
  ink900:    '#1A1A1A',
  ink600:    '#8A8A8A',
  line:      '#E8E5DE',
  paper:     '#FFFFFF',
};

const EQUIPMENT = [
  { icon: '🔧', name: 'Cultivator',    price: 500,  category: 'Tillage'   },
  { icon: '🚜', name: 'Plowing',       price: 600,  category: 'Tillage'   },
  { icon: '⚙️', name: 'Rotavator',     price: 700,  category: 'Tillage'   },
  { icon: '🌱', name: 'Seeder',        price: 450,  category: 'Planting'  },
  { icon: '💧', name: 'Sprayer',       price: 350,  category: 'Crop Care' },
  { icon: '📏', name: 'Laser Leveler', price: 800,  category: 'Land Dev.' },
  { icon: '🌾', name: 'Harvester',     price: 1500, category: 'Harvest'   },
  { icon: '⛓️', name: 'Seed Drill',    price: 550,  category: 'Planting'  },
];

const STOPS = [
  { no: '01', icon: '🔧', title: 'Pick equipment',   body: 'Choose from 16+ types — cultivators, sprayers, harvesters and more.' },
  { no: '02', icon: '📍', title: 'Drop your pin',    body: 'Tap your farm on the map or type the address. We find drivers nearby.' },
  { no: '03', icon: '🚜', title: 'Driver heads out',  body: 'A verified equipment owner accepts and navigates straight to your field.' },
  { no: '04', icon: '✅', title: 'Confirm & pay',     body: "Review the fare and confirm payment — your driver starts the moment it's approved." },
];

const TESTIMONIALS = [
  { name: 'Raju Yadav',   village: 'Miryalaguda', quote: 'Got a cultivator to my field in 20 minutes. Used to take days to arrange one.', avatar: 'RY' },
  { name: 'Lakshmi Devi', village: 'Ongole',      quote: 'My rotavator booking was confirmed before I even put my phone down. Excellent app.', avatar: 'LD' },
  { name: 'Venkat Reddy', village: 'Warangal',    quote: 'The laser leveler changed my irrigation efficiency. Worth every rupee.', avatar: 'VR' },
];

const NAV = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Equipment',    href: '#equipment'    },
  { label: 'For drivers',  href: '#for-drivers'  },
  { label: 'About',        href: '/about'        },
  { label: 'Contact',      href: '/contact'      },
];

const FOOTER_COLS = [
  { title: 'For Farmers', links: [
    { label: 'Launching soon', href: '#launch' },
    { label: 'How to book',    href: '#how-it-works' },
    { label: 'Equipment list', href: '#equipment' },
    { label: 'Support',        href: '#contact' },
  ]},
  { title: 'For Drivers', links: [
    { label: 'Register interest', href: '#launch' },
    { label: 'Earnings guide',    href: '#for-drivers' },
    { label: 'Verification',      href: '#contact' },
  ]},
  { title: 'Company', links: [
    { label: 'About us', href: '/about' },
    { label: 'Contact',  href: '/contact' },
    { label: 'Privacy policy',   href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
  ]},
];

function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [threshold]);
  return scrolled;
}

function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.12, ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function Reveal({ children, className = '', style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(26px)',
      transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
      ...style,
    }}>
      {children}
    </div>
  );
}

function Eyebrow({ children, color = C.gold600 }) {
  return (
    <span className="font-mono" style={{
      fontSize: 12.5, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 600,
      color, display: 'inline-flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ width: 16, height: 1.5, background: color, display: 'inline-block' }} />
      {children}
    </span>
  );
}

function SoonPill({ emoji, sub, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      border: '1.5px dashed rgba(251,248,241,0.3)', color: 'rgba(251,248,241,0.8)',
      padding: '13px 22px', borderRadius: 12, fontSize: 13.5,
    }}>
      <span style={{ fontSize: 22 }}>{emoji}</span>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: 10.5, opacity: 0.7 }}>{sub}</div>
        <div style={{ fontWeight: 600, color: C.gold300 }}>{label}</div>
      </div>
    </div>
  );
}

function EquipCard({ eq }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
    e.currentTarget.style.boxShadow = '0 24px 48px rgba(10,27,18,0.16)';
    e.currentTarget.style.borderColor = 'transparent';
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(700px) rotateY(0) rotateX(0) translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = C.line;
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: 22,
        transition: 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <span className="font-mono" style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: C.forest500, fontWeight: 600 }}>{eq.category}</span>
      <div style={{ fontSize: 30, margin: '14px 0 12px' }}>{eq.icon}</div>
      <h4 className="font-display" style={{ fontSize: 16.5, marginBottom: 10, color: C.forest900, fontWeight: 600 }}>{eq.name}</h4>
      <div className="font-mono" style={{ fontSize: 14, fontWeight: 600, color: C.gold600, borderTop: `1px dashed ${C.line}`, paddingTop: 10 }}>
        ₹{eq.price} / hour
      </div>
    </div>
  );
}

export default function Page() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeEq, setActiveEq] = useState(0);
  const phoneRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setActiveEq(p => (p + 1) % EQUIPMENT.length), 1800);
    return () => clearInterval(t);
  }, []);

  const tiltPhone = (e) => {
    if (!phoneRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    phoneRef.current.style.transform = `rotateY(${-14 + x * 16}deg) rotateX(${6 - y * 14}deg) rotateZ(1deg)`;
  };
  const resetPhone = () => {
    if (phoneRef.current) phoneRef.current.style.transform = 'rotateY(-14deg) rotateX(6deg) rotateZ(1deg)';
  };

  return (
    <div style={{ background: C.cream, color: C.ink900, fontFamily: "'Inter', sans-serif" }}>

      {/* ── Navbar ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,27,18,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 30px -12px rgba(0,0,0,0.4)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo.png" alt="KisanYantra" style={{ width: 38, height: 38, objectFit: 'contain' }} />
            <span className="font-display" style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em', color: '#fff' }}>
              KISAN<span style={{ color: C.gold300 }}>YANTRA</span>
            </span>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }} className="hidden md:flex">
            {NAV.map(item => (
              <a key={item.label} href={item.href} style={{
                fontSize: 14.5, fontWeight: 500, color: 'rgba(251,248,241,0.82)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(251,248,241,0.82)'}
              >
                {item.label}
              </a>
            ))}
            <a href="#launch" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              border: '1.5px solid rgba(251,248,241,0.35)', color: C.cream,
              fontWeight: 600, padding: '10px 20px', borderRadius: 10, fontSize: 13.5,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold300; e.currentTarget.style.background = 'rgba(251,248,241,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(251,248,241,0.35)'; e.currentTarget.style.background = 'transparent'; }}
            >
              🌾 Launching soon
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: '#fff', padding: 4 }}
            className="md:hidden"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: C.forest950, borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px 24px' }}>
            {NAV.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '14px 0', color: C.cream, fontWeight: 600, fontSize: 16,
                textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                {item.label}
              </a>
            ))}
            <a href="#launch" onClick={() => setMenuOpen(false)} style={{
              display: 'block', marginTop: 20, border: `1.5px solid ${C.gold300}`, color: C.gold300,
              fontWeight: 700, padding: '14px 24px', borderRadius: 12, fontSize: 15,
              textDecoration: 'none', textAlign: 'center',
            }}>
              🌾 Launching soon
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
        background: `radial-gradient(ellipse 120% 90% at 15% -10%, #1c4a34 0%, ${C.forest900} 45%, ${C.forest950} 100%)`,
      }}>
        <svg className="gear-spin" viewBox="0 0 200 200" style={{ position: 'absolute', right: -180, top: -120, width: 640, height: 640, opacity: 0.1, pointerEvents: 'none' }}>
          <path fill={C.gold500} d="M100 20l8 16 17-6 3 18 18 2-4 18 15 10-11 15 11 15-15 10 4 18-18 2-3 18-17-6-8 16-8-16-17 6-3-18-18-2 4-18-15-10 11-15-11-15 15-10-4-18 18-2 3-18 17 6z" />
          <circle cx="100" cy="100" r="42" fill={C.forest950} />
        </svg>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '150px 24px 90px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

            <div>
              <Eyebrow color={C.gold300}>Now serving Telangana &amp; Andhra Pradesh</Eyebrow>
              <h1 className="font-display" style={{
                fontSize: 'clamp(38px, 4.8vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em',
                color: '#fff', margin: '20px 0 22px', fontWeight: 700,
              }}>
                Farm equipment,<br />
                <span style={{
                  background: `linear-gradient(100deg, ${C.gold300}, ${C.gold500})`,
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}>at your field.</span>
              </h1>
              <p style={{ color: 'rgba(251,248,241,0.78)', fontSize: 18, lineHeight: 1.6, maxWidth: 480, marginBottom: 14 }}>
                Book a tractor, harvester or sprayer in minutes. A verified equipment owner comes to your farm — you watch the work get done.
              </p>
              <span style={{ fontSize: 14, color: C.gold300, opacity: 0.9, fontWeight: 500, display: 'block', marginBottom: 34 }}>
                మీ వ్యవసాయం మా బాధ్యత • खेती हमारी जिम्मेदारी
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 30 }}>
                <a href="#launch" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: `linear-gradient(160deg, ${C.gold300}, ${C.gold500} 60%, ${C.gold600})`,
                  color: C.forest950, fontWeight: 700, fontSize: 15, padding: '15px 26px', borderRadius: 10,
                  textDecoration: 'none', boxShadow: '0 12px 24px -8px rgba(212,160,23,0.55)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  🌾 Get notified at launch
                </a>
                <a href="#how-it-works" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'transparent', color: C.cream, fontWeight: 600, fontSize: 15,
                  padding: '15px 26px', borderRadius: 10, textDecoration: 'none',
                  border: '1.5px solid rgba(251,248,241,0.35)', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold300; e.currentTarget.style.background = 'rgba(251,248,241,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(251,248,241,0.35)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  How it works →
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(251,248,241,0.55)', marginBottom: 46 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.gold500, boxShadow: '0 0 0 4px rgba(212,160,23,0.18)' }} />
                Android app in final testing — Telugu, Hindi &amp; English
              </div>

              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 30 }}>
                {[
                  { v: '16+',      l: 'Equipment types' },
                  { v: 'TG & AP',  l: 'States covered' },
                  { v: 'Verified', l: 'Equipment owners' },
                  { v: '24/7',     l: 'Support' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-mono" style={{ fontSize: 22, fontWeight: 700, color: C.gold300 }}>{s.v}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 3D tilt phone mockup */}
            <div
              ref={stageRef}
              onMouseMove={tiltPhone}
              onMouseLeave={resetPhone}
              style={{ display: 'flex', justifyContent: 'center', perspective: 1400 }}
              className="hidden lg:flex"
            >
              <div
                ref={phoneRef}
                style={{
                  width: 300, background: 'linear-gradient(155deg, #0F241A, #0A1710)', borderRadius: 34, padding: 12,
                  boxShadow: '0 30px 60px -20px rgba(10,27,18,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
                  transform: 'rotateY(-14deg) rotateX(6deg) rotateZ(1deg)', transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out',
                }}
              >
                <div style={{ background: 'linear-gradient(180deg,#F5F1E4,#EDE7D3)', borderRadius: 24, overflow: 'hidden', height: 560, display: 'flex', flexDirection: 'column' }}>
                  <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px 6px', fontSize: 11, fontWeight: 600, color: C.forest800 }}>
                    <span>9:41</span><span>🌾 KisanYantra</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '6px 16px 12px', fontSize: 12.5, fontWeight: 600, color: C.forest800 }}>
                    📍 Nalgonda, Telangana
                  </div>
                  <div style={{
                    flex: 1, position: 'relative', overflow: 'hidden',
                    background: 'linear-gradient(180deg,#DCE8D1,#C9DEC0)',
                  }}>
                    <div style={{
                      position: 'absolute', left: '50%', top: '44%', transform: 'translate(-50%,-50%)',
                      width: 14, height: 14, borderRadius: '50%', background: 'rgba(217,143,31,0.4)',
                    }} />
                    <svg viewBox="0 0 24 32" style={{ position: 'absolute', left: '50%', top: '44%', width: 30, height: 30, transform: 'translate(-50%,-100%)', filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.28))' }}>
                      <path fill={C.gold600} d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" />
                      <circle cx="12" cy="12" r="5" fill={C.forest950} />
                    </svg>
                  </div>
                  <div style={{ background: C.paper, borderRadius: '20px 20px 0 0', marginTop: -22, position: 'relative', zIndex: 2, padding: '16px 16px 18px', boxShadow: '0 -10px 24px -12px rgba(0,0,0,0.18)' }}>
                    <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: C.ink600, fontWeight: 600, marginBottom: 10 }}>Select equipment</div>
                    <div style={{ display: 'flex', gap: 9, overflow: 'hidden', marginBottom: 14 }}>
                      {EQUIPMENT.slice(0, 4).map((eq, i) => (
                        <div key={i} style={{ flexShrink: 0, width: 56, textAlign: 'center', fontSize: 10, fontWeight: 600, color: C.forest800 }}>
                          <div style={{
                            width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, margin: '0 auto 5px',
                            background: i === activeEq ? C.forest700 : C.cream100, color: i === activeEq ? C.gold300 : C.ink900,
                            border: `1px solid ${i === activeEq ? C.forest700 : C.line}`, transition: 'all 0.3s ease',
                          }}>{eq.icon}</div>
                          {eq.name}
                        </div>
                      ))}
                    </div>
                    <div style={{ background: C.forest800, borderRadius: 14, padding: '13px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: C.cream }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, color: C.gold300 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5FD98E' }} />
                          Driver accepted · ETA 12 min
                        </div>
                        <div style={{ fontSize: 10.5, color: 'rgba(251,248,241,0.55)', marginTop: 2 }}>Confirm to notify driver</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="font-mono" style={{ fontWeight: 600, fontSize: 19 }}>₹850</div>
                        <div style={{ fontSize: 10.5, color: 'rgba(251,248,241,0.55)' }}>est. fare</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to bottom, transparent, ${C.cream})` }} />
      </div>

      {/* ── Trust strip ── */}
      <div style={{ background: C.forest700, padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(0,0,0,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
          {[
            ['🚜', '16+', 'equipment types'],
            ['📍', 'Telangana & Andhra Pradesh', 'coverage'],
            ['✅', 'Verified', 'equipment owners'],
            ['💬', 'Telugu · Hindi · English', ''],
          ].map(([icon, b, rest], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: C.cream100, fontSize: 13.5 }}>
              {icon} <span className="font-mono" style={{ color: C.gold300, fontWeight: 600 }}>{b}</span> {rest}
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works — dispatch ticket ── */}
      <section id="how-it-works" style={{ padding: '110px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Reveal style={{ maxWidth: 640, marginBottom: 56 }}>
            <Eyebrow>The process</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginTop: 14, lineHeight: 1.12, color: C.forest900, fontWeight: 700 }}>
              From phone to field, in four stops.
            </h2>
            <p style={{ fontSize: 16.5, color: C.ink600, marginTop: 14, lineHeight: 1.6 }}>
              No middlemen, no phone calls, no waiting. Every booking works like a dispatch ticket — pick your stop, and follow it through.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
            {STOPS.map((s, i) => (
              <Reveal key={i} className="ticket" style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 22px 24px' }}>
                <span className="font-mono" style={{ fontSize: 11.5, color: C.gold600, fontWeight: 600, letterSpacing: '.06em' }}>STOP {s.no}</span>
                <div style={{ fontSize: 26, margin: '14px 0 10px' }}>{s.icon}</div>
                <h4 className="font-display" style={{ fontSize: 17, marginBottom: 8, color: C.forest900, fontWeight: 600 }}>{s.title}</h4>
                <p style={{ fontSize: 14, color: C.ink600, lineHeight: 1.55 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
      <section id="equipment" style={{ padding: '110px 0', background: C.forest900 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Reveal style={{ maxWidth: 640, marginBottom: 56 }}>
            <Eyebrow color={C.gold300}>What we offer</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginTop: 14, lineHeight: 1.12, color: '#fff', fontWeight: 700 }}>
              16+ equipment types. One app.
            </h2>
            <p style={{ fontSize: 16.5, color: 'rgba(251,248,241,0.66)', marginTop: 14, lineHeight: 1.6 }}>
              From seedbed prep to harvest — if your farm needs it, KisanYantra has it nearby.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 18 }}>
            {EQUIPMENT.map((eq, i) => <EquipCard key={i} eq={eq} />)}
          </div>
        </div>
      </section>

      {/* ── For farmers ── */}
      <section style={{ padding: '110px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <Reveal>
            <Eyebrow>For farmers</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginTop: 14, lineHeight: 1.12, color: C.forest900, fontWeight: 700 }}>
              Stop searching.<br />Start growing.
            </h2>
            <p style={{ fontSize: 16, color: C.ink600, marginTop: 14, lineHeight: 1.6 }}>
              No more asking neighbours, no more broker calls. Open KisanYantra, pick your equipment, drop your farm pin — a verified driver heads straight to you.
            </p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['⚡', 'Booked in minutes', 'From open app to driver confirmed'],
                ['🗺️', 'Live tracking', 'Watch your driver head to the field'],
                ['💳', 'Upfront, transparent fare', 'See the estimate before you confirm — no hidden costs'],
              ].map(([icon, t, d], i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: C.forest700, color: C.gold300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>{icon}</div>
                  <div>
                    <b style={{ display: 'block', fontSize: 15, marginBottom: 2, color: C.forest900 }}>{t}</b>
                    <span style={{ fontSize: 13.5, color: C.ink600 }}>{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#launch" style={{
              display: 'inline-flex', marginTop: 30, alignItems: 'center', gap: 10,
              background: C.forest800, color: C.cream, fontWeight: 700, padding: '14px 26px',
              borderRadius: 10, fontSize: 15, textDecoration: 'none', transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Get notified at launch
            </a>
          </Reveal>

          <Reveal>
            <div style={{ background: C.paper, borderRadius: 20, border: `1px solid ${C.line}`, padding: 20, boxShadow: '0 14px 30px -12px rgba(10,27,18,0.28)', transform: 'perspective(1000px) rotateY(4deg) rotateX(1deg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <b style={{ color: C.forest900, fontSize: 15 }}>Booking status</b>
                <span style={{ background: '#E8F5EA', color: '#2A8049', fontSize: 11, fontWeight: 700, padding: '4px 9px', borderRadius: 6 }}>In progress</span>
              </div>
              {[
                { done: true,  b: 'Equipment selected', s: 'Rotavator · Field near Miryalaguda' },
                { done: true,  b: 'Driver accepted',     s: 'ETA 12 minutes' },
                { done: true,  b: 'Payment confirmed',   s: '₹850 · driver notified to start' },
                { done: false, b: 'Work in progress',    s: 'Rate your experience once complete' },
              ].map((s, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', position: 'relative' }}>
                  {i < arr.length - 1 && <div style={{ position: 'absolute', left: 9, top: 26, bottom: -2, width: 1.5, background: C.line }} />}
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: s.done ? '#2A8049' : C.forest700, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <span style={{ width: 7, height: 7, background: C.gold300, borderRadius: '50%' }} />
                  </div>
                  <div>
                    <b style={{ fontSize: 13.5, color: C.forest900, display: 'block' }}>{s.b}</b>
                    <small style={{ fontSize: 12, color: C.ink600 }}>{s.s}</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── For drivers ── */}
      <section id="for-drivers" style={{ padding: '110px 0', background: C.forest900 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <Reveal style={{ order: 2 }}>
            <div style={{ background: `linear-gradient(160deg, ${C.forest800}, ${C.forest950})`, borderRadius: 20, padding: 34, color: C.cream, boxShadow: '0 30px 60px -20px rgba(10,27,18,0.45)' }}>
              <span className="font-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1.5px solid ${C.gold500}`, color: C.gold300, borderRadius: 999, padding: '7px 14px', fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', transform: 'rotate(-3deg)' }}>
                ⭐ Verified partner
              </span>
              <div style={{ marginTop: 22 }}>
                {[
                  ['Per ride', '₹800 – 2,500'],
                  ['Daily average*', '₹2,000 – 5,000'],
                  ['Monthly potential*', '₹50,000+'],
                ].map(([l, v], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <span style={{ fontSize: 13.5, color: 'rgba(251,248,241,0.6)' }}>{l}</span>
                    <span className="font-mono" style={{ fontWeight: 600, fontSize: 17, color: C.gold300 }}>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 11.5, color: 'rgba(251,248,241,0.42)', marginTop: 16, lineHeight: 1.5 }}>
                *Based on an 8-hour working day. Actual earnings vary by location, equipment type and seasonal demand.
              </p>
            </div>
          </Reveal>

          <Reveal style={{ order: 1 }}>
            <Eyebrow color={C.gold300}>For equipment owners</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginTop: 14, lineHeight: 1.12, color: '#fff', fontWeight: 700 }}>
              Your tractor.<br />Your income.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(251,248,241,0.66)', marginTop: 14, lineHeight: 1.6 }}>
              Register your equipment, receive ride requests from verified farmers nearby, navigate to the field, and get paid.
            </p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['✅', 'Accept or reject any ride', 'Full control over what work you take on'],
                ['🧭', 'Live navigation to the farm', 'Turn-by-turn directions once you accept'],
                ['💰', 'Clear fare on every job', "Know exactly what you're earning, per ride"],
              ].map(([icon, t, d], i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'rgba(212,160,23,0.14)', color: C.gold300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>{icon}</div>
                  <div>
                    <b style={{ display: 'block', fontSize: 15, marginBottom: 2, color: '#fff' }}>{t}</b>
                    <span style={{ fontSize: 13.5, color: 'rgba(251,248,241,0.62)' }}>{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#launch" style={{
              display: 'inline-flex', marginTop: 30, alignItems: 'center', gap: 10,
              background: `linear-gradient(160deg, ${C.gold300}, ${C.gold500} 60%, ${C.gold600})`,
              color: C.forest950, fontWeight: 700, padding: '14px 26px', borderRadius: 10, fontSize: 15,
              textDecoration: 'none', boxShadow: '0 12px 24px -8px rgba(212,160,23,0.55)', transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              🚜 Register interest as a driver
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '110px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Reveal style={{ maxWidth: 640, marginBottom: 56 }}>
            <Eyebrow>Farmer stories</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginTop: 14, color: C.forest900, fontWeight: 700 }}>Heard from the field.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: 26 }}>
                <div style={{ color: C.gold500, letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>★★★★★</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.ink900, marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div className="font-mono" style={{ width: 38, height: 38, borderRadius: '50%', background: C.forest700, color: C.gold300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 700 }}>{t.avatar}</div>
                  <div>
                    <b style={{ display: 'block', fontSize: 13.5, color: C.forest900 }}>{t.name}</b>
                    <span style={{ fontSize: 12, color: C.ink600 }}>📍 {t.village}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Launch CTA ── */}
      <section id="launch" style={{ padding: '0 24px 110px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal style={{
            background: `radial-gradient(ellipse 100% 140% at 50% 0%, #1c4a34, ${C.forest950})`,
            borderRadius: 28, padding: '70px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <Eyebrow color={C.gold300}>🌾 Launching soon</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.6vw,44px)', marginTop: 16, marginBottom: 16, color: '#fff', fontWeight: 700 }}>
              Ready to book your first ride?
            </h2>
            <p style={{ color: 'rgba(251,248,241,0.68)', fontSize: 16, maxWidth: 480, margin: '0 auto 34px' }}>
              The KisanYantra app is in final testing. Leave your number with our team and we&rsquo;ll notify you the moment it&rsquo;s live — free to download, no subscription.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
              <SoonPill emoji="🌾" sub="Farmer app" label="KisanYantra · Coming soon" />
              <SoonPill emoji="🚜" sub="Owner app" label="KisanYantra Driver · Coming soon" />
            </div>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: `linear-gradient(160deg, ${C.gold300}, ${C.gold500} 60%, ${C.gold600})`,
              color: C.forest950, fontWeight: 700, fontSize: 15, padding: '15px 26px', borderRadius: 10,
              textDecoration: 'none', boxShadow: '0 12px 24px -8px rgba(212,160,23,0.55)', transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Get in touch to be notified
            </a>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 22, flexWrap: 'wrap', marginTop: 30, fontSize: 12.5, color: 'rgba(251,248,241,0.5)' }}>
              <span>✓ Free to download</span>
              <span>✓ Android</span>
              <span>✓ Telugu · Hindi · English</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: '0 24px 110px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal style={{ maxWidth: 640, marginBottom: 56 }}>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginTop: 14, color: C.forest900, fontWeight: 700 }}>We&rsquo;re here to help.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            <Reveal style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: 26, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: C.forest700, color: C.gold300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0 }}>📞</div>
              <div><b style={{ display: 'block', fontSize: 15.5, color: C.forest900, marginBottom: 3 }}>Call us</b><span style={{ fontSize: 13.5, color: C.ink600, lineHeight: 1.5 }}>+91 91828 17019<br />Mon – Sat, 9 AM to 6 PM</span></div>
            </Reveal>
            <Reveal style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: 26, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: C.forest700, color: C.gold300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0 }}>📧</div>
              <div><b style={{ display: 'block', fontSize: 15.5, color: C.forest900, marginBottom: 3 }}>Email us</b><span style={{ fontSize: 13.5, color: C.ink600, lineHeight: 1.5 }}>support@kisanyantra.in<br />We reply within 24 hours</span></div>
            </Reveal>
            <Reveal style={{ background: `linear-gradient(120deg, ${C.forest800}, ${C.forest950})`, borderRadius: 16, padding: 30, color: C.cream, display: 'flex', alignItems: 'center', gap: 20, gridColumn: 'span 2' }}>
              <div style={{ fontSize: 32 }}>📍</div>
              <div><b style={{ display: 'block', fontSize: 16, marginBottom: 4 }}>Visit us</b><span style={{ fontSize: 13.5, color: 'rgba(251,248,241,0.6)' }}>Nalgonda, Telangana, India – 508001</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: C.forest950, color: 'rgba(251,248,241,0.55)', padding: '64px 24px 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 50 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <img src="/logo.png" alt="" style={{ height: 32 }} />
                <span className="font-display" style={{ fontWeight: 700, color: C.cream, fontSize: 17 }}>KISANYANTRA</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, maxWidth: 260, marginBottom: 10 }}>Connecting farmers with equipment owners across Telangana &amp; Andhra Pradesh.</p>
              <p style={{ fontSize: 13.5, color: C.gold300 }}>మీ వ్యవసాయం మా బాధ్యత 🌾</p>
            </div>
            {FOOTER_COLS.map((col, i) => (
              <div key={i}>
                <h5 className="font-mono" style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(251,248,241,0.4)', marginBottom: 16, fontWeight: 600 }}>{col.title}</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {col.links.map(link => (
                    <a key={link.label} href={link.href} style={{ fontSize: 13.5, color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = C.gold300}
                      onMouseLeave={e => e.target.style.color = 'rgba(251,248,241,0.55)'}
                    >{link.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 26, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontSize: 12.5 }}>
            <span>© 2026 KisanYantra. All rights reserved.</span>
            <span>Made with ❤️ for Indian farmers · Nalgonda, Telangana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}