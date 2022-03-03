import React from 'react'
import { connect } from 'react-redux'

const ReactTeam = (reactmembers) => {
    console.log(reactmembers);
    return (

        <div>ReactTeam
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        reactmembers.reactmembers.map((contact, id) => (
                            <tr key={id}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.number}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        reactmembers: state.React_Call_Reducer.reactmembers
    }
}

export default connect(mapStateToProps)(ReactTeam);