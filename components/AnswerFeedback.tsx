import styles from "./answer-feedback.module.scss";
import rightAnswer from "@src/assets/images/right-answer.svg";
import wrongAnswer from "@src/assets/images/wrong-answer.svg";

type answerFeedbackProps = {
  isCorrectAnswer: boolean;
};

const AnswerFeedback = ({ isCorrectAnswer }: answerFeedbackProps) => {
  return (
    <div className={styles.answerFeedback}>
      <img
        src={rightAnswer}
        style={isCorrectAnswer ? { display: "block" } : { display: "none" }}
        className={styles.answerFeedback__img}
      />
      <img
        src={wrongAnswer}
        style={isCorrectAnswer ? { display: "none" } : { display: "block" }}
        className={styles.answerFeedback__img}
      />
    </div>
  );
};

export default AnswerFeedback;
