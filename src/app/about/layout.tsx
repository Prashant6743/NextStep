import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Our Mission & Story',
  description:
    'Learn how Nextstep Careers was built on one belief: every professional deserves a digital presence as powerful as their potential. 200+ careers transformed since 2022.',
  alternates: { canonical: 'https://nextstepcareers24.com/about' },
  openGraph: { url: 'https://nextstepcareers24.com/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
