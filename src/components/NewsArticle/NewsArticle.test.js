import React from "react";
import NewsArticle from "./NewsArticle";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("NewsArticle", () => {
  const article = {
    id: 1,
    headline: "The Who postpones Denver Concert at the Pepsi Center",
    img:
      "https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg",
    description:
      "Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.",
    url:
      "https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/",
  };
  it("should render a news article with the right props", () => {
    const { getByText } = render(<NewsArticle article={article} key={1} />);
    expect(
      getByText("The Who postpones Denver Concert at the Pepsi Center")
    ).toBeInTheDocument();
  });
});
