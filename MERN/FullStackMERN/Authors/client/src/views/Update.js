import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [authorExist, setAuthorExist] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
                setAuthorExist(true);
            })
            .catch(err=> {
                console.log(err)
                setAuthorExist(false);
            })
    }, []);
    
    return (
        <main className='container mt-3 text-center'>
            {authorExist ?
            <>
            <h2>Favorite Authors</h2>
            <Link to="/">Home</Link>
            <p>Edit Author:</p>
            <AuthorForm
                formType={"update"}
                name={name}
                value={name}
                setName = {setName}
            />
            </>
            :
            <>
            <p>We're sorry, but we can't find the author you're looking for. Would you like to add an author to our Database?</p>
            <Link to="/new">Add Author</Link>
            </>
            }
        </main>
    )
}
    
export default Update;
