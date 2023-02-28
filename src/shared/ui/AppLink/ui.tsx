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
  <Link to={to} className={`link ${className || ""} ${textColor || ""}`}>
    {children}
  </Link>
);
