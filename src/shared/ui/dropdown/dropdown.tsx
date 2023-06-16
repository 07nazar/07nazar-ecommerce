import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { DropdownButton } from './dropdown-button';
import { DropdownContent } from './dropdown-content';

interface DropdownProps {
  children: ReactNode[];
  title: string;
  maxItems?: number;
  className?: string;
  isOpened?: boolean;
  isScrollable?: boolean;
}

export const Dropdown: FC<DropdownProps> = ({
  isOpened = false,
  children,
  title,
  maxItems,
  className,
  isScrollable,
}) => {
  const [isOpen, setIsOpen] = useState(isOpened);
  const [showAll, setShowAll] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
    setShowAll(false);
  };

  const showMore = () => {
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
        <button
          type={'button'}
          key={maxItems}
          onClick={showMore}
          className={'text-blue'}>
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
        className={className}
        scrollable={isScrollable}>
        {renderedChildren}
      </DropdownContent>
    </>
  );
};
