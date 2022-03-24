import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Update = (props) => {

    const [form, setForm] = useState({
        title: "",
        company: "",
        salary: null,
        remote: (props),
        color: "",
        numJobs: null
    })
    const {id} = useParams();
    const [error, setError] = useState({});
    const history = useHistory();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res=> {
                setForm(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[id])

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.patch(`http://localhost:8000/api/jobs/${id}/edit`, form)
            .then(res => {
                history.push('/')
            })
            .catch(err=> {
                setError(err.response.data.errors);
            })

    }

    return (
        <div>
            <h1 className='mb-3'>Edit Job</h1>
            <form className='col-5 mx-auto mb-2' onSubmit={onSubmitHandler}>
                <div className='form-group mb-2'>
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name="title" className='form-control' value={form.title} />
                    <span className='text-danger'>{error.title && error.title.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="company">Company</label>
                    <input onChange={onChangeHandler} type="text" name="company" className='form-control' value={form.company} />
                    <span className='text-danger'>{error.company && error.company.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="salary">Salary</label>
                    <input onChange={onChangeHandler} type="number" name="salary" className='form-control' value={form.salary} />
                </div>
                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name="remote" className='form-check-input' value={form.remote} />
                    <label htmlFor="remote" className='form-check-label'>Remote?</label>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="color">Color</label>
                    <input onChange={onChangeHandler} type="color" name="color" className='form-control  form-control-color d-block mx-auto' value={form.color} />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="numJobs">Number of Jobs Available</label>
                    <input onChange={onChangeHandler} type="number" name="numJobs" className='form-control' value={form.numJobs}/>
                    <span className='text-danger'>{error.numJobs && error.numJobs.message}</span>
                </div>
                <div className='d-inline-flex'>
                    <input type="submit" className='btn btn-success btn-lg m-3' value={"Update"}/>
                    <Link to="/" className='btn btn-primary btn-lg m-3'>Back</Link>
                </div>
            </form>
        </div>
    )
}

export default Update;