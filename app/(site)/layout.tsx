import type { Metadata } from 'next';
import { content } from '../../lib/content';
import '../globals.css';

export const metadata: Metadata = {
  title: `${content.brand} - ${content.tagline}`,
  description: content.tagline,
  keywords: 'marine survey, draft survey, bunker survey, marine engineering, port services, shipping',
  authors: [{ name: content.brand }],
  creator: content.brand,
  publisher: content.brand,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nss-marine.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: `${content.brand} - ${content.tagline}`,
    description: content.tagline,
    url: 'https://nss-marine.com',
    siteName: content.brand,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: `${content.brand} - Professional Marine Survey Services`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.brand} - ${content.tagline}`,
    description: content.tagline,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      </head>
      <body>
        <Header />

        <main>
          {children}
        </main>

        <footer className="bg-gray-900 text-white py-12 pt-10">
          <div className="container mx-auto px-6">
            {/* Основной контент футера */}
            <div className="flex-footer items-center mb-8">
              {/* Левая часть: Логотип отцентрированный по отношению к заголовкам */}
              <div className="flex items-center space-x-4">
                <img 
                  src="/nss-white-wave.png" 
                  alt={content.brand} 
                  style={{width: '130px', height: '130px'}}
                />
                <div>
                  <h2 className="font-bold text-2xl mb-2">{content.brand}</h2>
                  <p className="text-gray-400" style={{fontSize: '0.9rem'}}>{content.tagline}</p>
                </div>
              </div>
              
              {/* Правая часть: Контактная информация */}
              <div className="text-right">
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-400">
                  <p>{content.contacts.email}</p>
                  <p>{content.contacts.phone}</p>
                  <p>{content.contacts.city}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-4">
                  <a 
                    href={content.social.linkedin} 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={content.social.instagram} 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Копирайт */}
            <div className="border-t border-gray-800 pt-8 text-center">
              <p>&copy; {currentYear} {content.brand}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
