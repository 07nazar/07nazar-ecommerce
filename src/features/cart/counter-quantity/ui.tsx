import {ChangeEvent, FC, useEffect, useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

import {Button} from 'shared/ui/button';
import {Input, InputGroup} from 'shared/ui/input';

type CounterProps = {
  value: number;
  setValue: (prev: number) => void;
};

export const Counter: FC<CounterProps> = ({ value, setValue }) => {
  const [count, setCount] = useState(value);

  const changeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(+e.target.value)) return;

    setCount(+e.target.value);
  };

  const onClickPlus = () => {
    setCount(prev => prev + 1);
  };
  const onClickMinus = () => {
    setCount(prev => prev - 1);
  };

  useEffect(() => {
    setValue(count);
  }, [count]);

  return (
    <InputGroup
      className={
        'max-w-[150px] border border-gray-medium rounded-md items-center mt-10'
      }>
      <Button
        disabled={value === 0 && true}
        className={
          'w-10 p-2 text-gray-hot h-full items-center justify-center border-r border-gray-medium rounded-none'
        }
        onClick={onClickMinus}>
        <AiOutlineMinus />
      </Button>

      <Input
        placeholder={value.toString()}
        className={'text-center text-black font-medium'}
        value={value}
        onChange={changeCountHandler}
      />

      <Button
        className={
          'w-10 p-2 text-gray-hot h-full items-center justify-center border-l border-gray-medium rounded-none'
        }
        onClick={onClickPlus}>
        <AiOutlinePlus />
      </Button>
    </InputGroup>
  );
};
