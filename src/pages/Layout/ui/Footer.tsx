import { FC } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/all";

import { AppLink } from "shared/ui/AppLink";
import { Logo } from "shared/ui/Logo";

import { ReactComponent as AppStore } from "../assets/appStore.svg";
import { ReactComponent as GooglePlay } from "../assets/googlePlay.svg";

const footerLinks = [
  {
    title: "About",
    links: [
      { text: "About us", to: "/about" },
      { text: "Find store", to: "/find-store" },
      { text: "Categories", to: "/categories" },
      { text: "Blogs", to: "/blogs" },
    ],
  },
  {
    title: "Partnership",
    links: [
      { text: "Become a partner", to: "/partner" },
      { text: "Advertise", to: "/advertise" },
    ],
  },
  {
    title: "Information",
    links: [
      { text: "Help Center", to: "/help-center" },
      { text: "Money Refund", to: "/money-refund" },
      { text: "Shipping", to: "/shipping" },
      { text: "Contact us", to: "/contact-us" },
    ],
  },
  {
    title: "For users",
    links: [
      { text: "Login", to: "/login" },
      { text: "Register", to: "/register" },
      { text: "Settings", to: "/settings" },
      { text: "My Orders", to: "/my-orders" },
    ],
  },
];

const externalLinks = [
  {
    to: "https://www.facebook.com",
    icon: <AiFillFacebook size={30} />,
  },
  {
    to: "https://www.twitter.com",
    icon: <AiFillTwitterSquare size={30} />,
  },
  {
    to: "https://www.linkedin.com",
    icon: <AiFillLinkedin size={30} />,
  },
  {
    to: "https://www.instagram.com",
    icon: <AiFillInstagram size={30} />,
  },
  {
    to: "https://www.youtube.com/",
    icon: <AiFillYoutube size={30} />,
  },
];

export const Footer: FC = () => (
  <footer className={"container-fluid bg-white"}>
    <div className={"container pt-10 pb-14"}>
      <div className={"flex gap-14"}>
        <div className={"w-1/4"}>
          <Logo className={"mb-4"} />
          <p className={"text-gray-dark"}>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className={"mt-4 flex gap-2.5"}>
            {externalLinks.map((link) => (
              <AppLink
                to={link.to}
                key={link.to}
                textColor={"text-gray-deep hover:text-gray-hot"}
              >
                {link.icon}
              </AppLink>
            ))}
          </div>
        </div>
        <div className={"flex gap-16"}>
          {footerLinks.map((linkGroup) => (
            <div className={"flex flex-col gap-1"} key={linkGroup.title}>
              <h6 className={"mb-1.5 font-medium text-black"}>
                {linkGroup.title}
              </h6>
              {linkGroup.links.map((link) => (
                <AppLink key={link.to} to={link.to} className={"items-start"}>
                  {link.text}
                </AppLink>
              ))}
            </div>
          ))}
        </div>
        <div className={"ml-auto"}>
          <h6 className={"mb-4 text-black font-medium"}>Get app</h6>
          <AppLink className={"mb-2"} to={"/download"}>
            <AppStore className={"rect-hover"} />
          </AppLink>
          <AppLink to={"/download"}>
            <GooglePlay className={"rect-hover"} />
          </AppLink>
        </div>
      </div>
    </div>
    <div className={"bg-gray-pale border-t border-gray-medium"}>
      <div className={"container pt-5 pb-5 "}>
        <p className={"text-gray-dark"}>© 2023 Ecommerce.</p>
      </div>
    </div>
  </footer>
);
