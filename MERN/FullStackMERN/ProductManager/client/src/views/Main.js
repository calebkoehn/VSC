import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err=> console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProduct(product.filter(products => products._id != productId));
    }

    return (
        <div>
            <ProductForm/>
            <hr />
            <h1 className='mb-5'>Product List:</h1>
            {loaded && <ProductList products={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
// const [updatingProducts, setUpdatingProducts] = useState(true)

// export default () => {
//     return (
//         <div>
//             <div>
//                 <ProductForm updatingProducts={updatingProducts} setUpdatingProducts={setUpdatingProducts} formType={"create"}/>
//             </div>
//         <hr />
//         <ProductList updatingProducts={updatingProducts} setUpdatingProducts={setUpdatingProducts} />


//         </div>
//     )
// }