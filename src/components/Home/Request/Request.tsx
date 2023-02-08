import styles from './Request.module.scss'
import bg from '../../../assets/dbPhotos/Request/bg.png'

const Request = () => {
  return (
    <div
      className={styles.request}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div className={styles.info}>
        <h3>An easy way to send requests to all suppliers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt.
        </p>
      </div>
      <div className={styles.form}>
        <h5>Send quote to suppliers</h5>
        <input type="text" placeholder="What item you need?" />
        <textarea placeholder="Type more details"></textarea>
        <div className={styles.quantity}>
          <input type="text" placeholder="Quantity" />
          <input type="text" placeholder="Pcs" />
        </div>
        <button>Send inquiry</button>
      </div>
    </div>
  )
}
export default Request
