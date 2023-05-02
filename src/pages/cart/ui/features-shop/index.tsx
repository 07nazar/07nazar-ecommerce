import {FC} from 'react';
import {MdLock, MdMessage} from 'react-icons/md';
import {RiTruckFill} from 'react-icons/ri';

const features = [
  {
    icon: <MdLock size={20} className={'text-gray-hot'} />,
    title: 'Secure payment',
    text: 'Have you ever finally just ',
  },
  {
    icon: <MdMessage size={20} className={'text-gray-hot'} />,
    title: 'Customer support',
    text: 'Have you ever finally just ',
  },
  {
    icon: <RiTruckFill size={20} className={'text-gray-hot'} />,
    title: 'Free delivery',
    text: 'Have you ever finally just ',
  },
];

export const FeaturesShop: FC = () => (
  <div className={'flex gap-14 lg:gap-1 lg:justify-between'}>
    {features.map(feature => (
      <div className={'flex gap-2.5 lg:gap-1 items-center'} key={feature.title}>
        <div
          className={
            'flex w-12 lg:w-10 h-12 lg:h-10 justify-center items-center rounded-full bg-gray-medium'
          }>
          {feature.icon}
        </div>
        <div>
          <p className={'text-black'}>{feature.title}</p>
          <p className={'text-gray-hot'}>{feature.text}</p>
        </div>
      </div>
    ))}
  </div>
);
