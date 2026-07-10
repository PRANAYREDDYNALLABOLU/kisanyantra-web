'use client';
import { useState, useEffect, useRef } from 'react';

const EQUIPMENT = [
  { icon: '🔧', name: 'Cultivator',     price: 500,  category: 'Tillage',   color: '#E8F5E9' },
  { icon: '🚜', name: 'Plowing',        price: 600,  category: 'Tillage',   color: '#E3F2FD' },
  { icon: '⚙️', name: 'Rotavator',      price: 700,  category: 'Tillage',   color: '#FFF8E1' },
  { icon: '🌱', name: 'Seeder',         price: 450,  category: 'Planting',  color: '#F3E5F5' },
  { icon: '💧', name: 'Sprayer',        price: 350,  category: 'Crop Care', color: '#E0F7FA' },
  { icon: '📏', name: 'Laser Leveler',  price: 800,  category: 'Land Dev',  color: '#FBE9E7' },
  { icon: '🌾', name: 'Harvester',      price: 1500, category: 'Harvest',   color: '#FFFDE7' },
  { icon: '⛓️', name: 'Seed Drill',     price: 550,  category: 'Planting',  color: '#E8EAF6' },
];

const STEPS = [
  { num: '01', icon: '🔧', title: 'Pick equipment',    body: 'Choose from 16+ types — cultivators, sprayers, harvesters and more.' },
  { num: '02', icon: '📍', title: 'Drop your pin',     body: 'Tap your farm on the map or type the address. We find drivers near you.' },
  { num: '03', icon: '🚜', title: 'Driver heads out',  body: 'A verified equipment owner accepts and navigates to your field.' },
  { num: '04', icon: '✅', title: 'Work gets done',    body: 'Pay after the job is complete. Rate your experience.' },
];

const TESTIMONIALS = [
  { name: 'Raju Yadav',    village: 'Miryalaguda', stars: 5, quote: 'Got a cultivator to my field in 20 minutes. Used to take days to arrange one.',           avatar: 'RY' },
  { name: 'Lakshmi Devi', village: 'Ongole',       stars: 5, quote: 'My rotavator booking was confirmed before I even put my phone down. Excellent app.',      avatar: 'LD' },
  { name: 'Venkat Reddy', village: 'Warangal',     stars: 5, quote: 'The laser leveler changed my irrigation efficiency. Worth every rupee.',                  avatar: 'VR' },
];

const NAV = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Equipment',    href: '#equipment'    },
  { label: 'For drivers',  href: '#for-drivers'  },
  { label: 'About',   href: '/about'   },
{ label: 'Contact', href: '/contact' },
];

const FOOTER_COLS = [
  {
    title: 'For Farmers',
    links: [
      { label: 'Download App',    href: '#download'    },
      { label: 'How to Book',     href: '#how-it-works'},
      { label: 'Equipment List',  href: '#equipment'   },
      { label: 'Support',         href: '#contact'     },
    ],
  },
  {
    title: 'For Drivers',
    links: [
      { label: 'Register',        href: '#download'    },
      { label: 'Driver App',      href: '#download'    },
      { label: 'Earnings Guide',  href: '#for-drivers' },
      { label: 'Verification',    href: '#contact'     },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about'   },
{ label: 'Contact',  href: '/contact' },
      { label: 'Privacy Policy',   href: '/privacy'  },
      { label: 'Terms of Service', href: '/terms'    },
    ],
  },
];

