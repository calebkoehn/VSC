import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update title and price
    return (
        <div className='container text-center col-4'>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label className='h6 mt-3'>Title</label><br />
                    <input type="text" className='form-control' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className='form-group'>
                    <label className='h6 mt-3'>Price</label><br />
                    <input type="text" className='form-control' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div className='form-group'>
                    <label className='h6 mt-3'>Description</label><br />
                    <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <input type="submit" className='btn btn-primary mt-3 mb-5' value={"Create"} />
            </form>
        </div>
    )
}
