import React from 'react';
import { Box, Typography, Grid, Link, Chip } from '@mui/material';

const Footer = () => {
  const languages = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Angular', 'Python'];
  const developers = [
    'Eduardo Chan Caamal',
    'Carlos André Castro Rodriguez',
    'Maximiliano Gomez Bacab',
    'Adrian Alberto Sanchez Arevalo',
  ];

  return (
    <Box sx={{ backgroundColor: '#D1DCEE', padding: 4, marginTop: 4 }}>
      <Grid container spacing={4} sx={{ paddingLeft: 2, paddingRight: 2 }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            LOGO
          </Typography>
          <Typography variant="body1" sx={{fontWeight: 'bold' }}>Lenguajes disponibles</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
            {languages.map((lang, index) => (
              <Chip label={lang} key={index} sx={{ margin: 0.5,backgroundColor: '#82c6c1',color: '#ffffff',fontWeight: 'bold' }} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <Typography variant="h6" gutterBottom>
            Mapa de sitio
          </Typography>
          <Typography variant="body1">
            <Link href="#">Home</Link>
          </Typography>
          <Typography variant="body1">
            <Link href="#">Productos</Link>
          </Typography>
          <Typography variant="body1">
            <Link href="#">Nosotros</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <Typography variant="h6" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body1">9983711000</Typography>
          <Typography variant="body1">The Road</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>
            Desarrolladores
          </Typography>
          {developers.map((dev, index) => (
            <Typography variant="body2" key={index}>
              {dev}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
