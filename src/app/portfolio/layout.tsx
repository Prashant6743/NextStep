import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio – Nextstep Careers',
  description:
    'Explore our portfolio of work including ATS-friendly resumes, LinkedIn profile transformations, personal brand websites, digital portfolios, and branding projects.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
