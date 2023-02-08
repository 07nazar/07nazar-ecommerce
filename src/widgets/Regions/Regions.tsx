import { RegionsList } from "entities/regions";
import styles from "./Regions.module.scss";
const Regions = () => {
  return (
    <div className={styles.regions}>
      <h4>Suppliers by region</h4>
      <RegionsList />
    </div>
  );
};
export default Regions;
