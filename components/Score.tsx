import styles from "./round-score.module.scss";
import scoreIcon from "/images/score.svg";

type Props = {
  score: number;
};

const ScoreDisplay = ({ score }: Props) => {
  return (
    <div className={styles.score}>
      <img src={scoreIcon} alt="score" className={styles.score__icon} />
      <span className={styles.score__text}>{score}</span>
    </div>
  );
};

export default ScoreDisplay;
