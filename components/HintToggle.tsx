declare var span: any;
import styles from "./hinttoggle.module.scss";

export type Props = {
  toggleHints: () => void;
};

const HintToggle = ({ toggleHints }: Props) => {
  return (
    <div className={styles.hintsToggle}>
      <span className={styles.label}>Enable Hints</span>
      <label htmlFor="hints" className={styles.switch}>
        <input type="checkbox" name="hints" id="hints" onChange={toggleHints} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default HintToggle;
