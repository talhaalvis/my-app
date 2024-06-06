import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ background:'rgb(111, 82, 67)',height:'200px',mt:'30px'}}>
        <Container>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography sx={{color:'rgb(254, 254, 254)' ,fontWeight:400,fontSize:'14px',mt:'40px'}}>Copyright © 2023 Yamm Buffet - All Rights Reserved.</Typography>
                <Typography sx={{color:'rgb(254, 254, 254)' ,fontWeight:400,fontSize:'14px',mt:'40px'}}>Powered by GoDaddy Website Builder</Typography>

            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{color:'rgb(254, 254, 254)' ,fontWeight:400,fontSize:'14px',mt:'40px'}}>PRIVACY POLICY</Typography>
                {/* <Typography sx={{color:'rgb(254, 254, 254)' ,fontWeight:400,fontSize:'14px',mt:'40px'}}>Powered by GoDaddy Website Builder</Typography> */}

            </Box>

        </Container>
    </Box>
  )
}

export default Footer