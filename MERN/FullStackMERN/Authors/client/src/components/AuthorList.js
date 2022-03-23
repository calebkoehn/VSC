import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import _ from 'lodash';
import axios from 'axios';
// import { getAllAuthors } from '../../../server/controllers/author.controller';

const AuthorList = (props) => {
    
    const [authorList, setAuthorList] = useState([]);

    useEffect(()=> {
        getAllAuthors();
    }, [])

    const getAllAuthors = async () => {
        await axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthorList(_.orderBy(res.data,['name'],['asc']));
            });
    }

    const removeAuthor = (authorId) => {
        setAuthorList(authorList.filter(author => author._id !== authorId));
    }

    
    return(
        <div className='container'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authorList.map((author, i) => 
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td><Link className='me-1 btn btn-primary me-2' to={'/edit/'+author._id}>Edit</Link>
                            
                            <DeleteButton author={author} changeStyle= {false} removeAuthor = {removeAuthor} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    )
}


export default AuthorList;