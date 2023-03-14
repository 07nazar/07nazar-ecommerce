import { FC } from 'react';

type SliderTrackProps = {
  minPercent: number;
  maxPercent: number;
};

export const SliderTrack: FC<SliderTrackProps> = ({
  minPercent,
  maxPercent,
}) => (
  <div className={'relative w-full h-[4px] '}>
    <div
      className={'absolute bg-[#AFD0FF] w-full z-[1] rounded-[2px] h-full'}
    />
    <div
      className={'absolute bg-blue z-[2] rounded-[2px] h-full'}
      style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
    />
  </div>
);
