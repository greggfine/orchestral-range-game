import styles from "./mute-button.module.scss";
import speaker from "/images/speaker.svg";
import mute from "/images/mute.svg";
import React from "react";
type Props = {
  handleIsMuted: () => void;
  isMuted: boolean;
};
export default React.memo(({ handleIsMuted, isMuted }: Props) => {
  return (
    <img
      src={isMuted ? mute : speaker}
      alt="speaker"
      onClick={handleIsMuted}
      className={styles.muteBtn}
      title="mute/unmute the audio"
    />
  );
});
