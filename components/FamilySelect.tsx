import styles from "./family-select.module.scss";
import { Instrument } from "types/types";
type familySelectProps = {
  initialInstruments: Instrument[];
  handleFamilySelect: () => void;
};
const FamilySelect = ({
  initialInstruments,
  handleFamilySelect,
}: familySelectProps) => {
  const families: Set<string> = new Set();
  initialInstruments.forEach((instrument) => {
    if (!instrument.family) {
      return;
    } else {
      families.add(instrument.family);
    }
  });

  return (
    <div className={styles.familySelect}>
      {Array.from(families).map((family) => {
        return (
          <div key={family}>
            <label htmlFor={family}>{family}</label>
            <input
              id={family}
              type="checkbox"
              value={family}
              onChange={handleFamilySelect}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FamilySelect;
