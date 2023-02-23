import { FC } from "react";

import { HeaderTop } from "./HeaderTop";
import { NavBar } from "./NavBar";

interface HeaderProps {
  isNavbar: boolean;
}

export const Header: FC<HeaderProps> = ({ isNavbar = true }) => (
  <div className={"container-fluid bg-white"}>
    <HeaderTop />
    {isNavbar && <NavBar />}
  </div>
);
