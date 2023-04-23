import styles from "./button.module.scss";
import { Instrument } from "../types/types";
import { motion } from "framer-motion";

const itemVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export default ({ name, handleClick, btnsDisabled }: Instrument) => (
  <motion.button
    className={styles.button}
    onClick={() => handleClick && handleClick(name)}
    disabled={btnsDisabled}
    variants={itemVariants}
  >
    {name}
  </motion.button>
);
