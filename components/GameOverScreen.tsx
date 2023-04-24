import styles from "../src/app.module.scss";
import { motion } from "framer-motion";
import GameOver from "./GameOver";
import HintToggle from "./HintToggle";
import FamilySelect from "./FamilySelect";
import { Instrument } from "types/types";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
  toggleHints: () => void;
  checkedCategories: boolean[];
  handleFamilySelect: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  initialInstruments: Instrument[];
};
export default ({
  checkedCategories,
  gameState,
  handleFamilySelect,
  init,
  initialInstruments,
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
    <HintToggle toggleHints={toggleHints} />
    <FamilySelect
      initialInstruments={initialInstruments}
      handleFamilySelect={handleFamilySelect}
      checkedCategories={checkedCategories}
    />
    <div className={styles.app__hintsWrapper}></div>
  </motion.div>
);
