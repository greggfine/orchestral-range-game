import styles from "./gameover.module.scss";
import btnStyles from "./button.module.scss";
import scoreIcon from "../src/assets/images/score-black.svg";
import { motion } from "framer-motion";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
};
const GameOver = ({ gameState, init }: Props) => {
  return (
    <div className={styles.gameOver}>
      <motion.h1
        className={styles.gameOver__heading}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
      >
        GAME OVER
      </motion.h1>
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
