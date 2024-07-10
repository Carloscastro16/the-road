import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from '../../../assets/images/amazoncover.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import *  as roadsService from '../../../Services/Api/RoadsService'
// Import Swiper styles
import 'swiper/css';
import { RoadData } from "../../../Services/Interfaces/Interfaces";
const cardsInfo = [
    {
        _id: 'holas',
        title: 'AWS Course',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
    {
        _id: 'holas',
        title: 'HTML Road',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        punctuation: 4,
    },
]
export default function MyRoads() {
    const [roads, setRoads] = useState<RoadData[]>([]);
    const getRoads = async () => {
        try {
            const data = await roadsService.fetchRoads();
            console.log(data);
            setRoads(data.data);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.log('data');
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
                    Mis Rutas
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
            <Box sx={{
                width: '100%'
            }}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={6}
                >
                    {roads.slice(0, 6).map((card, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: '0'
                                }}>
                                    <Box sx={{
                                        height: '180px',
                                        width: '220px',
                                        borderRadius: '10px 10px 0 0',
                                        background: `url(${img1})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        position: 'relative',
                                    }}>
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: '0',
                                            width: '80%',
                                            height: '8px',
                                            background: '#307071',
                                            borderRadius: '0px 10px 10px 0',
                                        }}></Box>
                                    </Box>
                                    <Box sx={{
                                        background: 'white',
                                        borderRadius: '0 0 10px 10px',
                                        width: '220px'
                                    }}>
                                        <Stack sx={{
                                            height: '100%',
                                            py: '16px',
                                            paddingInline: '16px',
                                            alignItems: 'center',
                                        }}>
                                            <Typography sx={{
                                                whiteSpace: 'wrap',
                                            }}>{card.title}</Typography>
                                            <Typography sx={{
                                                whiteSpace: 'wrap',
                                            }}>{card.easyDescription}</Typography>
                                            <Typography>{card.punctuation}</Typography>
                                        </Stack>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </Box>
        </Box>
    );
}