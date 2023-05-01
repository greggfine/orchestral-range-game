import { useEffect, useState, useRef } from "react";

import styles from "./game-over.module.scss";
import btnStyles from "./button.module.scss";

import lottie from "lottie-web";
import animation from "../public/lottie/99105-final-gold.json";

type Props = {
  gameState: { score: number; round: number };
  init: () => void;
};

const GameOver = ({ gameState, init }: Props) => {
  let animationContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animationContainerElem = animationContainerRef.current;

    if (!animationContainerElem) {
      return;
    }
    const anim = lottie.loadAnimation({
      container: animationContainerElem,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    });
    anim.setSpeed(2);
    return () => anim.destroy();
  }, []);

  return (
    <div className={styles.gameOver}>
      <div
        className={styles.gameOver__animation}
        ref={animationContainerRef}
      ></div>
      <div className={styles.gameOver__score}>{gameState.score}</div>
      <button onClick={init} className={btnStyles.button}>
        Play Again?
      </button>
    </div>
  );
};

export default GameOver;
