import Hero from "widgets/Hero/Hero";
import { Deals } from "widgets/Deals/ui";
import List from "widgets/List/List";
import Recommend from "widgets/Recommend/Recommend";
import Request from "widgets/Request/Request";
import ExtraServices from "widgets/ExtraServices/ExtraServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <Deals />
      <List />
      <List />

      <Request />

      <Recommend />

      <ExtraServices />
      {/*
      <Regions />
      <Subscribe /> */}
    </div>
  );
};
export default Home;
