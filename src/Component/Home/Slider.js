import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';
import google from '../../assets/google.svg'

import { useMediaQuery, useTheme } from '@mui/material';

const items = [
  {
    name: "Edward Noble",
    review: "Best Chinese food I've had",
    date: "18/05/2024",
    avatar: "E"
  },
  {
    name: "Andrea Purvis",
    review: "Found by chance on a weekend away. All food piping hot and pleasant...",
    date: "17/05/2024",
    avatar: "A"
  },
  {
    name: "Piotr Kwiasowski",
    review: "This customer did not write a review.",
    date: "17/05/2024",
    avatar: "P"
  },
  {
    name: "Billy Johnson",
    review: "This customer did not write a review.",
    date: "06/05/2024",
    avatar: "v"
  },
  {
    name: "Pauline Daphne",
    review: "I totally enjoyed myself here. Was invited for a friend's birthday and...",
    date: "03/05/2024",
    avatar: "L"
  },
  {
    name: "Cheryl Bates",
    review: "Great find just round the corner from our Sleeperz hotel when sta...",
    date: "28/04/2024",
    avatar: "L"
  },
  {
    name: "Sandali Upeksha",
    review: "Delicious foods and reasonable price for the buffet. Worth to visit...",
    date: "09/04/2024",
    avatar: "M"
  },
  {
    name: "Scott Findlay ",
    review: "This customer did not write a review.",
    date: "31/03/2024",
    avatar: "M"
  },
  {
    name: "Firey Potato  ",
    review: "This customer did not write a review",
    date: " 30/03/2024",
    avatar: "M"
  },
];

const CustomCarousel = styled(Carousel)({
  
});

const NewSlider = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  function chunkArray(array, chunkSize) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
      array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const getChunkSize = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    if (isLg) return 3;
    return 3;
  };

  const chunkSize = getChunkSize();
   const chunkedItems = chunkArray(items, chunkSize);
  const handleNavigate = (item) => {
    navigate(`/details/${item.name}`);
  }
  const handleChange = (index) => {
    setActiveIndex(index);
  };    

  return (
    <div style={{width:'100%',marginTop:'40px'}}>
      <CustomCarousel animation='slide' autoPlay={false} duration={500} indicators={true} navButtonsAlwaysVisible      onChange={(index) => handleChange(index)}>
        {chunkedItems.map((chunk, i) => (
          <Grid container  justifyContent="center" key={i} sx={{paddingLeft:{xs:'90px',md:'30px',lg:'20px'}}}>
            {chunk.map((item, j) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={j}>
                <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 1, height: activeIndex === j ? '330px' : '290px', width:{xs:'70%',md:'70%',lg:'80%'},gap:'20px'}}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, fontSize: 24, marginBottom: 2,mt:'20px' }}>
                    {item.avatar}
                  </Avatar>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} style={{color:'yellow'}}>&#9733;</span> // Star icon
                    ))}
                  </Box>
                  <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                    {item.review}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <img src={google} alt="Google" style={{ width: 20, marginRight: 8 }} />
                    <Typography variant="body2" color="textSecondary">
                      {item.name} - {item.date}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default NewSlider;
