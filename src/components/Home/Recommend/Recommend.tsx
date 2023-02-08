import styles from './Recommend.module.scss'
import itemImg from '../../../assets/dbPhotos/Recommend/21.png'

const Recommend = () => {
  return (
    <div className={styles.recommend}>
      <h4>Recommended items</h4>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
        <div className={styles.item}>
          <img src={itemImg} alt="" />
          <span>$10.30</span>
          <p>T-shirts with multiple colors, for men</p>
        </div>
      </div>
    </div>
  )
}
export default Recommend
