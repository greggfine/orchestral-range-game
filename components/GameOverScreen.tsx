import styles from "../src/app.module.scss";
import { motion } from "framer-motion";
import GameOver from "./GameOver";
import HintToggle from "./HintToggle";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
  toggleHints: () => void;
};
const GameOverScreen = ({ gameState, init, toggleHints }: Props) => {
  return (
    <motion.div
      className={styles.app}
      key="gameover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.app__scoreAndRound}></div>
      <GameOver gameState={gameState} init={init} />
      <HintToggle toggleHints={toggleHints} />
      <div className={styles.app__hintsWrapper}></div>
    </motion.div>
  );
};
export default GameOverScreen;
