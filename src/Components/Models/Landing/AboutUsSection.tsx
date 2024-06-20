import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, } from '@mui/material';
import Img1 from '../../../assets/images/Perfil.jpg'; 

const AboutUs = () => {
  const teamMembers = [
    { name: 'Carlos Castro', role: 'Backend' },
    { name: 'Ana Pérez', role: 'Frontend' },
    { name: 'Luis Gómez', role: 'UI/UX' },
    { name: 'Marta Díaz', role: 'Full Stack' },
  ];

  return (
    <Box sx={{ padding: 10 }}>
      <Typography variant="h3" align="center" gutterBottom>
        ¿Quiénes somos?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={6} sm={6} md={3} key={index} sx={{ borderRadius: '10px',}}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={Img1} 
                alt={member.name}
                sx={{ height: { xs: 260, sm: 290, md: 400 }, objectFit: 'cover' ,borderRadius: '10px',}}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
