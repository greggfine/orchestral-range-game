declare var span: any;
import styles from "./hinttoggle.module.scss";

export type Props = {
  toggleHints: () => void;
};

const HintToggle = ({ toggleHints }: Props) => {
  return (
    <div>
      <label htmlFor="hints" className={styles.switch}>
        <span className={styles.label}>Enable Hints</span>
        <input type="checkbox" name="hints" id="hints" onChange={toggleHints} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default HintToggle;
