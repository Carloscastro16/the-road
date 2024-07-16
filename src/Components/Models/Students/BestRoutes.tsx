import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from '../../../assets/images/amazoncover.png';
import { RoadData } from "@/Services/Interfaces/Interfaces";
import *  as roadsService from '../../../Services/Api/RoadsService';
import { Link } from "react-router-dom";
const cardsInfo = [
    {
        _id: 'holas',
        title: 'AWS Course',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1
    },
]
export default function BestRoutes() {
    const [roads, setRoads] = useState<RoadData[]>([]);
    const getRoads = async () => {
        try {
            const data = await roadsService.fetchRoads();
            console.log(data);
            setRoads(data.data);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.log('data obtained sucessfully');
        }
    };
    useEffect(() => {

        getRoads();
    }, []);
    return (
        <Box>
            <Stack width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mb={'28px'}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '32px',
                    color: '#307071',
                    fontWeight: 'bold'
                }}>
                    Las mejores Rutas
                </Typography>
                <Button sx={{
                    color: 'white',
                    backgroundColor: '#307071',
                    py: '8px',
                    px: '16px',
                    borderRadius: '10px',
                    height: 'fit-content',
                    ":hover": {
                        color: '#307071'
                    }
                }}>Ver mas...</Button>
            </Stack>
            <Stack sx={{
                flexDirection: 'row',
                gap: '32px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {roads.slice(0, 6).map((card, index) => {
                    return (
                        <Link key={index} to={`/estudiantes/rutas/${card._id}`}>
                            <Box sx={{
                                p: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '20px',
                                borderRadius: '8px',
                                background: 'white',
                                maxWidth: '400px',
                                width: '400px'
                            }} >
                                <Box sx={{
                                    width: '150px',
                                    height: '82px',
                                    borderRadius: '8px',
                                    background: `url(${card.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    position: 'relative',
                                }}>
                                </Box>
                                <Stack flexDirection={'column'} width={'100%'}>
                                    <Typography sx={{
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}>{card.title}</Typography>
                                    <Typography sx={{
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}>{card.easyDescription}</Typography>
                                    <Stack alignItems={'center'} justifyContent={'flex-start'} flexDirection={'row'} gap={'10px'} sx={{
                                        color: 'black',
                                        opacity: '0.7',
                                    }}>
                                        <Typography sx={{
                                            fontSize: '14px',
                                            fontWeight: '400'
                                        }}>{card.activities.length} Actividades</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Link>
                    )
                })
                }
            </Stack>
        </Box>
    );
}