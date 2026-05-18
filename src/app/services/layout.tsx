import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services – Resume, LinkedIn, Branding & More',
  description:
    'ATS-friendly resume writing, LinkedIn profile optimization, personal branding, portfolio creation, website development, ghostwriting, and career mentorship — all under one roof.',
  alternates: { canonical: 'https://nextstepcareers24.com/services' },
  openGraph: { url: 'https://nextstepcareers24.com/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
