import styles from "./startgame.module.scss";
import btnStyles from "./button.module.scss";
import scoreIcon from "../src/assets/images/score-black.svg";
import conductor from "../src/assets/images/conductor.svg";
import { motion } from "framer-motion";
type Props = {
  setGameStarted: (gameStarted: boolean) => void;
};
// const StartGame = ({ gameState, init }: Props) => {
const StartGame = ({ setGameStarted }: Props) => {
  return (
    <div className={styles.startGame}>
      <motion.img
        src={conductor}
        alt="orchestra conductor"
        className={styles.startGame__icon}
        animate={{ rotateY: "190deg" }}
        // transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        transition={{ type: "spring", stiffness: 320 }}
      />
      <h1 className={styles.startGame__heading}>Orchestral Range Game</h1>
      <button className={btnStyles.button} onClick={() => setGameStarted(true)}>
        Start Game
      </button>
    </div>
  );
};

export default StartGame;
