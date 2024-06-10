import { Box, Container, Grid, Typography } from '@mui/material'
import facebook from '../../assets/facebook.jpg'
import img from '../../assets/restaurant-interior.jpg'

import React from 'react'

const Social = () => {
    const rootStyle = {
        marginTop: '110px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }, // Flex direction changes at different breakpoints
    };

    const imageStyle = {
        width: '10%',
        // height: 'auto',
        maxWidth: { xs: '100%', md: '50%' }, // Adjust image width based on breakpoints
    };

    const textContainerStyle = {
        padding: '8px',
        padding: { xs: '8px', md: '24px' }, // Adjust padding based on breakpoints
        position: "rel"
    };

    const titleStyle = {
        fontWeight: 'bold',
        fontSize: '40px',
        marginBottom: {xs:'0px',md:"40px"},
        color: 'rgb(27, 27, 27)',
     
    };

    const descriptionStyle = {
        fontSize: '22px',
        color: 'rgb(94, 94, 94)',
        fontWeight:400
    };
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '50px', flexDirection: 'column', gap: '50px' }}>
                <Typography sx={{ fontWeight: 600, textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)', color: 'rgb(27, 27, 27)', textTransform: 'uppercase', fontSize: '35px' }}>
                    Social

                </Typography>
                <img src={facebook} alt='facebook' style={{ width: '5%', height: '5%' }}></img>

            </Box>
            <Container>
                <Box sx={rootStyle}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={6}>
                            <img src={img} alt="Gift Vouchers" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            position: 'relative', 
                            padding: { xs: '8px', md: '24px' },
                        }}>
                            <Box sx={{position:'absolute',bottom:{xs:"-71%",md:'2%'}}}>

                                <Typography variant="h4" sx={titleStyle}>
                                    GIFT VOUCHERS
                                </Typography>
                                <Typography variant="body1" sx={descriptionStyle}>
                                Send a gift voucher  to friends and family or buy it now for  your future use.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </Box>
    )
}

export default Social