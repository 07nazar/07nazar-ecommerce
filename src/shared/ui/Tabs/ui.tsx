/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react'

interface ITabs {
  count: number
  isPill: boolean
  orientation: 'vertical' | 'horizontal'
  activeContent: boolean
}

interface ITabBtnProps {
  index: number
  item: string
}

const arr = ['Tab active', 'Tab menu', 'Tab menu']

export const Tabs: FC<ITabs> = ({
  count,
  isPill = true,
  orientation = 'vertical',
  activeContent = false,
}) => {
  const [isActiveTab, setActiveTab] = useState(0)

  const TabBtn: FC<ITabBtnProps> = ({ item, index }) => (
    <button
      onClick={() => setActiveTab(index)}
      className={`p-[10px] whitespace-nowrap
      ${isActiveTab === index && (isPill ? 'bg-gray-pale rounded-md font-medium' : 'text-blue ')}
      `}>
      {item}
    </button>
  )

  const indicator = (
    <span
      className={`flex border-blue w-[100%] h-[100%] ${
        orientation === 'horizontal' && 'border-b-2 absolute bottom-[-2px]'
      }`}></span>
  )

  return (
    <div
      className={`inline-flex border-2 border-gray-deep rounded-md
      ${activeContent && orientation === 'vertical' ? 'flex-row' : 'flex-col'}`}>
      <div
        className={`flex mb-10 
        ${orientation === 'vertical' ? 'flex-col border-none' : ''}
        ${!isPill && 'border-b-2 border-gray-deep'}`}>
        {arr.map((item, index) => (
          <div
            key={index}
            className={` ${orientation === 'vertical' ? 'flex' : 'flex flex-col'} relative `}>
            <TabBtn index={index} item={item} />
            {!isPill && isActiveTab === index && indicator}
          </div>
        ))}
      </div>
      <div>{activeContent && isActiveTab}</div>
    </div>
  )
}
