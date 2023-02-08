import { RecommendedItems } from "entities/recommend";
import styles from "./Recommend.module.scss";
const Recommend = () => {
  return (
    <div className={styles.recommended}>
      <h4>Recommended items</h4>

      <RecommendedItems />
    </div>
  );
};
export default Recommend;
