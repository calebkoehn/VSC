import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Create = (props) => {
    const [form, setForm] = useState({
        title: "",
        company: "",
        salary: null,
        remote: false,
        color: "",
        numJobs: null
    })
    const [error, setError] = useState({});
    const history = useHistory();
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted.")
        
        axios.post("http://localhost:8000/api/jobs/create", form)
            .then(res => {
                console.log("I'm here.")
                history.push('/')
            })
            .catch(err=> {
                console.log("problem with form.")
                
                console.log(err.response)
                setError(err.response.data.errors);
            })

    }

    return (
        <div>
            <h1>Add A New Job</h1>
            <form className='col-5 mx-auto mb-2' onSubmit={onSubmitHandler}>
                <div className='form-group mb-2'>
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name="title" className='form-control' />
                    <span className='text-danger'>{error.title && error.title.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="company">Company</label>
                    <input onChange={onChangeHandler} type="text" name="company" className='form-control' />
                    <span className='text-danger'>{error.company && error.company.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="salary">Salary</label>
                    <input onChange={onChangeHandler} type="number" name="salary" className='form-control' />
                </div>
                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name="remote" className='form-check-input' />
                    <label htmlFor="remote" className='form-check-label'>Remote?</label>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="color">Color</label>
                    <input onChange={onChangeHandler} type="color" name="color" className='form-control  form-control-color d-block mx-auto' />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="numJobs">Number of Jobs Available</label>
                    <input onChange={onChangeHandler} type="number" name="numJobs" className='form-control' />
                    <span className='text-danger'>{error.numJobs && error.numJobs.message}</span>
                </div>
                <div className='d-inline-flex'>
                    <input type="submit" className='btn btn-success btn-lg m-3' />
                    <Link to="/" className='btn btn-primary btn-lg m-3'>Back</Link>
                </div>
            </form>
        </div>
    )
}

export default Create;