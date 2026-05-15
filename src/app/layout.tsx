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

export const metadata: Metadata = {
  title: 'Nextstep Careers – Build Better Presence. Create Better Opportunities.',
  description:
    'We help students, professionals, freelancers, and creators build powerful personal brands, optimized profiles, and professional digital presence.',
  keywords: [
    'career growth', 'LinkedIn optimization', 'resume writing',
    'personal branding', 'portfolio creation', 'career mentorship',
  ],
  openGraph: {
    title: 'Nextstep Careers',
    description: 'Transform Your Career Presence',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
