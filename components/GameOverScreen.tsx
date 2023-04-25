import styles from "../src/app.module.scss";
import appStyles from "../src/app.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import GameOver from "./GameOver";
import HintToggle from "./HintToggle";
import Instructions from "./Instructions";
import MuteButton from "./MuteButton";
import FamilySelect from "./FamilySelect";
import { Instrument } from "types/types";
import book from "/images/material-symbols_menu-book-outline-sharp.svg";
type Props = {
  gameState: { score: number; round: number };
  handleCloseInstructions: () => void;
  handleInstructionsClick: () => void;
  handleIsMuted: () => void;
  init: () => void;
  isMuted: boolean;
  toggleHints: () => void;
  checkedCategories: boolean[];
  handleFamilySelect: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  initialInstruments: Instrument[];
  showInstructions: boolean;
};
export default ({
  checkedCategories,
  gameState,
  handleCloseInstructions,
  handleFamilySelect,
  handleInstructionsClick,
  handleIsMuted,
  init,
  initialInstruments,
  isMuted,
  showInstructions,
  toggleHints,
}: Props) => (
  <motion.div
    className={styles.app}
    key="gameover"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className={styles.app__scoreAndRound}></div>
    <GameOver gameState={gameState} init={init} />
    <FamilySelect
      initialInstruments={initialInstruments}
      handleFamilySelect={handleFamilySelect}
      checkedCategories={checkedCategories}
    />

    <div className={appStyles.app__instructionsWrapper}>
      <HintToggle toggleHints={toggleHints} />
      <div className={styles.app__instructionsWrapper__icons}>
        <button
          onClick={handleInstructionsClick}
          className={styles.app__instructionsBtn}
        >
          <img
            src={book}
            alt="instructions"
            className={styles.app__instructionsBook}
          />
        </button>
        <MuteButton handleIsMuted={handleIsMuted} isMuted={isMuted} />
      </div>
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
    </div>
    <div className={styles.app__hintsWrapper}></div>
  </motion.div>
);
