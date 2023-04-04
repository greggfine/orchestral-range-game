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
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [correctAnswerInstrument, setCorrectAnswerInstrument] =
    useState<Instrument>({
      name: "",
      range: "",
      id: 0,
    });

  let [gameState, setGameState] = useState({ score: 0, round: 1 });
  let [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  let [rightWrongDisplayIsVisible, setRightWrongDisplayIsVisible] =
    useState(false);

  const handleClick = (buttonChoiceName: string) => {
    buttonChoiceName === correctAnswerInstrument.name
      ? (setGameState({
          ...gameState,
          score: gameState["score"] + 1,
          round: gameState["round"] + 1,
        }),
        setIsCorrectAnswer(true))
      : (setGameState({ ...gameState, round: gameState["round"] + 1 }),
        setIsCorrectAnswer(false));

    setRightWrongDisplayIsVisible(true);
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
      const correctAnswerInstrument = instruments[getRandomIndex(instruments)];
      randomizeAnswers(instruments, correctAnswerInstrument);
    };
    fetchInstrument();
  }, []);
  return (
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
  );
}

export default App;
