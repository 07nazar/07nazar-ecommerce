import styles from './Regions.module.scss'

const Regions = () => {
  return (
    <div className={styles.regions}>
      <h4>Suppliers by region</h4>
      <div className={styles.regionsList}>
        <div className={styles.region}>
          <img src="" alt="" />
          <div className={styles.country}>
            <h6>Arabic Emirates</h6>
            <p>shopname.ae</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Regions
