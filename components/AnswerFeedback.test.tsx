import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AnswerFeedback from "./AnswerFeedback";

test("rightAnswer img is rendered", () => {
  render(<AnswerFeedback isCorrectAnswer={true} />);
  expect(screen.getByAltText("right answer")).toBeDefined();
});

test("wrongAnswer img is rendered", () => {
  render(<AnswerFeedback isCorrectAnswer={true} />);
  expect(screen.getByAltText("wrong answer")).toBeDefined();
});
