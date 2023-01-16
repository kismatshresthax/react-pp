import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateUser = ({editData:{edit,value}}) => {
    const navigate = useNavigate()
    const [userData, setUserData]=useState({
        firstname:  edit? value?.firstname:'',
        lastname:  edit? value?.lastname:''
    })
    const handleSubmit = () => {
        edit? updateData(): postData();
    };
    const {firstname, lastname} = userData
    const handlefirstName = ({target: {value}}) =>{
        
        setUserData({...userData, firstname: value})
    }
    const handlelastName = ({target: {value}}) =>{
        setUserData({...userData, lastname: value})
    }
    const postData = async() => {
        axios.post("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users/${}", {
            firstname,
            lastname,
        }).then((data)=> navigate("/contact"));
    };
    const updateData = () => {
        axios.put(`https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users/${value?.id}`, {
            firstname,
            lastname,
        }).then((data)=> navigate("/contact"));

    }

    
    
    return (
        <>
            <Grid container justifyContent="center">
                <Grid
                    mt={15}
                    container
                    flexDirection="column"
                    alignItems="center"
                    sx={{ maxWidth: 200 }}>
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        size="small"
                        onChange={handlefirstName}
                        value={firstname}
                        sx={{ marginBottom: "20px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        size="small"
                        onChange={handlelastName}
                        value={lastname}
                        sx={{ marginBottom: "20px" }}
                    />
                    <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={handleSubmit}>
                 {edit?"update":"Add"}
                 </Button>
                </Grid>
            </Grid>
        </>
    );
};
