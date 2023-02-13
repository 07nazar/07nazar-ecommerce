import { Logo } from "shared/ui";

import { HeaderBottom } from "./headerBottom";
import { Navigation } from "./Navigation";
import { Search } from "./Search";
import styles from "./styles.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.top}>
      <Logo />
      <Search />
      <Navigation />
    </div>
    <div className={styles.bottom}>
      <HeaderBottom />
    </div>
  </header>
);
