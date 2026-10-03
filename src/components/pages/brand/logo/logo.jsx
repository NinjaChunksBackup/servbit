'use client';

import Image from 'next/image';

import DownloadIcon from 'icons/download.inline.svg';
import { cn } from 'utils/cn';

import Section from '../section';
import { handleDownloads } from '../utils';

// The Servbit lockup is single-ink artwork (mark + wordmark), so the colour and
// mono variants differ only in ink. Regenerate with:
//   node scripts/generate-brand-assets.js
const V = '2026-10-03';

const logos = [
  {
    className: 'bg-white',
    svgSrc: `/brand/servbit-logo-light-color.svg?updated=${V}`,
    svgName: 'servbit-logo-light-color.svg',
    svgSafeSrc: `/brand/servbit-logo-light-color-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logo-light-color-safe-area.svg',
    pngSrc: `/brand/servbit-logo-light-color.png?updated=${V}`,
    pngName: 'servbit-logo-light-color.png',
    pngSafeSrc: `/brand/servbit-logo-light-color-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logo-light-color-safe-area.png',
  },
  {
    className: 'bg-black-pure border-gray-new-30 border',
    svgSrc: `/brand/servbit-logo-dark-color.svg?updated=${V}`,
    svgName: 'servbit-logo-dark-color.svg',
    svgSafeSrc: `/brand/servbit-logo-dark-color-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logo-dark-color-safe-area.svg',
    pngSrc: `/brand/servbit-logo-dark-color.png?updated=${V}`,
    pngName: 'servbit-logo-dark-color.png',
    pngSafeSrc: `/brand/servbit-logo-dark-color-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logo-dark-color-safe-area.png',
  },
  {
    className: 'bg-[#5280FF]',
    svgSrc: `/brand/servbit-logo-dark-mono.svg?updated=${V}`,
    svgName: 'servbit-logo-dark-mono.svg',
    svgSafeSrc: `/brand/servbit-logo-dark-mono-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logo-dark-mono-safe-area.svg',
    pngSrc: `/brand/servbit-logo-dark-mono.png?updated=${V}`,
    pngName: 'servbit-logo-dark-mono.png',
    pngSafeSrc: `/brand/servbit-logo-dark-mono-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logo-dark-mono-safe-area.png',
  },
  {
    className: 'bg-[#00E599]',
    svgSrc: `/brand/servbit-logo-light-mono.svg?updated=${V}`,
    svgName: 'servbit-logo-light-mono.svg',
    svgSafeSrc: `/brand/servbit-logo-light-mono-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logo-light-mono-safe-area.svg',
    pngSrc: `/brand/servbit-logo-light-mono.png?updated=${V}`,
    pngName: 'servbit-logo-light-mono.png',
    pngSafeSrc: `/brand/servbit-logo-light-mono-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logo-light-mono-safe-area.png',
  },
];

const Logo = () => (
  <Section
    title="Logo"
    description="Default to the complete Servbit lockup below: the mark paired with the wordmark. Choose the light or dark ink to match the surface it sits on, and use the safe-area file when the logo needs breathing room. Do not edit, change, distort, recolor, or reconfigure the Servbit logo."
  >
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-1">
      {logos.map((logo, index) => (
        <li key={index}>
          <div
            className={cn(
              'group relative flex h-[180px] items-center justify-center',
              logo.className
            )}
          >
            <Image
              src={logo.svgSrc}
              alt="Servbit logo"
              width={157}
              height={45}
              priority
              unoptimized
            />
            <div
              className={cn(
                'absolute top-2.5 right-2.5 flex gap-2',
                'opacity-0 transition-opacity duration-300',
                'group-hover:opacity-100'
              )}
            >
              <button
                className={cn(
                  'flex h-7 items-center gap-1.5 border px-2.5',
                  'border-gray-new-30 bg-gray-new-8 text-gray-new-94',
                  'transition-colors duration-200 hover:bg-gray-new-15'
                )}
                type="button"
                onClick={() =>
                  handleDownloads([
                    { url: logo.pngSrc, filename: logo.pngName },
                    { url: logo.pngSafeSrc, filename: logo.pngSafeName },
                  ])
                }
              >
                <span className="text-xs font-medium">PNG</span>
                <DownloadIcon className="h-3.5 w-3.5" />
              </button>
              <button
                className={cn(
                  'flex h-7 items-center gap-1.5 border px-2.5',
                  'border-gray-new-30 bg-gray-new-8 text-gray-new-94',
                  'transition-colors duration-200 hover:bg-gray-new-15'
                )}
                type="button"
                onClick={() =>
                  handleDownloads([
                    { url: logo.svgSrc, filename: logo.svgName },
                    { url: logo.svgSafeSrc, filename: logo.svgSafeName },
                  ])
                }
              >
                <span className="text-xs font-medium">SVG</span>
                <DownloadIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Logo;
