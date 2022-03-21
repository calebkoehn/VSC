import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    
    const {id} = useParams();


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='mt-4 text-center'>
            <h3>{product.title}</h3>
            <ul className='list-unstyled'>
                <li>Price: $ {product.price}</li>
                <li>Description: {product.description}</li>
            </ul>
        </div>
    )
}

export default Detail;