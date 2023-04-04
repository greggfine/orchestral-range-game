import styles from "./rightWrongDisplay.module.scss";
import rightAnswer from "../src/assets/images/right-answer.png";
import wrongAnswer from "../src/assets/images/wrong-answer.png";

type rightWrongDisplayProps = {
  isCorrectAnswer: boolean;
};

const RightWrongDisplay = ({ isCorrectAnswer }: rightWrongDisplayProps) => {
  return (
    <>
      <img
        src={rightAnswer}
        style={isCorrectAnswer ? { display: "block" } : { display: "none" }}
        // className={styles.answerDisplay}
      />
      <img
        src={wrongAnswer}
        style={isCorrectAnswer ? { display: "none" } : { display: "block" }}
        // className={styles.answerDisplay}
      />
    </>
  );
};

export default RightWrongDisplay;
