import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RoundDisplay from "./RoundDisplay";

test("the component renders with props", () => {
  const round = 1;
  const maxRounds = 3;
  render(<RoundDisplay round={round} maxRounds={maxRounds} />);
  expect(screen.getByText("1/3")).toBeDefined();
});

/* TEST IDEAS */
/*
Test that the round and maxRounds props are required and throw an error if not provided.
Test that the round and maxRounds props are numbers and throw an error if they are not.
Test that the round prop is greater than or equal to 1 and less than or equal to maxRounds.
Test that the component renders with the correct class name (roundDisplay).
Test that the component renders the text "Round: " followed by the round prop value and a "/" character, followed by the maxRounds prop value.
*/
