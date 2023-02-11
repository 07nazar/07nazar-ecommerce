import { Offer, BasicTabs } from 'entities/hero'

import styles from './styles.module.scss'

export const Hero = () => (
  <div className={styles.hero}>
    <BasicTabs />

    <div className={styles.offers}>
      <Offer />
      <Offer />
    </div>
  </div>
)
