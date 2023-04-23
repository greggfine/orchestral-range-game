import styles from "./hint.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";

type Props = {
  hintsVisible: boolean;
  correctAnswerInstrument: Instrument;
};
export default ({ correctAnswerInstrument, hintsVisible }: Props) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.68 }}
    animate={
      hintsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, display: "none" }
    }
    transition={{ duration: 0.3, delay: 0 }}
    className={styles.hint}
  >
    <div className={styles.hint__headingWrapper}>
      <span className={styles.hint__headingWrapper__heading}>
        Instrument Family:
      </span>{" "}
      <span className={styles.hint__headingWrapper__subheading}>
        {correctAnswerInstrument.family}
      </span>
    </div>
    <div className={styles.hint__description}>
      {correctAnswerInstrument.shortDescription}
    </div>
  </motion.div>
);
