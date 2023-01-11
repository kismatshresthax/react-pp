import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react'

const Login = (props) => {
    const[loginInput,setLoginInput] = useState({
        login_username:"",
        login_password:"",
    });
    const{login_username,login_password}= loginInput;

    const{userInput,setIsLogin}=props;
    const{Email,Password}=userInput;


const handleLoginUsername = ({target:{value}}) => {
    setLoginInput({...loginInput, login_username:value});
}

const handleLoginPassword = ({target:{value}}) => {
    setLoginInput({...loginInput, login_password:value});

}
const  handleLoginForm =(event) =>{
    event.preventDefault();
    if(login_username === "" && login_password ===""){
        alert("Enter your username and password");

    } else if( login_username ===""){
        alert("enter your username");

    }else if( login_password ===""){
        alert("enter your password");
    }else if(login_username!==Email){
        alert("invalid Email")
    }else if (login_password!==Password){
        alert("invalid password")
    }else{
        setIsLogin(true);
    }

}
console.log(loginInput);

  return (
    <>
    <form onSubmit={handleLoginForm}>
        <h1 className='Login'>Login</h1><br />
        <TextField  label="Email" variant="standard" type="text"  onChange={handleLoginUsername} value={login_username} /><br />
        <TextField label="Password" variant="standard" type="text" onChange={handleLoginPassword} value={login_password} /><br /><br />
        <Button variant="outlined" type='sumbit' onClick={handleLoginForm} >Login</Button>
    </form>
    
    </>
  )
}

export default Login