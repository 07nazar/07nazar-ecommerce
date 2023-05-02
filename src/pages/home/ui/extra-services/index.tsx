import { FC } from 'react';
import { AiOutlineSearch, AiOutlineShop } from 'react-icons/ai';
import { GiCheckedShield } from 'react-icons/gi';
import { MdOutlineSend } from 'react-icons/md';

import customizeProducts from 'assets/customizeProducts.png';
import fastAir from 'assets/fastAir.png';
import hubs from 'assets/hubs.png';
import inspection from 'assets/inspection.png';
import { AppLink } from 'shared/ui/links';

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
    title: 'Customize Your products',
  },
  {
    to: '/',
    img: fastAir,
    icon: <MdOutlineSend size={20} />,
    title: 'Fast, reliable shipment by ocean or air',
  },
  {
    to: '/',
    img: inspection,
    icon: <GiCheckedShield size={20} />,
    title: 'product monitoring and inspection',
  },
];

export const ExtraServices: FC = () => (
  <>
    <h3 className={'title md:text-xl mb-6 lg:mb-4 md:mb-2'}>
      Our extra services
    </h3>
    <div
      className={
        'grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-5 sm:px-5'
      }>
      {services.map(service => (
        <AppLink
          to={service.to}
          key={service.title}
          className={
            'relative rounded-md h-52 lg:h-44 bg-white items-start text-black hover:text-gray-dark '
          }>
          <img
            src={service.img}
            alt={'service'}
            className={
              'max-h-32 w-full lg:object-cover lg:max-h-24 h-full rounded-t-md bg-black'
            }
          />
          <span
            className={
              'absolute top-[6.25rem] xl:top-[6.5rem] lg:top-[4.5rem] right-5 lg:right-1 xl:right-2 rounded-full p-4 xl:p-3 bg-lightblue border border-white'
            }>
            {service.icon}
          </span>
          <p
            className={
              'my-4 lg:mt-5 mx-5 xl:mx-2 w-8/12 xl:w-fit font-medium leading-[22px] lg:leading-5 lg:text-[14px] md:text-base'
            }>
            {service.title}
          </p>
        </AppLink>
      ))}
    </div>
  </>
);
