
import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google'; //Optimisation police

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JMD Concept',
  description: 'Agence de communication innovante spécialisée dans la création de contenus digitaux, le développement de sites et applications web, et la conception de bases de données.',
  keywords: 'communication, digital, sites web, applications, bases de données, marketing, RD Congo, Kinshasa, création de contenu, SEO, UI',
  openGraph: {
    title: 'JMD Concept',
    description: 'Votre partenaire pour une transformation digitale réussie',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jmd.oncept.com',
    siteName: 'JMD Concept',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: 'fonts/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'fonts/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: 'fonts/favicon_io/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: 'fonts/favicon_io/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
        {/*  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}

        {/* Google Analytics */}
        {/*<Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L0VNPP269D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L0VNPP269D');
          `}
        </Script> */}
        <Script src="https://elfsightcdn.com/platform.js" async></Script>
        <div className="elfsight-app-532beebe-a416-4497-9092-75ee45f2ce07" data-elfsight-app-lazy></div>
      </body >
    </html >
  );
}



/* 
import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: 'JMD Concept',
  description: 'Solutions digitales pour votre entreprise',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="fonts/favicon_io/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L0VNPP269D');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  )
} */