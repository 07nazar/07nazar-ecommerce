import { FC } from 'react';

import { SellerType } from 'entities/UserCard';
import { Rating } from 'shared/ui/Rating';

type Props = SellerType;

export const AboutCompany: FC<Props> = ({
  description,
  paymentMethods,
  returnPolicy,
  categories,
  brands,
  rating,
  reviews,
}) => (
  <>
    <div className={'flex'}>
      <div>
        <h2 className={'text-2xl text-gray-dark font-bold mb-4'}>
          About company:
        </h2>
        <p className={'text-gray-dark mb-4'}>{description}</p>
        <div className={'flex flex-wrap gap-8'}>
          <div>
            <h3 className={'text-xl text-gray-dark font-bold mb-2'}>
              Categories
            </h3>
            <ul className={'list-disc list-inside'}>
              {categories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={'text-xl text-gray-dark font-bold mb-2'}>Brands</h3>
            <ul className={'list-disc list-inside'}>
              {brands.map(brand => (
                <li key={brand}>{brand}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={'text-xl text-gray-dark font-bold mb-2'}>
              Payment Methods
            </h3>
            <ul className={'list-disc list-inside'}>
              {paymentMethods.map(method => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={'flex flex-col items-end justify-between whitespace-nowrap'}>
        <div className={'text-gray-dark'}>
          <h3 className={'text-xl text-gray-dark font-bold mb-2'}>
            Customer Rating
          </h3>
          <div className={'flex items-center'}>
            <Rating value={rating} />
            <span className={'ml-3'}>{reviews.length} reviews</span>
          </div>
        </div>
        <p className={'text-gray-dark font-medium'}>{returnPolicy}</p>
      </div>
    </div>
  </>
);
