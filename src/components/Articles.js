import React from "react"

import { Link } from "react-router-dom"

import './Articles.css'

const Articles = ({ articles }) => {
    return (
        <div className="articles">
            {articles.map((article, index) => (
                <div key={index} className="articlesContainer">
                        <Link to={`/article/${article.name}`}>
                            <img className="thumbnail" src={article.thumbnail} alt="thumbnail" />
                        </Link>
                        <div>
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0, 135)}...</p>
                            <Link to={`/article/${article.name}`} id="readMore">Read more</Link>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Articles

