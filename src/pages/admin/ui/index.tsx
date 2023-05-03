import { lazy } from 'react';
import { AiOutlineCreditCard, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { FiLogOut, FiSettings, FiUsers } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

import { withLazy } from 'shared/lib';
import { Button } from 'shared/ui/button';

const Dashboard = lazy(() => import('./dashboard'));
const Categories = lazy(() => import('./categories'));
const Products = lazy(() => import('./products'));
const Customers = lazy(() => import('./customers'));
const Orders = lazy(() => import('./orders'));
const Shipments = lazy(() => import('./shipments'));
const Transactions = lazy(() => import('./transactions'));
const Settings = lazy(() => import('./settings'));

const AdminData = [
  {
    icon: BsGrid,
    buttonText: 'Dashboard',
    to: 'dashboard',
  },
  {
    icon: BsGrid,
    buttonText: 'Categories',
    to: 'categories',
  },
  {
    icon: BsGrid,
    buttonText: 'Products',
    to: 'products',
  },
  {
    icon: FiUsers,
    buttonText: 'Customers',
    to: 'customers',
  },
  {
    icon: AiOutlineShoppingCart,
    buttonText: 'Orders',
    to: 'orders',
  },
  {
    icon: MdOutlineLocalShipping,
    buttonText: 'Shipments',
    to: 'shipments',
  },
  {
    icon: AiOutlineCreditCard,
    buttonText: 'Transactions',
    to: 'transactions',
  },
  {
    icon: FiSettings,
    buttonText: 'Settings',
    to: 'settings',
  },
];

export const Admin = () => (
  <>
    <div className={'flex my-5'}>
      <div className={'flex w-full justify-between'}>
        {AdminData.map(el => (
          <NavLink
            key={el.buttonText}
            to={el.to}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-blue' : 'bg-lightblue'
              } p-4 flex flex-row h-12 items-center gap-1 text-black rounded-md`
            }>
            <el.icon size={20} />
            {el.buttonText}
          </NavLink>
        ))}
        <Button
          className={'h-12 items-center bg-lightblue text-black rounded-md '}>
          <FiLogOut />
          Logout
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
    <Routes>
      <Route path={'dashboard'} element={withLazy(<Dashboard />)} />
      <Route path={'categories'} element={withLazy(<Categories />)} />
      <Route path={'products'} element={withLazy(<Products />)} />
      <Route path={'customers'} element={withLazy(<Customers />)} />
      <Route path={'orders'} element={withLazy(<Orders />)} />
      <Route path={'shipments'} element={withLazy(<Shipments />)} />
      <Route path={'transactions'} element={withLazy(<Transactions />)} />
      <Route path={'settings'} element={withLazy(<Settings />)} />
    </Routes>
  </>
);
