//@ts-nocheck
import styles from "./roundAndScoreDisplay.module.scss";
import scoreIcon from "../src/assets/images/score.svg";

type ScoreProps = {
  score: number;
};

const ScoreDisplay = ({ score }: ScoreProps) => {
  console.log(score);

  return (
    <div className={styles.scoreDisplay}>
      <img src={scoreIcon} alt="score" className={styles.scoreDisplay__icon} />
      <span className={styles.scoreDisplay__text}>{score}</span>
    </div>
  );
};

export default ScoreDisplay;
