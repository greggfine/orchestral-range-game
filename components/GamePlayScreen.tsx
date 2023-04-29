import styles from "../src/app.module.scss";
import { motion } from "framer-motion";
import AnswerOptions from "./AnswerOptions";
import Hint from "./Hint";
import Range from "./Range";
import Round from "./Round";
import Score from "./Score";
import AnswerFeedback from "./AnswerFeedback";
import { Instrument } from "types/types";
import { sortAlphabetically } from "../src/utils";
type Props = {
  correctAnswerInstrument: Instrument;
  btnsDisabled: boolean;
  families: string[];
  instruments: Instrument[];
  handleClick: (buttonChoiceName?: string) => void;
  gameState: { score: number; round: number };
  hintsVisible: boolean;
  rightWrongDisplayIsVisible: boolean;
  isCorrectAnswer: boolean;
  maxRounds: number;
};
export default ({
  correctAnswerInstrument,
  btnsDisabled,
  families,
  instruments,
  handleClick,
  gameState,
  hintsVisible,
  rightWrongDisplayIsVisible,
  isCorrectAnswer,
  maxRounds,
}: Props) => {
  const sortedFamilies = sortAlphabetically(Array.from(families));
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
      <div className={styles.app__families}>
        <div className={styles.app__families__heading}>Families: </div>
        {sortedFamilies.length ? (
          <div className={styles.app__families__list}>
            {sortedFamilies.map((family) => {
              return (
                <div className={styles.app__families__family} key={family}>
                  {family}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.app__families__list}>
            <div className={styles.app__families__family}>All</div>
          </div>
        )}
      </div>
      <div>
        <Range correctAnswerInstrument={correctAnswerInstrument} />
        <AnswerOptions
          instruments={instruments}
          handleClick={handleClick}
          btnsDisabled={btnsDisabled}
        />
      </div>
      <Hint
        correctAnswerInstrument={correctAnswerInstrument}
        hintsVisible={hintsVisible}
      />
    </motion.div>
  );
};
