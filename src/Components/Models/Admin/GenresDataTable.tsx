// components/ActivitiesDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import Swal from 'sweetalert2'
import { Genre } from '../../../Services/Interfaces/Interfaces';
import * as genreService from '../../../Services/Api/GenresService';
const GenresDataTable: React.FC = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 280 },
    { field: 'title', headerName: 'Titulo', width: 210 },
    { field: 'cantidad', headerName: 'Cantidad de Vistas', width: 300 },
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
      const response = await genreService.deleteGenreById(id);
      /* setGenre((prevActivities) => prevActivities.filter((activity) => activity._id !== id)); */
      getGenres();
      return response
    } catch (error) {
      console.error('Error eliminando actividad:', error);
      throw new Error;
    }
  };

  const handleEdit = (activity: Genre) => {
    console.log('Editar actividad:', activity);
    // Aquí podrías abrir un diálogo o navegar a la página de edición
  };
  const getGenres = async () => {
    try {
      const data = await genreService.fetchGenres();
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
