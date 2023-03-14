import { FC } from 'react';

import { AppLink } from 'shared/ui/AppLink';

import arabicFlag from '../assets/arabic.png';
import australiaFlag from '../assets/australia.png';
import britainFlag from '../assets/britain.png';
import chinaFlag from '../assets/china.png';
import denmarkFlag from '../assets/denmark.png';
import franceFlag from '../assets/france.png';
import germanyFlag from '../assets/germany.png';
import italyFlag from '../assets/italy.png';
import usaFlag from '../assets/usa.png';

interface Country {
  name: string;
  site: string;
  flag: string;
}
const countries: Country[] = [
  {
    name: 'Arabic Emerates',
    site: 'shopname.ae',
    flag: arabicFlag,
  },
  {
    name: 'Australia',
    site: 'shopname.ae',
    flag: australiaFlag,
  },
  {
    name: 'United States',
    site: 'shopname.com',
    flag: usaFlag,
  },
  {
    name: 'Germany',
    site: 'shopname.de',
    flag: germanyFlag,
  },
  {
    name: 'Italy',
    site: 'shopname.ae',
    flag: italyFlag,
  },
  {
    name: 'Denmark',
    site: 'shopname.com.dk',
    flag: denmarkFlag,
  },
  {
    name: 'France',
    site: 'shopname.com.fr',
    flag: franceFlag,
  },
  {
    name: 'Arabic',
    site: 'shopname.ae',
    flag: arabicFlag,
  },
  {
    name: 'China',
    site: 'shopname.ae',
    flag: chinaFlag,
  },
  {
    name: 'Great Britain',
    site: 'shopname.co.uk',
    flag: britainFlag,
  },
];

export const RegionSuppliers: FC = () => (
  <>
    <h3 className={'title mb-6'}>Suppliers by region</h3>
    <div className={'grid gap-2.5 grid-cols-5'}>
      {countries.map(country => (
        <AppLink
          key={country.name}
          to={`https://${country.site}`}
          className={'flex-row gap-2.5 items-center'}>
          <img src={country.flag} alt={country.flag} />
          <div>
            <p className={'text-black'}>{country.name}</p>
            <p className={'text-xs text-gray-hot'}>{country.site}</p>
          </div>
        </AppLink>
      ))}
    </div>
  </>
);
