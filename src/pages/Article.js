import React from "react";
import {useParams} from "react-router-dom"

import articleContent from "./article-content";

import Articles from "../components/Articles";

const Article = () => {

    const {name} = useParams();

    const article = articleContent.find(article => article.name === name);

    if(!article){
        return (
            <h1>Article does not exist</h1>
        )
    }

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <div>
        <h1>Article</h1>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}

        <h1>Other Articles</h1>
        <div>
           <Articles articles={otherArticles} />
        </div>
        </div>
    );
}

export default Article