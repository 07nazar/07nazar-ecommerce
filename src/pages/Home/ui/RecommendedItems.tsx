import { FC } from "react";

import { ProductCard } from "entities/ProductCard";

import img from "../assets/phone.png";

const products = [
  {
    image: img,
    title: "Brown winter coat medium size",
    price: {
      current: 51.31,
    },
  },
  {
    image: img,
    title: "Leather wallet",
    price: {
      current: 518.33,
    },
  },
  {
    image: img,
    title: "product 3",
    price: {
      current: 22.35,
      old: 25,
    },
  },
  {
    image: img,
    title: "product 4",
    price: {
      current: 51.34,
    },
  },
  {
    image: img,
    title: "product 5",
    price: {
      current: 518.32,
    },
  },
  {
    image: img,
    title: "product6",
    price: {
      current: 22.31,
      old: 25,
    },
  },
  {
    image: img,
    title: "product7",
    price: {
      current: 51.33,
    },
  },
  {
    image: img,
    title: "product88",
    price: {
      current: 518.36,
    },
  },
  {
    image: img,
    title: "product73",
    price: {
      current: 51.37,
    },
  },
  {
    image: img,
    title: "product8841",
    price: {
      current: 5138.63,
    },
  },
];

export const RecommendedItems: FC = () => (
  <div className={"mb-8"}>
    <h3 className={"title mb-6"}>Recommended items</h3>
    <div className={"grid grid-cols-5 gap-5"}>
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
          key={product.title}
          className={{
            box: "border border-gray-medium rounded-md",
            image: "max-h-[200px]",
            content: "flex flex-col-reverse p-4",
            price: "text-black font-medium mb-1",
            title: "text-gray-hot",
          }}
        ></ProductCard>
      ))}
    </div>
  </div>
);
