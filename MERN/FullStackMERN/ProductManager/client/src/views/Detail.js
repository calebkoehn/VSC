import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    
    const {id} = useParams();
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='mt-4 text-center'>
            <Link to={"/product/" + product._id + "/edit"} className='text-right'>
                Edit
            </Link>
            <h3 className='mb-5'>{product.title}</h3>
            <h6 className='mb-2'>Price: $ {product.price}</h6>
            <h6>Description: {product.description}</h6>
            <button className=' btn btn-danger ms-5 mb-3' onClick={(e) => { deleteProduct(product._id) }}>
                Delete
            </button>
        </div>
    )
}

export default Detail;