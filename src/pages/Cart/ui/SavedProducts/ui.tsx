import { ProductSaved } from 'widgets/ProductCard/ui/ProductSaved';

import productImage from '../../assets/phone.png';

const products = [
  {
    id: 14,
    price: { current: 41 },
    name: 'GoPro HERO6 4K Action Camera - Black',
    mainPhoto: { url: productImage, thumbUrl: '' },
  },
  {
    id: 145,
    price: { current: 41 },
    name: 'GoPro HERO6 4K Action Camera - Black',
    mainPhoto: { url: productImage, thumbUrl: '' },
  },
  {
    id: 143,
    price: { current: 41 },
    name: 'GoPro HERO6 4K Action Camera - Black',
    mainPhoto: { url: productImage, thumbUrl: '' },
  },
  {
    id: 144,
    price: { current: 41 },
    name: 'GoPro HERO6 4K Action Camera - Black',
    mainPhoto: { url: productImage, thumbUrl: '' },
  },
];

export const SavedProducts = () => (
  <div
    className={
      'base-border-gray sm:bg-[transparent] sm:border-none md:py-3 md:px-1 sm:p-0'
    }>
    <h6
      className={
        'title md:text-lg md:leading-5 md:ml-2 sm:ml-0 sm:pl-2.5 mb-5'
      }>
      Saved for later
    </h6>

    <div
      className={
        'flex md:grid md:grid-cols-2 sm:grid-cols-1 gap-5 lg:gap-4 md:gap-2'
      }>
      {products.map(product => (
        <ProductSaved
          key={product.id}
          name={product.name}
          id={product.id}
          mainPhoto={product.mainPhoto}
          price={product.price}
        />
      ))}
    </div>
  </div>
);
