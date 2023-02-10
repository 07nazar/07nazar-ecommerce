import styles from "./styles.module.scss";

export const Categories = () => (
  <div className={styles.categories}>
    <p>Automobiles</p>
    <p>Clothes and wear</p>
    <p>Home interiors</p>
    <p>Computer and tech</p>
    <p>Tools, equipments</p>
    <p>Sports and outdoor</p>
    <p>Animal and pets</p>
    <p>Machinery tools</p>
  </div>
);

export const Slider = () => (
  <div className={styles.slide}>
    <img src="" alt="" />
  </div>
);

export const Offer = () => <p>Get US $10 off with a new supplier</p>;
