import { animated, useSpring } from '@react-spring/web';
import { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '../Button';

interface DropdownProps {
  children: ReactNode[];
  title: string;
  maxItems?: number;
  className?: string;
}

interface DropdownButtonProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
}

interface DropdownContentProps {
  isOpen: boolean;
  contentHeight: number;
  children: ReactNode[];
  contentRef: RefObject<HTMLDivElement>;
  className?: string;
}

const DropdownButton: FC<DropdownButtonProps> = ({ title, isOpen, toggle }) => (
  <Button
    className={
      'relative w-full text-black mt-2 font-semibold px-0 py-4 border-t border-gray-medium rounded-none'
    }
    onClick={toggle}>
    <span>{title}</span>
    <div
      className={`absolute top-1/2 -translate-y-1/2 right-1 transition-all duration-500
          ${isOpen ? 'rotate-180' : ''}`}>
      <IoIosArrowDown className={'text-gray-hot'} />
    </div>
  </Button>
);

const DropdownContent: FC<DropdownContentProps> = ({
  isOpen,
  contentHeight,
  children,
  contentRef,
  className,
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

  return (
    <animated.div style={contentAnimation}>
      {isOpen && (
        <div ref={contentRef} className={`flex flex-col ${className || ''}`}>
          {children}
        </div>
      )}
    </animated.div>
  );
};

export const Dropdown: FC<DropdownProps> = ({
  children,
  title,
  maxItems,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
    setShowAll(false);
  };

  const showMore = () => {
    setContentHeight(0);
    setShowAll(true);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [children, isOpen, contentHeight]);

  const renderedChildren = children.map((child, index) => {
    const isShowMoreButton =
      !showAll && maxItems !== undefined && index === maxItems;

    if (isShowMoreButton) {
      return (
        <button key={maxItems} onClick={showMore} className={'text-blue'}>
          See all
        </button>
      );
    }

    if (showAll || maxItems === undefined || index < maxItems) {
      return child;
    }

    return null;
  });

  return (
    <>
      <DropdownButton title={title} isOpen={isOpen} toggle={toggle} />
      <DropdownContent
        isOpen={isOpen}
        contentHeight={contentHeight}
        contentRef={contentRef}
        className={className}>
        {renderedChildren}
      </DropdownContent>
    </>
  );
};
