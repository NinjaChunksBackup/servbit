'use client';

import Image from 'next/image';

import DownloadIcon from 'icons/download.inline.svg';
import { cn } from 'utils/cn';

import Section from '../section';
import { handleDownloads } from '../utils';

// Bare glyph sourced from the Servbit favicon artwork. Regenerate with:
//   node scripts/generate-brand-assets.js
const V = '2026-10-03';

const logos = [
  {
    svgSrc: `/brand/servbit-logomark-light-color.svg?updated=${V}`,
    svgName: 'servbit-logomark-light-color.svg',
    svgSafeSrc: `/brand/servbit-logomark-light-color-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logomark-light-color-safe-area.svg',
    pngSrc: `/brand/servbit-logomark-light-color.png?updated=${V}`,
    pngName: 'servbit-logomark-light-color.png',
    pngSafeSrc: `/brand/servbit-logomark-light-color-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logomark-light-color-safe-area.png',
  },
  {
    svgSrc: `/brand/servbit-logomark-light-mono.svg?updated=${V}`,
    svgName: 'servbit-logomark-light-mono.svg',
    svgSafeSrc: `/brand/servbit-logomark-light-mono-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logomark-light-mono-safe-area.svg',
    pngSrc: `/brand/servbit-logomark-light-mono.png?updated=${V}`,
    pngName: 'servbit-logomark-light-mono.png',
    pngSafeSrc: `/brand/servbit-logomark-light-mono-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logomark-light-mono-safe-area.png',
  },
  {
    svgSrc: `/brand/servbit-logomark-dark-color.svg?updated=${V}`,
    svgName: 'servbit-logomark-dark-color.svg',
    svgSafeSrc: `/brand/servbit-logomark-dark-color-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logomark-dark-color-safe-area.svg',
    pngSrc: `/brand/servbit-logomark-dark-color.png?updated=${V}`,
    pngName: 'servbit-logomark-dark-color.png',
    pngSafeSrc: `/brand/servbit-logomark-dark-color-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logomark-dark-color-safe-area.png',
  },
  {
    svgSrc: `/brand/servbit-logomark-dark-mono.svg?updated=${V}`,
    svgName: 'servbit-logomark-dark-mono.svg',
    svgSafeSrc: `/brand/servbit-logomark-dark-mono-safe-area.svg?updated=${V}`,
    svgSafeName: 'servbit-logomark-dark-mono-safe-area.svg',
    pngSrc: `/brand/servbit-logomark-dark-mono.png?updated=${V}`,
    pngName: 'servbit-logomark-dark-mono.png',
    pngSafeSrc: `/brand/servbit-logomark-dark-mono-safe-area.png?updated=${V}`,
    pngSafeName: 'servbit-logomark-dark-mono-safe-area.png',
  },
];

const Logomark = () => (
  <Section
    title="Logomark"
    description="Use the Servbit logomark on its own only where there is not enough room for the full lockup, or where several brand symbols appear together. The colour mark carries the Servbit green; the mono marks are single-ink for busy backgrounds."
  >
    <ul className="grid grid-cols-4 gap-4 md:grid-cols-2">
      {logos.map((logo, index) => (
        <li
          className={cn(
            index < 2 && 'bg-white',
            index >= 2 && 'border border-gray-new-30 bg-black-pure'
          )}
          key={index}
        >
          <div className="group relative flex h-[200px] items-center justify-center lg:h-[164px] md:h-[152px]">
            <Image
              className="md:w-[52px]"
              src={logo.svgSrc}
              alt="Servbit logomark"
              width={64}
              height={64}
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

export default Logomark;
