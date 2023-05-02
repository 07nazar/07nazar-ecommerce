import {animated, useSpring} from '@react-spring/web';
import {ChangeEventHandler, FC, MouseEvent, ReactNode} from 'react';

import {colors} from '../../lib';

type CheckboxInputProps = {
  id: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  radio?: boolean;
  value?: string;
};

type CheckboxFigureProps = {
  isChecked: boolean;
  circle?: boolean;
};

type CheckboxProps = Omit<CheckboxInputProps, 'id'> & {
  children?: ReactNode;
  circle?: boolean;
  checkedValue?: string;
};

const CheckboxInput: FC<CheckboxInputProps> = ({
  id,
  isChecked,
  onChange,
  onClick,
  radio,
  value,
}) => (
  <input
    className={'sr-only peer'}
    type={radio ? 'radio' : 'checkbox'}
    checked={isChecked}
    onChange={onChange}
    onClick={onClick}
    name={'radio'}
    value={value}
    id={id}
  />
);

const CheckboxFigure: FC<CheckboxFigureProps> = ({ isChecked, circle }) => {
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked && !circle ? `${colors.blue}` : '#fff',
    borderColor: isChecked ? `${colors.blue}` : '#ddd',
  });

  if (circle) {
    return (
      <animated.svg
        fill={'none'}
        className={'checkbox border-gray-pale rounded-full'}
        style={checkboxAnimationStyle}
        viewBox={'0 0 20 20'}
        xmlns={'http://www.w3.org/2000/svg'}>
        <animated.circle
          cx={'10'}
          cy={'10'}
          r={'6.55'}
          fill={isChecked ? '#0D6EFD' : '#fff'}
        />
      </animated.svg>
    );
  }

  return (
    <animated.svg
      className={'checkbox border-gray-hot rounded-md'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={checkboxAnimationStyle}
      width={'13'}
      height={'9'}
      fill={'none'}
      viewBox={'-1 0 15 8'}
      aria-hidden={'true'}>
      <animated.path
        fill={'#fff'}
        d={'M4.643 9 0 4.673l1.3-1.211 3.343 3.115L11.7 0 13 1.212 4.643 9Z'}
      />
    </animated.svg>
  );
};

export const Checkbox: FC<CheckboxProps> = ({
  children,
  isChecked,
  onChange,
  onClick,
  radio = false,
  value,
  checkedValue,
  circle = false,
}) => {
  const isCheckRadio = checkedValue === value;

  const uniqId = `checkbox-${children?.toString().length}-${Math.random()}`;
  return (
    <label
      htmlFor={uniqId}
      className={'inline-flex items-center select-none cursor-pointer'}>
      <CheckboxInput
        isChecked={radio ? isCheckRadio : isChecked}
        value={value}
        onChange={onChange}
        onClick={onClick}
        id={uniqId}
      />
      <CheckboxFigure
        circle={circle}
        isChecked={radio ? isCheckRadio : !!isChecked}
      />
      {children}
    </label>
  );
};
