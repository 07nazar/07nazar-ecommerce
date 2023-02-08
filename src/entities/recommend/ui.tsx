import styles from "./style.module.scss";

const RecommendedItem = () => {
  return (
    <div className={styles.item}>
      <img src="" alt="" />
      <span>$10.30</span>
      <p>T-shirts with multiple colors, for men</p>
    </div>
  );
};

export const RecommendedItems = () => {
  return (
    <div className={styles.items}>
      <RecommendedItem />
    </div>
  );
};
