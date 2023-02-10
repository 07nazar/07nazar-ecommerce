import { RecommendedItems } from "entities/recommend";

import styles from "./styles.module.scss";

export const Recommend = () => (
  <div className={styles.recommended}>
    <h4>Recommended items</h4>

    <RecommendedItems />
  </div>
);
