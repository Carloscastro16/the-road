// components/UsersDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import axios from 'axios';
import { User } from '../../../Services/Interfaces/Interfaces';
import * as usersService from '../../../Services/Api/UsersService';

const UsersDataTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'email', headerName: 'Correo Electrónico', width: 250 },
    { field: 'rolename', headerName: 'Rol', width: 150 },
    { field: 'creationDate', headerName: 'Fecha de Creación', width: 200, type: 'date',
        valueGetter: ((params)=>{
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
      await axios.delete(`https://localhost:7219/api/Users/deleteUser/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error eliminando usuario:', error);
    }
  };

  const handleEdit = (user: User) => {
    console.log('Editar usuario:', user);
    // Aquí podrías abrir un diálogo o navegar a la página de edición
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
    <Box sx={{
      width: '100%',
      padding: '24px',
      borderRadius: '10px',
      backgroundColor: '#FFFFFF',
      overflowX: 'scroll'
    }}>
      <DataGrid
        rows={users}
        columns={columns}
        loading={loading}
        getRowId={(row) => row._id || ''}
      />
    </Box>
  );
};

export default UsersDataTable;
