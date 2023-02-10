import avatar from "./assets/Avatar.png";
import styles from "./styles.module.scss";

export const Auth = () => (
  <div className={styles.userAuth}>
    <div className={styles.user}>
      <img src={avatar} alt="avatar" />
      <p>Hi, user let’s get stated</p>
    </div>
    <button>Join now</button>
    <button>Log in</button>
  </div>
);
