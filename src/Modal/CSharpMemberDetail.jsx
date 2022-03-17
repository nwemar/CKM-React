import React from 'react';

const CSharpMemberDetail = (props) => {
    const { getMember } = props;

    return <>
        <h2 className="h2_center">CSharp Member Details </h2>
        {/* <h2 style={h2_center}>CSharp Member Details </h2> */}

        <p className="p-flex">
            <label className="left-label-width">ID: </label>
            <label className="right-label-width">{getMember.id}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">StaffCode: </label>
            <label className="right-label-width">{getMember.staffcode}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Name: </label>
            <label className="right-label-width">{getMember.name}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">DOB: </label>
            <label className="right-label-width">{getMember.dob}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Gender: </label>
            <label className="right-label-width">{getMember.gender}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Address: </label>
            <label className="right-label-width">{getMember.address}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Email: </label>
            <label className="right-label-width">{getMember.email}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Skype: </label>
            <label className="right-label-width">{getMember.skypeid}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Github: </label>
            <label className="right-label-width">{getMember.githubid}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Phone: </label>
            <label className="right-label-width">{getMember.phonenumber}</label>
        </p>
        <p className="p-flex">
            <label className="left-label-width">Photo: </label>
            {/* <label className="right-label-width"><img src={getMember.photo} /></label> */}
            <label className="right-label-width"><img src={`data:image/jpeg;base64,${getMember.photo64}`} /></label>
        </p>
    </>

}

export default CSharpMemberDetail
