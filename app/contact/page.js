'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form,     setForm]     = useState({ name: '', phone: '', email: '', type: '', message: '' });
  const [loading,  setLoading]  = useState(false);
  const [submitted,setSubmitted]= useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.name || !form.phone || !form.message) {
    alert('Please fill in Name, Phone and Message');
    return;
  }
  setLoading(true);
  try {
    const res = await fetch('https://kisanyantra-backend-production.up.railway.app/api/admin/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    setSubmitted(true);
  } catch (err) {
    alert('Could not send message. Please try again or call us directly.');
  }
  setLoading(false);
};

  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(150deg, #0D2818 0%, #1B4332 60%, #2D6A4F 100%)', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
            ← Back to Home
          </a>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#D4A017', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Get in touch</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 20 }}>
            We are here<br />
            <span style={{ color: '#D4A017' }}>to help.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18, lineHeight: 1.7, maxWidth: 500 }}>
            Have a question? Need help with a booking? Want to register as a driver? Reach out — we respond fast.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Fraunces, serif', marginBottom: 32, color: '#1A1A1A' }}>
              Contact details
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { icon: '📞', title: 'Phone',   detail: '+91 9182817019',         sub: 'Mon – Sat, 9 AM to 6 PM',  href: 'tel:+919182817019'            },
                { icon: '📧', title: 'Email',   detail: 'support@kisanyantra.in', sub: 'We reply within 24 hours', href: 'mailto:support@kisanyantra.in'},
                { icon: '🌐', title: 'Website', detail: 'kisanyantra.in',          sub: 'Visit our website',         href: 'https://kisanyantra.in'       },
                { icon: '📍', title: 'Address', detail: 'Hyderabad, Telangana',   sub: 'India — 500001',            href: '#'                            },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  background: '#fff', borderRadius: 16, padding: '20px',
                  border: '1px solid #E8E5DE', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#40916C'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E5DE'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: 44, height: 44, background: '#E8F5E9', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#40916C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: '#1A1A1A', marginBottom: 2 }}>{item.detail}</div>
                    <div style={{ fontSize: 12, color: '#8A8A8A' }}>{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQs */}
            <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Fraunces, serif', marginBottom: 20, color: '#1A1A1A' }}>
              Common questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'How do I book equipment?',             a: 'Download the KisanYantra app, enter your farm location, pick equipment and confirm. A driver will accept your request within minutes.' },
                { q: 'How do I register as a driver?',       a: 'Download the Driver app, sign up, then visit our store in Hyderabad for verification of your equipment.' },
                { q: 'Is the app free to download?',         a: 'Yes, both the Farmer app and Driver app are completely free to download and use.' },
                { q: 'Which languages does the app support?',a: 'KisanYantra supports Telugu, Hindi and English.' },
                { q: 'When do I pay?',                       a: 'You pay the driver directly after the work is complete. No advance payment required.' },
              ].map((faq, i) => (
                <details key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #E8E5DE', overflow: 'hidden' }}>
                  <summary style={{ padding: '16px 20px', fontWeight: 700, fontSize: 14, color: '#1A1A1A', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.q}
                    <span style={{ color: '#40916C', fontSize: 18, fontWeight: 400, flexShrink: 0, marginLeft: 8 }}>+</span>
                  </summary>
                  <div style={{ padding: '0 20px 16px', color: '#6A6A6A', fontSize: 14, lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div style={{ background: '#fff', borderRadius: 24, padding: '40px', border: '1px solid #E8E5DE', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Fraunces, serif', color: '#1B4332', marginBottom: 12 }}>Message sent!</h3>
                <p style={{ color: '#6A6A6A', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', type: '', message: '' }); }}
                  style={{ background: '#1B4332', color: '#fff', fontWeight: 700, padding: '12px 28px', borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: 14 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Fraunces, serif', marginBottom: 8, color: '#1A1A1A' }}>Send us a message</h2>
                <p style={{ color: '#8A8A8A', fontSize: 14, marginBottom: 28 }}>We typically respond within a few hours.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#3A5A3A', marginBottom: 6 }}>
                      Full Name <span style={{ color: '#E8593C' }}>*</span>
                    </label>
                    <input
                      type="text" placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E8E5DE', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#40916C'}
                      onBlur={e => e.target.style.borderColor = '#E8E5DE'}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#3A5A3A', marginBottom: 6 }}>
                      Phone Number <span style={{ color: '#E8593C' }}>*</span>
                    </label>
                    <input
                      type="tel" placeholder="+91 9XXXXXXXXX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E8E5DE', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#40916C'}
                      onBlur={e => e.target.style.borderColor = '#E8E5DE'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#3A5A3A', marginBottom: 6 }}>Email (optional)</label>
                    <input
                      type="email" placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E8E5DE', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#40916C'}
                      onBlur={e => e.target.style.borderColor = '#E8E5DE'}
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#3A5A3A', marginBottom: 6 }}>I am a...</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Farmer', 'Equipment Owner', 'Other'].map(type => (
                        <button
                          key={type} type="button"
                          onClick={() => setForm({ ...form, type })}
                          style={{
                            padding: '8px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1.5px solid',
                            borderColor:    form.type === type ? '#1B4332' : '#E8E5DE',
                            background:     form.type === type ? '#1B4332' : '#fff',
                            color:          form.type === type ? '#fff'    : '#6A6A6A',
                            transition:     'all 0.2s',
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#3A5A3A', marginBottom: 6 }}>
                      Message <span style={{ color: '#E8593C' }}>*</span>
                    </label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E8E5DE', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#40916C'}
                      onBlur={e => e.target.style.borderColor = '#E8E5DE'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: loading ? '#9ab89a' : '#1B4332',
                      color: '#fff', fontWeight: 800, padding: '15px', borderRadius: 14,
                      border: 'none', fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s', marginTop: 4,
                    }}
                    onMouseEnter={e => { if (!loading) e.target.style.background = '#2D6A4F'; }}
                    onMouseLeave={e => { if (!loading) e.target.style.background = '#1B4332'; }}
                  >
                    {loading ? '⏳ Sending...' : '📨 Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0D1F15', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}>
          {[
            { label: 'Home',            href: '/'         },
            { label: 'About Us',        href: '/about'    },
            { label: 'Privacy Policy',  href: '/privacy'  },
            { label: 'Terms of Service',href: '/terms'    },
          ].map((link, i) => (
            <a key={i} href={link.href} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none' }}>
              {link.label}
            </a>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>
          © 2026 KisanYantra • Made with ❤️ for Indian Farmers
        </p>
      </div>
    </div>
  );
}