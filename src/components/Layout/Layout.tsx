import Home from '../../pages/Home/Home'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Home />
      </main>
      <Footer />
    </div>
  )
}
export default Layout
