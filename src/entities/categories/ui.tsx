const CategoryItem = () => {
  return (
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
  )
}

export const CategoryInfo = () => {
  return (
    <div
      className={styles.info}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <h4>Home and outdoor</h4>
      <button>Source now</button>
    </div>
  )
}

export const CategoryList = () => {
  return (
    <div className={styles.catagoriesList}>
      <CategoryItem />
    </div>
  )
}
