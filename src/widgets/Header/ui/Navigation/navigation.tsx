import styles from "./styles.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

export const Navigation = () => {
  return (
    <nav className={styles.actions}>
      <AiOutlineUser size={20} />
      <TbMessageDots size={20} />
      <MdOutlineFavorite size={20} />
      <HiShoppingCart size={20} />
    </nav>
  );
};
