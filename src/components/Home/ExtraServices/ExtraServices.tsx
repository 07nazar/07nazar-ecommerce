import styles from './ExtraServices.module.scss'
import bg from '../../../assets/dbPhotos/Services/BG.png'
import search from '../../../assets/dbPhotos/Services/search.png'

const ExtraServices = () => {
  return (
    <div className={styles.extraServices}>
      <h4>Our extra services</h4>
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.top}>
            <img className={styles.bg} src={bg} alt="" />
            <div className={styles.inconBox}>
              <img className={styles.icon} src={search} alt="" />
            </div>
          </div>
          <p>Source from Industry Hubs</p>
        </div>
        <div className={styles.service}>
          <div className={styles.top}>
            <img className={styles.bg} src={bg} alt="" />
            <div className={styles.inconBox}>
              <img className={styles.icon} src={search} alt="" />
            </div>
          </div>
          <p>Source from Industry Hubs</p>
        </div>
        <div className={styles.service}>
          <div className={styles.top}>
            <img className={styles.bg} src={bg} alt="" />
            <div className={styles.inconBox}>
              <img className={styles.icon} src={search} alt="" />
            </div>
          </div>
          <p>Source from Industry Hubs</p>
        </div>
        <div className={styles.service}>
          <div className={styles.top}>
            <img className={styles.bg} src={bg} alt="" />
            <div className={styles.inconBox}>
              <img className={styles.icon} src={search} alt="" />
            </div>
          </div>
          <p>Source from Industry Hubs</p>
        </div>
      </div>
    </div>
  )
}
export default ExtraServices
