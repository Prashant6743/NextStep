import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing – Transparent Plans for Every Career Stage',
  description:
    'Affordable and transparent pricing for resume writing, LinkedIn optimization, personal branding, and portfolio creation. No hidden fees. Built for students, professionals, and founders.',
  alternates: { canonical: 'https://nextstepcareers24.com/pricing' },
  openGraph: { url: 'https://nextstepcareers24.com/pricing' },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
