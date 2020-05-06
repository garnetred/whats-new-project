import React from "react";
import "./NewsArticle.css";

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = (props) => {
  //maybe I need to pass props in somehow?
  return (
    <article className="article">
        <section className="article-info">
        <h2 className="article-title">{props.article.headline}</h2>
        <figure>
  <img src={props.article.img}></img>
        </figure>
        </section>
        <p className="article-description">{props.article.description}</p>
        <a href={props.article.url}>Read more...</a>
    </article>
  );
};

export default NewsArticle;
