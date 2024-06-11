import React from 'react';
import { Box, Typography, Grid, Paper,Button } from '@mui/material';

function AboutUsSection() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        ¿Quiénes somos?
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} md={3} key={item}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" component="h3">
                Mantente actualizado
              </Typography>
              <Button variant="contained" color="primary">
                Imagen Ilustrativa
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutUsSection;
