import styles from "./gameover.module.scss";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
};
const GameOver = ({ gameState, init }: Props) => {
  return (
    <div className={styles.gameOver}>
      <h1 className={styles.gameOver__heading}>GAME OVER</h1>
      <h2 className={styles.gameOver__score}>Your Score: {gameState.score}</h2>
      <button onClick={init} className={styles.gameOver__btn}>
        Play Again?
      </button>
    </div>
  );
};

export default GameOver;
