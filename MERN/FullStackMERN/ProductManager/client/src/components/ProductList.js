import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return(
        <div>
            {props.products.map( (products, i) => {
                return <p key={i}>
                    <Link to={'/products/' + products._id}>
                        <u>{products.title}</u>
                    </Link>
                    
                    <button className=' btn btn-danger ms-5 mb-3' onClick={(e)=>{deleteProduct(products._id)}}>
                        Delete
                    </button>
                    
                </p>
            })}
        </div>
    )
}


export default ProductList