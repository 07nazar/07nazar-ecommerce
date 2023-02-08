import { Categories, Offer, Slider } from 'entities/hero'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Categories />
      <Slider />

      <div className={styles.offers}>
        <Offer />
        <Offer />
      </div>
    </div>
  )
}
export default Hero
