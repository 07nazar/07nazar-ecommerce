import styles from './Deals.module.scss'
import itemImg from '../../../assets/dbPhotos/Home/image35.png'

const Deals = () => {
  return (
    <div className={styles.deals}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h5>Deals and offers</h5>
          <h6>Hygiene equipments</h6>
        </div>
        <div className={styles.timer}>
          <div className={styles.box}>04</div>
          <div className={styles.box}>14</div>
          <div className={styles.box}>34</div>
          <div className={styles.box}>56</div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <img src={itemImg} alt="" />
          <h5>Smart watches</h5>
          <button>-15%</button>
        </div>
        <div className={styles.listItem}>
          <img src={itemImg} alt="" />
          <h5>Smart watches</h5>
          <button>-15%</button>
        </div>
        <div className={styles.listItem}>
          <img src={itemImg} alt="" />
          <h5>Smart watches</h5>
          <button>-15%</button>
        </div>
        <div className={styles.listItem}>
          <img src={itemImg} alt="" />
          <h5>Smart watches</h5>
          <button>-15%</button>
        </div>
        <div className={styles.listItem}>
          <img src={itemImg} alt="" />
          <h5>Smart watches</h5>
          <button>-15%</button>
        </div>
      </div>
    </div>
  )
}
export default Deals
