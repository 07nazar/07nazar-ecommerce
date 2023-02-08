import Deals from '../../components/Home/Deals/Deals'
import ExtraServices from '../../components/Home/ExtraServices/ExtraServices'
import Hero from '../../components/Home/Hero/Hero'
import List from '../../components/Home/List/List'
import Recommend from '../../components/Home/Recommend/Recommend'
import Regions from '../../components/Home/Regions/Regions'
import Request from '../../components/Home/Request/Request'
import Subscribe from '../../components/Home/Subscribe/Subscribe'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div>
      <Hero />
      <Deals />
      <List />
      <List />

      <Request />

      <Recommend />

      <ExtraServices />
      {/*
      <Regions />
      <Subscribe /> */}
    </div>
  )
}
export default Home
