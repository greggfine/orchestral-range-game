import styles from "./game-start.module.scss";
import btnStyles from "./button.module.scss";
import scoreIcon from "@src/assets/images/score-black.svg";
import conductor from "@src/assets/images/conductor.svg";
import { motion } from "framer-motion";
const startGame = new Audio("src/assets/audio/startGame.mp3");
type Props = {
  setGameStarted: (gameStarted: boolean) => void;
};
const GameStart = ({ setGameStarted }: Props) => {
  return (
    <div className={styles.gameStart}>
      <motion.img
        src={conductor}
        alt="orchestra conductor"
        className={styles.gameStart__icon}
        animate={{ rotateY: "190deg" }}
        transition={{ type: "spring", stiffness: 320 }}
      />
      <h1 className={styles.gameStart__heading}>Orchestral Range Game</h1>
      <button
        className={btnStyles.button}
        onClick={() => {
          startGame.volume = 0.5;
          startGame.play();
          setGameStarted(true);
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default GameStart;
