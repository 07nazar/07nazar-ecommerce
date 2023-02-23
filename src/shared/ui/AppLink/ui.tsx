import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  textColor?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  textColor = "text-gray-hot hover:text-gray-dark",
  children,
}) => (
  <Link
    to={to}
    className={` flex items-center flex-col whitespace-nowrap duration-500 
    ${className || ""} 
    ${textColor || ""}`}
  >
    {children}
  </Link>
);
