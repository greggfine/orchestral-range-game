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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={
        hintsVisible
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, display: "none" }
      }
      transition={{ duration: 0.6, delay: 0.1 }}
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
