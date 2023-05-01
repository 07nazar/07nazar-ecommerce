import {AiOutlineCreditCard, AiOutlineShoppingCart} from 'react-icons/ai';
import {BsGrid} from 'react-icons/bs';
import {FiLogOut, FiSettings, FiUsers} from 'react-icons/fi';
import {MdOutlineLocalShipping} from 'react-icons/md';

import {useQueryTabs} from 'shared/lib';
import {TabBtn, Tabs} from 'shared/ui/tabs';

import {Categories} from './categories';
import {Customers} from './customers';
import {Dashboard} from './dashboard';
import {Logout} from './logout';
import {Orders} from './orders';
import {Products} from './products';
import {Settings} from './settings';
import {Shipments} from './shipments';
import {Transactions} from './transactions';

const AdminData = [
  {
    icon: BsGrid,
    buttonText: 'Dashboard',
    content: <Dashboard />,
  },
  {
    icon: BsGrid,
    buttonText: 'Categories',
    content: <Categories />,
  },
  {
    icon: BsGrid,
    buttonText: 'Products',
    content: <Products />,
  },
  {
    icon: FiUsers,
    buttonText: 'Customers',
    content: <Customers />,
  },
  {
    icon: AiOutlineShoppingCart,
    buttonText: 'Orders',
    content: <Orders />,
  },
  {
    icon: MdOutlineLocalShipping,
    buttonText: 'Shipments',
    content: <Shipments />,
  },
  {
    icon: AiOutlineCreditCard,
    buttonText: 'Transactions',
    content: <Transactions />,
  },
  {
    icon: FiSettings,
    buttonText: 'Settings',
    content: <Settings />,
  },
  {
    icon: FiLogOut,
    buttonText: 'Logout',
    content: <Logout />,
  },
];

export const Admin = () => {
  const { activeTab, handleTabClick } = useQueryTabs(AdminData);

  return (
    <div className={'h-full mt-3 '}>
      <Tabs
        className={'gap-3'}
        orientation={'vertical'}
        buttons={AdminData.map((detail, i) => (
          <TabBtn
            key={detail.buttonText}
            className={'pt-4 pb-4 items-center  gap-2'}
            activeTab={activeTab}
            index={i}
            setActiveTab={handleTabClick}>
            <detail.icon size={20} />
            {detail.buttonText}
          </TabBtn>
        ))}>
        <div className={'flex w-full'}>{AdminData[activeTab].content}</div>
      </Tabs>
    </div>
  );
};
