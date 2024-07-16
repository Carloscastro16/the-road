import React, { useEffect } from "react"
import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import expand from '../../../assets/icons/expand.png'
import cover1 from '../../../assets/images/cover1.png'
import { Link } from "react-router-dom";
import * as activitiesService from '../../../Services/Api/ActivitiesService'
import Loader from "../shared/Loader"
const activitiesInfoDefault = [
    {
        _id: '2544590422454322',
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,
    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
    {
        title: 'HTML Basics',
        genre: 'HTML',
        questions: [1, 2, 3, 5, 6, 7],
        punctuation: 3,
        img: cover1,

    },
]
const languages = [
    {
        title: 'JavaScript',
        quantity: 30
    },
    {
        title: 'HTML',
        quantity: 399
    },
    {
        title: 'React',
        quantity: 80
    },
    {
        title: 'Angular',
        quantity: 200
    },
    {
        title: 'JavaScript',
        quantity: 30
    },
    {
        title: 'HTML',
        quantity: 399
    },
    {
        title: 'React',
        quantity: 80
    },
    {
        title: 'Angular',
        quantity: 200
    },
    {
        title: 'JavaScript',
        quantity: 30
    },
    {
        title: 'HTML',
        quantity: 399
    },
    {
        title: 'React',
        quantity: 80
    },
    {
        title: 'Angular',
        quantity: 200
    },
    {
        title: 'JavaScript',
        quantity: 30
    },
    {
        title: 'HTML',
        quantity: 399
    },
    {
        title: 'React',
        quantity: 80
    },
    {
        title: 'Angular',
        quantity: 200
    },
    {
        title: 'JavaScript',
        quantity: 30
    },
    {
        title: 'HTML',
        quantity: 399
    },
    {
        title: 'React',
        quantity: 80
    },
    {
        title: 'Angular',
        quantity: 200
    },
]

export default function ActivitiesList() {
    const [activitiesInfo, setActivitiesInfo] = useState<any>(activitiesInfoDefault)
    const [limit, setLimit] = useState(6);
    const [isLoading, setIsLoading] = useState(true);
    function expandLimit() {
        if (limit === 6) {
            setLimit(languages.length)
        } else {
            setLimit(6)
        }
    }
    async function fetchActivities() {
        setIsLoading(true)
        const res = await activitiesService.fetchActivities();
        console.log(res.data);
        setActivitiesInfo(res.data);
        setIsLoading(false)
        return res;
    }
    useEffect(() => {
        fetchActivities();
    }, [])
    return (
        <Box>
            <Stack width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mb={'28px'}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '32px',
                    color: '#307071',
                    fontWeight: 'bold'
                }}>
                    Actividades
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
            <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'row'} sx={{
                px: '120px',
                flexWrap: 'wrap',
                gap: '16px',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>
                    {languages.slice(0, limit).map((language, index) => {
                        return (
                            <Stack key={index} flexDirection={'row'} gap={'6px'} alignItems={'center'} sx={{
                                border: '1px solid #49437B',
                                borderRadius: '24px',
                                py: '8px',
                                px: '16px',
                                cursor: 'pointer',
                                flexWrap: 'wrap',
                                ":hover": {
                                    color: 'white',
                                    backgroundColor: '#49437B'
                                }
                            }}>
                                <Typography fontSize={'14px'}>{language.title}</Typography>
                                <Box sx={{
                                    width: 'fit-content',
                                    px: '10px',
                                    py: '3px',
                                    background: '#49437B',
                                    borderRadius: '18px',
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>
                                    {language.quantity}
                                </Box>
                            </Stack>
                        )
                    })}
                </Box>
                <Box sx={{
                }}>
                    <Button sx={{
                        color: 'black',
                        opacity: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        borderRadius: '20px',
                    }} onClick={expandLimit}>
                        Expand
                        <img src={expand} alt="expand" width={'12px'} height={'14px'} />
                    </Button>
                </Box>
            </Stack>
            {isLoading ? (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <Loader />
                </Box>
            ) :
                <Stack sx={{
                    flexDirection: 'row',
                    gap: '32px',
                    flexWrap: 'wrap',
                    mt: '24px',
                    mb: '32px',
                    justifyContent: 'center',
                }}>
                    {activitiesInfo.map((card: any, index: any) => {
                        return (
                            <Link key={index} to={`/estudiantes/actividad/${card._id}`}>
                                <Box sx={{
                                    p: '10px',
                                    paddingRight: '38px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '20px',
                                    borderRadius: '8px',
                                    background: 'white'
                                }} key={index}>
                                    <Box sx={{
                                        width: '140px',
                                        height: '82px',
                                        borderRadius: '8px',
                                        background: `url(${card!.bannerImg})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        position: 'relative',
                                    }}>
                                    </Box>
                                    <Stack flexDirection={'column'}>
                                        <Typography sx={{
                                            fontSize: '16px',
                                            fontWeight: 'bold'
                                        }}>{card.title}</Typography>
                                        <Stack alignItems={'center'} justifyContent={'flex-start'} flexDirection={'row'} gap={'10px'} sx={{
                                            color: 'black',
                                            opacity: '0.7',
                                        }}>
                                            <Typography sx={{
                                                fontSize: '14px',
                                                fontWeight: '400',
                                            }}>{card.genre}</Typography>
                                            <Box sx={{
                                                width: '4px',
                                                height: '4px',
                                                background: 'black',
                                                opacity: '0.7',
                                                borderRadius: '50%'
                                            }}></Box>
                                            <Typography sx={{
                                                fontSize: '14px',
                                                fontWeight: '400'
                                            }}>{card.questions.length} Preguntas</Typography>
                                        </Stack>
                                        <Stack alignItems={'center'} justifyContent={'flex-start'} flexDirection={'row'} gap={'10px'} sx={{
                                            color: 'black',
                                            opacity: '0.4',
                                        }}>
                                            <Typography sx={{
                                                fontSize: '14px',
                                                fontWeight: '900',
                                            }}>
                                                {card.punctuation}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Link>
                        )
                    })
                    }
                </Stack>
            }
        </Box>
    )
}