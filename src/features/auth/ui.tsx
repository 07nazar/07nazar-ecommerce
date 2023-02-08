export const Auth = () => {
  return (
    <div className={styles.userAuth}>
      <div className={styles.user}>
        <img src={avatar} alt="" />
        <p>Hi, user let’s get stated</p>
      </div>
      <button>Join now</button>
      <button>Log in</button>
    </div>
  )
}
