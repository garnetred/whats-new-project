import React from "react";
import Menu from "./Menu";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import local from "../../data/local";

describe("Menu", () => {
  it("should render the menu with the right props", () => {
    const { getByText } = render(<Menu currentCategory={local} />);
    expect(getByText("Local News")).toBeInTheDocument();
  });

  it("should render the selected category with a selected-category class", () => {
    const { getByText } = render(<Menu currentCategory="local" />);

    expect(
      getByText("Local News").classList.contains("selected-category")
    ).toBe(true);
  });

  it("should change category if a user selects a different category", () => {
    const mockedChangeCategory = jest.fn();
    const { getByText } = render(
      <Menu currentCategory="local" changeCategory={mockedChangeCategory} />
    );

    fireEvent.click(getByText("Entertainment"));
    expect(mockedChangeCategory).toHaveBeenCalled();
  });
});
