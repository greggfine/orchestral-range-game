declare var span: any;
import styles from "./hint-toggle.module.scss";

export type Props = {
  toggleHints: () => void;
};

const HintToggle = ({ toggleHints }: Props) => {
  return (
    <div className={styles.hintToggle}>
      <span className={styles.hintToggle__label}>Enable Hints</span>
      <label htmlFor="hints" className={styles.hintToggle__switch}>
        <input type="checkbox" name="hints" id="hints" onChange={toggleHints} />
        <span
          className={`${styles.hintToggle__slider} ${styles.hintToggle__round}`}
        ></span>
      </label>
    </div>
  );
};

export default HintToggle;
