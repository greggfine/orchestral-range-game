import React from "react";
//https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Instructions from "./Instructions";

test("it renders heading", () => {
  const onClose = vi.fn();
  render(
    <Instructions
      onClose={onClose}
      btnText="Close"
      content="content"
      title="instructions"
    />
  );
  expect(screen.getByText(/instructions/i)).toBeDefined();
});
