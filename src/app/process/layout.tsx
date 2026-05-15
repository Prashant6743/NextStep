import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process – Nextstep Careers',
  description:
    'Learn about our proven 4-step career growth process: understanding your goals, strategic planning, professional optimization, and final delivery with ongoing support.',
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
