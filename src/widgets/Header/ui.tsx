import { FC } from "react";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdMessage } from "react-icons/md";

import { AppLink } from "shared/ui/AppLink";
import { Logo } from "shared/ui/Logo";

import { HeaderSearch } from "features/HeaderSearch";

const appLinks = [
  {
    icon: <FaUserAlt size={20} />,
    text: "Profile",
    to: "profile",
  },
  {
    icon: <MdMessage size={20} />,
    text: "Message",
    to: "messages",
  },
  {
    icon: <FaHeart size={20} />,
    text: "Orders",
    to: "favourites",
  },
  {
    icon: <IoMdCart size={20} />,
    text: "My cart",
    to: "cart",
  },
];

export const Header: FC = () => (
  <header className={"container-fluid bg-white"}>
    <div className="container flex items-center justify-between pt-[22px] pb-[24px] ">
      <Logo />
      <HeaderSearch />
      <nav className="flex gap-[18px] ml-4 max-h-[40px]">
        {appLinks.map((link) => (
          <AppLink
            key={link.to}
            to={link.to}
            className="text-[12px] leading-[15px]"
          >
            {link.icon}
            <p className="mt-1">{link.text}</p>
          </AppLink>
        ))}
      </nav>
    </div>
  </header>
);
