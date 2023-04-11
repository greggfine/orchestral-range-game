import styles from "./rangeDisplay.module.scss";
import { Instrument } from "../types/types";
const IMAGE_BASE_PATH = "/src/assets/images/ranges/";

type Props = {
  correctAnswerInstrument: Instrument;
};

const RangeDisplay = ({ correctAnswerInstrument }: Props) => {
  return (
    <div className={styles.rangeDisplay}>
      <img
        src={IMAGE_BASE_PATH + correctAnswerInstrument.image}
        alt=""
        className={styles.rangeDisplay__rangeDisplayImage}
        style={{ width: "25%" }}
      />
      <p>{correctAnswerInstrument.range}</p>
    </div>
  );
};

export default RangeDisplay;
