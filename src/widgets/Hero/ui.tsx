import { useState } from 'react';

import sliderImg from 'assets/sliderImg.jpg';
import { AppLink } from 'shared/ui/appLink';
import { Button } from 'shared/ui/button';
import { Tabs, TabBtn } from 'shared/ui/tabs';
import { UserCard } from 'entities/user';

const btnItems = [
  { text: 'Automobiles' },
  { text: 'Clothes and wear' },
  { text: 'home interiors' },
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
        'mt-[20px] flex py-5 pl-3.5 pr-5 gap-5 mb-8 bg-white border border-gray-medium rounded-md md:p-0'
      }>
      <Tabs
        className={'md:hidden'}
        orientation={'vertical'}
        buttons={btnItems.map((btn, index) => (
          <TabBtn
            className={'lg:text-xs'}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={btn.text}
            index={index}>
            {btn.text}
          </TabBtn>
        ))}>
        <div
          style={{ backgroundImage: `url("${sliderImg}")` }}
          className={
            'max-w-[664px] max-h-[363px] w-full h-full bg-no-repeat bg-cover bg-center pt-[53px] pl-11 lg:max-h-[300px] md:max-w-full md:w-full md:h-[182px] md:pt-[23px] md:pl-7 '
          }>
          <h3 className={'text-3xl lg:text-2xl  sm:text-base'}>
            Latest trending
          </h3>
          <h2 className={'text-4xl lg:text-xl font-bold mb-4 sm:text-base'}>
            Electronic items
          </h2>
          <Button className={'bg-white text-black'}>Learn more</Button>
        </div>
      </Tabs>

      <div className={'flex flex-col gap-2.5 md:hidden'}>
        <UserCard userName={'Alex'} />
        <AppLink
          to={'/'}
          className={
            'text-white hover:text-gray-pale max-w-[200px] w-full h-[95px] pt-4 pr-10 pb-5 pl-4 leading-5 bg-orange rounded-md lg:max-w-[150px] lg:h-[55px] lg:pt-2 lg:pr-5 lg:pb-2 lg:pl-2 lg:ml-auto lg:text-xs '
          }>
          Get US $10 off with a new supplier
        </AppLink>
        <AppLink
          to={'/'}
          className={
            'text-white hover:text-gray-pale max-w-[200px] w-full h-[95px] pt-4 pr-10 pb-5 pl-4 leading-5 bg-[#55BDC4] rounded-md lg:max-w-[150px]  lg:h-[75px] lg:pt-2 lg:pr-5 lg:pb-2 lg:pl-2 lg:ml-auto lg:text-xs'
          }>
          Send quotes with supplier preferences
        </AppLink>
      </div>
    </div>
  );
};
