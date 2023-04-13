import { useState, useEffect } from "react";
import styles from "./app.module.scss";
import { motion } from "framer-motion";

import { Instrument } from "../types/types";
import { fisherYatesShuffle, getRandomIndex } from "./utils";

import AnswerChoices from "../components/AnswerChoices";
import HintDisplay from "../components/HintDisplay";
import HintToggle from "../components/HintToggle";
import RangeDisplay from "../components/RangeDisplay";
import RightWrongDisplay from "../components/RightWrongDisplay";
import RoundDisplay from "../components/RoundDisplay";
import ScoreDisplay from "../components/ScoreDisplay";
import StartGame from "../components/StartGame";
import GameOver from "../components/GameOver";

const rightAnswer = new Audio("src/assets/audio/correctAnswer.wav");
const wrongAnswer = new Audio("src/assets/audio/wrongAnswer.wav");

const maxRounds = 2;
const roundGap = 3000;
const volumeLevel = 0.1;

function App() {
  const [btnsDisabled, setBtnsDisabled] = useState(false);
  const [hintsVisible, setHintsVisible] = useState(false);
  const [initialInstruments, setInitialinstruments] = useState<Instrument[]>(
    []
  );
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswerInstrument, setCorrectAnswerInstrument] =
    useState<Instrument>({
      name: "",
      range: "",
      id: 0,
    });

  const [gameState, setGameState] = useState({ score: 0, round: 1 });
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [rightWrongDisplayIsVisible, setRightWrongDisplayIsVisible] =
    useState(false);

  const toggleHints = () => {
    setHintsVisible(true);
  };

  const init = () => {
    setBtnsDisabled(false);
    setGameState({ score: 0, round: 1 });
    setGameOver(false);
    setGameStarted(true);
    setRightWrongDisplayIsVisible(false);
    setInstruments([]);
    setCorrectAnswerInstrument({
      name: "",
      range: "",
      id: 0,
    });
    generateAnswerAndRandomizedInstruments(initialInstruments);
  };

  const handleClick = (buttonChoiceName: string) => {
    setBtnsDisabled(true);
    buttonChoiceName === correctAnswerInstrument.name
      ? (setGameState({
          ...gameState,
          score: gameState.score + 1,
        }),
        setIsCorrectAnswer(true),
        (rightAnswer.volume = volumeLevel),
        rightAnswer.play())
      : (setGameState({ ...gameState }),
        setIsCorrectAnswer(false),
        (wrongAnswer.volume = volumeLevel),
        wrongAnswer.play());

    setRightWrongDisplayIsVisible(true);
    if (gameState.round < maxRounds) {
      setTimeout(() => {
        setGameState((prevState) => {
          return { ...prevState, round: prevState["round"] + 1 };
        });
        setBtnsDisabled(false);
        setRightWrongDisplayIsVisible(false);
        generateAnswerAndRandomizedInstruments(initialInstruments);
      }, roundGap);
    } else {
      setTimeout(() => {
        setGameOver(true);
        setGameStarted(false);
        setHintsVisible(false);
      }, roundGap);
    }
  };
  const randomizeAnswers = (
    instruments: Instrument[],
    correctAnswerInstrument: Instrument
  ) => {
    let randomizedInstruments: Instrument[] = [];
    let i = 0;
    while (randomizedInstruments.length < 3) {
      let randomInst = instruments[getRandomIndex(instruments)];
      if (
        !randomizedInstruments.includes(randomInst) &&
        randomInst !== correctAnswerInstrument
      ) {
        randomizedInstruments.push(randomInst);
      }
      i++;
    }

    setCorrectAnswerInstrument(correctAnswerInstrument);

    randomizedInstruments = fisherYatesShuffle([
      ...randomizedInstruments,
      correctAnswerInstrument,
    ]);
    setInstruments(randomizedInstruments);
  };
  useEffect(() => {
    const fetchInstrument = async () => {
      const response = await fetch("/instruments.json");
      const instruments = await response.json();
      setInitialinstruments(instruments);
      generateAnswerAndRandomizedInstruments(instruments);
    };
    fetchInstrument();
  }, []);
  const generateAnswerAndRandomizedInstruments = (
    instruments: Instrument[]
  ) => {
    const correctAnswerInstrument = instruments[getRandomIndex(instruments)];
    randomizeAnswers(instruments, correctAnswerInstrument);
  };
  return (
    <>
      {!gameStarted && !gameOver && (
        <motion.div
          key="gamestarted"
          className={styles.app__startEndGameWrapper}
        >
          <div>
            <div className={styles.app__scoreAndRound}></div>
            <StartGame setGameStarted={setGameStarted} />
          </div>
          <HintToggle toggleHints={toggleHints} />
          <div className={styles.app__hintsWrapper}></div>
        </motion.div>
      )}
      {gameStarted && !gameOver && (
        <motion.div
          className={styles.app}
          key="gameplay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.app__scoreAndRound}>
            <div className={styles.app__scoreAndRound__textWrapper}>
              <ScoreDisplay score={gameState.score} />
              {rightWrongDisplayIsVisible && (
                <RightWrongDisplay isCorrectAnswer={isCorrectAnswer} />
              )}
              <RoundDisplay round={gameState.round} maxRounds={maxRounds} />
            </div>
          </div>
          <div className={styles.app__flexContainer}>
            <RangeDisplay correctAnswerInstrument={correctAnswerInstrument} />
            <div className={styles.app__divider}></div>
            <AnswerChoices
              instruments={instruments}
              handleClick={handleClick}
              btnsDisabled={btnsDisabled}
            />
          </div>
          <HintDisplay
            correctAnswerInstrument={correctAnswerInstrument}
            hintsVisible={hintsVisible}
          />
          <div className={styles.app__hintsWrapper}></div>
        </motion.div>
      )}
      {!gameStarted && gameOver && (
        <motion.div
          className={styles.app__startEndGameWrapper}
          key="gameover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.app__scoreAndRound}></div>
          <GameOver gameState={gameState} init={init} />
          <HintToggle toggleHints={toggleHints} />
          <div className={styles.app__hintsWrapper}></div>
        </motion.div>
      )}
    </>
  );
}

export default App;
