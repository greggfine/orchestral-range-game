import { Instrument } from "../types/types";
import styles from "./answer-options.module.scss";
import Button from "./Button";

const MAX_INSTRUMENTS = 4;

type Props = {
  instruments: Instrument[];
  handleClick: (name: string) => void;
  btnsDisabled?: boolean;
};

const AnswerOptions = ({ instruments, handleClick, btnsDisabled }: Props) => {
  return (
    <div className={styles.answerOptions}>
      {instruments.map((instrument, idx) => {
        if (idx < MAX_INSTRUMENTS) {
          return (
            <Button
              {...instrument}
              key={instrument.id}
              handleClick={handleClick}
              btnsDisabled={btnsDisabled}
            />
          );
        }
      })}
    </div>
  );
};

export default AnswerOptions;
