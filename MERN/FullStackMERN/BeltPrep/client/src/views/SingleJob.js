import React, { useEffect, useState } from 'react';
import { useParams,Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const SingleJob = (props) => {
    const [job, setJob] = useState({});
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/jobs/" + id)
        .then(res=> {
            setJob(res.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    },[id])

    const onDeleteHandler = (_id) => {
        if(window.confirm("Are you sure you want to remove this job?")){
            axios.delete(`http://localhost:8000/api/jobs/${_id}`)
            .then(res => {
                history.push('/');
            })
            .catch(err=>console.log(err.response));
        }
    }

    return (
        <div className='w-75 mx-auto p-5' style={{backgroundColor:job.color}}>
            <h1>{job.title} at {job.company}</h1>
            <h2>Salary: {job.salary}</h2>
            <h2>Remote? {job.remote ? "Yes" : "No"}</h2>
            <h2>Active? {job.active ? "Yes" : "No"}</h2>

            <Link to={`/jobs/${id}/edit`} className='btn btn-secondary btn-lg m-3'>Edit</Link>
            <button onClick={onDeleteHandler} className='btn btn-danger btn-lg m-3'>Delete</button>
            <Link to="/" className='btn btn-primary btn-lg m-3'>Back</Link>
        </div>
    )
}

export default SingleJob;