function useScrolled(threshold = 60) {
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
    }, { threshold: 0.1, ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function Section({ id, children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section id={id} ref={ref} className={`section ${className} ${inView ? 'in-view' : ''}`}>
      {children}
    </section>
  );
}

function StatCounter({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-black" style={{ color: '#D4A017', fontFamily: 'Fraunces, serif' }}>{value}</div>
      <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</div>
    </div>
  );
}

export default function Page() {
  const scrolled    = useScrolled();
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeEq,  setActiveEq]  = useState(0);
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef);

  useEffect(() => {
    const t = setInterval(() => setActiveEq(p => (p + 1) % EQUIPMENT.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: '#FAFAF8', color: '#1A1A1A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Navbar ── */}
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
            <a href="#download" style={{
              background: '#1B4332', color: '#fff', fontWeight: 700,
              padding: '10px 22px', borderRadius: 100, fontSize: 14,
              textDecoration: 'none', transition: 'all 0.2s',
              boxShadow: '0 2px 12px rgba(27,67,50,0.3)',
            }}
            onMouseEnter={e => { e.target.style.background = '#2D6A4F'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = '#1B4332'; e.target.style.transform = 'translateY(0)'; }}
            >
              Download App
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
            <a href="#download" onClick={() => setMenuOpen(false)} style={{
              display: 'block', marginTop: 20, background: '#1B4332', color: '#fff',
              fontWeight: 700, padding: '14px 24px', borderRadius: 14, fontSize: 15,
              textDecoration: 'none', textAlign: 'center',
            }}>
              Download App
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(150deg, #0D2818 0%, #1B4332 45%, #2D6A4F 100%)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '0%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(64,145,108,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

            {/* Left */}
            <div className="animate-fadeUp">
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)',
                borderRadius: 100, padding: '6px 16px', marginBottom: 28,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4A017', display: 'inline-block' }} className="animate-pulse-ring" />
                <span style={{ color: '#D4A017', fontSize: 13, fontWeight: 700, letterSpacing: '0.05em' }}>Now serving Telangana & AP</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900,
                lineHeight: 1.05, letterSpacing: '-2px', color: '#fff',
                marginBottom: 24, fontFamily: 'Fraunces, serif',
              }}>
                Farm equipment,<br />
                <span style={{
                  background: 'linear-gradient(90deg, #D4A017, #F0C040, #D4A017)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', animation: 'shimmer 3s linear infinite',
                }}>at your field.</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7, marginBottom: 12 }}>
                Book a tractor, harvester or sprayer in minutes. The driver comes to your farm — you watch the work get done.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, marginBottom: 40 }}>
                మీ వ్యవసాయం మా బాధ్యత • खेती हमारी जिम्मेदारी
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}>
                <a href="#download" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#D4A017', color: '#1A1A1A', fontWeight: 800, fontSize: 16,
                  padding: '14px 28px', borderRadius: 14, textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 20px rgba(212,160,23,0.4)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,160,23,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,160,23,0.4)'; }}
                >
                  <span>📱</span> Download Free
                </a>
                <a href="#how-it-works" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, fontSize: 16,
                  padding: '14px 28px', borderRadius: 14, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                >
                  How it works →
                </a>
              </div>

              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
                {[
                  { v: '500+', l: 'Farmers' },
                  { v: '50+',  l: 'Equipment owners' },
                  { v: '16+',  l: 'Equipment types' },
                  { v: '10+',  l: 'Districts' },
                ].map((s, i) => <StatCounter key={i} value={s.v} label={s.l} />)}
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div style={{ display: 'flex', justifyContent: 'center' }} className="hidden lg:flex animate-fadeUp delay-300">
              <div className="animate-float" style={{ position: 'relative' }}>
                <div style={{
                  width: 280, height: 560, background: '#0D1F15', borderRadius: 40, padding: 12,
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
                }}>
                  <div style={{ background: '#F5F5F0', borderRadius: 30, height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ background: '#1B4332', height: 44, display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between' }}>
                      <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>9:41 AM</span>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <div style={{ width: 16, height: 8, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
                        <div style={{ width: 10, height: 8, background: 'rgba(255,255,255,0.5)', borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ padding: 12 }}>
                      <div style={{ background: '#fff', borderRadius: 16, padding: '10px 14px', marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 900, color: '#1B4332' }}>🌾 KisanYantra</div>
                          <div style={{ fontSize: 10, color: '#8A8A8A', marginTop: 1 }}>📍 Nalgonda, Telangana</div>
                        </div>
                        <div style={{ width: 30, height: 30, background: '#E8F5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>👤</div>
                      </div>
                      <div style={{ height: 130, background: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)', borderRadius: 16, marginBottom: 10, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(4, 1fr)', opacity: 0.3 }}>
                          {[...Array(20)].map((_, i) => <div key={i} style={{ border: '0.5px solid #4CAF50' }} />)}
                        </div>
                        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                          <div style={{ fontSize: 28 }}>🗺️</div>
                          <div style={{ fontSize: 10, color: '#2D6A4F', fontWeight: 700, marginTop: 4 }}>Tap to set farm location</div>
                        </div>
                        <div style={{ position: 'absolute', bottom: 20, right: 40, width: 24, height: 24, background: '#1B4332', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>📍</div>
                      </div>
                      <div style={{ background: '#fff', borderRadius: 16, padding: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <div style={{ fontSize: 10, fontWeight: 800, color: '#1B4332', marginBottom: 8, letterSpacing: '0.08em' }}>SELECT EQUIPMENT</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                          {EQUIPMENT.slice(0, 8).map((eq, i) => (
                            <div key={i} style={{
                              borderRadius: 10, padding: '8px 4px', textAlign: 'center',
                              background: i === activeEq ? '#E8F5E9' : '#F8F8F8',
                              border: i === activeEq ? '1.5px solid #40916C' : '1.5px solid transparent',
                              transition: 'all 0.3s ease',
                            }}>
                              <div style={{ fontSize: 16 }}>{eq.icon}</div>
                              <div style={{ fontSize: 9, fontWeight: 700, color: i === activeEq ? '#1B4332' : '#8A8A8A', marginTop: 2 }}>{eq.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating notification */}
                <div style={{
                  position: 'absolute', left: -90, top: 80,
                  background: '#fff', borderRadius: 16, padding: '10px 14px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  display: 'flex', alignItems: 'center', gap: 8,
                  animation: 'fadeIn 0.5s 1s both', minWidth: 180,
                }}>
                  <div style={{ width: 32, height: 32, background: '#E8F5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>✅</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#1B4332' }}>Driver accepted!</div>
                    <div style={{ fontSize: 10, color: '#8A8A8A', marginTop: 1 }}>ETA 12 min to farm</div>
                  </div>
                </div>

                {/* Floating fare */}
                <div style={{
                  position: 'absolute', right: -80, bottom: 100,
                  background: '#1B4332', borderRadius: 16, padding: '12px 16px',
                  boxShadow: '0 8px 32px rgba(27,67,50,0.4)', textAlign: 'center',
                  animation: 'fadeIn 0.5s 1.3s both',
                }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 2 }}>Estimated fare</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#D4A017', fontFamily: 'Fraunces, serif' }}>₹850</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Pay after work</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, #FAFAF8)' }} />
      </div>

      {/* ── How it works ── */}
      <Section id="how-it-works" style={{ padding: '100px 24px', background: '#FAFAF8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }} ref={featuresRef}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>The process</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1, fontFamily: 'Fraunces, serif', marginBottom: 20 }}>
              From phone to field<br />
              <span style={{ color: '#40916C' }}>in four steps.</span>
            </h2>
            <p style={{ color: '#8A8A8A', fontSize: 17, lineHeight: 1.7 }}>
              No middlemen. No phone calls. No waiting. Just open the app and watch it work.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
            {STEPS.map((step, i) => (
              <div key={i} className={`card-lift ${featuresInView ? 'animate-fadeUp' : ''} delay-${(i + 1) * 100}`} style={{
                background: i === 0 ? '#1B4332' : '#fff',
                borderRadius: i === 0 ? '24px 0 0 24px' : i === STEPS.length - 1 ? '0 24px 24px 0' : 0,
                padding: '40px 32px', border: '1px solid #E8E5DE',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  fontSize: 64, fontWeight: 900, lineHeight: 1,
                  color: i === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                  position: 'absolute', top: 16, right: 20,
                  fontFamily: 'Fraunces, serif', userSelect: 'none',
                }}>{step.num}</div>
                <div style={{ fontSize: 36, marginBottom: 20 }}>{step.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, color: i === 0 ? '#fff' : '#1A1A1A', fontFamily: 'Fraunces, serif' }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: i === 0 ? 'rgba(255,255,255,0.65)' : '#8A8A8A' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Equipment ── */}
      <Section id="equipment">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px', background: '#F0EDE6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>What we offer</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', fontFamily: 'Fraunces, serif', lineHeight: 1.1 }}>
                16+ equipment types.<br />One app.
              </h2>
            </div>
            <p style={{ color: '#8A8A8A', fontSize: 16, maxWidth: 320, lineHeight: 1.7 }}>
              From seedbed prep to harvest — if your farm needs it, KisanYantra has it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {EQUIPMENT.map((eq, i) => (
              <div key={i} className="card-lift" style={{ background: '#fff', borderRadius: 20, padding: '24px 20px', border: '1px solid #E8E5DE' }}>
                <div style={{ width: 52, height: 52, background: eq.color, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 16 }}>
                  {eq.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#40916C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{eq.category}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#1A1A1A', marginBottom: 8 }}>{eq.name}</div>
                <div style={{ display: 'inline-block', background: '#F0EDE6', borderRadius: 100, padding: '4px 12px', fontSize: 13, fontWeight: 800, color: '#8B5E3C' }}>
                  ₹{eq.price}/hour
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── For farmers ── */}
      <Section id="for-farmers">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>For farmers</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', fontFamily: 'Fraunces, serif', lineHeight: 1.1, marginBottom: 24 }}>
                Stop searching.<br />
                <span style={{ color: '#40916C' }}>Start growing.</span>
              </h2>
              <p style={{ color: '#8A8A8A', fontSize: 17, lineHeight: 1.8, marginBottom: 40 }}>
                No more asking neighbours, no more broker calls. Open KisanYantra, pick your equipment, drop your farm pin — a verified driver heads straight to you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {[
                  { icon: '⚡', title: 'Booked in under 5 min', desc: 'From open app to driver confirmed' },
                  { icon: '🗺️', title: 'Live map tracking',     desc: 'Watch the driver navigate to your field' },
                  { icon: '💰', title: 'Pay after work',        desc: 'No advance, no risk, full control' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: '#E8F5E9', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                      {f.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>{f.title}</div>
                      <div style={{ fontSize: 13, color: '#8A8A8A' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#download" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#1B4332', color: '#fff', fontWeight: 800,
                padding: '14px 28px', borderRadius: 14, fontSize: 15,
                textDecoration: 'none', boxShadow: '0 4px 20px rgba(27,67,50,0.3)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Download for Android 📱
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '👨‍🌾', stat: '1–5 ac',  label: 'Small farmers',      bg: '#E8F5E9' },
                { icon: '🌾',   stat: '5–20 ac', label: 'Medium farms',       bg: '#FFF8E1' },
                { icon: '🏡',   stat: '20+ ac',  label: 'Large farms',        bg: '#E3F2FD' },
                { icon: '⭐',   stat: '4.9★',    label: 'Avg. driver rating', bg: '#FCE4EC' },
              ].map((c, i) => (
                <div key={i} className="card-lift" style={{ background: c.bg, borderRadius: 20, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#1A1A1A', fontFamily: 'Fraunces, serif' }}>{c.stat}</div>
                  <div style={{ fontSize: 13, color: '#8A8A8A', marginTop: 4 }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── For drivers ── */}
      <Section id="for-drivers">
        <div style={{ background: '#1B4332', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#D4A017', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>For equipment owners</div>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', fontFamily: 'Fraunces, serif', lineHeight: 1.1, color: '#fff', marginBottom: 24 }}>
                  Your tractor.<br />
                  <span style={{ color: '#D4A017' }}>Your income.</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, lineHeight: 1.8, marginBottom: 40 }}>
                  Register your equipment. Receive ride requests from verified farmers. Navigate with our shortest route engine. Get paid.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                  {[
                    'Accept or reject any ride — full control',
                    'Real-time navigation to the farm',
                    'Transparent earnings dashboard',
                    'Build ratings that bring more work',
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ width: 20, height: 20, background: 'rgba(212,160,23,0.2)', border: '1.5px solid #D4A017', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <div style={{ width: 6, height: 6, background: '#D4A017', borderRadius: '50%' }} />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#download" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#D4A017', color: '#1A1A1A', fontWeight: 800,
                  padding: '14px 28px', borderRadius: 14, fontSize: 15,
                  textDecoration: 'none', boxShadow: '0 4px 20px rgba(212,160,23,0.4)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  🚜 Register as Driver
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Per ride',          value: '₹800–2,500'  },
                  { label: 'Daily avg.',         value: '₹2,000–5,000'},
                  { label: 'Monthly potential',  value: '₹50,000+'    },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ color: '#D4A017', fontWeight: 900, fontSize: 22, fontFamily: 'Fraunces, serif' }}>{item.value}</span>
                  </div>
                ))}
                <div style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', borderRadius: 16, padding: '14px 20px', marginTop: 8 }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>* Based on 8 working hours/day. Actual earnings vary by location and demand.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section id="testimonials">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Farmer stories</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', fontFamily: 'Fraunces, serif' }}>
              Heard from the field.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-lift" style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #E8E5DE', display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[...Array(t.stars)].map((_, j) => <span key={j} style={{ color: '#D4A017', fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ color: '#4A4A4A', fontSize: 16, lineHeight: 1.75, flex: 1, fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg, #1B4332, #40916C)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 14 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#1A1A1A', fontSize: 15 }}>{t.name}</div>
                    <div style={{ color: '#8A8A8A', fontSize: 12, marginTop: 2 }}>📍 {t.village}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Download CTA ── */}
      <Section id="download">
        <div style={{ background: 'linear-gradient(150deg, #0D2818 0%, #1B4332 60%, #2D6A4F 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
          <div style={{ maxWidth: 700, margin: '0 auto', padding: '100px 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <img src="/favicon.png" alt="KisanYantra" className="animate-float" style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 24 }} />
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-2px', color: '#fff', fontFamily: 'Fraunces, serif', lineHeight: 1.1, marginBottom: 20 }}>
              Ready to book your<br />
              <span style={{ color: '#D4A017' }}>first ride?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, marginBottom: 48, lineHeight: 1.7 }}>
              Free to download. No subscription. Works in Telugu, Hindi and English.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 40 }}>
              {[
                { emoji: '🌾', sub: 'I am a farmer',     label: 'KisanYantra App', style: { background: '#D4A017', color: '#1A1A1A', boxShadow: '0 4px 24px rgba(212,160,23,0.4)' } },
                { emoji: '🚜', sub: 'I own equipment',   label: 'Driver App',      style: { background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' } },
              ].map((btn, i) => (
                <a key={i} href="#" style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 28px', borderRadius: 16, textDecoration: 'none', fontWeight: 800,
                  transition: 'all 0.25s', ...btn.style,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{ fontSize: 28 }}>{btn.emoji}</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 600 }}>{btn.sub}</div>
                    <div style={{ fontSize: 17 }}>{btn.label}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
              {['Free to download', 'Android', 'Telugu • Hindi • English'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#40916C', fontSize: 14 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px', background: '#F0EDE6' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Get in touch</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', fontFamily: 'Fraunces, serif' }}>We are here to help.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '📞', title: 'Call us',   detail: '+91 9182817019',       sub: 'Mon – Sat, 9 AM to 6 PM', bg: '#E8F5E9' },
              { icon: '📧', title: 'Email us',  detail: 'support@kisanyantra.in', sub: 'We reply within 24 hours', bg: '#E3F2FD' },
              { icon: '📍', title: 'Visit us',  detail: 'Hyderabad, Telangana',  sub: 'India',                    bg: '#FFF8E1' },
            ].map((c, i) => (
              <div key={i} className="card-lift" style={{ background: '#fff', borderRadius: 20, padding: '32px 24px', border: '1px solid #E8E5DE', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, background: c.bg, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 20px' }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#8A8A8A', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.title}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#1A1A1A', marginBottom: 4 }}>{c.detail}</div>
                <div style={{ fontSize: 13, color: '#8A8A8A' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0D1F15', padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <img src="/logo.png" alt="KisanYantra" style={{ width: 40, height: 40, objectFit: 'contain' }} />
<span style={{ color: '#fff', fontWeight: 900, fontSize: 20, fontFamily: 'Fraunces, serif' }}>KisanYantra</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                Connecting farmers with equipment owners across India.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>మీ వ్యవసాయం మా బాధ్యత 🌾</p>
            </div>

            {FOOTER_COLS.map((col, i) => (
              <div key={i}>
                <h4 style={{ color: '#fff', fontWeight: 800, fontSize: 14, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{col.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(link => (
                    <a key={link.label} href={link.href} style={{
                      color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#D4A017'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>© 2026 KisanYantra. All rights reserved.</p>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>Made with ❤️ for Indian Farmers • Hyderabad, India</p>
          </div>
        </div>
      </footer>

    </div>
  );
}