import { animated, useSpring } from '@react-spring/web';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { disableScrollingPage, enableScrollingPage } from './lib';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setClose: (isOpen: boolean) => void;
  position?: 'right' | 'left';
  className?: string;
  backgroundColor?: string;
}

const modalRoot = document.querySelector('#modal');
export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  setClose,
  position = 'left',
  className = '',
  backgroundColor = 'rgba(0,0,0,0)',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { transform, opacity } = useSpring({
    transform: isOpen
      ? 'translateX(0%)'
      : `translateX(${position === 'left' ? '-' : ''}100%)`,
    opacity: isOpen ? 1 : 0,
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        setClose(false);
      }
    };
    if (isOpen) {
      disableScrollingPage();
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      enableScrollingPage();
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setClose]);

  if (!modalRoot) {
    return null;
  }

  const handleClose = () => {
    setClose(false);
  };

  return createPortal(
    <div>
      <animated.div
        style={{
          transform,
        }}
        className={`fixed inset-0 z-40 overflow-x-hidden 
      ${isOpen ? 'visible' : 'invisible'} `}>
        <div className={`modal absolute z-50 ${className} `}>
          <button
            type={'button'}
            className={'absolute right-2 top-2 cursor-pointer'}
            onClick={handleClose}>
            <AiOutlineClose size={24} />
          </button>
          <div ref={modalRef} className={'z-[60]'}>
            {children}
          </div>
        </div>
      </animated.div>
      <animated.div
        style={{ opacity }}
        className={`fixed inset-0 ${isOpen ? 'visible' : 'invisible'} z-30`}>
        <div className={`h-full w-full`} style={{ backgroundColor }} />
      </animated.div>
    </div>,
    modalRoot
  );
};
