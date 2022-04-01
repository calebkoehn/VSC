import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [products, setProducts]= useState([]);
    useEffect(()=> {

        axios.get("http://localhost:8000/api/products/findAll")
            .then(res=> {
                setProducts(res.data);
            })
            .catch(err=> {
                console.log(err.response);
            })
    },[])

    const onDeleteHandler = (_id, arrIndex) => {
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                const copyState = [...products];
                copyState.splice(arrIndex,1);
                setProducts(copyState);
            })
            .catch(err=>console.log(err.response));
    }

    return (
        <div className='col-8 mx-auto'>
            <Link to="/products/create">Add A New Product</Link>
            <h1>Skincare We're Currently Obsessed With!</h1>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Sensitive Skin?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            
                <tbody>
                    {
                        products.map((item, i) => {
                            return <tr key={i}>
                            <td><Link to={`/products/${item._id}`}>{item.name}</Link></td>
                            <div className='w-25 p-3 mx-auto'>
                                <img src={item.image} className='mw-100' />
                            </div>
                            <td>{item.sensitive ? "yes" : "no"}</td>
                            <td><Link to={`/products/${item._id}/edit`} className='btn btn-secondary btn-sm'>Edit</Link> <button onClick={()=>onDeleteHandler(item._id,i)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;