// components/RoadsDataTable.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import { fetchRoads } from '../../../Services/Api/RoadsService';
import { Box, IconButton } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import axios from 'axios';
import { Activity, RoadData } from '@/Services/Interfaces/Interfaces';


const RoadsDataTable: React.FC = () => {
  const [roads, setRoads] = useState([]);
  /* const [selectedUser, setSelectedUser] = useState(); */
  const [loading, setLoading] = useState(true);
  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 180 },
    { field: 'title', headerName: 'Titulo', width: 110 },
    { field: 'easyDescription', headerName: 'Descripción Corta', width: 250 },
    { field: 'fullDescription', headerName: 'Descripción Larga', width: 300 },
    {
      field: 'activities', headerName: 'Activities', width: 200,
      valueGetter: ((params: Activity[]) => {
        const value = params.map((activity: Activity) => activity.title).join(', ')
        return value
      })
    },
    {
      field: 'actions',
      headerName: 'Actions',
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
            onClick={() => handleDelete(params.row.id)}
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
      await axios.delete(`https://localhost:7219/api/Users/deleteUser/${id}`);
      setRoads((prevRows) => prevRows.filter((row: RoadData) => row._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (road: RoadData) => {
    /* setSelectedUser(user); */
  };
  const getRoads = async () => {
    try {
      const data = await fetchRoads();
      setRoads(data.data);
    } catch (error) {
      console.error('Error fetching roads:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    getRoads();
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
        rows={roads}
        columns={columns}
        loading={loading}
        getRowId={(row) => row._id || ''}
      />
    </Box>
  );
};

export default RoadsDataTable;
