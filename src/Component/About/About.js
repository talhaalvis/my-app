import React from 'react';
import { Container, Typography, Breadcrumbs, Link, Grid, Box, Button, } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import img1 from '../../assets/pic1.jpg'; // Import images from your assets
import img2 from '../../assets/pic2.jpg';
import img3 from '../../assets/pic3.jpg';
import img4 from '../../assets/restaurant-interior.jpg';
import Header from '../../Component/Header/Header'

// const useStyles = makeStyles((theme) => ({
//   sectionTitle: {
//     fontFamily: 'Heebo, sans-serif',
//     fontWeight: 500,
//     color: theme.palette.primary.main,
//     marginBottom: theme.spacing(4),
//   },
//   teamItem: {
//     borderRadius: '10px',
//     overflow: 'hidden',
//     padding: theme.spacing(4),
//     '& img': {
//       width: '100%',
//       borderRadius: '10px',
//     },
//   },
//   btnPrimary: {
//     color: '#fff',
//     backgroundColor: theme.palette.primary.main,
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

const About = () => {
  // const classes = useStyles();

  return (
    <>
    <Header/>

     <Box
      py={5}
      sx={{
        backgroundImage: `url(${img4})`, // Replace 'your-image-path.jpg' with your actual image path
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'250px',
     
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
      <Typography variant="h2" sx={{ fontFamily: 'Heebo, sans-serif', fontWeight: 500, color: '#fff', marginBottom: '1.5rem', zIndex: 2 }}>About Us</Typography>
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
    <Container maxWidth="xl">

      <Grid container spacing={5} alignItems="center" sx={{mt:'20px'}}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={6}>
              <img src={img1} alt="About 1" style={{ width: '100%', borderRadius: '10px' }} />
            </Grid>
            <Grid item xs={6} lg={6}>
              <img src={img2} alt="About 2" style={{ width: '100%', borderRadius: '10px', marginTop: '25%' }} />
            </Grid>
            <Grid item xs={6} lg={6}>
              <img src={img3} alt="About 3" style={{ width: '100%', borderRadius: '10px' }} />
            </Grid>
            <Grid item xs={6} lg={6}>
              <img src={img4} alt="About 4" style={{ width: '100%', borderRadius: '10px' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h4" style={{ fontFamily: 'Heebo, sans-serif', fontWeight: 500, color: '#1976d2', marginBottom: '1.5rem' }}>Welcome to Billericay Treat</Typography>
            <Typography variant="body1" paragraph>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
            </Typography>
            <Typography variant="body1" paragraph>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box borderLeft="5px solid" borderColor="primary.main" px={3} py={1}>
                  <Typography variant="h2">15</Typography>
                  <Typography variant="subtitle1">Years of</Typography>
                  <Typography variant="subtitle2" component="h6">Experience</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box borderLeft="5px solid" borderColor="primary.main" px={3} py={1}>
                  <Typography variant="h2">50</Typography>
                  <Typography variant="subtitle1">Popular</Typography>
                  <Typography variant="subtitle2" component="h6">Master Chefs</Typography>
                </Box>
              </Grid>
            </Grid>
            <Button variant="contained" sx={{ color: '#fff', backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#125699' } ,mt:'20px'}} >Read More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default About;
