import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import img1 from '../../../assets/images/amazoncover.png';
import { RoadData } from "@/Services/Interfaces/Interfaces";
import * as roadsService from '../../../Services/Api/RoadsService';
import { Link } from "react-router-dom";

const cardsInfo = [
    // ... (omitiendo datos repetidos por brevedad)
];

export default function BestRoutes() {
    const [roads, setRoads] = useState<RoadData[]>([]);
    const getRoads = async () => {
        try {
            const data = await roadsService.fetchRoads();
            setRoads(data.data);
        } catch (error) {
            console.error('Error fetching roads:', error);
        }
    };

    useEffect(() => {
        getRoads();
    }, []);

    return (
        <Box>
            <Stack
                width={'100%'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                mb={'28px'}
            >
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '32px',
                    color: '#307071',
                    fontWeight: 'bold'
                }}>
                    Las mejores Rutas
                </Typography>
            </Stack>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {roads.slice(0, 6).map((card, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/estudiantes/rutas/${card._id}`}>
                            <Box sx={{
                                p: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: '8px',
                                background: 'white',
                                height: '350px',
                                maxWidth: '300px',
                                mx: 'auto',
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    height: '150px',
                                    borderRadius: '8px',
                                    background: `url(${card.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    mb: '10px',
                                }} />
                                <Typography sx={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    mb: '8px',
                                    textAlign: 'center',
                                }}>
                                    {card.title}
                                </Typography>
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                }}>
                                    {card.easyDescription}
                                </Typography>
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    mt: 'auto',
                                    textAlign: 'center',
                                }}>
                                    {card.activities.length} Actividades
                                </Typography>
                            </Box>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
