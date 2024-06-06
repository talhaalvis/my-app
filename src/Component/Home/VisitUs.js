import { Box, Button, Container, Grid, TextField, TextareaAutosize, Typography } from '@mui/material'
import SelectInput from '@mui/material/Select/SelectInput'
import React from 'react'

const VisitUs = () => {
    const textAreaStyle = {
        marginTop: '30px',
        height: '110px',
        width: '100%',
        background: 'rgb(246, 246, 246)',
        borderColor: 'rgb(218, 218, 218)',
    };
    return (
        <Box sx={{ mt: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '50px', flexDirection: 'column', gap: '50px' }}>
                <Typography sx={{ fontWeight: 600, textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)', color: 'rgb(27, 27, 27)', textTransform: 'uppercase', fontSize: '35px' }}>
                    VISIT US

                </Typography>
                {/* <img src={facebook} alt='facebook' style={{ width: '5%', height: '5%' }}></img> */}

            </Box>
            <Container>
                <Grid container spacing={8} sx={{ mt: '20px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='p' sx={{ color: 'rgb(27, 27, 27)', fontWeight: 400, fontSize: '16px' }}>CONTACT US</Typography>
                        <Box sx={{ mt: "30px" }}>

                            <TextField sx={{ background: 'rgb(246, 246, 246)', width: '100%', borderColor: 'rgb(218, 218, 218)' }} placeholder='Name'></TextField>
                            <TextField sx={{ background: 'rgb(246, 246, 246)', width: '100%', borderColor: 'rgb(218, 218, 218)', mt: '30px' }} placeholder='Phone'></TextField>
                            <TextField sx={{ background: 'rgb(246, 246, 246)', width: '100%', borderColor: 'rgb(218, 218, 218)', mt: '30px' }} placeholder='Email *' required={true}></TextField>
                            <TextareaAutosize style={textAreaStyle} placeholder='How Can We Serve You' required={true} maxRows={4} ></TextareaAutosize>

                        </Box>
                        <Button sx={{ width: '100%', height: "50px", backgroundColor: "rgb(111, 82, 67)", mt: '30px', color: 'rgb(255, 255, 255)', fontWeight: 700 }}>SEND</Button>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box >

                            <Typography variant='p' sx={{ color: 'rgb(27, 27, 27)', fontWeight: 400, fontSize: '16px' }}>SPECIAL REQUESTS?</Typography>
                            <Typography variant="body1" sx={{ color: 'rgb(94, 94, 94)', mt: '30px', fontWeight: 300, lineHeight: 1.5 }}>
                                Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon!

                            </Typography>
                            <Typography variant='body1' sx={{ color: 'rgb(27, 27, 27)', fontWeight: 400, fontSize: '16px' ,textTransform:'uppercase',mt:'30px'}}> Billericay Treat</Typography>

                            <Typography variant="body1" sx={{ color: 'rgb(94, 94, 94)', mt: '30px', fontWeight: 300, lineHeight: 1.5 }}>
                            14-15 Monmouth Street, Lyme Regis, Dorset, DT7 3PX

                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgb(94, 94, 94)', mt: '30px', fontWeight: 300, lineHeight: 1.5 }}>
                            0141 611 2001

                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgb(94, 94, 94)', mt: '5px', fontWeight: 300, lineHeight: 1.5 }}>
                            clearbusinessbyadrian@gmail.com

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Container>

        </Box>
    )
}

export default VisitUs