import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import { RoadData } from "@/Services/Interfaces/Interfaces";
import * as roadsService from '../../../Services/Api/RoadsService';
import { Link } from "react-router-dom";

export default function BestRoutes() {
    const [roads, setRoads] = useState<RoadData[]>([]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Box sx={{
            width: '100%'
        }}>
            <Stack
                width='100%'
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                mb='28px'
            >
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '24px', sm: '32px' },
                    color: '#307071',
                    fontWeight: 'bold'
                }}>
                    Las mejores Rutas
                </Typography>
            </Stack>
            <Box sx={{
                width: '85vw'
            }}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={isSmallScreen ? 10 : 20}
                    slidesPerView={1}
                    initialSlide={2}
                    centeredSlides={true}
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        900: {
                            slidesPerView: 2.2,
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
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: '8px',
                                    background: 'white',
                                    height: {xs:'200px',sm:'250px',md:'300px'},
                                    maxWidth: { xs: '90%', sm: '300px' },
                                    mx: 'auto',
                                }}>
                                    <Box sx={{
                                        width: '100%',
                                        height: { xs: '130px', sm: '150px', md: '200px' },
                                        borderRadius: '8px',
                                        background: `url(${card.img})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        mb: '10px',
                                    }} />
                                    <Box sx={{
                                        p: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                    }}>
                                        <Box sx={{
                                            height: 'fit-content',
                                        }}>
                                            <Typography sx={{
                                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                                fontWeight: 'bold',
                                                mb: '8px',
                                                textAlign: 'center',
                                            }}>
                                                {card.title}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: { xs: '12px', sm: '14px', md: '16px' },
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

                                        </Box>
                                        <Typography sx={{
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            fontWeight: '400',
                                            mt: 'auto',
                                            textAlign: 'center',
                                            height: 'fit-content'
                                        }}>
                                            {card.activities.length} Actividades
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}