import React from "react";
import StudentsSidebar from "../../Components/Models/Students/Sidebar";
import { Outlet } from "react-router-dom";
import { Container, Box, Avatar, Typography, Card, CardContent } from '@mui/material';

const repositories = [
  { name: 'Adrián Alberto Sánchez Arévalo', description: 'Todas mis tareas', visibility: 'Público' },
  { name: 'Tienda Pina', description: 'Tienda Pina', visibility: 'Público' },
];


export default function Profile(){
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
        
        {/* Profile Header */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
        >
          <Avatar src="path_to_your_image" alt="Profile Image" sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }} />
          <Box ml={{ md: 2 }}>
            <Typography variant="h6">el pollo buey</Typography>
            <Typography variant="subtitle1">el pollo buey</Typography>
          </Box>
        </Box>
        
        {/* Repositories */}
        <Box width="100%" mt={3}>
          <Typography variant="h6">Repositorios populares</Typography>
          {repositories.map((repo, index) => (
            <Card key={index} variant="outlined" sx={{ margin: '10px 0' }}>
              <CardContent>
                <Typography variant="h6">{repo.name}</Typography>
                <Typography variant="body2">{repo.description}</Typography>
                <Typography variant="caption">{repo.visibility}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        
        {/* Contribution Activity */}
        <Box width="100%" mt={3}>
          <Typography variant="h6">57 contribuciones en el último año</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* Aquí puedes insertar un componente gráfico para mostrar la actividad */}
            <Typography>Contributions Graph</Typography>
          </Box>
        </Box>
        
      </Box>
    </Container>
  );

}