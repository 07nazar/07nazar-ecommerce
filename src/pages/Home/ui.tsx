import { Deals } from "widgets/Deals";
import { ExtraServices } from "widgets/ExtraServices";
import { Hero } from "widgets/Hero";
import { Categories } from "widgets/List";
import { Recommend } from "widgets/Recommend";
import { Request } from "widgets/Request";

export const Home = () => (
  <div>
    <Hero />
    <Deals />
    <Categories />
    <Categories />

    <Request />

    <Recommend />

    <ExtraServices />
    {/*
      <Regions />
      <Subscribe /> */}
  </div>
);
