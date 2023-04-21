//@ts-nocheck
import styles from "../src/app.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import GameStart from "./GameStart";
import HintToggle from "./HintToggle";
import FamilySelect from "./FamilySelect";
import Instructions from "./Instructions";
import MuteButton from "./MuteButton";
const GameStartScreen = ({
  generateAnswerAndRandomizedInstruments,
  handleInstructionsClick,
  instruments,
  showInstructions,
  handleCloseInstructions,
  handleFamilySelect,
  handleIsMuted,
  initialInstruments,
  isMuted,
  setGameStarted,
  toggleHints,
  checkedCategories,
}) => {
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
        {showInstructions && <Instructions onClose={handleCloseInstructions} />}
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
export default GameStartScreen;
