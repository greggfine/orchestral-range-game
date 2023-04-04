import styles from "./rangeDisplay.module.scss";
import { instrumentRange } from "../types/types";

type Props = {
  chosenInstrument: instrumentRange;
};

const RangeDisplay = ({ chosenInstrument }: Props) => {
  return (
    <p>
      {chosenInstrument.name} {chosenInstrument.range}
    </p>
  );
};

export default RangeDisplay;
