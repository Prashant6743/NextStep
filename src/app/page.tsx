import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero/Hero';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import Contact from '@/components/sections/Contact/Contact';
import FAQ from '@/components/sections/FAQ/FAQ';
import ProofOfWork from '@/components/sections/ProofOfWork/ProofOfWork';

export const metadata: Metadata = {
  title: 'LinkedIn Optimization, Resume Writing & Personal Branding Agency in India',
  description:
    'Nextstep Careers helps students, working professionals & founders build powerful LinkedIn profiles, ATS-friendly resumes, and personal brands that get noticed. 3.6K+ YouTube subs in 15 days. Real results.',
  alternates: {
    canonical: 'https://nextstepcareers24.com',
  },
  openGraph: {
    url: 'https://nextstepcareers24.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-bridge" aria-hidden />
      <Testimonials />
      <div className="section-bridge" aria-hidden />
      <ProofOfWork />
      <div className="section-bridge" aria-hidden />
      <Contact />
      <div className="section-bridge" aria-hidden />
      <FAQ />
    </>
  );
}
