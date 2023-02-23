import './styles/index.css'

import { Routing } from 'pages'

import { withProviders } from './providers'

const App = () => <Routing />

export default withProviders(App)
