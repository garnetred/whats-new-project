import React from "react";
import SearchForm from "./SearchForm";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("SearchForm", () => {
  it("should test that search form is being rendered properly", () => {
    const { getByText } = render(<SearchForm />);

    expect(getByText("Search")).toBeInTheDocument();
  });

  it("when search button is clicked, make sure that addSearchTerm is called", () => {
    const mockedAddSearchTerm = jest.fn();
    const { getByText } = render(
      <SearchForm addSearchTerm={mockedAddSearchTerm} />
    );

    fireEvent.click(getByText("Search"));

    expect(mockedAddSearchTerm).toHaveBeenCalled();
  });
});
