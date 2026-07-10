import './globals.css';

export const metadata = {
  title: 'KisanYantra — Farm Equipment at Your Doorstep',
  description: 'Book tractors, harvesters and farm equipment instantly. Verified equipment owners come directly to your farm. Serving farmers across Telangana and Andhra Pradesh.',
  keywords: 'tractor booking, farm equipment, kisan, Indian farmers, agriculture, Telangana, Andhra Pradesh, cultivator, harvester, sprayer',
  authors: [{ name: 'KisanYantra', url: 'https://kisanyantra.in' }],
  metadataBase: new URL('https://kisanyantra.in'),
  openGraph: {
    title: 'KisanYantra — Farm Equipment at Your Doorstep',
    description: 'Book tractors and farm equipment in minutes. Equipment owners come to your farm.',
    url: 'https://kisanyantra.in',
    siteName: 'KisanYantra',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KisanYantra — Farm Equipment Booking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KisanYantra — Farm Equipment at Your Doorstep',
    description: 'Book tractors and farm equipment in minutes. Verified drivers come to your farm.',
    images: ['/og-image.png'],
  },
  icons: {
  icon: '/favicon.png',
  apple: '/favicon.png',
  shortcut: '/favicon.png',
},
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1B4332" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}