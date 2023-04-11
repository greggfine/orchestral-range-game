import styles from "./roundAndScoreDisplay.module.scss";

type ScoreProps = {
  score: number;
};

const ScoreDisplay = ({ score }: ScoreProps) => {
  return <p className={styles.scoreDisplay}>Score: {score}</p>;
};

export default ScoreDisplay;
