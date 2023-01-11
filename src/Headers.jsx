import {
    AppBar,
  
    Grid,
    Toolbar,
    Typography,
    Link,
    TextField,
    Button,
  } from "@mui/material";
  import React from "react";
  import InfoIcon from "@mui/icons-material/Info";
  import SearchIcon from "@mui/icons-material/Search";

export const Headers = () => {
  return (
    <>
     <AppBar color="secondary" position="fixed">
                <Toolbar>
                    <Grid
                        container
                        spacing={30}
                        alignItems="center"
                    >
                        <Grid item>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <InfoIcon/>
                                   
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Photos
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                justifyContent="space-between"
                                spacing={20}
                            >
                                <Grid item>
                                    <Link 
                                        component='button'
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                    >
<a href="/">Home</a>   
                                 </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/about"
                                        component="button"
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                        
                                    >
                                      <a href="/about">About</a> 
               
                                        
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                    >
                                       <Typography variant="h6">Contact</Typography>
                                        
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item mr={2}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Search"
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="inlined">
                                        <SearchIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
    </>
  )
}

