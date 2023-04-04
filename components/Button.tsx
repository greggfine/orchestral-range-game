import styles from "./button.module.scss";
import { Instrument } from "../types/types";

const Button = ({ name, range, id, handleClick }: Instrument) => {
  return (
    <button
      className={styles.button}
      onClick={() => handleClick && handleClick(name)}
    >
      {name}
    </button>
  );
};

export default Button;
