import { answerChoicesProps } from "../types/types";
import styles from "./answer-options.module.scss";
import Button from "./Button";

const MAX_INSTRUMENTS = 4;

const AnswerOptions = ({
  instruments,
  handleClick,
  btnsDisabled,
}: answerChoicesProps) => {
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
