import styles from "./mute-button.module.scss";
import speakerIcon from "/images/speaker.svg";
import muteIcon from "/images/mute.svg";
import React from "react";
type Props = {
  handleIsMuted: () => void;
  isMuted: boolean;
};
const MuteButton = React.memo(({ handleIsMuted, isMuted }: Props) => {
  return (
    <img
      src={isMuted ? muteIcon : speakerIcon}
      alt="speaker"
      onClick={handleIsMuted}
      className={styles.muteBtn}
      title="mute/unmute the audio"
    />
  );
});

export default MuteButton;
