import { FC } from 'react'

import { Button } from 'shared/ui/Button'

interface ISellerCard {
  name: string
  supplierCompany: string
  image: string
  country: string
  city: string
  isVerified: boolean
  isWorldwideShipping: boolean
}

interface ISellerCardProps {
  seller: ISellerCard
}

export const SellerCard: FC<ISellerCardProps> = ({
  seller: { city, country, image, isVerified, isWorldwideShipping, name, supplierCompany },
}) => (
  <div className="flex flex-col max-w-[280px] w-full max-h-[325px] h-full border border-gray-medium rounded-md px-4 py-5">
    <div className="flex items-start gap-2.5 border-b border-gray-medium pb-5 mb-3">
      <img src={image} alt="" width={48} height={48} />
      <div className="flex flex-col items-start">
        <p>{name}</p>
        <p>{supplierCompany}</p>
      </div>
    </div>
    <div className="flex flex-col gap-2 mb-7">
      <p>
        {country}, {city}
      </p>
      <p>{isVerified ? 'Verified Seller' : 'Not Verified Seller'}</p>
      <p>{isWorldwideShipping ? 'Worldwide shipping' : 'Not Worldwide shipping'}</p>
    </div>
    <div className="flex flex-col gap-2">
      <Button>Send inquiry</Button>
      <Button>Seller’s profile</Button>
    </div>
  </div>
)
