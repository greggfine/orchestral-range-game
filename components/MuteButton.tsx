import styles from "./button.module.scss";
type Props = {
  handleIsMuted: any;
};
const MuteButton = ({ handleIsMuted }: Props) => {
  return (
    <button onClick={handleIsMuted} className={styles.button}>
      Mute Audio
    </button>
  );
};

export default MuteButton;
