import styles from "./styles.module.scss";

const CategoryItem = () => (
  <div className={styles.item}>
    <div className={styles.item_info}>
      <div className={styles.item_block}>
        <h5 className={styles.item_title}>Soft chairs</h5>
        <p>From</p>
        <p className={styles.item_price}>USD 19</p>
      </div>
      <img src="" alt="" />
    </div>
  </div>
);

export const CategoryInfo = () => (
  <div
    className={styles.info}
    style={{
      backgroundImage: ``,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <h4>Home and outdoor</h4>
    <button>Source now</button>
  </div>
);

export const CategoryList = () => (
  <div className={styles.catagoriesList}>
    <CategoryItem />
  </div>
);
