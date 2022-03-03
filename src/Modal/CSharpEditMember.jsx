import React from 'react'

const CSharpEditMember = (props) => {
    const { getEditMember } = props;

    const h2_center = {
        textAlign: 'center'
    }
    const img_width = {
        width: '30%'
    }
    const Left_label_width = {
        width: '30%',
        fontWeight: 'bold'
    }
    const Right_label_width = {
        width: '70%'
    }
    const p_flex = {
        display: 'flex',
        lineHeight: 2,
        padding: '2%'
    }
    return (
        <>
            <h2 style={h2_center}>CSharp Member Eidt</h2>

            <p style={p_flex}>
                <label style={Left_label_width}>ID: </label>
                <label style={Right_label_width}>{getEditMember.id}</label>
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>StaffCode: </label>
                <label style={Right_label_width}>{getEditMember.staffcode}</label>
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Name: </label>
                <input type="text" value={getEditMember.name} style={Right_label_width} />
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>DOB: </label>
                <input type="text" value={getEditMember.dob} style={Right_label_width} />
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Gender: </label>


                <label className="radio-inline">
                    <input type="radio" name="gender" id="male"
                        checked={getEditMember.gender === "male"}
                        value={getEditMember.gender} />
                    Male
                </label>
                &nbsp; &nbsp;
                <label className="radio-inline">
                    <input type="radio" name="gender" id="female"
                        checked={getEditMember.gender === "female"}
                        value={getEditMember.gender} />
                    Female
                </label>
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Address: </label>
                <textarea type="text" rows="5" style={Right_label_width} >{getEditMember.address}</textarea>
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Email: </label>
                <input type="text" value={getEditMember.email} style={Right_label_width} />
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Skype: </label>
                <input type="text" value={getEditMember.skypeid} style={Right_label_width} />
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Github: </label>
                <input type="text" value={getEditMember.githubid} style={Right_label_width} />
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Phone: </label>
                <input type="text" value={getEditMember.phonenumber} style={Right_label_width} />
            </p>
            <p style={p_flex}>
                <label style={Left_label_width}>Photo: </label>
                <label style={Right_label_width}><img src={getEditMember.photo} style={img_width} /></label>
            </p>

            <p style={p_flex, h2_center}>
                <button>Save</button>
                <button>Cancle</button>
            </p>
        </>
    )
}

export default CSharpEditMember