import React from "react";
// import { Link } from "react-router-dom"

import articleContent from "./article-content";

import Articles from "../components/Articles";

const ArticlesList = () => {
    return (
        <div>
            <h1>Articles List</h1>
            <p>Lorem ipsul dolor sit amt consectetur adipisicing elit. Rem esse, ste consectetur totam sit et
                voluptatum, quibusdam, quidem, quas voluptates quos. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </p>
            <div>
                <div>
                  <Articles articles={articleContent} />
                </div>
            </div>
        </div>
    );
}

export default ArticlesList