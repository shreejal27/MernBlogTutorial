import React from "react";
import { Link } from "react-router-dom"

import articleContent from "./article-content";

const ArticlesList = () => {
    return (
        <div>
            <h1>Articles List</h1>
            <p>Lorem ipsul dolor sit amt consectetur adipisicing elit. Rem esse, ste consectetur totam sit et
                voluptatum, quibusdam, quidem, quas voluptates quos. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </p>
            <div>
                <div>
                    {articleContent.map((article, index) => (
                        <div key={index}>
                            <div>
                                <Link to={`/article/${article.name}`}>
                                    <img className="thumbnail" src={article.thumbnail} alt="thumbnail" />
                                </Link>
                                <div>
                                    <h3>{article.title}</h3>
                                    <p>{article.content[0].substring(0, 150)}...</p>
                                    <Link to={`/article/${article.name}`}>Read more</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticlesList