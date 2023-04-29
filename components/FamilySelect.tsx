import styles from "./family-select.module.scss";
import { Instrument } from "types/types";
import { sortAlphabetically } from "../src/utils";
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
  initialInstruments.forEach((instrument) => {
    if (!instrument.family) {
      return;
    } else {
      families.add(instrument.family);
    }
  });

  const sortedFamilies = sortAlphabetically(Array.from(families));

  return (
    <div className={styles.familySelect}>
      <div className={styles.familySelect__title}>Filter by Family</div>
      <div className={styles.familySelect__families}>
        {sortedFamilies.map((family, index) => {
          return (
            <div key={family}>
              <input
                id={family}
                type="checkbox"
                value={family}
                onChange={(e) => handleFamilySelect(e, index)}
                checked={checkedCategories[index]}
                className={styles.familySelect__checkbox}
              />
              <label htmlFor={family}>{family}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(FamilySelect);
