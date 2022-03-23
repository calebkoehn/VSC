import React, { useState } from "react";
import {Link} from 'react-router-dom';

import AuthorForm from "../components/AuthorForm";

const Add = () => {
    const [name, setName]= useState('')

    return (
        <main className="container mt-3">
            <h2>Favorite Authors</h2>
            <Link to="/">Home</Link>
            <h5>Add A New Author:</h5>
            <AuthorForm
                formType={"create"}
                name={name}
                setName={setName}
            />
        </main>
    )
}

export default Add;