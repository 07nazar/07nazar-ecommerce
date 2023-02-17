import {
  FC,
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
  width: number;
}

export const RangeSlider: FC<RangeSliderProps> = ({
  min,
  max,
  onChange,
  width,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLInputElement>(null);
  const deferredMinVal = useDeferredValue(minVal);
  const deferredMaxVal = useDeferredValue(maxVal);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(deferredMinVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [deferredMinVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(deferredMaxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [deferredMaxVal, getPercent]);

  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal]);

  return (
    <div className="flex items-center justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={deferredMinVal}
        onChange={(event) => {
          const value = Math.min(
            Number(event.target.value),
            deferredMaxVal - 1
          );
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`thumb w-[${width}px]`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(
            Number(event.target.value),
            deferredMinVal + 1
          );
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`thumb w-[${width}px]`}
      />

      <div className="relative w-full h-[4px] ">
        <div className="absolute bg-[#AFD0FF] w-full z-[1] rounded-[2px] h-full" />
        <div
          ref={range}
          className="absolute bg-blue z-[2] rounded-[2px] h-full"
        />
      </div>
    </div>
  );
};
