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
