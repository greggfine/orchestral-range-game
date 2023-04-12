import styles from "./hintdisplay.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";

type Props = {
  hintsVisible: boolean;
  correctAnswerInstrument: Instrument;
};
const Hints = ({ correctAnswerInstrument, hintsVisible }: Props) => {
  return (
    <motion.div
      animate={hintsVisible ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
      className={styles.hintDisplay}
    >
      <p className={styles.hintDisplay__instrumentFamily}>
        <span className={styles.hintDisplay__instrumentFamily__label}>
          Instrument Family:
        </span>{" "}
        {correctAnswerInstrument.instrumentFamily}
      </p>
      <p className={styles.hintDisplay__shortDescription}>
        {correctAnswerInstrument.shortDescription}
      </p>
    </motion.div>
  );
};

export default Hints;
