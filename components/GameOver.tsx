import styles from "./game-over.module.scss";
import btnStyles from "./button.module.scss";
import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";
type Props = {
  gameState: { score: number; round: number };
  init: () => void;
};

export default ({ gameState, init }: Props) => {
  const [gameOverAnimation, setGameOverAnimation] = useState<any>(null);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const fetchLottie = async () => {
      const response = await fetch("lottie/99105-final-gold.json");
      const lottie = await response.json();
      setGameOverAnimation(lottie);
    };
    fetchLottie();
  }, []);

  useEffect(() => {
    if (gameOverAnimation) {
      setAnimationLoaded(true);
    }
  }, [gameOverAnimation]);

  return (
    <div className={styles.gameOver}>
      {animationLoaded && (
        <Lottie loop={false} animationData={gameOverAnimation} play speed={3} />
      )}
      <div className={styles.gameOver__score}>{gameState.score}</div>
      <button onClick={init} className={btnStyles.button}>
        Play Again?
      </button>
    </div>
  );
};
