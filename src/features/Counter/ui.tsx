import { FC, useState, SyntheticEvent, ChangeEvent } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Button } from '../../shared/ui/Button';
import { Input, InputGroup } from '../../shared/ui/Input';

export const Counter: FC = () => {
  const [count, setCount] = useState(1);

  const changeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(+e.target.value)) return;

    setCount(() => +e.target.value);
  };

  const onClickPlus = (e: SyntheticEvent) => {
    e.preventDefault();
    setCount(prev => prev + 1);
  };
  const onClickMinus = (e: SyntheticEvent) => {
    e.preventDefault();
    if (count - 1 < 1) return;

    setCount(prev => prev - 1);
  };

  return (
    <InputGroup className={'max-w-[150px] mt-10'}>
      <Button
        disabled={count === 1 && true}
        className={'bg-light'}
        onClick={onClickMinus}>
        <AiOutlineMinus />
      </Button>

      <Input
        placeholder={'0'}
        className={'text-center font-medium '}
        value={count}
        onChange={changeCountHandler}
      />

      <Button className={'bg-light'} onClick={onClickPlus}>
        <AiOutlinePlus />
      </Button>
    </InputGroup>
  );
};
