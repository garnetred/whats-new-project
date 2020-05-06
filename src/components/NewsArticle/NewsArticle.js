import React from "react";
import "./NewsArticle.css";

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = () => {
  //maybe I need to pass props in somehow?
  return (
    <article className="article">
        <section className="article-info">
        <h1 className="article-title">Article Title</h1>
        <figure>
            <img></img>
        </figure>
        </section>
        <p className="article-description">Description</p>
        <a href="">Read more...</a>
    </article>
  );
};

export default NewsArticle;
