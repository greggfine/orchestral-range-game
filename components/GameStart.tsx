import styles from "./game-start.module.scss";
import btnStyles from "./button.module.scss";
import conductor from "/images/conductor.svg";
import { motion } from "framer-motion";
const startGame = new Audio("audio/startGame.mp3");
import { Instrument } from "types/types";
type Props = {
  setGameStarted: (gameStarted: boolean) => void;
  instruments: Instrument[];
  generateAnswerAndRandomizedInstruments: (instruments: Instrument[]) => void;
};
const GameStart = ({
  instruments,
  setGameStarted,
  generateAnswerAndRandomizedInstruments,
}: Props) => {
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
          generateAnswerAndRandomizedInstruments(instruments);
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default GameStart;
