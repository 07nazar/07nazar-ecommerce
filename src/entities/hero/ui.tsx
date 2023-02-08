export const Categories = () => {
  return (
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
  )
}

export const Slider = () => {
  return (
    <div className={styles.slide}>
      <img src={slide} alt="" />
    </div>
  )
}

export const Offer = () => {
  return <p>Get US $10 off with a new supplier</p>
}
