import { Deals } from 'widgets/Home/Deals/Deals'
import ExtraServices from 'widgets/Home/ExtraServices/ExtraServices'
import Hero from 'widgets/Home/Hero/Hero'
import List from 'widgets/Home/List/List'
import Recommend from 'widgets/Home/Recommend/Recommend'
import Request from 'widgets/Home/Request/Request'

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
