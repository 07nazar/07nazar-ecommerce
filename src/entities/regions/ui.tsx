import styles from "./style.module.scss";
const Region = () => {
  return (
    <div className={styles.region}>
      <img src="" alt="" />
      <div className={styles.country}>
        <h6>Arabic Emirates</h6>
        <p>shopname.ae</p>
      </div>
    </div>
  );
};

export const RegionsList = () => {
  return (
    <div className={styles.regionsList}>
      <Region />
    </div>
  );
};
