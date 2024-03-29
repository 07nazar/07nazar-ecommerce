import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Admin } from 'pages/admin';
import { Auth } from 'pages/auth';
import { Layout } from 'pages/layout';
import { withLazy } from 'shared/lib';

const Home = lazy(() => import('pages/home'));
const Catalog = lazy(() => import('pages/catalog'));
const AllCatalog = lazy(() => import('pages/all-catalog'));
const Product = lazy(() => import('pages/product'));
const ProductEdit = lazy(() => import('pages/product-edit'));
const ProductCreate = lazy(() => import('pages/product-create'));
const Cart = lazy(() => import('pages/cart'));
const NotFound = lazy(() => import('pages/not-found'));

export const Routing = () => (
  <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={withLazy(<Home />)} />
      <Route path={'catalog'} element={withLazy(<AllCatalog />)} />
      <Route path={'catalog/:category'} element={withLazy(<Catalog />)} />
      <Route path={'product/:id'} element={withLazy(<Product />)} />
      <Route path={'product-edit/:id'} element={withLazy(<ProductEdit />)} />
      <Route path={'product/create'} element={withLazy(<ProductCreate />)} />
      <Route path={'admin/*'} element={<Admin />} />
      <Route path={'cart'} element={withLazy(<Cart />)} />
      <Route path={'auth/*'} element={<Auth />} />
      <Route path={'*'} element={withLazy(<NotFound />)} />
    </Route>
  </Routes>
);
