// components/UsersDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, styled, useMediaQuery, useTheme } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import { User } from '../../../Services/Interfaces/Interfaces';
import * as usersService from '../../../Services/Api/UsersService';
import Swal from 'sweetalert2';
import UserForm from './Forms/UserForm';
const StyledDataGrid = styled(DataGrid)(() => ({
  '& .MuiDataGrid-row:nth-of-type(odd)': {
    backgroundColor: '#f0f0f0',
    border: 'none' // color gris claro para filas impares
  },
  '& .MuiDataGrid-withBorderColor': {
    border: 'transparent' // color gris claro para filas impares
  },
  '& .MuiDataGrid-cell': {
    borderTop: '0px transparent' // color gris claro para filas impares
  },
}));
function UsersDataTable({ initialData }: any) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<object>({});
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'email', headerName: 'Correo Electrónico', width: 250 },
    { field: 'rolename', headerName: 'Rol', width: 150 },
    { field: 'points', headerName: 'Puntos', width: 150 },
    {
      field: 'creationDate', headerName: 'Fecha de Creación', width: 200, type: 'date',
      valueGetter: ((params) => {
        return new Date(params);
      })
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
  const mobileColumns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'email', headerName: 'Correo Electrónico', width: 250 },
    { field: 'rolename', headerName: 'Rol', width: 150 },
    { field: 'points', headerName: 'Puntos', width: 150 },
    {
      field: 'creationDate', headerName: 'Fecha de Creación', width: 200, type: 'date',
      valueGetter: ((params) => {
        return new Date(params);
      })
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
  const handleFormSubmit = async (data: User) => {
    try {
      const response = await usersService.updateUserById(data);
      console.log(response);
      await getUsers();
      handleClose();
      return response;
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedUser({});
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await usersService.deleteUserById(id);
      await getUsers();
      return response
    } catch (error) {
      console.error('Error eliminando actividad:', error);
      throw new Error;
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const getUsers = async () => {
    try {
      const data = await usersService.fetchUsers();
      const newData = data.data;
      setUsers(newData);
    } catch (error) {
      console.error('Error fetching roads:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
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
        <StyledDataGrid
          rows={users}
          columns={isTablet ? mobileColumns : columns}
          loading={loading}
          getRowId={(row) => row._id || ''}
        />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogContent>
          <UserForm initialData={selectedUser} onSubmit={handleFormSubmit} isEdit={true} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UsersDataTable;
