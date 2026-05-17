'use client';

import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

const NAV_OFFSET = 88;

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 1.0,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.8,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
