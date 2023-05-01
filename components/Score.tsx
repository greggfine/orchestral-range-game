import styles from "./round-score.module.scss";
import scoreIcon from "/images/score.svg";

const Score = ({ score }: { score: number }) => (
  <div className={styles.score}>
    <img src={scoreIcon} alt="score" className={styles.score__icon} />
    <span className={styles.score__text}>{score}</span>
  </div>
);

export default Score;
