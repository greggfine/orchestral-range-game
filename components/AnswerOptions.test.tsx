import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect, vi } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnswerOptions from "./AnswerOptions";

test("the component renders with props", () => {
  const instruments = [
    { name: "flute", range: "c0-d3", id: 0 },
    { name: "harp", range: "c1-d4", id: 1 },
  ];
  const handleClick = vi.fn();
  render(<AnswerOptions instruments={instruments} handleClick={handleClick} />);
  expect(screen.getAllByRole("button")).toBeDefined();
});

test("clicking a button fires the handleClick function", async () => {
  const instruments = [
    { name: "flute", range: "c0-d3", id: 0 },
    { name: "harp", range: "c1-d4", id: 1 },
  ];
  const handleClick = vi.fn();
  render(<AnswerOptions instruments={instruments} handleClick={handleClick} />);
  const buttons = screen.getAllByRole("button");
  await Promise.all(
    buttons.map(async (button) => {
      await userEvent.click(button);
    })
  );
  expect(handleClick).toHaveBeenCalledTimes(2);
});
