import { Instrument } from "../types/types";

export const fisherYatesShuffle = (randomizedInstrument: Instrument[]) => {
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = randomizedInstrument.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedInstrument[i], randomizedInstrument[j]] = [
      randomizedInstrument[j],
      randomizedInstrument[i],
    ];
  }
  return randomizedInstrument;
};

export const getRandomIndex = (array: any[]): number => {
  return Math.floor(Math.random() * array.length);
};
export const randomizeAnswers = (
  instruments: Instrument[],
  correctAnswerInstrument: Instrument,
  setCorrectAnswerInstrument: (instrument: Instrument) => void,
  setInstruments: (instruments: Instrument[]) => void
) => {
  const otherInstruments = instruments
    .filter((inst) => inst !== correctAnswerInstrument)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const randomizedInstruments = [
    ...otherInstruments,
    correctAnswerInstrument,
  ].sort(() => Math.random() - 0.5);

  setCorrectAnswerInstrument(correctAnswerInstrument);
  setInstruments(randomizedInstruments);
};

export const sortAlphabetically = (arr: string[]) => {
  return arr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
};
