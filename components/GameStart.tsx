import styles from "./game-start.module.scss";
import conductor from "/images/conductor.svg";
import { motion } from "framer-motion";
import { Instrument } from "types/types";
import Button from "shared/components/Button";
const startGame = new Audio("audio/startGame.mp3");
type Props = {
  setGameStarted: (gameStarted: boolean) => void;
  instruments: Instrument[];
  isMuted: boolean;
  generateAnswerAndRandomizedInstruments: (instruments: Instrument[]) => void;
};
export default ({
  instruments,
  isMuted,
  setGameStarted,
  generateAnswerAndRandomizedInstruments,
}: Props) => {
  const handleClick = () => {
    startGame.muted = isMuted;
    startGame.volume = 0.5;
    startGame.play();
    setGameStarted(true);
    generateAnswerAndRandomizedInstruments(instruments);
  };
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
      <Button name="Start Game" handleClick={handleClick} />
    </div>
  );
};
