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
  <div className={'base-border-gray'}>
    <h6>Saved for later</h6>

    <div className={'flex gap-5'}>
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
