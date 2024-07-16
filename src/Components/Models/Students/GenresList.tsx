import { Box, Button, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Loader from "../shared/Loader"
import * as genresService from '../../../Services/Api/GenresService'
import { Link } from "react-router-dom"
export default function GenresList(){
    const [genres, setGenres] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true);
    async function fetchGenres() {
        setIsLoading(true)
        const res = await genresService.fetchGenres();
        console.log(res.data);
        setGenres(res.data);
        setIsLoading(false)
        return res;
    }
    useEffect(() => {
        fetchGenres();
    }, [])
    return(
        <>
        <Box>
            <Stack width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mb={'28px'}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '32px',
                    color: '#307071',
                    fontWeight: 'bold'
                }}>
                    Generos
                </Typography>
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
                    {genres!.map((card: any, index: any) => {
                        return (
                            <Link key={index} to={`/estudiantes/actividad`}>
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
                                    <Typography>{card.title}</Typography>
                                </Box>
                            </Link>
                        )
                    })
                    }
                </Stack>
            }
        </Box>
        </>
    )
}