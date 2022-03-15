import React,{ useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Form = () => {
    let [categories, setCategories] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('people');
    let [id, setId] = useState(null);
    const history = useHistory();
    useEffect(()=> {
        axios.get('https://swapi.dev/api/')
        .then(res=> {
            setCategories(Object.keys(res.data))
        })
        .catch(err=> console.log(err))
    }, [])
    const OnSubmitHandler=(e)=> {
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`)
    }
    return(
        <div className="container text-center col-6">
            <form onSubmit={OnSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="category" className=" h5 mt-3">Search For:</label>
                    <select className="form-select" onChange={(e)=>{setSelectedCategory(e.target.value)}} className="form-control">
                        {
                            categories.map((category, idx)=>{
                                return(
                                <option key={idx} value={category}>{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id" className="h5 mt-3">ID:</label>
                    <input type="number" onChange={(e)=>{setId(e.target.value)}} className="form-control" />
                    <input type="submit" value="Search" className="btn btn-primary mt-3 mb-2" />
                </div>
            </form>
        </div>
    )
}

export default Form;