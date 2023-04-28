import { Route, Routes } from 'react-router-dom';

import { Admin } from './Admin';
import { Cart } from './Cart';
import { Catalog } from './Catalog';
import { Home } from './Home';
import { Layout } from './Layout';
import { NotFound } from './NotFound';
import { Product } from './Product';

export const Routing = () => (
  <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={'cart'} element={<Cart />} />
      <Route path={'catalog'} element={<Catalog />} />
      <Route path={'product/:id'} element={<Product />} />
      <Route path={'admin'} element={<Admin />} />
      <Route path={'*'} element={<NotFound />} />
    </Route>
  </Routes>
);
