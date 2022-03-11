import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [list, setList] = useState([]);
    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
            setList(response.data.results)
            console.log(response);
        })
        .catch(err => {console.log("error", err)})
    }
    return (
        <>
            <button className='btn btn-primary mb-5 mt-5' onClick={getPokemon}>Display Pokemon</button>
            {
                list.map((pokemon, index) => {
                    return (
                        <ol className='container list-inline'>
                            <li key={index}>{pokemon.name}</li>
                        </ol>
                    )
                })
            }
        </>
    )
}

export default Pokemon;