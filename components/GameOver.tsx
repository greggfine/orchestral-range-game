import styles from "./gameover.module.scss";
import btnStyles from "./button.module.scss";
import scoreIcon from "../src/assets/images/score-black.svg";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
};
const GameOver = ({ gameState, init }: Props) => {
  return (
    <div className={styles.gameOver}>
      <h1 className={styles.gameOver__heading}>GAME OVER</h1>
      <div className={styles.gameOver__scoreWrapper}>
        <img src={scoreIcon} alt="score" className={styles.gameOver__icon} />
        <div className={styles.gameOver__score}>{gameState.score}</div>
      </div>
      <button onClick={init} className={btnStyles.button}>
        Play Again?
      </button>
    </div>
  );
};

export default GameOver;
