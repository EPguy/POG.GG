import React, {useEffect} from 'react';
import LoginForm from '../components/Login/LoginForm';
import axios from 'axios';
const Login = () => {
    useEffect(() => {
        axios.post("http://192.168.137.1:8080/joinRequest?user_id=k021229&user_pw=48a48a48a&user_name=김주성")
        .then(resposne => console.log(resposne))
        .catch(error => console.log(error))
    },[])
    return (
        <>
            <LoginForm/>
        </>
    )
}
export default Login;