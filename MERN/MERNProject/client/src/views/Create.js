import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: null,
        sensitive: false,
        image: "",
        skinType: "",
        productLink: ""
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
        
        axios.post("http://localhost:8000/api/products/create", form)
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
            <h1>Add A New Product</h1>
            <form className='col-5 mx-auto mb-2' onSubmit={onSubmitHandler}>
                <div className='form-group mb-2'>
                    <label htmlFor="name">Product Name:</label>
                    <input onChange={onChangeHandler} type="text" name="name" className='form-control' />
                    <span className='text-danger'>{error.name && error.name.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="description">Description:</label>
                    <input onChange={onChangeHandler} type="text" name="description" className='form-control' />
                    <span className='text-danger'>{error.description && error.description.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="price">Price:</label>
                    <input onChange={onChangeHandler} type="number" name="price" className='form-control' />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="image">Image Url:</label>
                    <input onChange={onChangeHandler} type="text" name="image" className='form-control' />
                    <span className='text-danger'>{error.image && error.image.message}</span>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Skin Type:</label>
                    <select className="form-select" onChange={onChangeHandler} name='skinType'>
                        <option selected>Choose Your Skin Type</option>
                        <option value="Oily">Oily</option>
                        <option value="Normal">Normal</option>
                        <option value="Dry">Dry</option>
                        <option value="Combination">Combination</option>
                    </select>
                    <span className='text-danger'>{error.skinType && error.skinType.message}</span>
                </div>
                <div className='form-check w-50 mx-auto d-block mb-3 text-center'>
                    <input onChange={onChangeHandler} type="checkbox" name="sensitive" className='form-check-input' checked={form.sensitive}/>
                    <label htmlFor="sensitive" className='form-check-label'>For Sensitive Skin?</label>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="productLink">Product Url:</label>
                    <input onChange={onChangeHandler} type="text" name="productLink" className='form-control' />
                    <span className='text-danger'>{error.productLink && error.productLink.message}</span>
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