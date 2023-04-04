import styles from "./rangeDisplay.module.scss";
import { Instrument } from "../types/types";
const IMAGE_BASE_PATH = "/src/assets/images/ranges/";

type Props = {
  correctAnswerInstrument: Instrument;
};

const RangeDisplay = ({ correctAnswerInstrument }: Props) => {
  return (
    <>
      <img src={IMAGE_BASE_PATH + correctAnswerInstrument.image} alt="" />
      <p>{correctAnswerInstrument.range}</p>
    </>
  );
};

export default RangeDisplay;
