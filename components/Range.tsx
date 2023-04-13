import styles from "./range.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";
const IMAGE_BASE_PATH = "/src/assets/images/ranges/";

type Props = {
  correctAnswerInstrument: Instrument;
};

const RangeDisplay = ({ correctAnswerInstrument }: Props) => {
  return (
    <div className={styles.rangeDisplay}>
      <motion.img
        src={IMAGE_BASE_PATH + correctAnswerInstrument.image}
        alt=""
        className={styles.rangeDisplay__image}
        style={{ width: "25%" }}
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={styles.rangeDisplay__text}
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {correctAnswerInstrument.range}
      </motion.div>
    </div>
  );
};

export default RangeDisplay;
