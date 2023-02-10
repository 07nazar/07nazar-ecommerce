import { Categories, Offer, Slider } from "entities/hero";

import styles from "./styles.module.scss";

export const Hero = () => (
  <div className={styles.hero}>
    <Categories />
    <Slider />

    <div className={styles.offers}>
      <Offer />
      <Offer />
    </div>
  </div>
);
