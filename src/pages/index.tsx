import { Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';

import { Home } from './Home';
import { Layout } from './Layout';
import { NotFound } from './NotFound';
import { Product } from './Product';
import { Shop } from './Shop';

export const Routing = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='product/:id' element={<Product />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);
