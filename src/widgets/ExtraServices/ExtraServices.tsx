import styles from "./ExtraServices.module.scss";
import bg from "shared/assets/dbPhotos/Services/BG.png";
import { FC } from "react";
import search from "shared/assets/dbPhotos/Services/search.png";

const Service: FC = () => {
  return (
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
};

const ExtraServices = () => {
  return (
    <div className={styles.extraServices}>
      <h4>Our extra services</h4>

      <div className={styles.services}>
        <Service />
      </div>
    </div>
  );
};

export default ExtraServices;
