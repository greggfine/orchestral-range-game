import styles from "./rangeDisplay.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";
const IMAGE_BASE_PATH = "/src/assets/images/ranges/";

type Props = {
  correctAnswerInstrument: Instrument;
};

const RangeDisplay = ({ correctAnswerInstrument }: Props) => {
  return (
    <div className={styles.rangeDisplay}>
      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.7, delay: 0.3 }}
        src="src/assets/images/ellipse.svg"
        alt="ellipse"
        className={styles.rangeDisplay__ellipse}
      /> */}
      <img
        src={IMAGE_BASE_PATH + correctAnswerInstrument.image}
        alt=""
        className={styles.rangeDisplay__image}
        style={{ width: "25%" }}
      />
      <div className={styles.rangeDisplay__text}>
        {correctAnswerInstrument.range}
      </div>
    </div>
  );
};

export default RangeDisplay;
