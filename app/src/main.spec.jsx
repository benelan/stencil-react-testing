import { render, screen } from "@testing-library/react";
import App from "./App";

it("does not error", () => {
  render(<App />);
  screen.queryByText("Hello, World!");
});
