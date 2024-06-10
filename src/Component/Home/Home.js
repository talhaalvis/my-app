import React from 'react'
import bg from '../../assets/restaurant-interior.jpg'
import bg1 from '../../assets/pexels-chanwalrus-941861.jpg'
import review from '../../assets/review.png'
import Header from '../Header/Header'
import { Box, Button, Typography } from '@mui/material'
import NewSlider from './Slider'
import Social from './Social'
import VisitUs from './VisitUs'
import Gmap from './Gmap'
const Home = () => {
  return (
    <>

      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "100%",
        position: 'relative'
      }}>
        <Header />

        <Box >
          <Box sx={{ width:{xs:'250px',md:'250px',lg:'300px'}, height: {xs:'234px',md:'250px',lg:'300px'}, background: 'rgb(111, 82, 67)', borderRadius: "100%", position: 'absolute', bottom: '-10%', right: '5%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', flexDirection: 'column' }}>
              <Typography sx={{ color: 'rgb(255, 255, 255)', textShadow: '2px 2px 0px rgba(255, 255, 255, 0.3)', fontWeight: 600, fontSize: {xs:'20px',md:'30px',lg:'40px'} }}>BOOK NOW!!</Typography>
              <Button style={{ background: 'rgb(255, 255, 255)', color: 'rgb(48, 48, 48)', textTransform: 'uppercase' }}>Reserved Now</Button>
            </Box>

          </Box>
        </Box>
      </div>

      <div style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",paddingBottom:'30px'
      }}>
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', pt: '40px' }}>
          <Typography sx={{ fontSize: '40px', color: 'rgb(255, 255, 255)', fontWeight: 600 }}>REVIEWS</Typography>
          <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '20px', mt: '40px' }}>
            <Typography sx={{ fontSize: '40px', color: 'rgb(255, 255, 255)', fontWeight: 600 }}>4.1</Typography>
            <Box>
              <Typography sx={{ fontSize: '20px', color: 'rgb(255, 255, 255)', fontWeight: 400, mb: '10px' }}>Billericay Treat</Typography>
              <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                <img src={review} alt='review' style={{ width: '70%', height: '40px' }}></img>
                <Box sx={{ display: 'flex', gap: '12px' }}>

                  <Typography sx={{ fontSize: '20px', color: 'rgb(255, 255, 255)', fontWeight: 400 }}>757</Typography>
                  <Typography sx={{ fontSize: '20px', color: 'rgb(255, 255, 255)', fontWeight: 400 }}>Reviews</Typography>
                </Box>

              </Box>
            </Box>

          </Box>
      
          <NewSlider/>

          
        </Box>

      </div>
        <Social/>
        <VisitUs/>
        <Gmap/>
    </>
  )
}

export default Home