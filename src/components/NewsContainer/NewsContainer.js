import React from "react";
import "./NewsContainer.css";
import NewsArticle from "../NewsArticle/NewsArticle";
import local from "../../data/local.js";

// NEWSCONTAINER COMPONENT CODE GOES HERE

//how do I do this with props? I'm now passing in the array

const NewsContainer = (props) => {
  console.log(props);
  const articles = props.category.map((article) => (
    <NewsArticle article={article} key={article.id} />
  ));

    const filteredArticles = articles.filter((story) => {
        //   console.log(story.props.article.description)
        return (
            story.props.article.description.toLowerCase().includes(props.searchTerm.toLowerCase())
            || story.props.article.headline.toLowerCase().includes(props.searchTerm.toLowerCase())
        );
  });

  console.log(filteredArticles)
  //eventually want to return the filtered articles if they exist
  //should create an array tha then filters through the articles array by search term (to see if it matches
  // either the description or the actual headline)
  //if there are no matches, should just render a message that says no matches meet that search criteria
  //but what do I do if the search term is empty?
  //maybe something that indicates that the const should only be run if the search term property is not an empty string
  return <main>
      {props.searchTerm === "" && articles}
      {/* {articles} */}
      {props.searchTerm && filteredArticles}
      </main>;
};

export default NewsContainer;
