import styles from "./piano.module.scss";

const Piano = () => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyWhite} />
      <div className={styles.keyWhite}>
        <div className={styles.keyBlack}></div>
      </div>
      <div className={styles.keyWhite}>
        <div className={styles.keyBlack}></div>
      </div>
      <div className={styles.keyWhite}></div>
      <div className={styles.keyWhite}>
        <div className={styles.keyBlack}></div>
      </div>
      <div className={styles.keyWhite}>
        <div className={styles.keyBlack}></div>
      </div>
      <div className={styles.keyWhite}>
        <div className={styles.keyBlack}></div>
      </div>
    </div>
  );
};

export default Piano;
