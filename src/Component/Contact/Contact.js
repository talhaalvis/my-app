import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import { styled } from '@mui/system';
import img4 from '../../assets/restaurant-interior.jpg'
import Header from '../Header/Header'

const Contact = () => {
  return (
    <>
    <Header/>

    <Box sx={{ bgcolor: 'background.paper', minHeight: '100vh' }}>
      <CssBaseline />
      {/* <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            Restoran
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Service</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Contact</Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Book A Table
          </Button>
        </Toolbar>
      </AppBar> */}

<Box
      py={5}
      sx={{
        backgroundImage: `url(${img4})`, // Replace 'your-image-path.jpg' with your actual image path
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'300px',
     
        position: 'relative',
        display:'flex',
          justifyContent:'center',
          alignItems:'center',
      }}
    >
      {/* Overlay to create the background color */}
      <Box
        sx={{
          
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Color you want to overlay on the background image
          opacity: 0.4, // Adjust opacity as needed
        }}
      >

      </Box>
      {/* <Typography variant="h2" sx={{ fontFamily: 'Heebo, sans-serif', fontWeight: 500, color: '#fff', marginBottom: '1.5rem', zIndex: 2 }}>About Us</Typography> */}
      {/* <Box aria-label="breadcrumb">
        <Link color="inherit" href="#">
          Home
        </Link>
        <Link color="inherit" href="#">
          Pages
        </Link>
        <Typography color="textPrimary">About</Typography>
      </Box> */}
    </Box>

      <Container sx={{ py: 5 }}>
        <Typography variant="h5" color="primary" sx={{ textAlign: 'center', mb: 3 }}>
          Contact Us
        </Typography>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
          Contact For Any Query
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary">
              Booking
            </Typography>
            <Typography>
              <i className="fa fa-envelope-open text-primary me-2"></i>clearbusinessbyadrian@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary">
              General
            </Typography>
            <Typography>
              <i className="fa fa-envelope-open text-primary me-2"></i>clearbusinessbyadrian@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary">
              Technical
            </Typography>
            <Typography>
              <i className="fa fa-envelope-open text-primary me-2"></i>clearbusinessbyadrian@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.6878671175423!2d-2.9356974247297605!3d50.725729667506634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4872794caaea8daf%3A0x44425c25e3fdc824!2s14-15%20Monmouth%20St%2C%20Lyme%20Regis%20DT7%203PX%2C%20UK!5e0!3m2!1sen!2s!4v1717665654696!5m2!1sen!2s"
              frameBorder="0"
              sx={{ width: '100%', height: '100%', minHeight: 350, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="form">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth id="name" label="Your Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth id="email" label="Your Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="subject" label="Subject" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default Contact;
