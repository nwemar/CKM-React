import React, { useState } from 'react'
import { connect } from 'react-redux';
import '../style/Csharp.scss';

// import ModalBox from '../Modal/ModalBox';
import { useDispatch } from 'react-redux'
// import CSharpEditMember from '../Modal/CSharpEditMember';
// import CSharpNewMember from '../Modal/CSharpNewMember';
// import CSharpMemberDetail from '../Modal/CSharpMemberDetail';

const ModalBox = React.lazy(() => import('../Modal/ModalBox'));
const CSharpMemberDetail = React.lazy(() => import('../Modal/CSharpMemberDetail'));
const CSharpNewMember = React.lazy(() => import('../Modal/CSharpNewMember'));

const Csharp = (csharpmembers) => {
    const [getMember, setGetMember] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const [getEditMember, setGetEditMember] = React.useState(null);


    const [getStatus, setgetStatus] = React.useState(null);

    const ShowDetail = (id, key) => {
        const item = csharpmembers.csharpmembers.find(item => item.id === id)
        setGetMember(item);
        setgetStatus('Show');

        if (item.id === id) {
            setOpen(true);
        }
    }
    const [formData, setFormData] = useState(
        {
            id: "",
            staffcode: "",
            name: "",
            loginname: "",
            password: "",
            confirmpassword: "",
            email: "",
            phonenumber: "",
            skypeid: "",
            githubid: "",
            dob: "",
            gender: "",
            address: "",
            photo: "",
        });

    const EditCSharpMember = (id, key) => {
        const item = csharpmembers.csharpmembers.find(item => item.id === id)
        setGetEditMember(item);
        setgetStatus('Edit');
        setFormData(item);

        if (item.id === id) {
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false)
    }
    const NewCsharpMemeber = () => {
        setOpen(true);
        setgetStatus('New');
        setFormData("");
    }
    const onChange = (e) => {
        const { value, id } = e.target;

        setFormData({ ...formData, [id]: value })
    }
    const dispatch = useDispatch(csharpmembers);
    const handleFormSubmit = () => {
        if (formData.id) {
            dispatch({ type: "EDIT_CSHARP_MEMBER", payload: formData });
        }
        else {
            formData.id = csharpmembers.csharpmembers.length + 1;
            dispatch({ type: "ADD_CSHARP_MEMBER", payload: formData });
        }
        setOpen(false);
    }

    return (
        <div className='Csharp'>
            <h2>CSharp Team </h2>
            <button onClick={() => NewCsharpMemeber()} className='csharp-new-button'> New Member </button>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        csharpmembers.csharpmembers.map((contact, key) => (
                            <tr key={key}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phonenumber}</td>
                                <td className='image-td'><img src={contact.photo} /></td>
                                <td>

                                    <button onClick={() => ShowDetail(contact.id, key)}>
                                        <i className='fa fa-list'></i>
                                    </button>


                                    &nbsp; <button onClick={() => EditCSharpMember(contact.id, key)}>
                                        <i className='fa fa-pencil'></i>
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ModalBox DetailModalopen={open} handleClose={handleClose}>
                {getStatus === 'Show' ? <CSharpMemberDetail getMember={getMember} /> : <CSharpNewMember data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} handleClose={handleClose} />}
            </ModalBox>
        </div >
    )

}


const mapStateToProps = state => {
    return {
        csharpmembers: state.CSharp_Call_Reducer.csharpmembers
    }
}

export default connect(mapStateToProps)(Csharp);