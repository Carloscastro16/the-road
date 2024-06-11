import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';

function OfferSection() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        ¿Qué ofrecemos?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" component="h3">
              Afila tus habilidades de codificación
            </Typography>
            <Typography variant="body1" component="p" sx={{ my: 2 }}>
              Lleva tus conocimientos al siguiente nivel enfrentándote a desafíos continuos. Mejora tu lógica, optimiza tus soluciones y conviértete en un desarrollador más eficiente y seguro.
            </Typography>
            <Button variant="contained" color="primary">
              Unirme
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" component="h4">
                  Mantente actualizado
                </Typography>
                <Typography variant="body1" component="p" sx={{ my: 2 }}>
                  Conoce las tendencias más recientes, explora nuevas herramientas y mejora tus habilidades.
                </Typography>
                <Button variant="contained" color="primary">
                  Imagen Ilustrativa
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" component="h4">
                  Gana puntos y compite con tus amigos
                </Typography>
                <Typography variant="body1" component="p" sx={{ my: 2 }}>
                  Cada vez que resuelvas una actividad, ganarás puntos que te ayudarán a escalar en nuestro ranking general.
                </Typography>
                <Button variant="contained" color="primary">
                  Imagen Ilustrativa
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OfferSection;
