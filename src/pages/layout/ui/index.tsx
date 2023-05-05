import { FC } from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

import { Header } from 'widgets/header';
import { NavBar } from 'widgets/nav-bar';

import { Footer } from './footer';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const routesWithoutNavBar = ['cart', 'checkout', 'admin/*', 'auth/*'];

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
