import { FC } from "react";

import bg from "./assets/BG.png";
import search from "./assets/search.png";
import styles from "./styles.module.scss";

const Service: FC = () => (
  <div className={styles.service}>
    <div className={styles.top}>
      <img className={styles.bg} src={bg} alt="" />
      <div className={styles.box}>
        <img className={styles.icon} src={search} alt="" />
      </div>
    </div>
    <p>Source from Industry Hubs</p>
  </div>
);

export const ExtraServices = () => (
  <div className={styles.extraServices}>
    <h4>Our extra services</h4>

    <div className={styles.services}>
      <Service />
    </div>
  </div>
);
