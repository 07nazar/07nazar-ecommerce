import { Header } from "widgets/Header";
import { Hero } from "widgets/Hero";

import { categoriesHome } from "../lib";

import { Categories } from "./Categories";

export const Home = () => (
  <div>
    <Header isNavbar />

    <main className="container">
      <Hero />
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
    </main>
  </div>
);
