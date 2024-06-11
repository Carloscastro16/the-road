import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from '../../../assets/images/amazoncover.png'
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
    return (
        <Box>
            <Stack width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
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
                mt: '28px',
                flexDirection: 'row',
                gap: '32px',
                flexWrap: 'wrap',
            }}>
                {cardsInfo.slice(0, 6).map((card, index) => {
                    return (
                        <Box sx={{
                            p: '10px',
                            paddingRight: '38px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '20px',
                            borderRadius: '8px',
                            background: 'white',
                            width: '380px'
                        }} key={index}>
                            <Box sx={{
                                width: '104px',
                                height: '82px',
                                borderRadius: '8px'
                            }}>
                                <img src={card.img} alt={card.title} width={'100%'} height={'100%'} />
                            </Box>
                            <Stack flexDirection={'column'}>
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
                                    <Box sx={{
                                        width: '2px',
                                        height: '14px',
                                        background: 'black',
                                        opacity: '0.7'
                                    }}></Box>
                                    <Typography sx={{
                                        fontSize: '14px',
                                        fontWeight: '400'
                                    }}>{card.duration} Horas</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    )
                })
                }
            </Stack>
        </Box>
    );
}