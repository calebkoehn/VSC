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
        <div className='container text-center mt-5 col-6'>
            <div>
                <h2>Form</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label> 
                    <input type="text" className="form-control" onChange={onChangeHandler} name="firstName" />
                    <p>
                        {inputs.firstName.length > 0 && inputs.firstName.length < 2? "First Name must be at least 2 characters.": ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label> 
                    <input type="text" className="form-control" onChange={onChangeHandler} name="lastName" />
                    <p>
                        {inputs.lastName.length > 0 && inputs.lastName.length < 2? "Last Name must be at least 2 characters.": ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label> 
                    <input type="email" className="form-control" onChange={onChangeHandler} name="email"/>
                    <p>
                        {inputs.email.length > 0 && inputs.email.length < 5? "Email must be at least 5 characters.": ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label> 
                    <input type="password" className="form-control" onChange={onChangeHandler} name="password"/>
                    <p>
                        {inputs.password.length > 0 && inputs.password.length < 8? "Password must be at least 8 characters.": ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label> 
                    <input type="password" className="form-control" onChange={onChangeHandler} name="confirmPassword"/>
                    <p>
                        {inputs.password.length !== inputs.confirmPassword.length? "Passwords must match.": ""}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Form