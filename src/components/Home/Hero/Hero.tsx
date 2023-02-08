import styles from './Hero.module.scss'
import slide from '../../../assets/dbPhotos/hero.png'
import avatar from '../../../assets/dbPhotos/Avatar.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.categories}>
        <p>Automobiles</p>
        <p>Clothes and wear</p>
        <p>Home interiors</p>
        <p>Computer and tech</p>
        <p>Tools, equipments</p>
        <p>Sports and outdoor</p>
        <p>Animal and pets</p>
        <p>Machinery tools</p>
      </div>
      <div className={styles.slide}>
        <img src={slide} alt="" />
      </div>
      <div className={styles.offers}>
        <div className={styles.userAuth}>
          <div className={styles.user}>
            <img src={avatar} alt="" />
            <p>Hi, user let’s get stated</p>
          </div>
          <button>Join now</button>
          <button>Log in</button>
        </div>
        <div className={styles.offer}>
          <p>Get US $10 off with a new supplier</p>
        </div>
        <div className={styles.offer}>
          <p>Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  )
}
export default Hero
