// components/ActivitiesDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import Swal from 'sweetalert2'
import { Genre } from '../../../Services/Interfaces/Interfaces';
import * as genreService from '../../../Services/Api/GenresService';
import GenreForm from './Forms/GenresForm';

function GenresDataTable({initialData}: any){
  const emptyGenre: Genre = {
    _id: '',
    title: '',
    cantidad: 0,
  }
  const [genres, setGenre] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState<Genre>(emptyGenre);
  const [open, setOpen] = useState(false);
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
  const handleClose = () => {
    setOpen(false);
    setSelectedGenre(emptyGenre);
  };
  const handleEdit = (genre: Genre) => {
    console.log('Abriendo Modal')
    setSelectedGenre(genre);
    setOpen(true);
    console.log('Genero: ', genre)
  };
  const handleFormSubmit = async (data: Genre) => {
    try {
      const response = await genreService.updateGenreById(data);
      console.log(response);
      handleClose();
      await getGenres();
      return response;
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
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
        console.log('usuario con: ', id)
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
    <>
      <Box sx={{
        width: '100%',
        padding: '24px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        overflowX: 'scroll'
      }}>
        <DataGrid
          rows={initialData}
          columns={columns}
          loading={loading}
          getRowId={(row) => row._id || ''}
        />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Genero</DialogTitle>
        <DialogContent>
          <GenreForm initialData={selectedGenre} onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GenresDataTable;
