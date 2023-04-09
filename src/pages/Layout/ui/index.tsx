import { FC } from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

import { Header } from 'widgets/Header';
import { NavBar } from 'widgets/NavBar';

import { Footer } from './Footer';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const routesWithoutNavBar = ['cart', 'checkout', 'admin'];

  const isMatch = routesWithoutNavBar.some(path => matchPath(path, pathname));

  return (
    <>
      <Header />
      {!isMatch && <NavBar />}
      <main className={'container-fluid flex grow shrink-0'}>
        <div className={'container'}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
