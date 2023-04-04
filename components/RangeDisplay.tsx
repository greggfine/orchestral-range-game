import styles from "./rangeDisplay.module.scss";
import { Instrument } from "../types/types";

type Props = {
  correctAnswerInstrument: Instrument;
};

const RangeDisplay = ({ correctAnswerInstrument }: Props) => {
  return (
    <p>
      {correctAnswerInstrument.name} {correctAnswerInstrument.range}
    </p>
  );
};

export default RangeDisplay;
