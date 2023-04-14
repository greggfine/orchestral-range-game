//@ts-nocheck
import styles from "./round-score.module.scss";
import scoreIcon from "/images/score.svg";

type ScoreProps = {
  score: number;
};

const ScoreDisplay = ({ score }: ScoreProps) => {
  return (
    <div className={styles.score}>
      <img src={scoreIcon} alt="score" className={styles.score__icon} />
      <span className={styles.score__text}>{score}</span>
    </div>
  );
};

export default ScoreDisplay;
