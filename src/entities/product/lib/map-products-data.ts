import { normalizeStringToURL } from 'shared/lib';

export type ProductTableList = {
  id: {
    id: string;
    name: string;
    sortable: boolean;
    to: string;
    className: string;
    width: string;
  };
  name: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  cost: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  seller: {
    name: string;
    sortable: boolean;
    to: string;
    className: string;
    width: string;
  };
};

type ProductData = {
  id: string;
  name: string;
  price: {
    current: number;
  };
  sellerId: string;
};

export const mapProductsData = (product: unknown): ProductTableList => {
  const productData = product as ProductData;

  if (!productData || typeof productData !== 'object') {
    throw new Error('Invalid product data');
  }

  const { id, name, price, sellerId } = productData;

  if (!id || !name || !price || !sellerId) {
    throw new Error('Missing required product data fields');
  }

  return {
    id: {
      id,
      name: `#${id.substring(0, 5)}`,
      sortable: false,
      to: `product/${normalizeStringToURL(name)}`,
      className: 'text-blue/70 mr-1',
      width: 'w-1/12',
    },
    name: {
      name,
      sortable: true,
      className: 'whitespace-nowrap overflow-x-scroll scrollbar pr-0.5',
      width: 'w-5/12',
    },
    cost: {
      name: `$${price.current}`,
      sortable: true,
      className: 'hover:text-gray-dark duration-200 leading-5 mx-3',
      width: 'w-1/12',
    },
    seller: {
      name: sellerId,
      sortable: true,
      to: `sellers/${normalizeStringToURL(sellerId)}`,
      className: 'hover:text-blue duration-200',
      width: 'w-4/12',
    },
  };
};
