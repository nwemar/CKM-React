import React, { useState } from 'react'
import '../style/login.scss';


export const Login = (props) => {
    const { onChange, handleLoginSubmit } = props;

    return (

        <div className="login">
            <div className="login-triangle"></div>

            <h2 className="login-header">Log in</h2>

            <form className="login-container" onSubmit={(e) => handleLoginSubmit(e)}>
                <p><input type="text" placeholder='enter login name' id='loginname' onChange={e => onChange(e)} /></p>
                <p><input type="password" placeholder='enter password' id='password' onChange={e => onChange(e)} /></p>
                <p><input type="submit" value="Log in" /></p>
            </form>
        </div>
    )

}

export default Login;

