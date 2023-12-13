import React from "react";
import { useParams } from "react-router-dom"

import articleContent from "./article-content";

import Articles from "../components/Articles";

import NotFound from "./NotFound";

import './Article.css'

const Article = () => {

    const { name } = useParams();

    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = React.useState({ comments: [] });

    React.useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        // console.log("Component Mounted");
        fetchData();
    }, [name]);

    if (!article) {
        return (
            <NotFound />
        )
    }

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <div>
            {/* <h1>Article</h1> */}
            <p className="articleTitle">{article.title}</p>
            <img className="hero" src={article.thumbnail} alt="thumbnail" />
            {article.content.map((paragraph, key) => (
                <p key={key} className="articleContent">{paragraph}</p>
            ))}

            <div className="otherArticles">
                <p className="articleTitle">Other Articles</p>
                <Articles articles={otherArticles} />
            </div>
        </div>
    );
}

export default Article