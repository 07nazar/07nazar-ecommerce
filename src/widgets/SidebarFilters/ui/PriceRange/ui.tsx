import { FC, useState } from 'react';

import { Button } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown';
import { Input } from 'shared/ui/Input';
import { RangeSlider } from 'shared/ui/RangeSlider';

export const PriceRangeBlock: FC = () => {
  const price = {
    min: 0,
    max: 3000,
  };

  const [userPrice, setUserPrice] = useState({
    min: price.min,
    max: price.max,
  });

  const handlePriceChange = () => {
    setUserPrice({
      min: userPrice.min,
      max: userPrice.max,
    });
  };

  return (
    <Dropdown title={'Price range'} className={'pt-2 pb-3'}>
      <RangeSlider
        min={price.min}
        max={price.max}
        userPrice={userPrice}
        onChange={(min, max) => {
          setUserPrice(() => ({
            min,
            max,
          }));
        }}
        width={240}
      />

      <div className={'flex gap-4 my-4'}>
        <Input
          value={userPrice.min}
          onChange={e => {
            const newValue = Math.min(
              Math.max(+e.target.value, price.min),
              userPrice.max
            );
            setUserPrice({
              ...userPrice,
              min: newValue,
            });
          }}
          placeholder={'0'}
          className={'rounded-md py-2.5 bg-light'}
          min={price.min}
          max={userPrice.max}
        />
        <Input
          value={userPrice.max}
          onChange={e => {
            const newValue = Math.max(
              Math.min(+e.target.value, price.max),
              userPrice.min
            );
            setUserPrice({
              ...userPrice,
              max: newValue,
            });
          }}
          placeholder={'999999'}
          className={'rounded-md py-2.5  bg-light'}
          min={userPrice.min}
          max={price.max}
        />
      </div>
      <Button
        className={'text-blue bg-white bg-light max-w-[76px] w-full mx-auto'}
        onClick={handlePriceChange}>
        Apply
      </Button>
    </Dropdown>
  );
};
