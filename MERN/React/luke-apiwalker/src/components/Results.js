import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Results = () => {
    const { category, id} = useParams();
    let [info, setInfo] = useState({});
    useEffect(()=> {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            setInfo(response.data)
        })
        .catch(err=>console.log(err))
    }, [category,id])
    return(
        <div className="container text-center">
            <hr className="mb-5"/>
            {
                category === "people"?
                    <>
                    <h1 className="mb-5">Name: {info.name}</h1>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                    <h3>Gender: {info.gender}</h3>
                    <h3>Birth Year: {info.birth_year}</h3>
                    </>
                : category === "planets"?
                    <>
                    <h1 className="mb-5">Name: {info.name}</h1>
                    <h3>Climate: {info.climate}</h3>
                    <h3>Terrain: {info.terrain}</h3>
                    <h3>Population: {info.population}</h3>
                    </>
                : category === "films"?
                    <>
                    <h1 className="mb-5">Title: {info.title}</h1>
                    <h3>Director: {info.director}</h3>
                    <h3>Release Date: {info.release_date}</h3>
                    </>
                : category === "starships"?
                    <>
                    <h1 className="mb-5">Name: {info.name}</h1>
                    <h3>Model: {info.model}</h3>
                    <h3>Manufacturer: {info.manufacturer}</h3>
                    <h3>Length: {info.length}</h3>
                    </>
                :
                <>
                <h1>These are not the droids you're looking for!</h1>
                </>
            }
        </div>
    )
}

export default Results;

