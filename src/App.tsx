import { useState, useEffect } from "react";

import { Instrument } from "../types/types";
import { getRandomIndex, randomizeAnswers } from "./utils";

import GamePlayScreen from "../components/GamePlayScreen";
import GameStartScreen from "../components/GameStartScreen";
import GameOverScreen from "../components/GameOverScreen";

const maxRounds = 2;
const roundGap = 3000;
const volumeLevel = 0.1;
const rightAnswer = new Audio("/audio/correctAnswer.mp3");
const wrongAnswer = new Audio("/audio/wrongAnswer.mp3");

function App() {
  useEffect(() => {
    const fetchInstrument = async () => {
      const response = await fetch("/instruments.json");
      const instruments = await response.json();
      setInitialinstruments(instruments);
      setInstruments(instruments);
    };
    fetchInstrument();
  }, []);
  const initialCorrectAnswerInstrument = { name: "", range: "", id: 0 };
  const [btnsDisabled, setBtnsDisabled] = useState(false);
  const [correctAnswerInstrument, setCorrectAnswerInstrument] =
    useState<Instrument>(initialCorrectAnswerInstrument);
  const [families, setFamilies] = useState<string[]>([]);
  const [filteredInstruments, setFilteredInstruments] = useState<Instrument[]>(
    []
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState({ score: 0, round: 1 });
  const [hintsVisible, setHintsVisible] = useState(false);
  const [initialInstruments, setInitialinstruments] = useState<Instrument[]>(
    []
  );
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [rightWrongDisplayIsVisible, setRightWrongDisplayIsVisible] =
    useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleFamilySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const family = e.target.value;

    setFamilies((prevState) => [...prevState, family]);
  };
  useEffect(() => {
    const filteredInstruments = initialInstruments.filter((instrument) => {
      if (!instrument.instrumentFamily) {
        return;
      } else {
        return families.includes(instrument.instrumentFamily);
      }
    });
    setFilteredInstruments(filteredInstruments);
    generateAnswerAndRandomizedInstruments(filteredInstruments);
  }, [families]);

  const handleInstructionsClick = () => setShowInstructions(true);
  const handleCloseInstructions = () => setShowInstructions(false);
  const toggleHints = () => setHintsVisible(true);

  const init = () => {
    setBtnsDisabled(false);
    setGameState({ score: 0, round: 1 });
    setGameOver(false);
    setGameStarted(true);
    setRightWrongDisplayIsVisible(false);
    setInstruments([]);
    setCorrectAnswerInstrument(initialCorrectAnswerInstrument);
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
        (wrongAnswer.volume = volumeLevel * 3),
        wrongAnswer.play());

    setRightWrongDisplayIsVisible(true);
    if (gameState.round < maxRounds) {
      setTimeout(() => {
        setGameState((prevState) => {
          return { ...prevState, round: prevState["round"] + 1 };
        });
        setBtnsDisabled(false);
        setRightWrongDisplayIsVisible(false);
        if (filteredInstruments.length > 0) {
          generateAnswerAndRandomizedInstruments(filteredInstruments);
        } else {
          generateAnswerAndRandomizedInstruments(initialInstruments);
        }
      }, roundGap);
    } else {
      setTimeout(() => {
        setGameOver(true);
        setGameStarted(false);
        setHintsVisible(false);
      }, roundGap);
    }
  };

  const generateAnswerAndRandomizedInstruments = (
    instruments: Instrument[]
  ) => {
    const correctAnswerInstrument = instruments[getRandomIndex(instruments)];
    randomizeAnswers(
      instruments,
      correctAnswerInstrument,
      setCorrectAnswerInstrument,
      setInstruments
    );
  };
  return (
    <>
      {!gameStarted && !gameOver && (
        <GameStartScreen
          generateAnswerAndRandomizedInstruments={
            generateAnswerAndRandomizedInstruments
          }
          instruments={instruments}
          handleCloseInstructions={handleCloseInstructions}
          handleFamilySelect={handleFamilySelect}
          handleInstructionsClick={handleInstructionsClick}
          initialInstruments={initialInstruments}
          setGameStarted={setGameStarted}
          showInstructions={showInstructions}
          toggleHints={toggleHints}
        />
      )}
      {gameStarted && !gameOver && (
        <GamePlayScreen
          btnsDisabled={btnsDisabled}
          correctAnswerInstrument={correctAnswerInstrument}
          families={families}
          gameState={gameState}
          handleClick={handleClick}
          hintsVisible={hintsVisible}
          instruments={instruments}
          isCorrectAnswer={isCorrectAnswer}
          maxRounds={maxRounds}
          rightWrongDisplayIsVisible={rightWrongDisplayIsVisible}
        />
      )}
      {!gameStarted && gameOver && (
        <GameOverScreen
          gameState={gameState}
          init={init}
          toggleHints={toggleHints}
        />
      )}
    </>
  );
}

export default App;
