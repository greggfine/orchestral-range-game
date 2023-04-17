import styles from "./button.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";

const itemVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const Button = ({ name, handleClick, btnsDisabled }: Instrument) => {
  return (
    <motion.button
      className={styles.button}
      onClick={() => handleClick && handleClick(name)}
      disabled={btnsDisabled}
      variants={itemVariants}
    >
      {name}
    </motion.button>
  );
};

export default Button;
