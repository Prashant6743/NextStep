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
        lerp: 0.085,
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
        infinite: false,
        anchors: {
          offset: NAV_OFFSET,
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
