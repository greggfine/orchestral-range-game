import styles from "./hint.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";

type Props = {
  hintsVisible: boolean;
  correctAnswerInstrument: Instrument;
};
const Hint = ({ correctAnswerInstrument, hintsVisible }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.68 }}
      animate={
        hintsVisible
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, display: "none" }
      }
      transition={{ duration: 0.3, delay: 0 }}
      className={styles.hint}
    >
      <p className={styles.hint__instrumentFamily}>
        <span className={styles.hint__instrumentFamily__label}>
          Instrument Family:
        </span>{" "}
        <span className={styles.hint__instrumentFamily__category}>
          {correctAnswerInstrument.instrumentFamily}
        </span>
      </p>
      <p className={styles.hint__shortDescription}>
        {correctAnswerInstrument.shortDescription}
      </p>
    </motion.div>
  );
};

export default Hint;
