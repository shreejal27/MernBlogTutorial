import React from "react";

const AddCommentForm = ({ articleName, setArticleBodyInfo }) => {

    const [username, setUsername] = React.useState("");
    const [commentText, setCommentText] = React.useState("");

    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const body = await result.json();
        setArticleBodyInfo(body); //from prop
        setUsername("");
        setCommentText("");
    }

    return (
        <form>
            <h3> Add a comment </h3>
            <label> Name: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label> Comment: </label>
            <textarea rows="4" cols="50" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            <br />
            <button onClick={() => addComments()}> Add Comment </button>
        </form>
    )
}

export default AddCommentForm;