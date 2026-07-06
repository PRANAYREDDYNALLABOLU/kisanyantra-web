export const metadata = {
  title: 'About Us — KisanYantra',
  description: 'Learn about KisanYantra — connecting farmers with equipment owners across India.',
};

export default function AboutUs() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(150deg, #0D2818 0%, #1B4332 60%, #2D6A4F 100%)', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
            ← Back to Home
          </a>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#D4A017', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Our Story</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 20 }}>
            Built for the<br />
            <span style={{ color: '#D4A017' }}>Indian farmer.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18, lineHeight: 1.7, maxWidth: 600 }}>
            KisanYantra was born from a simple observation — farmers spend more time arranging equipment than actually farming. We are here to fix that.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '72px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 72 }}>
          {[
            { icon: '🎯', title: 'Our Mission',  text: 'To make farm equipment accessible to every Indian farmer — regardless of farm size, location, or income — by connecting them with nearby equipment operators in minutes.' },
            { icon: '👁️', title: 'Our Vision',   text: 'A future where no Indian farmer waits days for a tractor. Where modern agricultural equipment is as easy to book as calling a cab.' },
            { icon: '💡', title: 'Our Approach', text: 'We verify every equipment operator in person at our stores. We use live GPS tracking and shortest-route navigation. We only charge after work is done.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', border: '1px solid #E8E5DE' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#1B4332', fontFamily: 'Fraunces, serif', marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: '#6A6A6A', fontSize: 15, lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div style={{ background: '#F0EDE6', borderRadius: 24, padding: '48px 40px', marginBottom: 72 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>The story</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1px', color: '#1A1A1A', marginBottom: 24 }}>
            Why we built KisanYantra
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'India has over 150 million farm households. Most small and medium farmers do not own their own tractors or harvesters — they depend on equipment owners who are often booked through word-of-mouth, phone chains, or local brokers.',
              'This system is slow, unreliable, and expensive. A farmer in Nalgonda might wait 3–4 days for a tractor that is sitting idle just 10 km away.',
              'We built KisanYantra to eliminate that gap. Using GPS, verified driver profiles, and a simple 3-step booking flow, we connect farmers with nearby equipment operators in minutes — not days.',
              'We started in Telangana and Andhra Pradesh, focusing on the crops and equipment most needed in these regions. Our goal is to expand across India, one district at a time.',
            ].map((para, i) => (
              <p key={i} style={{ color: '#4A4A4A', fontSize: 16, lineHeight: 1.85 }}>{para}</p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 72 }}>
          {[
            { value: '500+',  label: 'Farmers served',       icon: '👨‍🌾' },
            { value: '50+',   label: 'Equipment operators',  icon: '🚜' },
            { value: '16+',   label: 'Equipment types',      icon: '🔧' },
            { value: '10+',   label: 'Districts covered',    icon: '📍' },
            { value: '4.9★',  label: 'Average driver rating', icon: '⭐' },
            { value: '2026',  label: 'Founded',               icon: '🌱' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '28px 20px', textAlign: 'center', border: '1px solid #E8E5DE' }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{stat.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#1B4332', fontFamily: 'Fraunces, serif', marginBottom: 6 }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: '#8A8A8A' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>The team</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1px', marginBottom: 40 }}>
            People behind KisanYantra
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { name: 'Pranay Reddy Nallabolu', role: 'Founder & CEO', location: 'Hyderabad, Telangana', avatar: 'PR', color: 'linear-gradient(135deg, #1B4332, #40916C)' },
            ].map((member, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '32px 24px', border: '1px solid #E8E5DE', display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ width: 64, height: 64, background: member.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 20, flexShrink: 0 }}>
                  {member.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: '#1A1A1A', marginBottom: 4 }}>{member.name}</div>
                  <div style={{ fontSize: 13, color: '#40916C', fontWeight: 700, marginBottom: 4 }}>{member.role}</div>
                  <div style={{ fontSize: 12, color: '#8A8A8A' }}>📍 {member.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#40916C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What we stand for</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1px', marginBottom: 40 }}>Our values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { icon: '🤝', title: 'Trust first',       text: 'Every equipment operator is verified in person at our stores. No anonymous drivers on our platform.'  },
              { icon: '🌾', title: 'Farmer first',      text: 'Every decision we make is evaluated by one question: does this make life easier for Indian farmers?'   },
              { icon: '📍', title: 'Local first',       text: 'We grow district by district, ensuring quality before scale. We would rather do one district right than ten poorly.' },
              { icon: '💰', title: 'Fair pricing',      text: 'Transparent fares. No hidden charges. Farmers pay only after the work is complete.'                   },
              { icon: '🗣️', title: 'Language first',    text: 'Our app works in Telugu, Hindi, and English — because farming does not stop for language barriers.'   },
              { icon: '🔒', title: 'Privacy always',    text: 'We never sell your data. Location is only tracked during active rides. Your information is yours.'    },
            ].map((val, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '24px 20px', border: '1px solid #E8E5DE', display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{val.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: '#1A1A1A', marginBottom: 6 }}>{val.title}</div>
                  <div style={{ fontSize: 13, color: '#8A8A8A', lineHeight: 1.7 }}>{val.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#1B4332', borderRadius: 24, padding: '48px 40px', textAlign: 'center', marginBottom: 72 }}>
          <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 900, fontFamily: 'Fraunces, serif', marginBottom: 16 }}>
            Join the KisanYantra family
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
            Whether you are a farmer looking for equipment or an operator looking for work — we have a place for you.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#download" style={{ background: '#D4A017', color: '#1A1A1A', fontWeight: 800, padding: '14px 28px', borderRadius: 14, textDecoration: 'none', fontSize: 15 }}>
              📱 Download App
            </a>
            <a href="/contact" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, padding: '14px 28px', borderRadius: 14, textDecoration: 'none', fontSize: 15, border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0D1F15', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}>
          {[
            { label: 'Home',            href: '/'         },
            { label: 'Privacy Policy',  href: '/privacy'  },
            { label: 'Terms of Service',href: '/terms'    },
            { label: 'Contact',         href: '/contact'  },
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