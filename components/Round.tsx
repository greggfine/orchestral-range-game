import styles from "./round-score.module.scss";
import roundsIcon from "@src/assets/images/rounds.svg";
type RoundDisplayProps = {
  round: number;
  maxRounds: number;
};
const RoundDisplay = ({ round, maxRounds }: RoundDisplayProps) => {
  return (
    <div className={styles.round}>
      <img src={roundsIcon} alt="rounds" className={styles.round__icon} />
      <span className={styles.round__text}>
        {round}/{maxRounds}
      </span>
    </div>
  );
};

export default RoundDisplay;
