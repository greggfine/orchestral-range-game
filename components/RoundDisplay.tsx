import styles from "./roundDisplay.module.scss";
type RoundDisplayProps = {
  round: number;
  maxRounds: number;
};
const RoundDisplay = ({ round, maxRounds }: RoundDisplayProps) => {
  return (
    <p>
      RoundDisplay: {round} of {maxRounds}
    </p>
  );
};

export default RoundDisplay;
