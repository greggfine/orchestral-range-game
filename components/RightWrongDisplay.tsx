import styles from "./rightWrongDisplay.module.scss";
import rightAnswer from "../src/assets/images/right-answer.svg";
import wrongAnswer from "../src/assets/images/wrong-answer.svg";

type rightWrongDisplayProps = {
  isCorrectAnswer: boolean;
};

const RightWrongDisplay = ({ isCorrectAnswer }: rightWrongDisplayProps) => {
  return (
    <div className={styles.rightWrongDisplay}>
      <img
        src={rightAnswer}
        style={isCorrectAnswer ? { display: "block" } : { display: "none" }}
        className={styles.rightWrongDisplay__img}
      />
      <img
        src={wrongAnswer}
        style={isCorrectAnswer ? { display: "none" } : { display: "block" }}
        className={styles.rightWrongDisplay__img}
      />
    </div>
  );
};

export default RightWrongDisplay;
