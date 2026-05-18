import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Get a Free Consultation',
  description:
    'Ready to transform your career presence? Reach out to Nextstep Careers for a free consultation. We reply within 24 hours and are also available on WhatsApp.',
  alternates: { canonical: 'https://nextstepcareers24.com/contact' },
  openGraph: { url: 'https://nextstepcareers24.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
