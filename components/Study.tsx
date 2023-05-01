import { useRef } from "react";
import Draggable from "react-draggable";
import { Instrument } from "../types/types";
import styles from "./study.module.scss";
const IMAGE_BASE_PATH = "images/ranges/";

const Study = ({
  initialInstruments,
  handleToggleStudy,
}: {
  initialInstruments: Instrument[];
  handleToggleStudy(): void;
}) => {
  const draggableRef = useRef(null);
  return (
    <div className={styles.study}>
      <button onClick={handleToggleStudy}>Back to Home</button>
      <div className={styles.study__dropZone}></div>
      {initialInstruments.map((instrument) => {
        return (
          <Draggable nodeRef={draggableRef} key={instrument.id} grid={[10, 10]}>
            <div>
              <div
                ref={draggableRef}
                className={styles.study__range}
                style={{
                  background: `url(${IMAGE_BASE_PATH}${instrument.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className={styles.study__instrumentText}>
                <p className={styles.study__instrumentText__name}>
                  {instrument.name}
                </p>
                <p className={styles.study__instrumentText__range}>
                  {instrument.range}
                </p>
              </div>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default Study;
