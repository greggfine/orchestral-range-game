import styles from "./roundAndScoreDisplay.module.scss";
import roundsIcon from "../src/assets/images/rounds.svg";
type RoundDisplayProps = {
  round: number;
  maxRounds: number;
};
const RoundDisplay = ({ round, maxRounds }: RoundDisplayProps) => {
  return (
    <div className={styles.roundDisplay}>
      <img
        src={roundsIcon}
        alt="rounds"
        className={styles.roundDisplay__icon}
      />
      <span className={styles.roundDisplay__text}>
        {round}/{maxRounds}
      </span>
    </div>
  );
};

export default RoundDisplay;
