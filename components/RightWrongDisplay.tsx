import styles from "./rightWrongDisplay.module.scss";
import rightAnswer from "../src/assets/images/right-answer.png";
import wrongAnswer from "../src/assets/images/wrong-answer.png";

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
