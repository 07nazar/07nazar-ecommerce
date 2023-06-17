import { FC, useEffect, useMemo, useState } from 'react';

import img from 'assets/image22.png';
import { Counter } from 'features/cart/counter-quantity';
import { RemoveProduct } from 'features/cart/remove-product';
import { SaveForLater } from 'features/product/save-for-later';
import { cartTypes } from 'entities/cart';
import { ProductCard, productTypes } from 'entities/product';
import { useMatchMedia, capitalize } from 'shared/lib';
import { MenuItem, Select } from 'shared/ui/select';

import type { ISelectedValue } from 'shared/ui/select';

interface IContentProps {
  params: productTypes.ProductParams[];
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
      params.map(({ name, value }: productTypes.ProductParams, index) => (
        <span className={'mr-0.5 inline-block'} key={name}>
          {index === 0 ? capitalize(name) : name}: {value.toLowerCase()}
          {index !== params.length - 1 && ', '}
        </span>
      )),
    [params]
  );

  return (
    <div className={'mb-2.5 flex grow items-center justify-between'}>
      <div
        className={'flex flex-col text-gray-hot sm:text-xs sm:leading-[19px]'}>
        <p className={'w-full max-w-[429px]'}>{paramsElements}</p>
        <p>Seller: {sellerId}</p>
      </div>
      {!isDesktop && (
        <div className={'absolute right-0 top-0'}>
          {/* mobile 3 dots select */}
        </div>
      )}
      {isDesktop && (
        <Select
          className={
            'w-full max-w-[123px] justify-center rounded-md border border-gray-deep px-2.5'
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
  product: cartTypes.CartItem;
  quantity: number;
};

export const ProductCart: FC = () => {
  // получаем с редакса все продукты в виде [{id: 1, quantity: 2}, {id: 3, quantity: 1}]
  const { isDesktop } = useMatchMedia();
  const [productsCart, setProductsCart] = useState<ProductCartType[]>([]);

  useEffect(() => {
    const fakeDataFromServer: ProductCartType[] = [
      {
        product: {
          id: 'dasda4211',
          sellerId: 'Seller name',
          name: 'product name max 30 length asd',
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
          quantity: 15,
        },
        quantity: 1,
      },
      {
        product: {
          id: 'asc24v412',
          sellerId: 'Seller name3322',
          name: 'product name max 30 length asd',
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
          quantity: 515,
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
            box: 'relative mb-5 flex border-b border-b-gray-medium pb-5 last:mb-0 last:border-none lg:pb-16 sm:mb-4',
            price: 'hidden',
            content: 'flex grow flex-col justify-between',
            boxImage:
              'mr-2.5 h-[80px] w-[80px] rounded-md border border-gray-deep bg-white p-2 lg:mr-1.5',
            title:
              'mb-1.5 max-w-fit font-medium leading-[19px] text-black sm:font-normal',
          }}
          before={
            <p
              className={
                'absolute right-0 top-0 font-medium text-black md:bottom-6 md:top-auto'
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
                className={'bg-light text-blue hover:bg-blue hover:text-white'}
              />
            </div>
          ) : (
            <div className={'absolute bottom-4 left-0'}>
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
