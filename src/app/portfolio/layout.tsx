import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio – Real Results for Real Clients',
  description:
    'See the work Nextstep Careers has delivered: portfolios, personal branding websites, LinkedIn transformations, and resume rewrites that opened real doors.',
  alternates: { canonical: 'https://nextstepcareers24.com/portfolio' },
  openGraph: { url: 'https://nextstepcareers24.com/portfolio' },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
