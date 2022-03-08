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
const FormData = ({data}) => {
    return(
        <div>
            <h2>Form Data</h2>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Confirm Password: {data.confirmPassword}</p>
        </div>
    )
}

export default Form
