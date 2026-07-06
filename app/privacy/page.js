export const metadata = {
  title: 'Privacy Policy — KisanYantra',
  description: 'Privacy Policy for KisanYantra farm equipment booking platform.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: '#1B4332', padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
            ← Back to Home
          </a>
          <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12, fontSize: 14 }}>
            Last updated: January 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
        {[
          {
            title: '1. Information We Collect',
            content: `We collect information you provide directly to us when you register for an account, including your name, phone number, email address, date of birth, and location (village, district, state, pincode). For drivers, we also collect vehicle details and equipment information.

We collect location data when you use our app to enable matching between farmers and nearby equipment operators. This data is only used while the app is active.`,
          },
          {
            title: '2. How We Use Your Information',
            content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Connect farmers with nearby equipment operators
• Send you push notifications about ride requests and status updates
• Verify your identity and equipment
• Provide customer support
• Send important service-related communications`,
          },
          {
            title: '3. Information Sharing',
            content: `We do not sell, trade, or rent your personal information to third parties. We share your information only in the following circumstances:
• With equipment operators to fulfill your booking (your name and farm location)
• With farmers to confirm your arrival (your name and approximate location)
• With service providers who assist us in operating our platform
• When required by law or to protect the safety of our users`,
          },
          {
            title: '4. Location Data',
            content: `KisanYantra uses location data to match farmers with nearby equipment operators. Location data is:
• Only collected when the app is in use
• Used solely for the purpose of connecting farmers and drivers
• Not stored permanently after a ride is completed
• Never sold to third-party advertisers`,
          },
          {
            title: '5. Data Security',
            content: `We implement industry-standard security measures to protect your personal information, including encrypted data transmission (HTTPS), secure JWT-based authentication, and regular security audits. However, no method of transmission over the internet is 100% secure.`,
          },
          {
            title: '6. Your Rights',
            content: `You have the right to:
• Access your personal information
• Correct inaccurate data
• Request deletion of your account and data
• Opt out of non-essential communications

To exercise these rights, contact us at support@kisanyantra.in`,
          },
          {
            title: '7. Children\'s Privacy',
            content: `KisanYantra is not intended for users under 18 years of age. We do not knowingly collect personal information from children.`,
          },
          {
            title: '8. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via the app or email. Continued use of our services after changes constitutes acceptance of the updated policy.`,
          },
          {
            title: '9. Contact Us',
            content: `If you have questions about this Privacy Policy, please contact us:
• Email: support@kisanyantra.in
• Phone: +91 9182817019
• Address: Hyderabad, Telangana, India`,
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1B4332', marginBottom: 12, fontFamily: 'Fraunces, serif' }}>
              {section.title}
            </h2>
            <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: 15, whiteSpace: 'pre-line' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ background: '#0D1F15', padding: '32px 24px', textAlign: 'center' }}>
        <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none' }}>
          © 2026 KisanYantra • Made with ❤️ for Indian Farmers
        </a>
      </div>
    </div>
  );
}