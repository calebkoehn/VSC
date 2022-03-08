import React, { useState } from 'react'

const Form = (props) => {
    const { inputs, setInputs } = props;

    const onChangeHandler = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='container text-center'>
            <div className="text-center mt-5 col-6 border border-dark">
                <h2>Form</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label> 
                    <input type="text" className="form-control" onChange={onChangeHandler} name="firstName" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label> 
                    <input type="text" className="form-control" onChange={onChangeHandler} name="lastName" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label> 
                    <input type="email" className="form-control" onChange={onChangeHandler} name="email"/>
                
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label> 
                    <input type="password" className="form-control" onChange={onChangeHandler} name="password"/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label> 
                    <input type="password" className="form-control" onChange={onChangeHandler} name="confirmPassword"/>
                    
                </div>
            </div>
        </div>
    );
};


export default Form
