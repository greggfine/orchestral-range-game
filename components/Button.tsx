import styles from "./button.module.scss";
import { instrumentRange } from "../types/types";

const Button = ({ name, range, id, handleClick }: instrumentRange) => {
  return (
    <button className={styles.button} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};

export default Button;
