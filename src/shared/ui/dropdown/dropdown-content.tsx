import { animated, useSpring } from '@react-spring/web';
import { FC, ReactNode, RefObject, useEffect, useState } from 'react';

interface DropdownContentProps {
  isOpen: boolean;
  contentHeight: number;
  children: ReactNode[];
  contentRef: RefObject<HTMLDivElement>;
  className?: string;
  scrollable?: boolean;
}

export const DropdownContent: FC<DropdownContentProps> = ({
  isOpen,
  contentHeight,
  children,
  contentRef,
  className,
  scrollable = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const contentAnimation = useSpring({
    from: { height: '0px', opacity: 0 },
    to: {
      height: isOpen ? `${contentHeight}px` : '0px',
      opacity: isOpen ? 1 : 0,
    },
    onRest: () => setIsAnimating(false),
  });

  useEffect(() => {
    if (contentRef.current && !isAnimating) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const isScrollable = isOpen && !isAnimating && scrollable;

  return (
    <animated.div
      style={contentAnimation}
      className={isScrollable ? 'scrollbar-y overflow-y-scroll' : ''}>
      {isOpen && (
        <div ref={contentRef} className={`flex flex-col ${className || ''}`}>
          {children}
        </div>
      )}
    </animated.div>
  );
};
