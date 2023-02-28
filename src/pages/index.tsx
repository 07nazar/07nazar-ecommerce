import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Layout } from "./Layout";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
