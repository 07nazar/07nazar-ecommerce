import { Hero } from "widgets/Hero";
import { SubscribeNews } from "widgets/SubscribeNews";

import { categoriesHome } from "../lib";

import { Categories } from "./Categories";
import { DealsAndOffers } from "./DealsAndOffers";
import { RegionSuppliers } from "./RegionSuppliers";

export const Home = () => (
  <>
    <Hero />
    <DealsAndOffers />
    {categoriesHome.map((category) => (
      <Categories
        key={category.title}
        title={category.title}
        link={category.link}
        image={category.image}
      >
        {category.items}
      </Categories>
    ))}
    <div className={"my-8"}>
      <RegionSuppliers />
    </div>
    <SubscribeNews />
  </>
);
