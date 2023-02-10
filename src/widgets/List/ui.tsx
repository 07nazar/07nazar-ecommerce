import { CategoryInfo, CategoryList } from "entities/categories";

import styles from "./styles.module.scss";

export const Categories = () => (
  <div className={styles.categories}>
    <CategoryInfo />
    <CategoryList />
  </div>
);
