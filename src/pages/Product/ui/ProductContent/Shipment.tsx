import { FC, Fragment } from 'react';
import { FaTruck } from 'react-icons/fa';

import { userTypes } from 'entities/User';

export const Shipment: FC<userTypes.DeliverySeller> = ({ cost, regions }) => (
  <div className={'flex gap-1 flex-col items-center p-4 bg-white'}>
    <FaTruck className={'w-12 h-12 mb-4 text-gray-dark'} />
    <h3 className={'text-lg font-medium text-gray-dark'}>
      Shipment Information
    </h3>
    <p className={'text-gray-hot'}>
      Estimated Delivery:
      <span className={'font-medium'}>2-7 days</span>
    </p>
    <p className={'text-gray-hot'}>
      Shipment Cost: <span className={'font-medium'}>{cost} $</span>
    </p>
    <p className={'text-gray-hot'}>
      Shipment regions:
      {regions.map((region, index) => (
        <Fragment key={region}>
          {region}
          {index === regions.length - 1 ? '.' : ','}{' '}
        </Fragment>
      ))}
    </p>
    <p className={'mt-4 text-gray-700'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod
      finibus lorem vel porttitor. Sed quis molestie nisi. Aenean venenatis quam
      eu justo aliquet, a tincidunt lectus pulvinar. Etiam vel elit tellus. In
      dictum mauris at sem blandit, eu commodo nibh sagittis. Sed ut elementum
      magna. Maecenas eleifend felis vel leo eleifend, quis commodo ex
      venenatis. Duis non nulla tortor. Integer vel ante in velit luctus
      fringilla ac euismod lectus. Donec ultricies gravida sapien eget tempus.
      Nam lobortis nunc id mauris fringilla, a auctor purus dictum.
    </p>
  </div>
);
