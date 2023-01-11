import { Button, formGroupClasses, TextField } from '@mui/material';
import React from 'react'

const SignUpForm = (props) => {
    const { userInput, setUserInput,setIsRegistered} = props;


const{username,Email,Password,confirmPassword}= userInput;

    const handleUsername = ({ target: { value } }) => {
        setUserInput({ ...userInput, username: value.trim() });
    };
    const handleEmail = ({ target: { value } }) => {
        setUserInput({ ...userInput, Email: value.trim() });
    };
    const handlePassword = ({ target: { value } }) => {
        setUserInput({ ...userInput, Password: value.trim() });
    };
    const handleConfirmPassword = ({ target: { value } }) => {
        setUserInput({ ...userInput, confirmPassword: value.trim() });
    };
    const handleSignUpForm = (e) => {
    e.preventDefault();
    if(username===""&&Email===""&&Password===""&&confirmPassword===""){
    alert("Please fill the required fields")
    }else if(username==""){
        alert("enter username")

    }else if(Email==""){
        alert("enter Email")
    }else if(Password==""){
        alert("enter password")
    }else if(confirmPassword==""){
        alert("confirm your password")

    }else if(Password!==confirmPassword){
alert("password much matches")
    }else{
      
        setIsRegistered(true)

    }

    }
  return (
    <>
    <form
    id='form'
     action="" >
        <h1>Sign up</h1>
        <TextField label="Username" variant="standard" type="text" onChange={handleUsername}  value = {username}/> <br />
        <TextField  label="Email" variant="standard" type="text" onChange={handleEmail}  value={Email}/><br />
        <TextField  label="Password" variant="standard" type="text" onChange={handlePassword}  value={Password}/><br />
        <TextField  label="Confirm Password" variant="standard" type="text" onChange={handleConfirmPassword} value={confirmPassword}/><br /><br />
        <Button variant="outlined" type='sumbit' onClick={handleSignUpForm} >Sign up</Button>
    </form>
    
    </>
  )
}

export default SignUpForm