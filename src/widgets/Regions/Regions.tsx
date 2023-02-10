import { RegionsList } from "entities/regions";

import styles from "./styles.module.scss";

const Regions = () => (
  <div className={styles.regions}>
    <h4>Suppliers by region</h4>
    <RegionsList />
  </div>
);
export default Regions;
