import styles from "./styles.module.scss";

const RecommendedItem = () => (
  <div className={styles.item}>
    <img src="" alt="" />
    <span>$10.30</span>
    <p>T-shirts with multiple colors, for men</p>
  </div>
);

export const RecommendedItems = () => (
  <div className={styles.items}>
    <RecommendedItem />
  </div>
);
