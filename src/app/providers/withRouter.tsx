import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => ReactNode) =>
  function App() {
    return <BrowserRouter>{component()}</BrowserRouter>;
  };
