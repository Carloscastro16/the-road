import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import *  as roadsService from '../../Services/Api/RoadsService'
import { RoadData } from "../../Services/Interfaces/Interfaces";
import { useParams } from 'react-router-dom'; 
export default function IndividualRoads(){
    const [roads, setRoad] = useState<RoadData>();
    const { routeId } = useParams();
    const getRoad = async () => {
        try {
            const data = await roadsService.fetchRoadById(routeId!);
            console.log(data);
            if(!data){
                throw new Error('Road not found')
            }
            setRoad(data.data);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.log('data');
        }
    };
    useEffect(() => {
        getRoad();
    }, []);
    return(
        <Box sx={{
            paddingInline: '42px',
            mt: '32px',
            width: '100%',
        }}>
            <Typography>Hola</Typography>
            <Typography>{roads!.title}</Typography>
        </Box>
    )
}