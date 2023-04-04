import styles from "./roundDisplay.module.scss";
const RoundDisplay = ({ round, maxRounds }) => {
  return (
    <p>
      RoundDisplay: {round} of {maxRounds}
    </p>
  );
};

export default RoundDisplay;
