import { useState, useLayoutEffect } from 'react';

type MatchMediaValues = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const queries = [
  '(max-width: 480px)',
  '(max-width: 768px)',
  '(min-width: 769px)',
];

const getValues = (mediaQueryLists: MediaQueryList[]): MatchMediaValues => ({
  isMobile: mediaQueryLists[0].matches,
  isTablet: mediaQueryLists[1].matches,
  isDesktop: mediaQueryLists[2].matches,
});

export const useMatchMedia = (): MatchMediaValues => {
  const mediaQueryLists = queries.map(query => matchMedia(query));
  const [values, setValues] = useState<MatchMediaValues>(() =>
    getValues(mediaQueryLists)
  );

  useLayoutEffect(() => {
    const handler = () => setValues(getValues(mediaQueryLists));

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  }, []);

  return values;
};
