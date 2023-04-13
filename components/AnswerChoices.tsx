import { answerChoicesProps } from "../types/types";
import styles from "./answer-choices.module.scss";
import Button from "../components/Button";

const MAX_INSTRUMENTS = 4;

const AnswerChoices = ({
  instruments,
  handleClick,
  btnsDisabled,
}: answerChoicesProps) => {
  return (
    <div className={styles.answerChoices}>
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

export default AnswerChoices;
