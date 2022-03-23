import React from "react";
import { Link } from 'react-router-dom';

import AuthorList from "../components/AuthorList";

const Main = () => {
    return (
        <main className="container mt-2" >
            <h2>Favorite Authors</h2>
            <Link to="/new">Add Author</Link>
            <p>We have quotes by: </p>
            <AuthorList/>
        </main>
    )
}

export default Main;