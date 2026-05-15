import Hero from '@/components/sections/Hero/Hero';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import Contact from '@/components/sections/Contact/Contact';
import FAQ from '@/components/sections/FAQ/FAQ';

import ProofOfWork from '@/components/sections/ProofOfWork/ProofOfWork';

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
