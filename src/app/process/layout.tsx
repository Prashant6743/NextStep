import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process – How We Work',
  description:
    'Discover how Nextstep Careers transforms your career presence in simple steps: discovery, strategy, creation, and delivery. A clear process built around your goals.',
  alternates: { canonical: 'https://nextstepcareers24.com/process' },
  openGraph: { url: 'https://nextstepcareers24.com/process' },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
