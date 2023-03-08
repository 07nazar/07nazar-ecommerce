import { FC } from "react";
import { IoMdCart } from "react-icons/io";

import { Button } from "shared/ui/Button";

interface AddToCartProps {
  productId: number;
}

export const AddToCart: FC<AddToCartProps> = ({ productId }) => {
  const clickHandler = () => {
    // productId to cart
  };

  return (
    <Button onClick={clickHandler} className={"bg-light pl-3 text-blue"}>
      <IoMdCart size={18} />
      <span className={"ml-3"}>Move to cart</span>
    </Button>
  );
};
