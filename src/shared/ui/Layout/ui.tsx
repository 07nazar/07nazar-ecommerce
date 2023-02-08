import Home from '../../../pages/Home/Home'
import Footer from '../Footer/ui'
import Header from '../Header/ui'
// import styles from './Layout.module.scss'

export const Layout = () => {
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
