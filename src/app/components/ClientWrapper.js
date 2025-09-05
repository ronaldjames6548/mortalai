// src/app/components/ClientWrapper.js
'use client';

import dynamic from 'next/dynamic';

// Dynamically import client components with ssr: false
const TikTokInput = dynamic(() => import('./TikTokInput'), { ssr: false });
const TypeAnimation = dynamic(() => import('react-type-animation').then(mod => ({ default: mod.TypeAnimation })), { ssr: false });

export function ClientTikTokInput() {
  return <TikTokInput />;
}

export function ClientTypeAnimation({ sequence, wrapper, speed, className, repeat }) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      speed={speed}
      className={className}
      repeat={repeat}
    />
  );
}
