import React, { useState } from 'react'

const FormData = ({data}) => {
    return(
        <div className='container text-center'>
            <h2>Form Data</h2>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Confirm Password: {data.confirmPassword}</p>
        </div>
    )
}

export default FormData