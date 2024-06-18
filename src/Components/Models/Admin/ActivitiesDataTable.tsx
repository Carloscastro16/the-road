// components/ActivitiesDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import axios from 'axios';
import { Activity, Preguntas } from '../../../Services/Interfaces/Interfaces'; // Asegúrate de importar la interfaz correcta
import { fetchActivities } from '@/Services/Api/ActivitiesService';

const ActivitiesDataTable: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 180 },
    { field: 'title', headerName: 'Titulo', width: 110 },
    { field: 'description', headerName: 'Descripción', width: 300 },
    {
      field: 'questions',
      headerName: 'Preguntas',
      width: 200,
      valueGetter: (params: Preguntas[]) => {
        const questions = params.map((question: Preguntas) => question.name).join(', ');
        return questions;
      },
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 150,
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
      setActivities((prevActivities) => prevActivities.filter((activity) => activity._id !== id));
    } catch (error) {
      console.error('Error eliminando actividad:', error);
    }
  };

  const handleEdit = (activity: Activity) => {
    console.log('Editar actividad:', activity);
    // Aquí podrías abrir un diálogo o navegar a la página de edición
  };
  const getActivities = async () => {
    try {
      const data = await fetchActivities();
      const newData = data.data;
      setActivities(newData);
    } catch (error) {
      console.error('Error fetching roads:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getActivities();
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
        rows={activities}
        columns={columns}
        loading={loading}
        getRowId={(row) => row._id || ''}
      />
    </Box>
  );
};

export default ActivitiesDataTable;
