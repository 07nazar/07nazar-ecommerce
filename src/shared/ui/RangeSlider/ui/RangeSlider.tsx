import { FC, SetStateAction, useCallback, useEffect, useState } from "react";

import { SliderTrack } from "./SliderTrack";
import { Thumb } from "./Thumb";

type RangeSliderProps = {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
  width: number;
};

export const RangeSlider: FC<RangeSliderProps> = ({
  min,
  max,
  onChange,
  width,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal]);

  return (
    <div className="flex items-center justify-center">
      <Thumb
        value={minVal}
        min={min}
        max={max}
        onChange={(newValue: SetStateAction<number>) =>
          setMinVal(Math.min(Number(newValue), maxVal))
        }
        width={width}
      />
      <Thumb
        value={maxVal}
        min={min}
        max={max}
        onChange={(newValue: SetStateAction<number>) =>
          setMaxVal(Math.max(Number(newValue), minVal))
        }
        width={width}
      />
      <SliderTrack
        minPercent={getPercent(minVal)}
        maxPercent={getPercent(maxVal)}
      />
    </div>
  );
};
