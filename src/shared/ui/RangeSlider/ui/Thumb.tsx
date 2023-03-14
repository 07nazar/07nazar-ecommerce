import { FC } from 'react';

type ThumbProps = {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  width: number;
};

export const Thumb: FC<ThumbProps> = ({ value, min, max, onChange, width }) => (
  <input
    type={'range'}
    min={min}
    max={max}
    value={value}
    onChange={event => {
      onChange(Number(event.target.value));
    }}
    className={`thumb`}
    style={{ width: `${width}px` }}
  />
);
