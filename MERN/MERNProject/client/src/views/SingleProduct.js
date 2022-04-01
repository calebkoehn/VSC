import React, { useEffect, useState } from 'react';
import { useParams,Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = (props) => {
    const [product, setProduct] = useState({});
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}/view`)
        .then(res=> {
            setProduct(res.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    },[id])


    return (
        <div className='container text-center'>
            <h1>{product.name}</h1>
            <div className='w-25 p-3 mx-auto'>
                <img src={product.image} className='mw-100' />
            </div>    
            <h2>Price: ${product.price}</h2>
            <hr className='mb-5'/>
            <div className='text-right mt-5'>
                <h2>Description: </h2>
                <p>{product.description}</p>
                <h2>Skin Type: {product.skinType}</h2>
                <h2>For Sensitive Skin: {product.sensitive ? "Yes" : "No"} </h2>
                <h2>Product Link: </h2>
                <p><Link>{product.productLink}</Link></p>

                <Link to="/" className='btn btn-primary btn-lg m-3'>Back</Link>
            </div>
        </div>
    
    )
}

export default SingleProduct;