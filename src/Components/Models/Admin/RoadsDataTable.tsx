// components/RoadsDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Loader from '../shared/Loader';

export default function RoadsDataTable({ initialData }: any) {
  const [roads, setRoads] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Titulo', width: 110 },
    { field: 'easyDescription', headerName: 'Descripción Corta', width: 250 },
    { field: 'fullDescription', headerName: 'Descripción Larga', width: 300 },
    {
      field: 'actions',
      headerName: 'Actions',
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
          <IconButton
            onClick={() => handleDelete(params.row._id)}
            color="secondary"
            aria-label="delete"
          >
            <GridDeleteIcon />
          </IconButton>
        </>
      )
    }
  ];
  const mobileColumns: GridColDef[] = [
    { field: 'title', headerName: 'Titulo', width: 300 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            onClick={() => handleEdit(params.row._id)}
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
      )
    }
  ];

  const handleDelete = async (id: string) => {
    try {
      setRoads((prevRows) => prevRows.filter((row: any) => row._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`editar/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    if (initialData && initialData.length > 0) {
      setRoads(initialData);
      console.log('initialData', initialData);
    } else {
      console.log('initialData is empty or undefined', initialData);
    }
    setLoading(false);
  }, [initialData]);

  return (
    <Box sx={{
      width: '100%',
      padding: '24px',
      borderRadius: '10px',
      backgroundColor: '#FFFFFF',
      overflowX: 'scroll'
    }}>
      {loading ? (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}>
          <Loader />
        </Box>
      ) : (
        <DataGrid
          rows={roads}
          columns={isTablet ? mobileColumns : columns}
          loading={loading}
          getRowId={(row) => row._id}
        />
      )}
    </Box>
  );
};