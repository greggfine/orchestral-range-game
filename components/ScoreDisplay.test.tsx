import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ScoreDisplay from "./ScoreDisplay";

test("displays the score value", () => {
  render(<ScoreDisplay score={1} />);
  expect(screen.getByText(1)).toBeDefined();
});

test("the score textContent contains a number", () => {
  render(<ScoreDisplay score={10} />);
  const scoreDisplay = screen.getByText(10);
  expect(scoreDisplay.textContent).toMatch(/\d+/);
});

test.skip("the score is greater than or equal to zero", () => {
  // const score = 3;
  // render(<ScoreDisplay score={score} />);
  // const scoreDisplay = screen.getByText(`Score: ${score}`);
  // const scoreValue = parseInt(scoreDisplay.textContent.split(": ")[1]);
  // expect(scoreValue).toBeGreaterThanOrEqual(0);
});
