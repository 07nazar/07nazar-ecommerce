import { AiOutlineCreditCard, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { FiLogOut, FiSettings, FiUsers } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';

import { useQueryTabs } from 'shared/lib';
import { TabBtn, Tabs } from 'shared/ui/Tabs';

import { Categories } from './Categories';
import { Customers } from './Customers';
import { Dashboard } from './Dashboard';
import { Logout } from './Logout';
import { Orders } from './Orders';
import { Products } from './Products';
import { Settings } from './Settings';
import { Shipments } from './Shipments';
import { Transactions } from './Transactions';

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
