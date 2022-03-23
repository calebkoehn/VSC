import React from "react";
import DeleteButton from "../components/DeleteButton";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Edit = (props) => {
    const {id} = props;
    const history = useHistory('');
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/athletes/" + id, data)
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>We are Editing Athlete: {id}</h1>
            <Form onSubmitHandler={onSubmitHandler}/>
            <DeleteButton/>
        </div>
    )
}

export default Edit;