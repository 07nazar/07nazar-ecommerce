import { FC, useState, SyntheticEvent, ChangeEvent } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { Button } from '../../shared/ui/Button'
import { Input, InputGroup } from '../../shared/ui/Input'

export const Counter: FC = () => {
  const [count, setCount] = useState(1)

  const changeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(+e.target.value)) return

    setCount(() => +e.target.value)
  }

  const onClickPlus = (e: SyntheticEvent) => {
    e.preventDefault()
    setCount((prev) => prev + 1)
  }
  const onClickMinus = (e: SyntheticEvent) => {
    e.preventDefault()
    if (count - 1 < 1) return

    setCount((prev) => prev - 1)
  }

  return (
    <InputGroup styles="max-w-[150px] mt-10">
      <Button
        disabled={count === 1 && true}
        border="rounded-l-lg"
        color="light"
        onClick={onClickMinus}>
        <AiOutlineMinus />
      </Button>

      <Input
        placeholder="0"
        border="border-y border-x-0"
        styles="text-center font-medium"
        value={count}
        handleChange={changeCountHandler}
      />

      <Button border="rounded-r-lg" color="light" onClick={onClickPlus}>
        <AiOutlinePlus />
      </Button>
    </InputGroup>
  )
}
