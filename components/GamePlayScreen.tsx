import styles from "../src/app.module.scss";
import { motion } from "framer-motion";
import AnswerOptions from "./AnswerOptions";
import HintDisplay from "./Hint";
import Range from "./Range";
import Round from "./Round";
import Score from "./Score";
import AnswerFeedback from "./AnswerFeedback";
import { Instrument } from "types/types";
type Props = {
  correctAnswerInstrument: Instrument;
  btnsDisabled: boolean;
  families: string[];
  instruments: Instrument[];
  handleClick: (buttonChoiceName: string) => void;
  gameState: { score: number; round: number };
  hintsVisible: boolean;
  rightWrongDisplayIsVisible: boolean;
  isCorrectAnswer: boolean;
  maxRounds: number;
};
const GamePlayScreen = ({
  correctAnswerInstrument,
  btnsDisabled,
  instruments,
  handleClick,
  gameState,
  hintsVisible,
  rightWrongDisplayIsVisible,
  isCorrectAnswer,
  maxRounds,
}: Props) => {
  return (
    <motion.div
      className={styles.app}
      key="gameplay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.app__scoreAndRound}>
        <div className={styles.app__scoreAndRound__textWrapper}>
          <Score score={gameState.score} />
          {rightWrongDisplayIsVisible && (
            <AnswerFeedback isCorrectAnswer={isCorrectAnswer} />
          )}
          <Round round={gameState.round} maxRounds={maxRounds} />
        </div>
      </div>
      <div className={styles.app__flexContainer}>
        <Range correctAnswerInstrument={correctAnswerInstrument} />
        <div className={styles.app__divider}></div>
        <AnswerOptions
          instruments={instruments}
          handleClick={handleClick}
          btnsDisabled={btnsDisabled}
        />
      </div>
      <HintDisplay
        correctAnswerInstrument={correctAnswerInstrument}
        hintsVisible={hintsVisible}
      />
      <div className={styles.app__hintsWrapper}></div>
    </motion.div>
  );
};
export default GamePlayScreen;
