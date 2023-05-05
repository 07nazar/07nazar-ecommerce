import {animated, useSpring} from '@react-spring/web';
import {FC, KeyboardEventHandler, ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai';

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
      if (modalRef.current && modalRef.current.contains(event.target as Node)) {
        setClose(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setClose]);

  if (!modalRoot) {
    return null;
  }

  const handleClose = () => {
    setClose(false);
  };

  const clickClose: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      setClose(false);
    }
  };
  // TODO убрать синее выделение при клике не в области/закрытии
  return createPortal(
    <>
      <animated.div
        style={{
          transform,
        }}
        className={`fixed inset-0 z-40 overflow-x-hidden overflow-y-auto
      ${isOpen ? 'visible' : 'invisible'} `}>
        <div
          className={'fixed inset-0'}
          ref={modalRef}
          onClick={e => e.stopPropagation()}
          onKeyDown={clickClose}
          role={'button'}
          tabIndex={-1}
          aria-label={'Close modal'}
        />
        <div className={`absolute modal ${className || ''}`}>
          <button
            type={'button'}
            className={'cursor-pointer absolute top-2 right-2'}
            onClick={handleClose}>
            <AiOutlineClose size={24} />
          </button>
          {children}
        </div>
      </animated.div>
      <animated.div
        style={{ opacity }}
        className={`fixed inset-0 ${isOpen ? 'visible' : 'invisible'} z-30`}>
        <div className={`h-full w-full`} style={{ backgroundColor }} />
      </animated.div>
    </>,
    modalRoot
  );
};
