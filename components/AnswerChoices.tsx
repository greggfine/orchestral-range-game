import { answerChoicesProps } from "../types/types";
import styles from "./answerchoices.module.scss";
import Button from "../components/Button";

const MAX_INSTRUMENTS = 4;

const AnswerChoices = ({ instruments, handleClick }: answerChoicesProps) => {
  return (
    <div className={styles.answerChoices}>
      {instruments.map((instrument, idx) => {
        if (idx < MAX_INSTRUMENTS) {
          return (
            <Button
              {...instrument}
              key={instrument.id}
              handleClick={handleClick}
            />
          );
        }
      })}
    </div>
  );
};

export default AnswerChoices;
