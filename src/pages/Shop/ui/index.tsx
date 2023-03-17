import { IoMdClose } from 'react-icons/io';
import img from '../assets/phone.png';
import { ProductCol, ProductRow } from 'widgets/ProductCard';
import { SubscribeNews } from 'widgets/SubscribeNews';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { Button } from 'shared/ui/Button';

import { ControlPanel } from './ControlPanel';
import { PaginationBox } from './Pagination';
import { Sidebar } from './Sidebar';

const items = [
  { text: 'text1' },
  { text: 'text2' },
  { text: 'text3' },
  { text: 'text4' },
  { text: 'text5' },
  { text: 'text6' },
];

export const Shop = () => (
  <>
    <Breadcrumbs />
    <div className={'flex gap-5'}>
      <div className={'max-w-[240px] w-full shrink-0 grow'}>
        <Sidebar />
      </div>
      <div className={'w-full flex flex-col'}>
        <div className={'mb-5'}>
          <ControlPanel category={'Mobile accessory'} itemsCount={12199} />
        </div>

        <div className={'flex items-center gap-2 mb-5'}>
          {items.map(({ text }) => (
            <Button
              className={
                'flex items-center p-1.5 gap-2.5 border border-blue bg-white text-gray-dark'
              }
              key={text}>
              {text}
              <IoMdClose size={18} className={'text-gray-hot'} />
            </Button>
          ))}
          <Button className={'text-blue rounded-none'}>Clear all filter</Button>
        </div>

        <div className={'mb-8   {/*grid grid-cols-3 gap-5 */}  bg-white'}>
          <ProductCol
            mainPhoto={{ url: img, thumbUrl: img }}
            id={2}
            name='product'
            price={{ current: 100, old: 100 }}
          />
          <ProductRow />
        </div>
        <PaginationBox />
      </div>
    </div>
    <SubscribeNews />
  </>
);
