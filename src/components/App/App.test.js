import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("That's News!")).toBeInTheDocument();
  });

  it("updates the news articles shown based on the selected category", () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText("Search"));
    expect(
      getByText(
        "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner"
      )
    ).toBeInTheDocument();
  });

  it("indicates that there are no matching articles if search term is not in text", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.change(getByPlaceholderText("search"), {
      target: { value: "words" },
    });

    fireEvent.click(getByText("Search"));
    expect(getByText("No results found.")).toBeInTheDocument();
  });

  it("shows the correct news stories based on the selected category", () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText("Local News"));
    expect(
      getByText(
        "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner"
      )
    ).toBeInTheDocument();
  });
});
