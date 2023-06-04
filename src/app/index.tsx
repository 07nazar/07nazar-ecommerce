import './styles/index.css';

import { withProviders } from './providers';
import { Routing } from './routing';

const App = () => <Routing />;

export default withProviders(App);
