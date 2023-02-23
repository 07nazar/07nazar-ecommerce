import "./styles/index.css";

import { Header } from "widgets/Header";

import { withProviders } from "./providers";

const App = () => <Header isNavbar />;

export default withProviders(App);
