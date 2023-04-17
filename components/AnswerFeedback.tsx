import styles from "./answer-feedback.module.scss";
import rightAnswer from "/images/right-answer.svg";
import wrongAnswer from "/images/wrong-answer.svg";

type Props = {
  isCorrectAnswer: boolean;
};

const AnswerFeedback = ({ isCorrectAnswer }: Props) => {
  return (
    <div className={styles.answerFeedback}>
      <img
        src={rightAnswer}
        alt="right answer"
        style={isCorrectAnswer ? { display: "block" } : { display: "none" }}
        className={styles.answerFeedback__img}
      />
      <img
        src={wrongAnswer}
        alt="wrong answer"
        style={isCorrectAnswer ? { display: "none" } : { display: "block" }}
        className={styles.answerFeedback__img}
      />
    </div>
  );
};

export default AnswerFeedback;
