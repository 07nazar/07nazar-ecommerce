import { AiOutlineUser } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineFavorite } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";

import styles from "./styles.module.scss";

export const Navigation = () => (
  <nav className={styles.actions}>
    <AiOutlineUser size={20} />
    <TbMessageDots size={20} />
    <MdOutlineFavorite size={20} />
    <HiShoppingCart size={20} />
  </nav>
);
