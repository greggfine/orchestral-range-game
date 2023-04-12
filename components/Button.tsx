import styles from "./button.module.scss";
import { Instrument } from "../types/types";

const Button = ({ name, range, id, handleClick, btnsDisabled }: Instrument) => {
  return (
    <button
      className={styles.button}
      onClick={() => handleClick && handleClick(name)}
      disabled={btnsDisabled}
    >
      {name}
    </button>
  );
};

export default Button;
