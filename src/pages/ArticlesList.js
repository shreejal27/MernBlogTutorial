import React from "react";
import {Link} from "react-router-dom"

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
                {articleContent.map((article,index)=>(
                    <div key={index}>
                        <div>
                        <Link to={`/article/${article.name}`}>
                        <img className="thumbnail" src={article.thumbnail} alt="thumbnail"/>
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default ArticlesList