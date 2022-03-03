import React from 'react'
import { useSelector } from 'react-redux';

const PHP = () => {
    const PHP_data = useSelector(state => state.PHP_Call_Reducer.phpmembers);
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