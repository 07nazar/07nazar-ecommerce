import { FC } from 'react';
import { AiOutlineSearch, AiOutlineShop } from 'react-icons/ai';
import { GiCheckedShield } from 'react-icons/gi';
import { MdOutlineSend } from 'react-icons/md';

import { AppLink } from 'shared/ui/AppLink';

import customizeProducts from '../../assets/customizeProducts.png';
import fastAir from '../../assets/fastAir.png';
import hubs from '../../assets/hubs.png';
import inspection from '../../assets/inspection.png';

const services = [
  {
    to: '/',
    img: hubs,
    icon: <AiOutlineSearch size={20} />,
    title: 'Source from Industry Hubs',
  },
  {
    to: '/',
    img: customizeProducts,
    icon: <AiOutlineShop size={20} />,
    title: 'Customize Your Products',
  },
  {
    to: '/',
    img: fastAir,
    icon: <MdOutlineSend size={20} />,
    title: 'Fast, reliable shipping by ocean or air',
  },
  {
    to: '/',
    img: inspection,
    icon: <GiCheckedShield size={20} />,
    title: 'Product monitoring and inspection',
  },
];

export const ExtraServices: FC = () => (
  <>
    <h3 className={'title mb-6'}>Our extra services</h3>
    <div className={'flex gap-5'}>
      {services.map(service => (
        <AppLink
          to={service.to}
          key={service.title}
          className={
            'relative rounded-md h-52 bg-white items-start text-black hover:text-gray-dark'
          }>
          <img
            src={service.img}
            alt={'service'}
            className={'w-full max-h-32 h-full bg-black'}
          />
          <span
            className={
              'absolute top-[6.25rem] right-5 rounded-full p-4 bg-lightblue border border-white'
            }>
            {service.icon}
          </span>
          <p className={'my-4 mx-5 w-7/12 font-medium leading-[22px]'}>
            {service.title}
          </p>
        </AppLink>
      ))}
    </div>
  </>
);
