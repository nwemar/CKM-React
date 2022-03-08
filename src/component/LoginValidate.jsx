
import { useSelector } from 'react-redux';

export const LoginValidate = (values) => {

    let errors = {};
    if (!values.loginname) {
        errors.loginname = "Login Name is requied!";
    }
    if (!values.password) {
        errors.password = "Password is requied!";
    }
    return errors;
}

export default LoginValidate;