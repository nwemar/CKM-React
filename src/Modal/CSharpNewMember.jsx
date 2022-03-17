import React from 'react'

const CSharpNewMember = (props) => {
    const { data, onChange, handleFormSubmit, handleClose, imageSelectHandler } = props;

    const emptyPhoto = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMVFRUWFRUXFxcVFxcXFRUZFRgXGBoXFRUYHSggGBolGxcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgMCB//EADgQAAIAAwMLAwIFAwUAAAAAAAABAhHwAyFBBAUSMVFhcZGhscEGgdEi4SMyQmLxUnKCEzNDssL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPO2toYVOJySxYH3M+bS1hh/M0uLkaDLs9RRXWf0rb+r2WBqo4m3Ntt7W5vDF8AOredLH+tdX4LBnOxeq0h7dzknXT5E6vA7aCNNTTTW1XlmcVZ2kULnC2ntTlizZ5JnqOGSj+pbdT+AOjBj5JlcFopwuffkZAAAAAAAAAAAAAAAAAAAAAAB5ZTbqCFxRakcrl2WxWsV9ywWC+8jcepH9EK2xdkznZVXFAWqeIlVewIwLVdAg0Kuv7AQrqvYhWB9Wcbhc05Pajo8zZfFapqJXw4rHXhhqZzRvfTMpR8Vx1AbsAAAAAAAAAAAAAAAAAAACMDSepYroFxfY0dV1N36lgc4Hheucvg0broBQAAnVe4qpkqqxK6pyAir+CkKAZmZpyv/TtJ4RXPwzDaPbIbPStIFvXS8DsUykRQAAAAAAAAAAAAAAAABGUjYGnz9lUOi7P9U09RoEbHP6/Gv1NKRrQKyFkABC1VdiICiq68hhXn26gAfdhaOGJRLWnPjXk+BCp6sQOzsLVRJRLFTPU8ckstCCGHZCkewAAAAAAAAAAAAAAAAAAAazPmSacE0vqhv4rFHM1XI7hnPZ6zcoPrh1N3rYBqUq5bgAgDqq1hKqQDAlVWJQ67+SAKqkbLMeSacek1dD3wXn3NcdZmqH8KByk3Cp72klPoBlooAAAAAAAAAAAAAAAAAAAADyymxUcLhepo9SMDi7WBwxOF605VWw866I3uf8i/5Vhr+TRAWq9wKrpz3AA663B1XT34krmWuoBQtuS1u5cXcjtbKBQpJakklwVxyuabPStYFgnPledYgKAAAAAAAAAAAAAAAAAAAAAACYHhlsGlBFDthZxqergjt2cblNloxxQ7ImuTuA867fLArxXsEAVckKrqFVex7ZLk0do5Qqe/BcenIDzs4mmnDrTmpdjr8ltHFCnEpOV6MXIM1w2d7+qLa8OHyarLs4xK3bgf5fp3OTvnhrneB0symnyXPkEV0a0Xt1p+UbWC0TU001uA+wSZQAAAAAAAAABJgUGNbZdZwfmiXDW+hr7bP0C/LC3xuQG4mSKNJTdy3nM22ebWLU1Dw+TAtLRxXxNvjeB09tnexh/Vpf23mBbZ/f6IEt7c+xpnVMAbHJsutbS0gTiu0lcrlc59pm6zhm+G1WyLB/O1GhzJDO2h3TfT7nVIDjsqyaKzejEuGxrVc6xPFm79QZbDL/TSTeLf6eG88swZPBE24lOKGUp6lvA8835pijvj+mHq6vOhsLCGBShUlWs9JFAx8uyjQs4otiu4vUcdVbdpvPUVv+WBcX4NJXECHrYZRFA5wxS7cjzmJAbvJM+YWi/yXlG3yfKoI1OGJPh5WBxpYI2nNNp7U2B2yZUznMlz3Gro1pLarn9zc5LnCztPyxX7HcwMoE0igAAAMHPLlYx+0ucjONT6jjlZpbYl0TfwBztVeFVITJVdAKEJiYBBVXMIVXIDaenYPxG9kPd/Y31rHhjeaX06vzvgq5m4hgbvdwHK5XZOGNp34z468dng2eZsmihem7pq5bZ9jW5da6dpE1qndwvXjqjqoLOcMODkuwHsmGzxsYsGY+eLfQsnti+le/2mBzuXW+naRRbXdwVy8mPVVgWv5IwKq5oCuqGFbAAkCMChOrwwBn5Lne0guf1LZFr568Dd5HnSC0WKex+HqOXsrOd2FfLMxOWrADqgRMAU0HqWK+Bbonzkl5N+cx6gjnay2Qwrz/66Aa4TquIJKtQBOplmCIAWu4ZK3YfcDpPT1lKzntfa4y8422hZxPddxdwzbZ6NlAt3e81/qS2uhg2ub9gNCviub7HbQK5cDioNa4quZ24HxHBO/E5/1Bb6Uag/pU/d/Y6C0j0U28E+hxttaOKJxPFt17TA+JkZZiq68gCroSVewAFFV0JVY9i13+QHAiKmIXurYB7RxaKljXyetlekYkUTd9VyMqwd3MDqcninBC9sKfNA1VjlcoUpq5Ja9i4ADdHIZztJ2sb3y5SXhnXROSmcVaxTbe1t9wPmQmK7kqugFrqAADPqzU2ltaXGbrmfKrkjIzdBO1g/uXefgDroYZJLYkjl8822laxbF9K9vuzpcotVDC4ngmzjG25zxnzxn7gfeTwzihX7kuq+52pxuQ/7kC/dD3S8HZAarP8Ab6Nno4xXey1nOVXNmdnq30rVpaofp98epg15r3ACq6CQVVz5cAIyiuwmAV9cPkirmiiYAIiqsfsAFV1MrJ3cY1VzR75NqdYcAMhN7+oI3UkQDo8uj0bOJ/tfwcedRny0lZRb5I5dVXsBK/gs6+KWsIVx4AKrkEhMTrgBK/k2GYoJ2yexNmBXg23puH8SJ7IZc2n4Azc/2+jZy/qfRX95HOVVe5s8/wBtO00f6V1ZrAMnNi/Fg/uXl+Oh1GV2+hBFFsV294dZHM5nvtoOPg2PqO3klAsb34A0c9ut9d9/uK/mvcCqrAAJEKwDrpvW0fatRGGwH28F+3jdUwlVcBICVV3gtV0BALVXcT2yV6zxPTJ3f7fIGTLf0XyA3UwBsvUkf0wrfPkjn67/ACjaZ/yhRRqFfpTT4uU+RrKrmAQEyICsOv5YqqxEwBuvTakrSJ/t6aT8mlNnktpoZNaPGKLRXJeJgYFvaaUUUW1t/B5hBAZuZV+ND/l/1i+UeecbfTtInhOS4K4+Mkt9BuLHRiS4tS+WeKQEVV7h196xKqqde4qq2gA65CqvJVMC13AAErx4KQVVYgEUgAtV16Hpk7+o8mellrQGXOrvgBogGG3Pe9b31eQB11r3QCYddfvzEiKq5AWRAigQ97S1/Dgh3xRPjcl0TPFfyK7eQCJ9hIswInVcEUVXTmSVXfAFquRKrryLVcuxKrkADKKroBAVEAsxVdA6r3DquMgCYQJMBVVgfdm70fIh1+/kDO5dAOXQAYLCqvYMTrn8gAIfgldgAKQACsVVYgQqZKqsCgSq69ShV0rkAJVdS1VYgVVbADreGSEtV1AAACVXMFJLWBUK31qBFVcwLMOqYCAzlLaD5giuV+G37ADEePF+T4wAA+oFeuIeqtwAEZYfIABfHY+VXMABO4+lqAA+Z3qth9qFVxRQB8N3VvLDeq3fLAAbeATr3YAEieviUoA+VrI3XMACrWw3dXYAAq5lgRQB7wRXLgAAP//Z";

    const UploadImage = () => {
        document.getElementById('photo64').click();
    }
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

                <input type="date" id='dob' className="right-label-width" value={data.dob} onChange={e => onChange(e)} />
            </p>
            <p className="p-flex">
                <label className="left-label-width">Gender: </label>
                <select id='gender' onChange={e => onChange(e)} value={data.gender}>
                    <option value=''>Select One</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </p>
            <p className="p-flex">
                <label className="left-label-width">address: </label>
                <input type="text" id='address' className="right-label-width" value={data.address} onChange={e => onChange(e)} />
            </p>
            {/* <p className="p-flex">
                <label className="left-label-width">Photo: </label>
                <input type="text" id='photo' className="right-label-width" value={data.photo} onChange={e => onChange(e)} />
            </p> */}
            <p className="p-flex">
                <div className='left-label-width'>
                    <button className='btn ' onClick={UploadImage} >File Upload</button>
                </div>


                <input type="file" id="photo64" style={{ display: "none" }} onChange={e => imageSelectHandler(e)} />
                <div className='right-label-width'>
                    {
                        typeof data.photo64 === "undefined" ?
                            <img src={`data:image/jpeg;base64,${emptyPhoto}`} className="upload-image" /> :
                            <img src={`data:image/png;base64,${data.photo64}`} className="upload-image" />
                    }
                </div>
            </p>

            <p className="h2_center">
                <button onClick={() => handleFormSubmit()} className="button-size button">{data.id ? "Update" : "Submit"}</button> &nbsp;&nbsp;
                <button onClick={() => handleClose()} className="button-size cancle-button">Cancle</button>
            </p>
        </>
    )
}

export default CSharpNewMember