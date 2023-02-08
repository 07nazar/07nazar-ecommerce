import styles from './List.module.scss'
import productImg from '../../../assets/dbPhotos/Home/rasm.png'
import bg from '../../../assets/dbPhotos/List/bg1.png'

const List = () => {
  return (
    <div className={styles.list}>
      <div
        className={styles.preview}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <h4>Home and outdoor</h4>
        <button>Source now</button>
      </div>
      <div className={styles.products}>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>
                From <br /> USD 19
              </span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className={styles.productsItem}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h5>Soft chairs</h5>
              <span>From USD 19</span>
            </div>
            <img src={productImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default List
