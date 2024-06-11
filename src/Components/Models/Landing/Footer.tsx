import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f0f0f0', mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3">
            LOGO
          </Typography>
          <Typography variant="body2" component="p">
            Lenguajes disponibles:
          </Typography>
          <Typography variant="body2" component="p">
            JavaScript, HTML, CSS, TypeScript, React, Angular, Python
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3">
            Mapa de sitio
          </Typography>
          <Typography variant="body2" component="p">
            Home
          </Typography>
          <Typography variant="body2" component="p">
            Productos
          </Typography>
          <Typography variant="body2" component="p">
            Nosotros
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3">
            Contacto
          </Typography>
          <Typography variant="body2" component="p">
            9983771000
          </Typography>
          <Typography variant="body2" component="p">
            The Road
          </Typography>
          <Typography variant="body2" component="p">
            Desarrolladores:
          </Typography>
          <Typography variant="body2" component="p">
            Eduardo Chan Caamal, Carlos André Castro Rodríguez, Maximiliano Gómez Bacab, Adrián Alberto Sánchez Arévalo
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
