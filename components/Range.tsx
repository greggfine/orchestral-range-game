import styles from "./range.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";
const IMAGE_BASE_PATH = "/images/ranges/";

type Props = {
  correctAnswerInstrument: Instrument;
};

const Range = ({ correctAnswerInstrument }: Props) => {
  // console.log(correctAnswerInstrument);

  return (
    <div className={styles.range}>
      <motion.img
        src={IMAGE_BASE_PATH + correctAnswerInstrument.image}
        alt="correct answer instrument's range"
        className={styles.range__image}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className={styles.range__text}
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        key={correctAnswerInstrument.id}
      >
        {correctAnswerInstrument.range}
      </motion.div>
    </div>
  );
};

export default Range;
