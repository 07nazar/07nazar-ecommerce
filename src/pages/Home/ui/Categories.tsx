import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "shared/ui/Button";

interface CategoryItemProps {
  title: string;
  price: string;
  image: string;
  className?: string;
}

interface CategoriesProps {
  title: string;
  link: string;
  image: string;
  children: CategoryItemProps[];
}

const CategoryItem: FC<CategoryItemProps> = ({
  price,
  image,
  title,
  className,
}) => (
  <div className={`py-5 px-4 ${className}`}>
    <h6 className={"leading-5"}>{title}</h6>
    <div className={"flex flex-nowrap justify-between"}>
      <p className={"mt-2 text-xs text-gray-hot"}>
        From <br /> <span className={"whitespace-nowrap"}> USD {price}</span>
      </p>
      <img
        className={"max-w-[75px] max-h-[75px] object-contain"}
        src={image}
        alt="category"
      />
    </div>
  </div>
);

export const Categories: FC<CategoriesProps> = ({
  children,
  title,
  link,
  image,
}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(link);
  };

  const itemsBorders = (i: number): string => {
    const rightBorder =
      i !== Math.floor(children.length / 2) - 1 && i !== children.length - 1
        ? "border-r"
        : "";

    const bottomBorder = i < Math.floor(children.length / 2) ? "border-b" : "";

    return `border-gray-pale ${rightBorder} ${bottomBorder}`;
  };

  return (
    <div className={"flex bg-white mt-5"}>
      <div
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={`w-1/4 p-5 rounded-l-md bg-cover`}
      >
        <h5
          className={"text-black w-2/3 text-xl leading-6.5 font-semibold mb-5"}
        >
          {title}
        </h5>
        <Button onClick={clickHandler} className={"bg-white text-black"}>
          Source now
        </Button>
      </div>
      <div
        className={
          "grid grid-cols-[repeat(4,minmax(150px,1fr))] grow rounded-r-md border border-gray-pale overflow-hidden"
        }
      >
        {children.map((item, i) => {
          const itemClassNames = itemsBorders(i);
          return (
            <CategoryItem
              key={item.title}
              price={item.price}
              image={item.image}
              title={item.title}
              className={itemClassNames}
            />
          );
        })}
      </div>
    </div>
  );
};
