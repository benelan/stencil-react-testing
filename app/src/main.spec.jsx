import { render, screen } from "@testing-library/react";
import App from "./main";

it("does not error", () => {
  render(<App />);
  screen.queryByText("Test");
});
