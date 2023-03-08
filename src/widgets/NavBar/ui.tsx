import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/all";

import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";

const categoriesLinks = [
  {
    to: "shop",
    text: "Shop",
  },
  {
    to: "gifts",
    text: "Gift boxes",
  },
  {
    to: "mobiles",
    text: "Mobiles",
  },
  {
    to: "pc",
    text: "Laptops & PC",
  },
];

export const NavBar: FC = () => (
  <div className={"container-fluid bg-white"}>
    <div className={"beforeLine afterLine"}>
      <div className="container flex justify-between pt-[22px] pb-[24px]">
        <nav className="flex gap-[28px]">
          <Button className="h-[24px] p-0 text-black border-none bg-light">
            <GiHamburgerMenu size={24} className="mr-[6px]" />
            <span className="leading-[24px]">All category</span>
          </Button>
          {categoriesLinks.map((link) => (
            <AppLink
              key={link.to}
              to={link.to}
              className={"text-black font-medium"}
            >
              {link.text}
            </AppLink>
          ))}
        </nav>
        <div className={"flex items-center gap-[15px]"}>
          <p>English, USD</p>
          <p>Ship to</p>
        </div>
      </div>
    </div>
  </div>
);
