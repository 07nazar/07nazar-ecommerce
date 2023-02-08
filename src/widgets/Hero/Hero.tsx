import { Categories, Offer, Slider } from "entities/hero";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <Categories />
      <Slider />

      <div className={styles.offers}>
        <Offer />
        <Offer />
      </div>
    </div>
  );
};
export default Hero;
