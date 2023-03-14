import { useState } from 'react';

import { UserCard } from 'entities/UserCard';
import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { Tabs, TabBtn } from 'shared/ui/Tabs';

import decore from './assets/sliderImg.jpg';

const btnItems = [
  { text: 'Automobiles' },
  { text: 'Clothes and wear' },
  { text: 'Home interiors' },
  { text: 'Computer and tech' },
  { text: 'Tools, equipments' },
  { text: 'Sports and outdoor' },
  { text: 'Animal and pets' },
  { text: 'Machinery tools' },
  { text: 'More category' },
];

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className={
        'mt-[20px] flex py-5 pl-3.5 pr-5 gap-5 mb-8 bg-white border border-gray-medium rounded-md'
      }>
      <Tabs
        orientation={'vertical'}
        buttons={btnItems.map((btn, index) => (
          <TabBtn
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={btn.text}
            index={index}>
            {btn.text}
          </TabBtn>
        ))}>
        <div
          style={{ backgroundImage: `url("${decore}")` }}
          className={
            'w-[664px] h-[363px]  bg-no-repeat bg-cover pt-[53px] pl-11'
          }>
          <h3 className={'text-[28px]'}>Latest trending</h3>
          <h2 className={'text-[32px] font-bold mb-4'}>Electronic items</h2>
          <Button className={'bg-white text-black'}>Learn more</Button>
        </div>
      </Tabs>

      <div className={'flex flex-col gap-2.5'}>
        <UserCard userName={'Alex'} />
        <AppLink
          to={'/'}
          className={
            'text-white hover:text-gray-pale max-w-[200px] w-full h-[95px] pt-4 pr-10 pb-5 pl-4 leading-5 bg-orange rounded-md'
          }>
          Get US $10 off with a new supplier
        </AppLink>
        <AppLink
          to={'/'}
          className={
            'text-white hover:text-gray-pale max-w-[200px] w-full h-[95px] pt-4 pr-10 pb-5 pl-4 leading-5 bg-[#55BDC4] rounded-md'
          }>
          Send quotes with supplier preferences
        </AppLink>
      </div>
    </div>
  );
};
