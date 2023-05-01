import arabicFlag from 'assets/arabic.png';
import australiaFlag from 'assets/australia.png';
import britainFlag from 'assets/britain.png';
import chinaFlag from 'assets/china.png';
import denmarkFlag from 'assets/denmark.png';
import franceFlag from 'assets/france.png';
import germanyFlag from 'assets/germany.png';
import italyFlag from 'assets/italy.png';
import usaFlag from 'assets/usa.png';

interface Country {
  name: string;
  site: string;
  flag: string;
}

export const countries: Country[] = [
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
