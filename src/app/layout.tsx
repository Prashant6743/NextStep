import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const siteUrl = 'https://nextstepcareers24.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nextstep Careers – LinkedIn Optimization, Resume Writing & Personal Branding',
    template: '%s | Nextstep Careers',
  },
  description:
    'Nextstep Careers helps students, working professionals, freelancers, and founders build powerful personal brands, ATS-friendly resumes, and optimized LinkedIn profiles that land results.',
  keywords: [
    'LinkedIn optimization India',
    'ATS resume writing',
    'personal branding agency India',
    'career mentorship',
    'portfolio creation',
    'ghostwriting services',
    'client acquisition',
    'professional branding',
    'nextstep careers',
    'career growth India',
  ],
  authors: [{ name: 'Nextstep Careers', url: siteUrl }],
  creator: 'Nextstep Careers',
  publisher: 'Nextstep Careers',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Nextstep Careers',
    title: 'Nextstep Careers – Build Better Presence. Create Better Opportunities.',
    description:
      'We transform careers with strategy, branding, and optimized digital profiles. ATS resumes, LinkedIn optimization, personal branding & more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nextstep Careers – Professional Career Branding Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextstep Careers – LinkedIn Optimization & Personal Branding',
    description:
      'ATS-friendly resumes, LinkedIn optimization, personal branding & career mentorship for professionals across India.',
    images: ['/og-image.png'],
    creator: '@NextstepCareers',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: 'your-google-site-verification-token',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nextstep Careers',
    url: 'https://nextstepcareers24.com',
    logo: 'https://nextstepcareers24.com/dark_logo.png',
    description: 'Career branding agency specializing in LinkedIn optimization, ATS resume writing, personal branding, and portfolio creation for professionals across India.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-96060-37499',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.linkedin.com/company/nextstep-careers-201012/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
