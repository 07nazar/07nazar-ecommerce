import { RecommendedItems } from 'entities/recommend'

const Recommend = () => {
  return (
    <div className={styles.recommended}>
      <h4>Recommended items</h4>

      <RecommendedItems />
    </div>
  )
}
export default Recommend
