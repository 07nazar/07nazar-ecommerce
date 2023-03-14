import { FC, ReactNode } from "react";

interface IProductCardClassNames {
  title?: string;
  image?: string;
  price?: string;
  box?: string;
  content?: string;
}

interface IProductCardProps {
  image: string;
  title: string;
  price: {
    old?: number;
    current: number;
  };
  children?: ReactNode;
  between?: ReactNode;
  className?: IProductCardClassNames;
}

export const ProductCard: FC<IProductCardProps> = ({
  image,
  title,
  price,
  between,
  children,
  className = {},
}) => (
  <div className={`${className.box || ""} bg-white`}>
    <img
      src={image}
      className={`${className.image || ""} mx-auto object-cover`}
      alt=""
    />

    <div className={className.content || ""}>
      <h3 className={className.title || ""}>{title}</h3>
      {between}
      <div className="flex items-center gap-2">
        <p className={className.price || ""}>${price.current}</p>
        {price.old && (
          <p className="self-start text-gray-hot text-base line-through">
            ${price.old}
          </p>
        )}
      </div>
      {children}
    </div>
  </div>
);
