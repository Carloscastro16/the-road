import React from 'react';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Img from '../../../assets/Img/Codigo.png';

const ImageContainer = styled('div')({
  backgroundImage: `url(${Img})`, // Ajusta la ruta de tu imagen
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 'auto', // Ajusta la altura automáticamente
  flex: '0.7 0 200px', // Controla el tamaño de la imagen
});

const Ofrecemos = () => {
  return (
    <Box sx={{ padding: 11 }}>
      <Typography variant="h3" align="center" gutterBottom>
        ¿Qué ofrecemos?
      </Typography>

      <Paper elevation={3} sx={{ display: 'flex', mb: 4,borderRadius:'10px' }}>
        <Box sx={{ flex: 2, p: 3, pr: 5, pl:5}}> {/* Ajusta el padding para dejar un margen derecho */}
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Afila tus habilidades de codificación
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3, pr:12}}>
            Lleva tus conocimientos al siguiente nivel enfrentándote a desafíos continuos. Mejora tu lógica, optimiza tus soluciones y conviértete en un desarrollador más eficiente y seguro. ¡Empieza hoy y ve el progreso en cada línea de código!
          </Typography>
          <Button variant="contained" color="primary" sx={{ mb: 3 }}>
            Unirme
          </Button>
        </Box>
        <ImageContainer />
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Mantente actualizado
            </Typography>
            <Typography variant="body1" gutterBottom>
              Conoce las tendencias más recientes, explora nuevas herramientas y mejora tus habilidades para seguir siendo competitivo en el campo tecnológico.
            </Typography>
            <Typography variant="body1" gutterBottom>
              ¡La innovación no espera, y tú tampoco deberías hacerlo!
            </Typography>
            <Button variant="outlined" color="primary">
              IMAGEN ILUSTRATIVA
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Gana puntos y compite con tus amigos
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cada vez que resuelvas una actividad, ganarás puntos que te ayudarán a escalar en nuestro ranking general. Desafía a tus amigos y a la comunidad mientras mejoras tus habilidades de programación.
            </Typography>
            <Typography variant="body1" gutterBottom>
              ¡Empieza ahora y alcanza la cima!
            </Typography>
            <Button variant="outlined" color="primary">
              IMAGEN ILUSTRATIVA
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ofrecemos;
