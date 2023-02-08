// import styles from './Header.module.scss'

import { AiOutlineUser } from 'react-icons/ai'
import { TbMessageDots } from 'react-icons/tb'
import { MdOutlineFavorite } from 'react-icons/md'
import { HiShoppingCart } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.top}>
          <img src="" alt="" />
          <div className={styles.input}>
            <input type="text" />
            <span>All category</span>
            <button>Search</button>
          </div>
          <nav className={styles.actions}>
            <AiOutlineUser size={20} />
            <TbMessageDots size={20} />
            <MdOutlineFavorite size={20} />
            <HiShoppingCart size={20} />
          </nav>
        </div>
        <div className={styles.bottom}>
          <nav className={styles.categories}>
            <RxHamburgerMenu />
            <a href="/">All category</a>
            <a href="/">Hot offers</a>
            <a href="/">Gift boxes</a>
            <a href="/">Projects</a>
            <a href="/">Menu item</a>
            <a href="/">Help</a>
          </nav>
          <div className={styles.switchers}>
            <div className={styles.lang}>English, USD</div>
            <div className={styles.ship}>Ship to</div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
