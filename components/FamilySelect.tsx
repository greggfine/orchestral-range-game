import styles from "./family-select.module.scss";
import { Instrument } from "types/types";
import React from "react";
type Props = {
  initialInstruments: Instrument[];
  handleFamilySelect: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  checkedCategories: boolean[];
};
const FamilySelect = ({
  checkedCategories,
  initialInstruments,
  handleFamilySelect,
}: Props) => {
  const families: Set<string> = new Set();
  families.add("All");
  initialInstruments.forEach((instrument) => {
    if (!instrument.family) {
      return;
    } else {
      families.add(instrument.family);
    }
  });

  return (
    <div className={styles.familySelect}>
      {Array.from(families).map((family, index) => {
        return (
          <div key={family}>
            <label htmlFor={family}>{family}</label>
            <input
              id={family}
              type="checkbox"
              value={family}
              onChange={(e) => handleFamilySelect(e, index)}
              checked={checkedCategories[index]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(FamilySelect);
