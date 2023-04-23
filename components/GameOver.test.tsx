import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameOver from "./GameOver";

describe("GameOver component", () => {
  test("it renders the heading", () => {
    // const gameState = { score: 3, round: 2 };
    // const init = vi.fn();
    // render(<GameOver gameState={gameState} init={init} />);
    // expect(screen.getByText(/game over/i)).toBeDefined();
    // expect(screen.getByRole("button")).toBeDefined();
  });

  // test("the init function is called when the button is clicked", async () => {
  //   const gameState = { score: 3, round: 2 };
  //   const init = vi.fn();
  //   render(<GameOver gameState={gameState} init={init} />);
  //   const button = screen.getByRole("button");
  //   await userEvent.click(button);
  //   expect(init).toHaveBeenCalled();
  // });
});
