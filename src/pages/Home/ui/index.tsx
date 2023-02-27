import { Header } from 'widgets/Header'
import { Hero } from 'widgets/Hero'

import { DealsAndOffers } from './DealsAndOffers'

export const Home = () => (
  <div>
    <Header isNavbar />
    <main className="container">
      <Hero />
      <DealsAndOffers />
    </main>
  </div>
)
