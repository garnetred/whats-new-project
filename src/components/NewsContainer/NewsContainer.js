import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'
import local from "../../data/local.js"

// NEWSCONTAINER COMPONENT CODE GOES HERE

//how do I do this with props? I'm now passing in the array

const NewsContainer = (props) => {
    console.log(props)
    const localArticles = props.category.map(article => <NewsArticle article={article}/>)
return (
    <main>
     {localArticles}
    </main>
)
}

export default NewsContainer;