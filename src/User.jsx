import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  const getpostsuser = (user) => {
    fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data in Api");
        setUser(data);
      });
  };
  useEffect(() => {
    getpostsuser();
  }, []);
  return (
    <>
{user?.map((user) =>{
  return (
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
       
              <TableCell>s.n</TableCell>
              <TableCell >first name</TableCell>
              <TableCell >Last name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
             
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.id}</TableCell> */}
                <TableCell align="right">{user.firstname}</TableCell>
                <TableCell align="right">{user.Lastname}</TableCell>
              </TableRow>
         
          </TableBody>
        </Table>
      </TableContainer>

    
  )
     })} 
    </>
  )
 
};

export default User;
