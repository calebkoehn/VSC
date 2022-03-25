import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        image: "",
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
        numChests: null
    })
    const [error, setError] = useState({});
    const [frontEndError, setFrontEndError] = useState('');
    const history = useHistory();
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
        if (e.target.value.length < 3 && e.target.type !== 'number' && e.target.type !== 'checkbox') {
            setFrontEndError("Input must be greater than 3 characters!");
        }
        else {
            setFrontEndError('');
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        ///api/pirates/create
        axios.post("http://localhost:8000/api/pirates/create", form)
            .then(res => {
                console.log("I'm here.")
                history.push('/')
            })
            .catch(err=> {
                console.log("problem with form.")
                
                console.log(err.response)
                setError(err.response.data.errors);
            })

    }

    return (
        <div>
            <h1>Add A Pirate</h1>
            <Link to="/" className='btn btn-primary btn-lg m-3 text-right'>Crew Board</Link>
            <form className='col-5 mx-auto mb-2' onSubmit={onSubmitHandler}>
                <div className='form-group mb-2'>
                    <label htmlFor="name">Pirate Name:</label>
                    <input onChange={onChangeHandler} type="text" name="name" className='form-control' />
                    <span className='text-danger'>{error.name && error.name.message}</span>
                    {
                        frontEndError ?
                        <p style={{color: 'red'}}>{frontEndError}</p>:
                        ''
                    }
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="image">Image Url:</label>
                    <input onChange={onChangeHandler} type="text" name="image" className='form-control' />
                    <span className='text-danger'>{error.image && error.image.message}</span>
                    {
                        frontEndError ?
                        <p style={{color: 'red'}}>{frontEndError}</p>:
                        ''
                    }
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="numChests"># of Treasure Chests:</label>
                    <input onChange={onChangeHandler} type="number" name="numChests" className='form-control' />
                    <span className='text-danger'>{error.numChests && error.numChests.message}</span>
                    {
                        frontEndError ?
                        <p style={{color: 'red'}}>{frontEndError}</p>:
                        ''
                    }
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="catchPhrase">Pirate Catch Phrases:</label>
                    <input onChange={onChangeHandler} type="text" name="catchPhrase" className='form-control' />
                    <span className='text-danger'>{error.catchPhrase && error.catchPhrase.message}</span>
                    {
                        frontEndError ?
                        <p style={{color: 'red'}}>{frontEndError}</p>:
                        ''
                    }
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Crew Position:</label>
                    <select className="form-select" onChange={onChangeHandler} name='crewPosition'>
                        <option selected>Choose Your Position</option>
                        <option value="Captain">Captain</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="BoatSwain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <span className='text-danger'>{error.crewPosition && error.crewPosition.message}</span>
                </div>
                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name="pegLeg" className='form-check-input' checked={form.pegLeg}/>
                    <label htmlFor="pegLeg" className='form-check-label'>Peg Leg</label>
                </div>
                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name="eyePatch" className='form-check-input' checked={form.eyePatch}/>
                    <label htmlFor="eyePatch" className='form-check-label'>Eye Patch</label>
                </div>
                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name="hookHand" className='form-check-input' checked={form.hookHand}/>
                    <label htmlFor="hookHand" className='form-check-label'>Hook Hand</label>
                </div>
                <div className='d-inline-flex'>
                    <input type="submit" className='btn btn-primary btn-lg m-3' value="Add Pirate" />
                </div>
            </form>
        </div>
    )
}

export default Create;