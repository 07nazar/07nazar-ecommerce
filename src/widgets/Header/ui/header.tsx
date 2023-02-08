import styles from "./styles.module.scss";
import { Logo } from "shared/ui/Logo";
import { Search } from "./Search/search";
import { Navigation } from "./Navigation/navigation";
import { HeaderBottom } from "./headerBottom/header_bottom";

export const Header = () => {
  return (
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
};
