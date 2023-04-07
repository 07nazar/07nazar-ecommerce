import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ProductType } from 'entities/Product';
import { SellerType } from 'entities/User';
import { TabBtn, Tabs } from 'shared/ui/Tabs';

import { AboutCompany } from './AboutCompany';
import { Description } from './Description';
import { Reviews } from './Reviews';
import { Shipment } from './Shipment';

interface ProductContentProps {
  product: ProductType;
  seller: SellerType;
}

export const ProductContent: FC<ProductContentProps> = ({
  product,
  seller,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<number>(
    Number(new URLSearchParams(location.search).get('tab')) || 0
  );

  const detailProduct = [
    {
      buttonText: 'Description',
      content: (
        <Description
          description={product.description}
          advantages={product.advantages}
          specifications={product.specifications}
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
      content: <AboutCompany {...seller} />,
    },
  ];

  useEffect(() => {
    const tabParam = new URLSearchParams(location.search).get('tab');
    const tabParamIndex = detailProduct.findIndex(
      detail => detail.buttonText.toLowerCase() === tabParam
    );
    if (tabParamIndex !== -1) {
      setActiveTab(tabParamIndex);
    }
  }, [detailProduct, location.search]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    navigate(`?tab=${detailProduct[index].buttonText.toLowerCase()}`, {
      replace: true,
    });
  };

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
