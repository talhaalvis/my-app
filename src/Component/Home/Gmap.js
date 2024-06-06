import { Box, Container } from '@mui/material'
import React from 'react'

const Gmap = () => {
  return (
    <Box sx={{marginTop:'30px'}}>
        <Container>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.6878671175423!2d-2.9356974247297605!3d50.725729667506634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4872794caaea8daf%3A0x44425c25e3fdc824!2s14-15%20Monmouth%20St%2C%20Lyme%20Regis%20DT7%203PX%2C%20UK!5e0!3m2!1sen!2s!4v1717665654696!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

        </iframe>
        </Container>
        {/* <h1 style={{color:'black'}}>helddf</h1> */}

    </Box>
  )
}

export default Gmap