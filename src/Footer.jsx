import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <Typography variant='h6' align='center'>
            Footer

        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary"  component="p">
somthing here to give the footer a purpose!
        </Typography>
        <Typography variant='body2' color="textSecondary" align='center'>
            {`copyright @ ${new Date().getFullYear()}`}

        </Typography>



    </footer>
    
    
    
    </>
  )
}

export default Footer