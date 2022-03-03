import React from 'react'

const CSharpNewMember = (props) => {
    const { data, onChange, handleFormSubmit, handleClose } = props;
    return (
        <>
            <h2 className="h2_center"> {data.id ? "CSharp Member Edit" : "CSharp Member New"}</h2>
            <p className="p-flex">
                <label className="left-label-width">StaffCode: </label>
                <input type="text" id='staffcode' className="right-label-width" value={data.staffcode} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">Name: </label>
                <input type="text" id='name' className="right-label-width" value={data.name} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">LoginName: </label>
                <input type="text" id='loginname' className="right-label-width" value={data.loginname} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">password: </label>
                <input type="password" id='password' className="right-label-width" value={data.password} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">confirm: </label>
                <input type="password" id='confirmpassword' className="right-label-width" value={data.confirmpassword} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">email: </label>
                <input type="text" id='email' className="right-label-width" value={data.email} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">Phone: </label>
                <input type="text" id='phonenumber' className="right-label-width" value={data.phonenumber} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">skype: </label>
                <input type="text" id='skypeid' className="right-label-width" value={data.skypeid} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">github: </label>
                <input type="text" id='githubid' className="right-label-width" value={data.githubid} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">DOB: </label>

                <input type="text" id='dob' className="right-label-width" value={data.dob} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">Gender: </label>
                <select id='gender' onChange={e => onChange(e)} value={data.gender}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </p>
            <p className="p-flex">
                <label className="left-label-width">address: </label>
                <input type="text" id='address' className="right-label-width" value={data.address} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">Photo: </label>
                <input type="text" id='photo' className="right-label-width" value={data.photo} onChange={e => onChange(e)} />
            </p>
            <p className="h2_center">
                <button onClick={() => handleFormSubmit()} className="button-size button">{data.id ? "Update" : "Submit"}</button> &nbsp;&nbsp;
                <button onClick={() => handleClose()} className="button-size cancle-button">Cancle</button>
            </p>
        </>
    )
}

export default CSharpNewMember