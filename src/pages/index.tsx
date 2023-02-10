import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";

export const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
  </Routes>
);
