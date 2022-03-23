import React from "react";
import axios from "axios";


const DeleteButton = (props) => {

    const {author, removeAuthor} = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeAuthor(authorId)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <button className="btn btn-danger" onClick={(e) => deleteAuthor(author._id)}>Delete</button>
    )
}

export default DeleteButton;