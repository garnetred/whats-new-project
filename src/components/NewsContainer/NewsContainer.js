import React from "react";
import "./NewsContainer.css";
import NewsArticle from "../NewsArticle/NewsArticle";

const NewsContainer = (props) => {
  const articles = props.category.map((article) => (
    <NewsArticle article={article} key={article.id} />
  ));

  const filteredArticles = articles.filter((story) => {
    return (
      story.props.article.description
        .toLowerCase()
        .includes(props.searchTerm.toLowerCase()) ||
      story.props.article.headline
        .toLowerCase()
        .includes(props.searchTerm.toLowerCase())
    );
  });

  return (
    <main>
      {props.searchTerm === "" && articles}
      {props.searchTerm && filteredArticles}
      {!filteredArticles.length && <p>No results found.</p>}
    </main>
  );
};

export default NewsContainer;
