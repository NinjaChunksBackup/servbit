import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from 'components/shared/container/container';
import { cn } from 'utils/cn';

/**
 * Technology marks served from /public/images/technology-logos. Each entry is the
 * public path plus the name used for the accessible label, so the visible logo is
 * decorative and the surrounding copy carries the meaning.
 */
const allLogos = {
  docker: { src: '/images/technology-logos/docker.svg', title: 'Docker' },
  flutter: { src: '/images/technology-logos/flutter.svg', title: 'Flutter' },
  java: { src: '/images/technology-logos/java.svg', title: 'Java' },
  jetbrains: { src: '/images/technology-logos/jetbrains.svg', title: 'JetBrains' },
  kotlin: { src: '/images/technology-logos/kotlin.svg', title: 'Kotlin' },
  kubernetes: { src: '/images/technology-logos/kubernetes.svg', title: 'Kubernetes' },
  'next-js': { src: '/images/technology-logos/next-js.svg', title: 'Next.js' },
  'node-js': { src: '/images/technology-logos/node-js.svg', title: 'Node.js' },
  react: { src: '/images/technology-logos/react.svg', title: 'React' },
  rust: { src: '/images/technology-logos/rust.svg', title: 'Rust' },
  'spring-boot': { src: '/images/technology-logos/spring-boot.svg', title: 'Spring Boot' },
  'tailwind-css': {
    src: '/images/technology-logos/tailwind-css.svg',
    title: 'Tailwind CSS',
  },
  tauri: { src: '/images/technology-logos/tauri.svg', title: 'Tauri' },
  typescript: { src: '/images/technology-logos/typescript.svg', title: 'TypeScript' },
};

const sizes = {
  sm: 'size-6 lg:size-[22px] md:size-5',
  md: 'size-7 xl:size-6 lg:size-[22px] md:size-5',
  lg: 'size-10 md:size-8',
};

/**
 * Infinite marquee of logos. The track is rendered twice so the scroll loops
 * seamlessly; the duplicate copy is hidden from assistive technology and the
 * animation is disabled on desktop and for reduced-motion via styles/logos.css.
 */
const LogosWall = ({ className, logoClassName, logos, size = 'lg', staticDesktop }) => (
  <div
    className={cn(
      'logos logos-animated flex w-full overflow-hidden',
      staticDesktop && 'logos-static-desktop',
      className
    )}
  >
    {Array.from({ length: 2 }).map((_, index) => (
      <ul
        key={index}
        className={cn(
          'logos-content m-0! flex p-0!',
          staticDesktop && 'w-full justify-between xl:w-auto xl:justify-normal',
          staticDesktop && index === 1 && 'hidden xl:flex'
        )}
        aria-hidden={index > 0 ? 'true' : undefined}
      >
        {logos.map((logo) => {
          const entry = allLogos[logo];
          if (!entry) return null;
          return (
            <li key={logo} className="m-0! shrink-0 before:content-none!">
              <Image
                alt={entry.title}
                className={cn(sizes[size], logoClassName)}
                height={36}
                src={entry.src}
                width={36}
              />
            </li>
          );
        })}
      </ul>
    ))}
  </div>
);

LogosWall.propTypes = {
  className: PropTypes.string,
  logoClassName: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(allLogos))).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  staticDesktop: PropTypes.bool,
};

const Logos = ({ className, logoClassName, logos, size, staticDesktop }) => (
  <Container size="1100" className={cn('w-full', className)}>
    <div className="relative select-none">
      <LogosWall
        logos={logos}
        size={size}
        logoClassName={logoClassName}
        staticDesktop={staticDesktop}
      />
    </div>
  </Container>
);

Logos.propTypes = {
  className: PropTypes.string,
  logoClassName: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(allLogos))).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  staticDesktop: PropTypes.bool,
};

export { LogosWall, allLogos };

export default Logos;
