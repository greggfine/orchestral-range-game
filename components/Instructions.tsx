import styles from "./instructions.module.scss";
import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
};

const variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: {
    opacity: 0,
    scale: 0.5,
    easing: "easeOut",
    transition: {
      duration: 1,
    },
  },
};

const Instructions = ({ onClose }: Props) => {
  return (
    <div className={styles.instructions}>
      <motion.div
        className={styles.instructions__modal}
        animate="animate"
        initial="initial"
        exit="exit"
        variants={variants}
      >
        <h2 className={styles.instructions__title}>Instructions</h2>
        <p className={styles.instructions__content}>
          Welcome to the Orchestral Range Game! In this game, you'll be shown an
          image of staff notation with the range of a particular orchestral
          instrument. Your goal is to pick the instrument that corresponds to
          the note range we're showing in the staff. You'll be given 4 answer
          options with different orchestral instrument names to choose from.
          Choose the correct one to earn a point! If you need some help, you can
          enable hints by clicking the "Hints" button at the beginning of the
          game. The hint will show the instrument family and a short description
          of the instrument. Good luck and have fun!
        </p>
        <button className={styles.instructions__closeButton} onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Instructions;
