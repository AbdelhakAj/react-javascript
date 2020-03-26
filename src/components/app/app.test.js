import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

test("renders react app", () => {
  const { getByText } = render(<App />);
  const textEl = getByText("react app");
  expect(textEl).toBeInTheDocument();
});
