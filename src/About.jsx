import {
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Link,
  TextField,
  Button,
  Box,Container
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import { Headers } from "./Headers";

const About = () => {
  return (
    <>
      <CssBaseline />
    
            <main>
                <Grid>
                <Box
                        sx={{
                            backgroundImage:
                                'url("https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg")',
                            height: '90vh',
                            backgroundSize: '100% 100%',
                        }}
                    >
                        <Grid
                            py={5}
                            container
                            justifyContent="center"
                            sx={{ height: '100%' }}
                            alignItems="center"
                        >
                            
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    sx={{ color: 'white', fontWeight: 'bold' }}
                                >Vrit Technologies/ About Us <br />
                                    About Us
                                </Typography>
                            </Grid>
                         
                        </Grid>
                    </Box>
                    <Container maxWidth="md">
                        <Grid container spacing={3} py={5}>
                            <Grid item lg={6} md={12} sm={12}>
                                <Typography variant="h4">
                                    About Vrit Technologies.
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={12} sm={12}>
                                <Typography variant="h4">About us</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Vrit Technologies is believed to be one of the
                            popular providers of IT services in Nepal. The
                            company is equipped with fine infrastructure and
                            ideal technology support. Vrit Tech has a broader
                            distribution network so that the business
                            requirements of the partners can be satisfied. Our
                            primary asset is our team of talented, enthusiastic
                            and committed individuals.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Bibek and Umesh Subedi the two co-founders started
                            Vrit Technologies as an information technology
                            startup in 2019. Since the last three years, Vrit
                            technology has helped numerous startups and
                            businesses grow and scale by delivering digital
                            services such as web development, digital marketing,
                            cybersecurity solutions, IoT and business
                            automation, and more.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Our company’s vision is to be an ideal global
                            services and IT Solutions Company. We would attain
                            prominent place in the market by comprehending the
                            needs of customers and working with our partners to
                            provide solutions that real business value.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography variant="subtitle2" align="center" py={2}>
                            If you’re looking for any IT Support or Solutions
                            let’s work together 😊
                        </Typography>
                    </Container>
                    
   
                </Grid>


            </main>
    </>
  );
};

export default About;
