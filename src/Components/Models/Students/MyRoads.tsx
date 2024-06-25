import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from '../../../assets/images/amazoncover.png'
const cardsInfo = [
    {
        _id: 'holas',
        title: 'AWS Course',
        easyDescription: 'Must-do list for interview prep',
        activities: [1, 0, 2, 4, 5, 5],
        duration: '2',
        img: img1,
        calification: 4,
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
export default function MyRoads() {
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
            <Stack sx={{
                flexDirection: 'row',
                gap: '32px',
                flexWrap: 'wrap',
            }}>
                {cardsInfo.slice(0, 6).map((card, index) => {
                    return (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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
                                    bottom:'0',
                                    width: '80%',
                                    height: '8px',
                                    background: '#307071',
                                    borderRadius: '0px 10px 10px 0',
                                }}></Box>
                            </Box>
                            <Box sx={{
                                background: 'white',
                                borderRadius: '0 0 10px 10px'
                            }}>
                                <Stack sx={{
                                    height: '100%'
                                }}>
                                    <Typography>{card.title}</Typography>
                                    <Typography>{card.easyDescription}</Typography>
                                    <Typography>{card.calification}</Typography>
                                </Stack>
                            </Box>
                        </Box>
                    )
                })
                }
            </Stack>
        </Box>
    );
}