import { FC, useState } from 'react';

import { RemoveProduct } from 'features/RemoveProduct';
import { SaveForLater } from 'features/SaveForLater';
import { ProductCard } from 'entities/Product';
import img from 'shared/assets/dbPhotos/Electronics/image22.png';
import { MenuItem, Select } from 'shared/ui/Select';

interface IContentProps {
  params: any[];
}

const quantityItems = [
  { id: 1, text: '1' },
  { id: 2, text: '10' },
  { id: 3, text: '20' },
  { id: 4, text: '30' },
  { id: 5, text: '40' },
];

const Content: FC<IContentProps> = ({ params }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const paramsString = params
    .map(([key, value]: string[]) => `${key} : ${value.toLowerCase()}`)
    .join(', ');

  return (
    <div className={'flex grow justify-between items-center mb-2.5'}>
      <p className={'max-w-[429px] w-full text-gray-hot'}>{paramsString}</p>
      <Select
        className={
          'max-w-[123px] w-full justify-center border rounded-md border-gray-deep px-2.5'
        }
        menuClassName={'absolute top-11 left-0'}
        isOpen={isOpen}
        selectedValue={selectedValue[0]}
        setOpen={setOpen}
        defaultValue={'Qty: 1'}>
        {quantityItems.map(item => (
          <MenuItem active={false} key={item.id} item={item} setOpen={setOpen}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

const Buttons = () => (
  <div className={'flex gap-2'}>
    <RemoveProduct />
    <SaveForLater
      classNames={
        'bg-white text-blue border rounded-md border-gray-medium gap-1 hover:bg-blue hover:text-white duration-300'
      }
    />
  </div>
);

export const ProductCart = () => (
  <ProductCard
    className={{
      box: 'relative flex pb-5 mb-5 border-b border-b-gray-medium',
      price: 'absolute top-0 right-0',
      content: 'flex flex-col justify-between grow',
      image:
        'border border-gray-deep bg-white w-[80px] h-[80px] p-2 mr-2.5 rounded-md',
      title: 'max-w-[462px] w-full mb-1.5 font-medium text-black',
    }}
    between={
      <Content
        params={[
          ['Size', 'medium'],
          ['Color', 'blue'],
          ['Material', 'Plastic'],
          ['Seller', ' Artel Market'],
        ]}
      />
    }
    product={{
      id: 1,
      name: 'T-shirts with multiple colors, for men and lady',
      mainPhoto: {
        url: img,
        thumbUrl: img,
      },
      price: { current: 100 },
    }}>
    <Buttons />
  </ProductCard>
);
