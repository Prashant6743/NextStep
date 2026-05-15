import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Nextstep Careers',
  description:
    'Get in touch with Nextstep Careers. Fill out our contact form, reach us on WhatsApp, or email us to start your career transformation journey.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
