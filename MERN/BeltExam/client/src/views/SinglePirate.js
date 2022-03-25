import React, { useEffect, useState } from 'react';
import { useParams,Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const SinglePirate = (props) => {
    const [pirate, setPirate] = useState({});
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pirates/${id}/view`)
        .then(res=> {
            setPirate(res.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    },[id])


    return (
        <div className='container text-center'>
            <h1>{pirate.name}</h1>
            <img src={pirate.image} />
            <h2>"{pirate.catchPhrase}"</h2>
            <hr className='mb-5'/>
            <div className='text-right mt-5'>
                <h1 className='mb-3'>About:</h1>
                <h2>Position: {pirate.crewPosition}</h2>
                <h2>Treasures: {pirate.numChests}</h2>
                <h2>Peg Leg: {pirate.pegLeg ? "Yes" : "No"} </h2>
                <h2>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</h2>
                <h2>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</h2>

                <Link to="/" className='btn btn-primary btn-lg m-3'>Back</Link>
            </div>
        </div>
    
    )
}

export default SinglePirate;