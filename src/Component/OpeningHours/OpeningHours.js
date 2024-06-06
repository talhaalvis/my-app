import React from 'react'
import ResponsiveAppBar from '../Header/Header'
import { Box, Container, Typography } from '@mui/material'
import open from '../../assets/open3.jpg'

const OpeningHours = () => {
  return (
    <Box >

      <ResponsiveAppBar/>
      {/* <h1 color='black'>hhekelel</h1> */}
      <Box  sx={{ marginTop: '20px', textAlign: 'center' ,mt:'20px'}}>
          <img
            src={open}
            alt="Opening Hours"
            style={{ width: '100%', borderRadius: '10px' ,height:"450px"}}
          />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" component="h1" style={{ margin: '20px 0', color: '#333' }}>
            Our Opening Hours
          </Typography>
          <Typography variant="h6" component="p" style={{ color: '#555' }}>
            We are open from <strong>1:00 PM to 11:00 PM</strong>, 7 days a week.
          </Typography>
        </Box>
      </Box>

    </Box>
  )
}

export default OpeningHours