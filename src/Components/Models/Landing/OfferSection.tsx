import React from 'react';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Img from '../../../assets/Img/Codigo.png';
import Img2 from '../../../assets/images/Vector.png';
import Img3 from '../../../assets/images/Vector2.png';


const ImageContainer = styled('div')(({ theme }) => ({
  backgroundImage: `url(${Img})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  [theme.breakpoints.up('md')]: {
    flex: '0.7 0 200px', 
    height: 'auto', 
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3, 5),
  [theme.breakpoints.up('md')]: {
    flex: 2,
    alignItems: 'flex-start',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#419593',
  color: 'white',
  marginBottom: theme.spacing(3),
  width: 'fit-content',
  alignSelf: 'center',
  [theme.breakpoints.up('md')]: {
    alignSelf: 'flex-start',
  },
}));

const AlignLeftTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const Ofrecemos = () => {
  return (
    <Box sx={{ padding: 11 }}>
      <Typography variant="h3" align="center" gutterBottom>
        ¿Qué ofrecemos?
      </Typography>

      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          mb: 4,
          borderRadius: '10px',
          backgroundColor: 'rgba(145, 139, 198, 0.30)',
        

        }}
      >
        <ContentContainer>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 ,fontWeight: 'bold' }}>
            Afila tus habilidades de codificación
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3, pr: { md: 12 } }}>
            Lleva tus conocimientos al siguiente nivel enfrentándote a desafíos continuos. Mejora tu lógica, optimiza tus soluciones y conviértete en un desarrollador más eficiente y seguro. ¡Empieza hoy y ve el progreso en cada línea de código!
          </Typography>
          <CustomButton>
            Unirme
          </CustomButton>
        </ContentContainer>
        <ImageContainer />
      </Paper>

      <Grid container spacing={5}>
        <Grid item xs={12} md={5} sx={{ mb: { xs: 6, md: 0 } }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              alignItems: { xs: 'center', md: 'flex-start' },
              borderRadius: '20px', 
              background: '#b1ded951',
              backdropFilter: 'blur(40px)'

            }}
          >
            <img src={Img2} alt="Icono" style={{ width: '50px', marginBottom: '16px' }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Mantente actualizado
            </Typography>
            <Typography variant="body1" gutterBottom>
              Conoce las tendencias más recientes, explora nuevas herramientas y mejora tus habilidades para seguir siendo competitivo en el campo tecnológico.
            </Typography>
            <AlignLeftTypography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
              ¡La innovación no espera, y tú tampoco deberías hacerlo!
            </AlignLeftTypography>

          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              alignItems: { xs: 'center', md: 'flex-start' },
              borderRadius: '20px', 
              background: '#b1ded951',
              backdropFilter: 'blur(40px)'
            }}
          >
             <img src={Img3} alt="Icono" style={{ width: '50px', marginBottom: '16px' }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Gana puntos y compite con tus amigos
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cada vez que resuelvas una actividad, ganarás puntos que te ayudarán a escalar en nuestro ranking general. Desafía a tus amigos y a la comunidad mientras mejoras tus habilidades de programación.
            </Typography>
            <AlignLeftTypography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
              ¡Empieza ahora y alcanza la cima!
            </AlignLeftTypography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ofrecemos;
