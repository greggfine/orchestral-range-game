import { useState, useEffect } from "react";
import styles from "./app.module.scss";

import { Instrument } from "../types/types";
import { fisherYatesShuffle, getRandomIndex } from "./utils";

import AnswerChoices from "../components/AnswerChoices";
import HintDisplay from "../components/HintDisplay";
import HintToggle from "../components/HintToggle";
import RangeDisplay from "../components/RangeDisplay";
import RightWrongDisplay from "../components/RightWrongDisplay";
import RoundDisplay from "../components/RoundDisplay";
import ScoreDisplay from "../components/ScoreDisplay";
import GameOver from "../components/GameOver";
import Piano from "../components/Piano";

const rightAnswer = new Audio("src/assets/audio/correctAnswer.wav");
const wrongAnswer = new Audio("src/assets/audio/wrongAnswer.wav");

const maxRounds = 5;
const roundGap = 3000;

function App() {
  const [hintsVisible, setHintsVisible] = useState(false);
  const [initialInstruments, setInitialinstruments] = useState<Instrument[]>(
    []
  );
  const [instruments, setInstruments] = useState<Instrument[]>([]);
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
    setHintsVisible(!hintsVisible);
  };

  const init = () => {
    setGameState({ score: 0, round: 1 });
    setGameOver(false);
    setRightWrongDisplayIsVisible(false);
    setInstruments([]);
    setCorrectAnswerInstrument({
      name: "",
      range: "",
      id: 0,
    });
    setHintsVisible(false);
    generateAnswerAndRandomizedInstruments(initialInstruments);
  };

  const handleClick = (buttonChoiceName: string) => {
    buttonChoiceName === correctAnswerInstrument.name
      ? (setGameState({
          ...gameState,
          score: gameState.score + 1,
        }),
        setIsCorrectAnswer(true),
        rightAnswer.play())
      : (setGameState({ ...gameState }),
        setIsCorrectAnswer(false),
        wrongAnswer.play());

    setRightWrongDisplayIsVisible(true);
    if (gameState.round < maxRounds) {
      setTimeout(() => {
        setGameState((prevState) => {
          return { ...prevState, round: prevState["round"] + 1 };
        });
        setRightWrongDisplayIsVisible(false);
        generateAnswerAndRandomizedInstruments(initialInstruments);
      }, roundGap);
    } else {
      setTimeout(() => {
        setGameOver(true);
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
  return !gameOver ? (
    <div className={styles.app}>
      {/* <div style={{ width: "100vw", border: "20px solid red" }}>
        <Piano />
        <Piano />
        <Piano />
        <Piano />
      </div> */}
      <h1 className={styles.app__heading}>Orchestral Range Game</h1>
      <div className={styles.app__flexContainer}>
        <div className={styles.app__scoreAndRound}>
          <ScoreDisplay score={gameState.score} />
          {rightWrongDisplayIsVisible && (
            <RightWrongDisplay isCorrectAnswer={isCorrectAnswer} />
          )}
          <RoundDisplay round={gameState.round} maxRounds={maxRounds} />
        </div>
        <RangeDisplay correctAnswerInstrument={correctAnswerInstrument} />
        <AnswerChoices instruments={instruments} handleClick={handleClick} />
        <br />
        <div className={styles.app__hintsWrapper}>
          <HintToggle toggleHints={toggleHints} />
          <HintDisplay
            correctAnswerInstrument={correctAnswerInstrument}
            hintsVisible={hintsVisible}
          />
        </div>
      </div>
    </div>
  ) : (
    <GameOver gameState={gameState} init={init} />
  );
}

export default App;
