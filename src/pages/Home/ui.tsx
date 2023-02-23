import { Header } from 'widgets/Header'
import { Hero } from 'widgets/Hero'

export const Home = () => (
  <div>
    <Header isNavbar />

    <main className="container">
      <Hero />
    </main>
  </div>
)
