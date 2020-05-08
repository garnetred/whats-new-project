import React from "react";
import NewsContainer from "./NewsContainer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import local from "../../data/local";

describe("NewsContainer", () => {
  it("should test that the news container is being rendered with the right props", () => {
    const { getByText } = render(
      <NewsContainer category={local} searchTerm="" />
    );
    expect(
      getByText("The Who postpones Denver Concert at the Pepsi Center")
    ).toBeInTheDocument();
  });

  it("should display the right articles according to the search term", () => {
    const { getByText } = render(
      <NewsContainer category={local} searchTerm="chicken" />
    );
    expect(
      getByText(
        "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner"
      )
    ).toBeInTheDocument();
  });
});
