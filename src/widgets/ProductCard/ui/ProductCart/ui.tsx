import { FC, useEffect, useMemo, useState } from 'react';

import { Counter } from 'features/Counter';
import { RemoveProduct } from 'features/RemoveProduct';
import { SaveForLater } from 'features/SaveForLater';
import { ProductCard, productTypes } from 'entities/Product';
import img from 'shared/assets/dbPhotos/Electronics/image22.png';
import { useMatchMedia } from 'shared/lib';
import { MenuItem, Select } from 'shared/ui/Select';

import type { ISelectedValue } from 'shared/ui/Select';

import { capitalize } from '../../lib';

interface IContentProps {
  params: productTypes.ProductParamsType[];
  sellerId: string;
}

const quantityItems: ISelectedValue[] = [
  { id: 1, text: '1' },
  { id: 2, text: '10' },
  { id: 3, text: '20' },
  { id: 4, text: '30' },
  { id: 5, text: '40' },
];

const Content: FC<IContentProps> = ({ params, sellerId }) => {
  const { isDesktop } = useMatchMedia();
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<ISelectedValue[]>([]);

  // TODO Доделать выбор кол-ва товара

  const paramsElements = useMemo(
    () =>
      params.map(({ name, value }: productTypes.ProductParamsType, index) => (
        <span className={'inline-block mr-0.5'} key={name}>
          {index === 0 ? capitalize(name) : name}: {value.toLowerCase()}
          {index !== params.length - 1 && ', '}
        </span>
      )),
    [params]
  );

  return (
    <div className={'flex grow justify-between items-center mb-2.5'}>
      <div
        className={'flex flex-col text-gray-hot sm:text-xs sm:leading-[19px]'}>
        <p className={'max-w-[429px] w-full'}>{paramsElements}</p>
        <p>Seller: {sellerId}</p>
      </div>
      {!isDesktop && (
        <div className={'absolute top-0 right-0'}>
          {/* mobile 3 dots select */}
        </div>
      )}
      {isDesktop && (
        <Select
          className={
            'max-w-[123px] w-full justify-center border rounded-md border-gray-deep px-2.5'
          }
          menuClassName={'absolute top-11 left-0'}
          isOpen={isOpen}
          selectedValue={selectedValue}
          setOpen={setOpen}
          defaultValue={'Qty: 1'}>
          {quantityItems.map(item => (
            <MenuItem
              setSelectedItems={setSelectedValue}
              active={false}
              key={item.id}
              item={item}
              setOpen={setOpen}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      )}
    </div>
  );
};

type ProductCartType = {
  product: productTypes.ProductInCartType;
  quantity: number;
};

export const ProductCart: FC = () => {
  // получаем с редакса все продукты в виде [{id: 1, quantity: 2}, {id: 3, quantity: 1}]
  const { isDesktop } = useMatchMedia();
  const [productsCart, setProductsCart] = useState<ProductCartType[]>([]);

  useEffect(() => {
    // делаем запрос на сервер по id [{id: 1, quantity: 2}, {id: 3, quantity: 1}]

    const fakeDataFromServer: ProductCartType[] = [
      {
        product: {
          id: 'dasda4211',
          sellerId: 'Seller name',
          name: 'Product name max 30 length asd',
          price: { current: 333, old: 5151 },
          params: [
            { name: 'color', value: 'blue', order: 1 },
            { name: 'brand', value: 'samsung', order: 1 },
            { name: 'memory', value: '128', order: 1 },
          ],
          mainPhoto: {
            url: img,
            thumbUrl: img,
          },
        },
        quantity: 10,
      },
      {
        product: {
          id: 'asc24v412',
          sellerId: 'Seller name3322',
          name: 'Product name max 30 length asd',
          price: { current: 333 },
          params: [
            { name: 'color', value: 'blue', order: 1 },
            { name: 'brand', value: 'samsung', order: 1 },
            { name: 'memory', value: '128', order: 1 },
          ],
          mainPhoto: {
            url: img,
            thumbUrl: img,
          },
        },
        quantity: 2,
      },
    ];

    setProductsCart(fakeDataFromServer);
  }, []);

  // TODO вынести фичи

  const changeProductQuantity = (id: string, newQuantity: number) => {
    setProductsCart(prevProductsCart => {
      const productIndex = prevProductsCart.findIndex(
        product => product.product.id === id
      );

      if (productIndex === -1) return prevProductsCart;

      const updatedProduct = {
        ...prevProductsCart[productIndex],
        quantity: newQuantity,
      };
      const updatedProductsCart = [...prevProductsCart];
      updatedProductsCart[productIndex] = updatedProduct;
      return updatedProductsCart;
    });
  };

  // if (productsCart.length === 0) {
  //   // TODO лоадер
  // }

  return (
    <>
      {productsCart.map(({ product, quantity }) => (
        <ProductCard
          key={product.id}
          className={{
            box: 'relative flex pb-5 mb-5 lg:pb-16 sm:mb-4 last:border-none last:mb-0 border-b border-b-gray-medium',
            price: 'hidden',
            content: 'flex flex-col justify-between grow',
            boxImage:
              'border border-gray-deep bg-white p-2 rounded-md w-[80px] h-[80px] mr-2.5 lg:mr-1.5',
            title:
              'max-w-fit mb-1.5 font-medium sm:font-normal leading-[19px] text-black',
          }}
          before={
            <p
              className={
                'text-black font-medium absolute top-0 md:top-auto md:bottom-6 right-0'
              }>
              ${(product.price.current * quantity).toFixed(2)}
            </p>
          }
          between={
            <Content params={product.params} sellerId={product.sellerId} />
          }
          product={{
            ...product,
            price: { ...product.price, old: undefined },
          }}>
          {isDesktop ? (
            <div className={'flex gap-2'}>
              <RemoveProduct productId={product.id} />
              <SaveForLater
                className={'text-blue bg-light hover:bg-blue hover:text-white'}
              />
            </div>
          ) : (
            <div className={'absolute left-0 bottom-4'}>
              <Counter
                value={quantity}
                setValue={newQuantity =>
                  changeProductQuantity(product.id, newQuantity)
                }
              />
            </div>
          )}
        </ProductCard>
      ))}
    </>
  );
};
