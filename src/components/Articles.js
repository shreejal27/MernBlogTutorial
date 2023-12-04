import React from "react"

import { Link } from "react-router-dom"

const Articles= ({articles}) => {
    return (
        <div>
              {articles.map((article, index) => (
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
    )
}

export default Articles

