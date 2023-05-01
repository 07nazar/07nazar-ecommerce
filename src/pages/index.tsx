import {Route, Routes} from 'react-router-dom';

import {Admin} from './admin';
import {Cart} from './cart';
import {Catalog} from './catalog';
import {Home} from './home';
import {Layout} from './layout';
import {NotFound} from './not-found';
import {Product} from './product';

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
