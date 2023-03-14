import { animated, useTransition } from '@react-spring/web';
import { FC, useEffect } from 'react';

import { alertColors } from './lib';

interface AlertProps {
  type: 'error' | 'success' | 'warning';
  showAlert: boolean;
  onClose: () => void;
  message?: string;
}

interface AlertIconProps {
  d: string;
  fill: string;
}

const AlertIcon: FC<AlertIconProps> = ({ d, fill }) => (
  <svg height={28} viewBox={'0 0 28 28'} xmlns={'http://www.w3.org/2000/svg'}>
    <path d={d} fill={fill} />
  </svg>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>
    <svg
      width={'18'}
      height={'18'}
      viewBox={'0 0 18 18'}
      xmlns={'http://www.w3.org/2000/svg'}>
      <g opacity={'0.3'}>
        <path
          d={
            'M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z'
          }
          fill={'#1C1C1C'}
        />
      </g>
    </svg>
  </button>
);

export const Alert: FC<AlertProps> = ({
  type,
  message,
  onClose,
  showAlert,
}) => {
  const { bgColor, textColor, icon } = alertColors[type];

  const transition = useTransition(showAlert, {
    from: { opacity: 0, top: '-2.5rem' },
    enter: { opacity: 1, top: '2.5rem' },
    leave: { opacity: 0, top: '-2.5rem' },
  });

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (showAlert) {
      timerId = setTimeout(onClose, 1500);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [showAlert, onClose]);

  return transition(
    (style, item) =>
      item && (
        <animated.div style={style} className={'fixed-block select-none'}>
          <div
            className={`flex items-center ${bgColor} rounded-md py-2 px-2.5`}>
            {icon && <AlertIcon d={icon.d} fill={icon.fill} />}
            <div className={`mx-2 w-42 ${textColor}`}>
              <h6 className={'capitalize leading-lg font-medium'}>{type}</h6>
              {message && <p className={'text-sm leading-4'}>{message}</p>}
            </div>
            <CloseButton onClick={onClose} />
          </div>
        </animated.div>
      )
  );
};
