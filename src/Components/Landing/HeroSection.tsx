import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/Img/Banner.png';



function HeroSection() {
  return (
    <Box
      sx={{
        height: '80vh',
        textAlign: 'center',
        py: 5,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
        <Typography variant="h4" component="h2" sx={{ color: 'black' }}>
          Domina la programación
        </Typography>
        <Typography variant="h5" component="p" sx={{ my: 3, color: 'black' }}>
          Practica constantemente
        </Typography>
        <Typography variant="body1" component="p" sx={{ my: 3, color: 'black' }}>
          Mejora tus habilidades de desarrollo entrenando continuamente con desafíos actuales y potencia tus habilidades.
        </Typography>
        <Button variant="contained" color="primary">
          Unirme
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
