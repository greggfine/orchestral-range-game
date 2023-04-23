import styles from "./round-score.module.scss";
import roundsIcon from "/images/rounds.svg";
type Props = {
  round: number;
  maxRounds: number;
};
export default ({ round, maxRounds }: Props) => (
  <div className={styles.round}>
    <img src={roundsIcon} alt="rounds" className={styles.round__icon} />
    <span className={styles.round__text}>
      {round}/{maxRounds}
    </span>
  </div>
);
