import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src="" alt="" />
        <p></p>
        <div className={styles.socials}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className={styles.navigate}>
        <nav className={styles.navigateBox}>
          <h5>About</h5>
          <a href="/">About Us</a>
          <a href="/">Find store</a>
          <a href="/">Categories</a>
          <a href="/">Blogs</a>
        </nav>
        <nav className={styles.navigateBox}>
          <h5>About</h5>
          <a href="/">About Us</a>
          <a href="/">Find store</a>
          <a href="/">Categories</a>
          <a href="/">Blogs</a>
        </nav>
        <nav className={styles.navigateBox}>
          <h5>About</h5>
          <a href="/">About Us</a>
          <a href="/">Find store</a>
          <a href="/">Categories</a>
          <a href="/">Blogs</a>
        </nav>
        <nav className={styles.navigateBox}>
          <h5>About</h5>
          <a href="/">About Us</a>
          <a href="/">Find store</a>
          <a href="/">Categories</a>
          <a href="/">Blogs</a>
        </nav>
      </div>
      <div className={styles.getApp}>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </footer>
  );
};
export default Footer;
