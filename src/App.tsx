import { useState, useEffect } from "react";
import styles from "./app.module.scss";

import { Instrument } from "../types/types";
import { fisherYatesShuffle, getRandomIndex } from "./utils";

import AnswerChoices from "../components/AnswerChoices";
import RangeDisplay from "../components/RangeDisplay";
import RightWrongDisplay from "../components/RightWrongDisplay";
import RoundDisplay from "../components/RoundDisplay";
import ScoreDisplay from "../components/ScoreDisplay";

function App() {
  const maxRounds = 3;
  const roundGap = 1000;
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [gameOver, setGameOver] = useState(false);
  let [correctAnswerInstrument, setCorrectAnswerInstrument] =
    useState<Instrument>({
      name: "",
      range: "",
      id: 0,
    });

  let [gameState, setGameState] = useState({ score: 0, round: 1 });
  let [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  let [rightWrongDisplayIsVisible, setRightWrongDisplayIsVisible] =
    useState(false);

  const init = () => {
    setGameState({ score: 0, round: 1 });
    setGameOver(false);
    setRightWrongDisplayIsVisible(false);
    generateAnswerAndRandomizedInstruments(instruments);
  };

  const handleClick = (buttonChoiceName: string) => {
    buttonChoiceName === correctAnswerInstrument.name
      ? (setGameState({
          ...gameState,
          score: gameState["score"] + 1,
        }),
        setIsCorrectAnswer(true))
      : (setGameState({ ...gameState }), setIsCorrectAnswer(false));

    setRightWrongDisplayIsVisible(true);
    if (gameState.round < maxRounds) {
      setTimeout(() => {
        setGameState((prevState) => {
          return { ...prevState, round: prevState["round"] + 1 };
        });
        setRightWrongDisplayIsVisible(false);
        generateAnswerAndRandomizedInstruments(instruments);
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
    <div>
      <h1>Orchestral Range Game</h1>
      <ScoreDisplay score={gameState.score} />
      <RoundDisplay round={gameState.round} maxRounds={maxRounds} />
      {rightWrongDisplayIsVisible && (
        <RightWrongDisplay isCorrectAnswer={isCorrectAnswer} />
      )}
      <RangeDisplay correctAnswerInstrument={correctAnswerInstrument} />
      <AnswerChoices instruments={instruments} handleClick={handleClick} />
    </div>
  ) : (
    <div>
      <h1>GAME OVER</h1>
      <h2>Your Score: {gameState.score}</h2>
      <button onClick={init}>Play Again?</button>
    </div>
  );
}

export default App;
