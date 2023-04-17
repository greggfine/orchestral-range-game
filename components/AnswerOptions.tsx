import { Instrument } from "../types/types";
import styles from "./answer-options.module.scss";
import Button from "./Button";
import { motion } from "framer-motion";

const MAX_INSTRUMENTS = 4;

type Props = {
  instruments: Instrument[];
  handleClick: (name: string) => void;
  btnsDisabled?: boolean;
};

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0.8,
  },
};

const AnswerOptions = ({ instruments, handleClick, btnsDisabled }: Props) => {
  return (
    <motion.div
      className={styles.answerOptions}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={instruments[0].id}
    >
      {instruments.map((instrument, idx) => {
        if (idx < MAX_INSTRUMENTS) {
          return (
            <Button
              {...instrument}
              handleClick={handleClick}
              btnsDisabled={btnsDisabled}
              key={instrument.id}
            />
          );
        }
      })}
    </motion.div>
  );
};

export default AnswerOptions;
