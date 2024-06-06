import React from 'react'
import ResponsiveAppBar from '../Header/Header'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'


const OurMenu = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Box sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{background:'rgb(246, 246, 246)',width:'80%',display:'flex',height:'50px',justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{color:'rgb(82, 82, 82)',fontSize:'18px',textAlign:'center'}}>Post Coming Soon !</Typography>

            </Box>

        </Box>
    </div>
  )
}

export default OurMenu