import axios from "axios";
import React from "react";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";

const Create = (props) => {
    const history = useHistory();
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/athletes", data)
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            Create A New Athlete:
            <Form
                onSubmitHandler={onSubmitHandler}
            />
        </div>
    )
}

export default Create;