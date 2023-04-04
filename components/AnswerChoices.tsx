import { answerChoicesProps } from "../types/types";
import styles from "./answerchoices.module.scss";
import Button from "../components/Button";

const AnswerChoices = ({ instruments, handleClick }: answerChoicesProps) => {
  return (
    <ul
      className={styles.answerChoices}
      style={{ listStyleType: "none", display: "flex", gap: "10px" }}
    >
      {instruments.map((instrument, idx) => {
        if (idx < 4) {
          return (
            <Button
              {...instrument}
              key={instrument.id}
              handleClick={handleClick}
            />
          );
        }
      })}
    </ul>
  );
};

export default AnswerChoices;
