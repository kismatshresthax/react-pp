import {
  Button,
  Grid,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  
  TableRow,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = ({setEditData}) => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getUserData = () => {
    
      let getData = axios
          .get('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users')
          .then(({ data }) => {
              console.log(data);
              setUsers(data);
          });
      console.log(getData);
  };


  // change page handler
  const handleChangePage = (event, newPage) => {
      console.log(newPage);
      setPage(newPage);
  };
const openCreateUser =() => {
    navigate('/bbb')
}
 

  useEffect(() => {
   
      getUserData();
  }, []);
  const handleEdit =(user) => {
    setEditData({edit:true,value:user})
    navigate('/bbb')

  }
  const handleDelete = async(id) => {
    try{
   await axios.delete(`https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users/${id}`)

    getUserData();
  }catch (e) {


  }
  }


  return (
      <>
          <Grid sx={{ margin: '5rem 0 0 0 ', padding: '2rem' }}>
              <Button variant='contained'onClick={openCreateUser} >
                 Create User
              </Button>
              <TableContainer component={Paper}>
                  <Table
                      sx={{
                          maxWidth: 800,
                          padding: '5rem',
                          margin: 'auto',
                      }}
                      aria-label="simple table"
                  >
                      <TableHead>
                          <TableRow>
                              <TableCell>S.N</TableCell>
                              <TableCell>First Name</TableCell>
                              <TableCell>Last Name</TableCell>
                              <TableCell>Action</TableCell>
                          </TableRow>
                      </TableHead>
                     
                          <TableBody>
                              <TableRow>
                                  <TableCell>
                                  </TableCell>
                              </TableRow>
                          </TableBody>
                   
                          <TableBody>
                              {users
                                  .slice(
                                      page * rowsPerPage - rowsPerPage,
                                      page * rowsPerPage
                                  )
                                  .map((user, index) => (
                                      <TableRow
                                          key={user.id}
                                          sx={{
                                              '&:last-child td, &:last-child th':
                                                  {
                                                      border: 0,
                                                  },
                                          }}
                                      >
                                          <TableCell>
                                              {rowsPerPage * (page - 1) +
                                                  index +
                                                  1}
                                          </TableCell>
                                          <TableCell
                                              component="th"
                                              scope="row"
                                          >
                                              {user.firstname}
                                          </TableCell>
                                          <TableCell align="right">
                                              {user.lastname}
                                          </TableCell>
                                          <TableCell>
                                            <Grid container spacing={2}>
                                            <Grid item>
                                                <Button type='button'
                                                variant='contained'
                                                onClick={()=>{
                                                    handleEdit(user)

                                                }}>
Edit
                                                </Button>
                                            </Grid>
                                            <Grid item>
                                                <Button type='button'
                                                variant='contained'
                                                onClick={()=>{
                                                    handleDelete(user?.id)

                                                }}>
Delete
                                                </Button>
                                            </Grid>
                                            
                                            </Grid>
                                          </TableCell>
                                      </TableRow>
                                  ))}
                          </TableBody>
                      
                  </Table>
                 
                  <Grid container justifyContent="center" py={3}>
                      <Grid item>
                          <Pagination
                              count={Math.ceil(users?.length / rowsPerPage)}
                              color="secondary"
                              onChange={handleChangePage}
                          />
                      </Grid>
                  </Grid>
              </TableContainer>
          </Grid>
      </>
  );
};

export default Users;