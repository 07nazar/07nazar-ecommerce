import { useState } from "react";

import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";
import { Dropdown } from "shared/ui/Dropdown";
import { Checkbox, Input } from "shared/ui/Input";
import { RangeSlider } from "shared/ui/RangeSlider";

import { ProductCol } from "./ProductCol";
import { ProductRow } from "./ProductRow";

const categoriesLinks = [
  {
    title: "Mobile accessory",
    to: "mobiles/accessory",
  },
  {
    title: "Electronics",
    to: "electronics",
  },
  {
    title: "Smartphones ",
    to: "mobiles/smartphones",
  },
  {
    title: "Modern tech",
    to: "modern",
  },
  {
    title: "Clothings",
    to: "clothings",
  },
  {
    title: "Mobile accessory",
    to: "mobiles/accessory",
  },
];

export const Shop = () => {
  const price = {
    min: 0,
    max: 3000,
  };

  const [userPrice, setUserPrice] = useState({
    min: price.min,
    max: price.max,
  });

  const productRow = true;

  return (
    <div className={"flex gap-4"}>
      <div className={"max-w-[240px] w-full"}>
        <Dropdown maxItems={3} title={"Category"}>
          {categoriesLinks.map((category) => (
            <AppLink
              key={category.title}
              to={category.to}
              className={"text-gray-dark"}
            >
              {category.title}
            </AppLink>
          ))}
        </Dropdown>

        <Dropdown maxItems={3} title={"Category"}>
          <Checkbox>132</Checkbox>
          <Checkbox>1322</Checkbox>
        </Dropdown>

        <Dropdown title={"Slider"}>
          <RangeSlider
            min={price.min}
            max={price.max}
            onChange={(min, max) => {
              setUserPrice(() => ({
                min,
                max,
              }));
            }}
            width={240}
          />

          <div className={"flex gap-4 my-4"}>
            <Input
              value={userPrice.min}
              handleChange={(e) =>
                setUserPrice({
                  ...userPrice,
                  max: +e.target.value,
                })
              }
              placeholder={"0"}
              className={"inline-flex"}
            />
            <Input
              value={userPrice.max}
              handleChange={(e) =>
                setUserPrice({
                  ...userPrice,
                  min: +e.target.value,
                })
              }
              placeholder={"999999"}
              className={"inline-flex"}
            />
          </div>
          <Button>Apply</Button>
        </Dropdown>
      </div>
      <div className="max-w-[926px] w-full grid grid-cols-3 gap-5 bg-white">
        {!productRow ? <ProductRow /> : <ProductCol />}
      </div>
    </div>
  );
};

/*
      <div className="grid grid-cols-1 gap-2.5 max-w[920px] w-full">

      </div>
 */
