'use client';

import dynamic from 'next/dynamic';

export const Map = dynamic(() => import('./MapSection'), {
  ssr: false,
});
