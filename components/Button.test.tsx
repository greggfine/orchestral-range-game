import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
test("it renders", () => {
  render(<Button name="Violin" range="G3 to E7" id={58} />);
  expect(screen.getByText("Violin")).toBeDefined();
});

test("clicking the button fires the handlClick function", async () => {
  const handleClick = vi.fn();
  render(
    <Button name="Violin" range="G3 to E7" id={58} handleClick={handleClick} />
  );
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
