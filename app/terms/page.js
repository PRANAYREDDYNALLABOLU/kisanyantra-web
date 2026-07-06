export const metadata = {
  title: 'Terms of Service — KisanYantra',
  description: 'Terms of Service for KisanYantra farm equipment booking platform.',
};

export default function TermsOfService() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: '#1B4332', padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
            ← Back to Home
          </a>
          <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 900, fontFamily: 'Fraunces, serif', letterSpacing: '-1px' }}>
            Terms of Service
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
            title: '1. Acceptance of Terms',
            content: `By downloading and using the KisanYantra application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
          },
          {
            title: '2. Description of Service',
            content: `KisanYantra is a platform that connects farmers with equipment operators (drivers) who own tractors, harvesters, and other agricultural machinery. We facilitate bookings but are not responsible for the quality of work performed by equipment operators.`,
          },
          {
            title: '3. User Accounts',
            content: `To use KisanYantra, you must:
• Be at least 18 years of age
• Provide accurate and complete registration information
• Maintain the security of your account
• Notify us immediately of any unauthorized use of your account

You are responsible for all activities that occur under your account.`,
          },
          {
            title: '4. For Farmers (Riders)',
            content: `As a farmer using KisanYantra:
• You agree to provide accurate farm location information
• You agree to pay the agreed fare after work completion
• You must not cancel bookings repeatedly without valid reason
• You agree to treat equipment operators with respect
• You understand that equipment availability is not guaranteed`,
          },
          {
            title: '5. For Equipment Operators (Drivers)',
            content: `As an equipment operator on KisanYantra:
• You must own or have legal rights to operate the equipment you register
• You must complete the in-store verification process
• You must maintain your equipment in safe, working condition
• You agree to navigate to the farmer's location using the app
• You must complete accepted jobs unless there is a valid safety reason
• You agree to charge only the fare shown in the app`,
          },
          {
            title: '6. Payments',
            content: `Payment is made directly between farmers and equipment operators after job completion. KisanYantra currently does not process payments but may introduce a payment gateway in the future. All payment disputes must be resolved between the parties directly.`,
          },
          {
            title: '7. Cancellations',
            content: `Farmers may cancel a booking only before the equipment operator has accepted the request. Once accepted, cancellations may affect your account standing. Repeated cancellations may result in temporary account suspension.`,
          },
          {
            title: '8. Prohibited Activities',
            content: `You may not:
• Use the platform for any illegal purpose
• Provide false information during registration
• Harass or threaten other users
• Attempt to bypass the verification system
• Use the platform to compete with KisanYantra
• Scrape or copy data from our platform`,
          },
          {
            title: '9. Limitation of Liability',
            content: `KisanYantra is a marketplace platform and is not responsible for:
• The quality or safety of work performed by equipment operators
• Any damage to crops, land, or property during equipment operation
• Disputes between farmers and equipment operators
• Equipment breakdowns or unavailability

Our maximum liability to you shall not exceed the amount paid by you for the specific service in question.`,
          },
          {
            title: '10. Verification',
            content: `Equipment operators must visit our physical store for verification. KisanYantra reserves the right to reject or revoke verification at any time. Verification does not constitute an endorsement of any individual's skills or reliability.`,
          },
          {
            title: '11. Termination',
            content: `We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or behavior that harms other users or our platform.`,
          },
          {
            title: '12. Governing Law',
            content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.`,
          },
          {
            title: '13. Contact',
            content: `For questions about these Terms:
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