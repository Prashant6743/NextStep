import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services – Nextstep Careers',
  description:
    'Explore our full range of career growth services including ATS-friendly resume writing, LinkedIn optimization, personal branding, portfolio creation, website development, and more.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
