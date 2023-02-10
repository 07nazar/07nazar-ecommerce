import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

import { Routing } from "pages";

import { withProviders } from "./providers";
import styles from "./styles/styles.module.scss";

const App = () => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <Routing />
    </main>
    <Footer />
  </div>
);

export default withProviders(App);
