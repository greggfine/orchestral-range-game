import styles from "../src/app.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import GameStart from "./GameStart";
import HintToggle from "./HintToggle";
import FamilySelect from "./FamilySelect";
import Instructions from "./Instructions";
import MuteButton from "./MuteButton";
import { Instrument } from "types/types";
type Props = {
  checkedCategories: boolean[];
  generateAnswerAndRandomizedInstruments: (instruments: Instrument[]) => void;
  handleCloseInstructions: () => void;
  handleFamilySelect: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleInstructionsClick: () => void;
  handleIsMuted: () => void;
  initialInstruments: Instrument[];
  instruments: Instrument[];
  isMuted: boolean;
  setGameStarted: (gameStarted: boolean) => void;
  showInstructions: boolean;
  toggleHints: () => void;
};
export default ({
  generateAnswerAndRandomizedInstruments,
  handleInstructionsClick,
  instruments,
  handleCloseInstructions,
  handleFamilySelect,
  handleIsMuted,
  initialInstruments,
  isMuted,
  setGameStarted,
  showInstructions,
  toggleHints,
  checkedCategories,
}: Props) => {
  return (
    <motion.div key="gamestarted" className={styles.app}>
      <div className={styles.app__scoreAndRound}></div>
      <GameStart
        setGameStarted={setGameStarted}
        generateAnswerAndRandomizedInstruments={
          generateAnswerAndRandomizedInstruments
        }
        instruments={instruments}
        isMuted={isMuted}
      />
      <button
        onClick={handleInstructionsClick}
        className={styles.app__instructionsBtn}
      >
        Instructions
      </button>
      <AnimatePresence key="modal">
        {showInstructions && (
          <Instructions
            btnText="Close"
            title="Instructions"
            content="Welcome to the Orchestral Range Game! In this game, you'll be shown an
          image of staff notation with the range of a particular orchestral
          instrument. Your goal is to pick the instrument that corresponds to
          the note range we're showing in the staff. You'll be given 4 answer
          options with different orchestral instrument names to choose from.
          Choose the correct one to earn a point! If you need some help, you can
          enable hints by clicking the 'Hints' button at the beginning of the
          game. The hint will show the instrument family and a short description
          of the instrument. Good luck and have fun!"
            onClose={handleCloseInstructions}
          />
        )}
      </AnimatePresence>
      <HintToggle toggleHints={toggleHints} />
      <MuteButton handleIsMuted={handleIsMuted} isMuted={isMuted} />
      <FamilySelect
        initialInstruments={initialInstruments}
        handleFamilySelect={handleFamilySelect}
        checkedCategories={checkedCategories}
      />
      <div className={styles.app__hintsWrapper}></div>
    </motion.div>
  );
};
