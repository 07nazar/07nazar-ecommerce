import { Hero } from 'widgets/Hero'

import { categoriesHome } from '../lib'

import { Categories } from './Categories'
import { DealsAndOffers } from './DealsAndOffers'

export const Home = () => (
  <div>
    <main className="container">
      <Hero />
      <DealsAndOffers />
      {categoriesHome.map((category) => (
        <Categories
          key={category.title}
          title={category.title}
          link={category.link}
          image={category.image}>
          {category.items}
        </Categories>
      ))}
    </main>
  </div>
)
