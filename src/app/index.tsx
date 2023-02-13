import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

import { Routing } from "pages";

import { withProviders } from "./providers";
import "./styles/index.css";

const App = () => (
  <div className="container">
    <Header />
    <main>
      <Routing />
    </main>
    <Footer />
  </div>
);

export default withProviders(App);
