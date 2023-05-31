import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { withLazy } from 'shared/lib';

import { Auth } from './auth';
import { Layout } from './layout';

const Home = lazy(() => import('./home'));
const Catalog = lazy(() => import('./catalog'));
const Product = lazy(() => import('./product'));
const Admin = lazy(() => import('./admin'));
const Cart = lazy(() => import('./cart'));
const NotFound = lazy(() => import('./not-found'));

export const Routing = () => (
  <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={withLazy(<Home />)} />
      <Route path={'catalog'} element={withLazy(<Catalog />)} />
      <Route path={'product/:id'} element={withLazy(<Product />)} />
      <Route path={'admin'} element={withLazy(<Admin />)} />
      <Route path={'cart'} element={withLazy(<Cart />)} />
      <Route path={'auth/*'} element={<Auth />} />
      <Route path={'*'} element={withLazy(<NotFound />)} />
    </Route>
  </Routes>
);
