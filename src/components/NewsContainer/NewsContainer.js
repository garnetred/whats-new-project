import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'
import localData from "../../data/local.js"
import local from '../../data/local.js';

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = () => {
    const localArticles = localData.map(article => <NewsArticle article={article}/>)
return (
    <main>
     {localArticles}
    </main>
)
}

export default NewsContainer;