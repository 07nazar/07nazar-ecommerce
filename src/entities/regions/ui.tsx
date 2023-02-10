import styles from "./styles.module.scss";

const Region = () => (
  <div className={styles.region}>
    <img src="" alt="" />
    <div className={styles.country}>
      <h6>Arabic Emirates</h6>
      <p>shopname.ae</p>
    </div>
  </div>
);

export const RegionsList = () => (
  <div className={styles.regionsList}>
    <Region />
  </div>
);
