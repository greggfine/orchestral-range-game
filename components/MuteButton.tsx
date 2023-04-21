import styles from "./mute-button.module.scss";
import speaker from "/images/speaker.svg";
import mute from "/images/mute.svg";
type Props = {
  handleIsMuted: any;
  isMuted: boolean;
};
const MuteButton = ({ handleIsMuted, isMuted }: Props) => {
  return (
    <div>
      <img
        src={isMuted ? mute : speaker}
        alt="speaker"
        onClick={handleIsMuted}
        className={styles.muteBtn}
      />
    </div>
  );
};

export default MuteButton;
