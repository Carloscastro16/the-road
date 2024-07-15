// components/ActivitiesDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import { Activity, Preguntas } from '../../../Services/Interfaces/Interfaces'; // Asegúrate de importar la interfaz correcta
import * as activitiesService from '../../../Services/Api/ActivitiesService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ActivitiesDataTable: React.FC = () => {
  const navigate = useNavigate()
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 180 },
    { field: 'title', headerName: 'Titulo', width: 110 },
    { field: 'description', headerName: 'Descripción', width: 300 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            onClick={() => handleEdit(params.row._id)}
            color="primary"
            aria-label="edit"
          >
            <EditNotifications />
          </IconButton>
          {/* Asumiendo que handleDelete está implementado correctamente */}
          <IconButton
            onClick={() => confirmDelete(params.row._id)}
            color="secondary"
            aria-label="delete"
          >
            <GridDeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const confirmDelete = (id: string) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('usuario con: ',id)
        handleDelete(id);
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        );
      }
    });
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await activitiesService.deleteActivityById(id);
      getActivities();
      return response
    } catch (error) {
      console.error('Error eliminando actividad:', error);
      throw new Error;
    }
  };

  const handleEdit = (activity: Activity) => {
    console.log('Editar actividad:', activity);
    navigate(`editar-actividad/${activity}`)
    // Aquí podrías abrir un diálogo o navegar a la página de edición
  };
  const getActivities = async () => {
    try {
      const data = await activitiesService.fetchActivities();
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
