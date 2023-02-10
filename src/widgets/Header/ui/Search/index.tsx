import styles from "./styles.module.scss";

export const Search = () => {
  return (
    <div className={styles.input}>
      <input type="text" />
      <span>All category</span>
      <button>Search</button>
    </div>
  );
};
