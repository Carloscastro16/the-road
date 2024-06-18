// components/ActivitiesDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import axios from 'axios';
import { Activity } from '../../../Services/Interfaces/Interfaces'; // Asegúrate de importar la interfaz correcta
import { fetchGenres } from '../../../Services/Api/GenresService';

const GenresDataTable: React.FC = () => {
  const [genres, setGenre] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 280 },
    { field: 'title', headerName: 'Titulo', width: 210 },
    { field: 'count', headerName: 'Cantidad de Vistas', width: 300 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 250,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            onClick={() => handleEdit(params.row)}
            color="primary"
            aria-label="edit"
          >
            <EditNotifications />
          </IconButton>
          {/* Asumiendo que handleDelete está implementado correctamente */}
          <IconButton
            onClick={() => handleDelete(params.row._id)}
            color="secondary"
            aria-label="delete"
          >
            <GridDeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://localhost:7219/api/Activities/deleteActivity/${id}`);
      setGenre((prevActivities) => prevActivities.filter((activity) => activity._id !== id));
    } catch (error) {
      console.error('Error eliminando actividad:', error);
    }
  };

  const handleEdit = (activity: Activity) => {
    console.log('Editar actividad:', activity);
    // Aquí podrías abrir un diálogo o navegar a la página de edición
  };
  const getGenres = async () => {
    try {
      const data = await fetchGenres();
      const newData = data.data;
      setGenre(newData);
    } catch (error) {
      console.error('Error fetching roads:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <Box sx={{
      width: '100%',
      padding: '24px',
      borderRadius: '10px',
      backgroundColor: '#FFFFFF',
      overflowX: 'scroll'
    }}>
      <DataGrid
        rows={genres}
        columns={columns}
        loading={loading}
        getRowId={(row) => row._id || ''}
      />
    </Box>
  );
};

export default GenresDataTable;
