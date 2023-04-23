import styles from "./instructions.module.scss";
import { motion } from "framer-motion";

type Props = {
  btnText: string;
  content: string;
  onClose: () => void;
  title: string;
};

const variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: {
    opacity: 0,
    scale: 0.5,
    easing: "easeOut",
    transition: {
      duration: 0.5,
    },
  },
};

export default ({ btnText, content, onClose, title }: Props) => (
  <div className={styles.instructions}>
    <motion.div
      className={styles.instructions__modal}
      animate="animate"
      initial="initial"
      exit="exit"
      variants={variants}
    >
      <h2 className={styles.instructions__title}>{title}</h2>
      <p className={styles.instructions__content}>{content}</p>
      <button className={styles.instructions__closeButton} onClick={onClose}>
        {btnText}
      </button>
    </motion.div>
  </div>
);
