import { instrumentRange } from "../types/types";

export const fisherYatesShuffle = (
  randomizedInstruments: instrumentRange[]
) => {
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = randomizedInstruments.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedInstruments[i], randomizedInstruments[j]] = [
      randomizedInstruments[j],
      randomizedInstruments[i],
    ];
  }
  return randomizedInstruments;
};
