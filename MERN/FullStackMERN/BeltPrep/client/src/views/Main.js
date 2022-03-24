import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [jobs, setJobs]= useState([]);
    useEffect(()=> {

        axios.get("http://localhost:8000/api/jobs/findAll")
            .then(res=> {
                setJobs(res.data);
            })
            .catch(err=> {
                console.log(err.response);
            })
    },[])

    const onDeleteHandler = (_id, arrIndex) => {
        axios.delete(`http://localhost:8000/api/jobs/${_id}`)
            .then(res => {
                const copyState = [...jobs];
                copyState.splice(arrIndex,1);
                setJobs(copyState);
            })
            .catch(err=>console.log(err.response));
    }

    return (
        <div className='col-8 mx-auto'>
            <Link to="/jobs/create">Create A New Job</Link>
            <h1>Here are your Jobs You Applied For!</h1>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Remote?</th>
                        <th>Number of Positions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            
                <tbody>
                    {
                        jobs.map((item, i) => {
                            // const style={
                            //     backgroundColor: item.color,
                            //     opacity: item.active ? 1 : 0.33
                            // }
                            return <tr key={i}>
                            <td><Link to={`/jobs/${item._id}`}>{item.title}</Link></td>
                            <td>{item.company}</td>
                            <td>{item.salary}</td>
                            <td>{item.remote ? "yes" : "no"}</td>
                            <td>{item.numJobs}</td>
                            <td><button className='btn btn-secondary btn-sm'>Edit</button> | <button onClick={()=>onDeleteHandler(item._id,i)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;