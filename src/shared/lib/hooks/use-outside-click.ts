import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  onMount?: () => void,
  onUnmount?: () => void,
  isOpen?: boolean
) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    if (isOpen && onMount) {
      onMount();
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      if (isOpen && onUnmount) {
        onUnmount();
      }

      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};
