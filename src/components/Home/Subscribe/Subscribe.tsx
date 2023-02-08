import styles from './Subscribe.module.scss'

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <h5>Subscribe on our newsletter</h5>
      <p>Get daily news on upcoming offers from many suppliers all over the world</p>
      <div className={styles.input}>
        <input type="text" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
export default Subscribe
