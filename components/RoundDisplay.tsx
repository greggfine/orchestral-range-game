import styles from "./roundAndScoreDisplay.module.scss";
type RoundDisplayProps = {
  round: number;
  maxRounds: number;
};
const RoundDisplay = ({ round, maxRounds }: RoundDisplayProps) => {
  return (
    <p className={styles.roundDisplay}>
      Round: {round}/{maxRounds}
    </p>
  );
};

export default RoundDisplay;
