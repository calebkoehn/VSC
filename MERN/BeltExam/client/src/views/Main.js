import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const Main = (props) => {
    const [pirates, setPirates]= useState([]);
    useEffect(()=> {

        axios.get("http://localhost:8000/api/pirates/findAll")
            .then(res=> {
                setPirates(_.orderBy(res.data,['name'],['asc']));
            })
            .catch(err=> {
                console.log(err.response);
            })
    },[])

    const onDeleteHandler = (_id, arrIndex) => {
        if(window.confirm("Are you sure you want to remove this pirate?")){
            axios.delete(`http://localhost:8000/api/pirates/${_id}`)
                .then(res => {
                    const copyState = [...pirates];
                    copyState.splice(arrIndex,1);
                    setPirates(copyState);
                })
                .catch(err=>console.log(err.response));
        }
    }

    return (
        <div className='col-8 mx-auto'>
            <Link to="/pirates/create">Add A Pirate</Link>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            
                <tbody>
                    {
                        pirates.map((item, i) => {
                            return <tr key={i}>
                            <td><Link to={`/pirates/${item._id}/view`}>{item.name}</Link></td>
                            <img src={item.image} />
                            <td><Link to={`/pirates/${item._id}/view`} className='btn btn-secondary btn-sm'>View Pirate</Link> | <button onClick={()=>onDeleteHandler(item._id,i)} className='btn btn-danger btn-sm'>Walk the Plank</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;