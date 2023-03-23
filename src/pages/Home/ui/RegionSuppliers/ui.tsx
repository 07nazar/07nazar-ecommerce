import { FC } from 'react';
import { FreeMode, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';

import { AppLink } from 'shared/ui/AppLink';

import { countries } from './model';

export const RegionSuppliers: FC = () => (
  <>
    <h3 className={'title mb-6 sm:text-center z-10'}>Suppliers by region</h3>
    <Swiper
      slidesPerView={'auto'}
      modules={[Grid, FreeMode]}
      freeMode
      grid={{
        rows: 2,
        fill: 'row',
      }}>
      {countries.map(country => (
        <SwiperSlide
          key={country.name}
          className={'max-w-[255px] md:max-w-[170px]'}>
          <AppLink
            to={`https://${country.site}`}
            className={'w-fit flex-row gap-2.5 lg:gap-1.5 items-center'}>
            <img src={country.flag} alt={country.flag} />
            <div>
              <p className={'text-black'}>{country.name}</p>
              <p className={'text-xs text-gray-hot'}>{country.site}</p>
            </div>
          </AppLink>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
