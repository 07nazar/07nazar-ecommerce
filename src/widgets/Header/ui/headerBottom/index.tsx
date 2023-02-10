import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./styles.module.scss";

export const HeaderBottom = () => (
  <>
    <nav className={styles.categories}>
      <RxHamburgerMenu />
      <a href="/src/pages">All category</a>
      <a href="/src/pages">Hot offers</a>
      <a href="/src/pages">Gift boxes</a>
      <a href="/src/pages">Projects</a>
      <a href="/src/pages">Menu item</a>
      <a href="/src/pages">Help</a>
    </nav>
    <div className={styles.switchers}>
      <div className={styles.lang}>English, USD</div>
      <div className={styles.ship}>Ship to</div>
    </div>
  </>
);
