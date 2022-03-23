import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import _ from 'lodash';


const AuthorForm = (props) => {
    const {formType} = props;
    const [name, setName] = useState('');

    const [errorMessages, setErrorMessages] = useState('')

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log(formType)
        if (formType === "update") {
            axios.get('http://localhost:8000/api/author/' + params.id)
                .then(res => {
                    setName(res.data);
                })
        }
    }, []);

    const createAuthor = async (name) => {
        await axios.post('http://localhost:8000/api/author/new', name)
            .then(res => {
                console.log("Response: ", res)
                history.push('/')
            })
            .catch(err => {
                console.log("Error: ", err)
                let errors = err.response.data.errors;
                _.keys(errors).map((errorType, index) =>
                    setErrorMessages({
                        ...errorMessages,
                        [errorType]: errors[errorType].message
                    })
                )

            })
    }
    const updateAuthor = async (name) => {
        axios.put('http://localhost:8000/api/author/'+params.id, name)
            .then(res => {
                console.log("Response: ", res)
                history.push('/')
            })
                        
    }
    const onChangeHandler = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formType === "create"){
            createAuthor(name)
            setName({
                name:''
            })
        }
        else if (formType === "update"){
            updateAuthor(name)
            
        }
    }

    return (
        <div className='container text-center col-4'>
            <form onSubmit={onSubmitHandler}>
                <div className='row mb-3'>
                    <label htmlFor='name' className='col-3 col-form-label text-left'>Name: </label>
                    <div className='col-8'>
                        <input type="text" className="form-control" id="name" name="name" value={name.name}onChange={onChangeHandler} />
                        {(_.has(errorMessages, 'name')) && 
                            <div className='text-danger small'>{errorMessages.name}</div>
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 d-inline-flex'>
                        <Link to="/" className="btn btn-outline-dark">Cancel</Link>
                        <input className='btn btn-success mx-1' type="submit" value={(formType === 'create') ? "Add" : "Update"} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;