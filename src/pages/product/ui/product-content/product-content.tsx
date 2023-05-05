import { FC } from 'react';

import { productTypes } from 'entities/product';
import { userTypes } from 'entities/user';
import { useQueryTabs } from 'shared/lib';
import { TabBtn, Tabs } from 'shared/ui/tabs';

import { AboutCompany } from './about-company';
import { Description } from './description';
import { Reviews } from './reviews';
import { Shipment } from './shipment';

interface ProductContentProps {
  product: productTypes.Product;
  seller: userTypes.Seller;
}
export const ProductContent: FC<ProductContentProps> = ({
  product,
  seller,
}) => {
  const detailProduct = [
    {
      buttonText: 'Description',
      content: (
        <Description
          description={product.description}
          advantages={product.advantages}
          params={product.params}
        />
      ),
    },
    {
      buttonText: 'Reviews',
      content: <Reviews reviews={product.reviews} />,
    },
    {
      buttonText: 'Shipment',
      content: (
        <Shipment
          cost={seller.delivery.cost}
          regions={seller.delivery.regions}
        />
      ),
    },
    {
      buttonText: 'About company',
      content: (
        <AboutCompany
          description={seller.description}
          paymentMethods={seller.paymentMethods}
          returnPolicy={seller.returnPolicy}
          categories={seller.categories}
          brands={seller.brands}
          rating={seller.rating}
          reviews={seller.reviews}
        />
      ),
    },
  ];

  const { activeTab, handleTabClick } = useQueryTabs(detailProduct);

  return (
    <Tabs
      border={'border border-gray-medium bg-white'}
      className={'pl-2'}
      buttons={detailProduct.map((detail, i) => (
        <TabBtn
          isPill={false}
          className={'pt-4 pb-3'}
          outlined
          key={detail.buttonText}
          activeTab={activeTab}
          index={i}
          setActiveTab={handleTabClick}>
          {detail.buttonText}
        </TabBtn>
      ))}
      orientation={'horizontal'}>
      <div className={'pt-2 pr-16 pb-7 pl-5 lg:pr-5'}>
        {detailProduct[activeTab].content}
      </div>
    </Tabs>
  );
};
