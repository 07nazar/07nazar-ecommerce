import styles from "./Layout.module.scss";
import Home from "pages/Home";
import { Footer } from "shared/ui/Footer";
import { Header } from "widgets/Header";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Home />
      </main>
      <Footer />
    </div>
  );
};
