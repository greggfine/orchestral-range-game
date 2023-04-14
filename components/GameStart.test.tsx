import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameStart from "./GameStart";
test("it renders a heading", () => {
  const setGameStarted = vi.fn();
  render(<GameStart setGameStarted={setGameStarted} />);
  expect(screen.getByText(/orchestral range game/i)).toBeDefined();
});

test("clicking the button fires setGameStarted", async () => {
  const setGameStarted = vi.fn();
  render(<GameStart setGameStarted={setGameStarted} />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(setGameStarted).toHaveBeenCalled();
});
