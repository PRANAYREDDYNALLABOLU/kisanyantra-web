import './globals.css';

export const metadata = {
  title: 'KisanYantra — Farm Equipment at Your Doorstep',
  description: 'Book tractors and farm equipment instantly. Equipment owners come to your farm. Serving farmers across Telangana and Andhra Pradesh.',
  keywords: 'tractor booking, farm equipment, Indian farmers, agriculture, Telangana, Andhra Pradesh',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
