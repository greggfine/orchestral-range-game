import { useState, useEffect } from "react";
import styles from "./app.module.scss";
import { instrumentRange } from "../types/types";
import AnswerChoices from "../components/AnswerChoices";
import RightWrongDisplay from "../components/RightWrongDisplay";
import ScoreDisplay from "../components/ScoreDisplay";
import RoundDisplay from "../components/RoundDisplay";
import RangeDisplay from "../components/RangeDisplay";
import { fisherYatesShuffle } from "./utils";

function App() {
  const maxRounds = 3;
  const [instrumentRanges, setInstrumentRanges] = useState<instrumentRange[]>(
    []
  );
  const [chosenInstrument, setChosenInstrument] = useState<instrumentRange>({
    name: "",
    range: "",
    id: 0,
  });

  let [score, setScore] = useState(0);
  let [round, setRound] = useState(1);

  const handleClick = (name: string) => {
    console.log(name);

    if (name === chosenInstrument.name) {
      setScore((score += 1));
    }
    setRound((round += 1));
  };
  const randomizeAnswers = (
    instrumentRangeData: instrumentRange[],
    chosenInstrument: instrumentRange
  ) => {
    let randomizedInstruments: instrumentRange[] = [];
    let i = 0;
    while (randomizedInstruments.length < 3) {
      let randomInst =
        instrumentRangeData[
          Math.floor(Math.random() * instrumentRangeData.length)
        ];
      if (
        !randomizedInstruments.includes(randomInst) &&
        randomInst !== chosenInstrument
      ) {
        randomizedInstruments.push(randomInst);
      }
      i++;
    }

    setChosenInstrument(chosenInstrument);

    randomizedInstruments = [...randomizedInstruments, chosenInstrument];
    randomizedInstruments = fisherYatesShuffle(randomizedInstruments);
    setInstrumentRanges(randomizedInstruments);
  };
  useEffect(() => {
    const fetchInstrumentRanges = async () => {
      const response = await fetch("/instrument-ranges.json");
      const instrumentRangeData = await response.json();
      const chosenInstrument =
        instrumentRangeData[
          Math.floor(Math.random() * instrumentRangeData.length)
        ];
      randomizeAnswers(instrumentRangeData, chosenInstrument);
    };
    fetchInstrumentRanges();
  }, []);
  return (
    <div>
      <h1>Orchestral Range Game</h1>
      <ScoreDisplay score={score} />
      <RoundDisplay round={round} maxRounds={maxRounds} />
      <RightWrongDisplay />
      <RangeDisplay chosenInstrument={chosenInstrument} />
      <AnswerChoices instruments={instrumentRanges} handleClick={handleClick} />
    </div>
  );
}

export default App;
