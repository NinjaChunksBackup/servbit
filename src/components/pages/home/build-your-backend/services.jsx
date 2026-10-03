'use client';

import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from 'utils/cn';

const SLIDER_VIEWPORT_QUERY = '(max-width: 63.9375rem)';

const getScrollPaddingLeft = (element) => {
  const scrollPaddingLeft = Number.parseFloat(window.getComputedStyle(element).scrollPaddingLeft);

  return Number.isNaN(scrollPaddingLeft) ? 0 : scrollPaddingLeft;
};

const BackendServices = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSliderViewport, setIsSliderViewport] = useState(false);
  const [trailingSpacerWidth, setTrailingSpacerWidth] = useState(0);
  const listRef = useRef(null);
  const itemRefs = useRef([]);

  // Below this width the row becomes a horizontal scroller with no hover state,
  // so cards must not dim each other and the trailing spacer is unnecessary.
  useEffect(() => {
    const mediaQuery = window.matchMedia(SLIDER_VIEWPORT_QUERY);

    const update = () => {
      setIsSliderViewport(mediaQuery.matches);
      if (!mediaQuery.matches) setTrailingSpacerWidth(0);
    };

    update();
    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const updateTrailingSpacerWidth = useCallback(() => {
    const list = listRef.current;
    const lastItem = itemRefs.current[items.length - 1];
    if (!list || !lastItem) return;

    if (window.matchMedia(SLIDER_VIEWPORT_QUERY).matches) {
      setTrailingSpacerWidth(0);
      return;
    }

    const nextWidth = Math.max(
      0,
      list.clientWidth - getScrollPaddingLeft(list) - lastItem.offsetWidth
    );

    setTrailingSpacerWidth((currentWidth) =>
      Math.abs(currentWidth - nextWidth) > 1 ? nextWidth : currentWidth
    );
  }, [items.length]);

  const handleMouseEnter = useCallback(
    (index) => {
      if (isSliderViewport) return;

      setHoveredIndex(index);
    },
    [isSliderViewport]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isSliderViewport) {
      setHoveredIndex(null);
    }
  }, [isSliderViewport]);

  const handleRef = useCallback(
    (index) => (node) => {
      itemRefs.current[index] = node;
      updateTrailingSpacerWidth();
    },
    [updateTrailingSpacerWidth]
  );

  return (
    <ul
      className="grid grid-cols-5 items-stretch gap-4 lg:-mx-5 lg:no-scrollbars lg:flex lg:snap-x lg:snap-mandatory lg:scroll-px-5 lg:gap-x-6 lg:overflow-x-auto lg:px-5"
      ref={listRef}
    >
      {items.map((item, index) => {
        const { title, description } = item;

        return (
          <li
            className={cn(
              'group flex min-w-0 cursor-default flex-col rounded-sm bg-[#111315] p-6 text-white ring-1 ring-white/5 transition-colors duration-200',
              'lg:w-72 lg:shrink-0 lg:snap-start',
              hoveredIndex !== null && hoveredIndex !== index && 'opacity-60',
              isSliderViewport ? 'opacity-100' : 'hover:opacity-100'
            )}
            key={title}
            ref={handleRef(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="font-mono text-sm tracking-extra-tight text-gray-new-50">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-4 text-lg leading-tight tracking-extra-tight text-gray-new-60 lg:text-base">
              <span className="font-medium text-white">{title}.</span> {description}
            </p>
          </li>
        );
      })}
      <li
        className="hidden shrink-0 lg:block"
        style={{ width: trailingSpacerWidth }}
        aria-hidden="true"
      />
    </ul>
  );
};

BackendServices.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BackendServices;
