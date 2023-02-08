import { CategoryInfo, CategoryList } from "entities/categories";
import styles from "./List.module.scss";
const Categories = () => {
  return (
    <div className={styles.catagories}>
      <CategoryInfo />
      <CategoryList />
    </div>
  );
};
export default Categories;
