import styles from "./hint-toggle.module.scss";

export default ({ toggleHints }: { toggleHints: () => void }) => (
  <div className={styles.hintToggle}>
    <div
      className={styles.hintToggle__label}
      title="Click to enable/disable hints"
    >
      Enable Hints
    </div>
    <label htmlFor="hints" className={styles.hintToggle__switch}>
      <input
        defaultChecked={false}
        type="checkbox"
        name="hints"
        id="hints"
        onChange={toggleHints}
      />
      <span
        className={`${styles.hintToggle__slider} ${styles.hintToggle__round}`}
      ></span>
    </label>
  </div>
);
