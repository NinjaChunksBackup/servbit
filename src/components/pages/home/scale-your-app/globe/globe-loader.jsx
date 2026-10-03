'use client';

import dynamic from 'next/dynamic';

const GlobeAnimation = dynamic(() => import('./globe-animation'), {
  ssr: false,
  loading: () => <div className="size-full" aria-hidden="true" />,
});

const Globe = () => <GlobeAnimation />;

export default Globe;
