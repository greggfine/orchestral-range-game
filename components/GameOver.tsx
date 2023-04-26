import styles from "./game-over.module.scss";
import btnStyles from "./button.module.scss";
import lottie from "lottie-web";
import animation from "../public/lottie/99105-final-gold.json";
import { useEffect, useState, useRef } from "react";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
};

export default ({ gameState, init }: Props) => {
  const [gameOverAnimation, setGameOverAnimation] = useState<any>(null);
  const [animationLoaded, setAnimationLoaded] = useState(false);
  let animationContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animationContainer = animationContainerRef.current;

    if (!animationContainer) {
      return;
    }
    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  useEffect(() => {
    if (gameOverAnimation) {
      setAnimationLoaded(true);
    }
  }, [gameOverAnimation]);

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
