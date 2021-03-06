import React, { Component, useState } from 'react';
import '../style/Csharp.scss';
import { useSelector } from 'react-redux';

const PHP = () => {
    const PHP_data = useSelector(state => state.PHP_Call_Reducer.phpmembers);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch("http://localhost:3004/phpmembers", requestOptions)
        .then((response) => response.json())
        .then((messages) => { console.log(messages) });

    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get("http://localhost:3004/phpmembers")
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    return (
        <div className='Csharp'>
            <h2>PHP Team </h2>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PHP_data.map((contact, key) => (
                            <tr key={key}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phonenumber}</td>
                                <td className='image-td'><img src={contact.photo} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default PHP