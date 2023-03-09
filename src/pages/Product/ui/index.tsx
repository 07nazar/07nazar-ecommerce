import { useState } from "react";

import { TabBtn, Tabs } from "shared/ui/Tabs";

import { ProductCard } from "entities/ProductCard";

import img from "../assets/phone.png";
import { reviewsFromServer } from "../model";

import { Description } from "./Description";
import { Reviews } from "./Reviews";

const detailProduct = [
  {
    buttonText: "Description",
    content: (
      <Description
        specifications={[
          { name: "Model", value: "#5236326" },
          { name: "Style", value: "Classic" },
          { name: "Type", value: "#5236326" },
          { name: "Color", value: "Classic" },
          { name: "Weight", value: "Classic" },
        ]}
        advantages={[
          "Some great feature name here",
          "Lorem ipsum dolor sit amet, consectetur",
          "Duis aute irure dolor in reprehenderit",
          "Some great feature name 2",
        ]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n" +
          "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
      />
    ),
  },
  {
    buttonText: "Reviews",
    content: <Reviews reviews={reviewsFromServer} />,
  },
  {
    buttonText: "Shipping",
    content: <p>3</p>,
  },
  {
    buttonText: "About company",
    content: <p>4</p>,
  },
];

export const Product = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        <Tabs
          border={"border border-gray-medium bg-white"}
          className={"pl-2"}
          buttons={detailProduct.map((detail, i) => (
            <TabBtn
              isPill={false}
              className={"pt-4 pb-3"}
              outlined
              key={detail.buttonText}
              activeTab={activeTab}
              index={i}
              setActiveTab={() => setActiveTab(i)}
            >
              {detail.buttonText}
            </TabBtn>
          ))}
          orientation={"horizontal"}
        >
          <div className={"pt-2 pr-16 pb-7 pl-5"}>
            {detailProduct[activeTab].content}
          </div>
        </Tabs>
      </div>
      <div className="grid grid-cols-6  gap-5 max-w[1180px] w-full bg-white mt-5 p-5">
        <ProductCard
          image={img}
          price={{ current: 32 }}
          title="Xiaomi Redmi 8 Original "
          className={{
            image: "w-[172px] bg-gray-medium rounded-md mb-3.5",
            title: "max-w-[142px] w-full text-gray-dark",
            box: "inline-flex flex-col",
            price: "text-gray-hot text-base",
            content: "",
          }}
        />
      </div>
      <div className="grid grid-cols-1 max-w[242px] gap-4 pl-4 pr-5 w-full bg-white">
        <ProductCard
          image={img}
          price={{ current: 32 }}
          title="Xiaomi Redmi 8 Original "
          className={{
            image: "w-[80px] border border-gray-medium rounded-md",
            title: "max-w-[151px] w-full text-black text-base",
            box: "flex gap-2.5",
            price: "text-base text-gray-hot",
            content: "",
          }}
        />
      </div>
    </div>
  );
};
