import styles from "./mute-button.module.scss";
import speaker from "/images/speaker.svg";
import mute from "/images/mute.svg";
type Props = {
  handleIsMuted: () => void;
  isMuted: boolean;
};
export default ({ handleIsMuted, isMuted }: Props) => (
  <img
    src={isMuted ? mute : speaker}
    alt="speaker"
    onClick={handleIsMuted}
    className={styles.muteBtn}
    title="mute/unmute the audio"
  />
);
