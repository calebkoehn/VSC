import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import axios from 'axios';

const Index = (props) => {
    const [athletes, setAthletes] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/athletes")
            .then((res) => {
                setAthletes(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return(
    <div className="container text-center">
        <h1>All Athletes</h1>
        <Link to="/create">Add Athlete</Link>
        <ul>
            {athletes.map((athlete, i) => {
                return(
                    <li key={i}><Link to={"/" + athlete._id}>{athlete.firstName} {athlete.lastName}</Link> | <Link to={"/" +athlete._id + "/edit"}>Edit</Link> | <DeleteButton/></li>
                )
            })}
            
        </ul>
    </div>
    )
}

export default Index;