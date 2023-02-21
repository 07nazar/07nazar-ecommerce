import './styles/index.css'

import { HeaderSearch } from 'entities/HeaderSearch'

import { withProviders } from './providers'

const App = () => (
    <div className="container">
      <HeaderSearch />
    </div>
)

export default withProviders(App)