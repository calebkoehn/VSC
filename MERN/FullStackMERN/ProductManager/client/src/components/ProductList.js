import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const ProductList = (props) => {
    return(
        <div>
            {props.products.map( (products, i) =>
                <p key={i}>
                    <Link to={'/products/' + products._id}>
                        <u>{products.title}</u>
                    </Link>
                </p>
            )}
        </div>
    )
}


export default ProductList