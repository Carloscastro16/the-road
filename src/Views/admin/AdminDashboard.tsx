import { Box, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import React, { useEffect, useState } from "react"
import IndicatorCharts from "../../Components/Models/Admin/dashboard/Indicators";
import Ranking from "../../Components/Models/Admin/dashboard/RankingBar";
import { Genre, User } from "../../Services/Interfaces/Interfaces";
import { fetchUsers } from "../../Services/Api/UsersService";
import { fetchGenres } from "../../Services/Api/GenresService";
const sortUsersByPoints = (users: User[]): User[] => {
    return users.sort((a, b) => b.points - a.points);
};
export default function AdminDashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    const getUsers = async () => {
        try {
            const data = await fetchUsers();
            const newData = data.data;
            const sortedUsers = sortUsersByPoints(newData);
            setUsers(sortedUsers);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.log('Successfully fetched');
        }
    };
    const getGenres = async () => {
        try {
            const data = await fetchGenres();
            const newData = data.data;
            setGenres(newData);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.log('Successfully fetched');
        }
    };
    useEffect(() => {
        getUsers();
        getGenres();
    }, []);
    return (
        <Grid container spacing={4} sx={{
            width: '100%',
            paddingInline: '42px',
            mt: '24px',
        }}>
            <Grid item xs={12}>
                <IndicatorCharts></IndicatorCharts>
            </Grid>
            <Grid item xs={12}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={'32px'} height={'100%'}>
                    <Box sx={{
                        width: '100%',
                        borderRadius: '16px',
                        backgroundColor: 'white',
                        p: '18px',
                    }}>
                        <Typography sx={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '35px',
                            fontFamily: 'Montserrat',
                            textAlign: 'center'
                        }}>Ranking Generos</Typography>
                        <Box sx={{
                            height: '300px',
                            width: '100%'
                        }}>
                            <Ranking data={genres}></Ranking>
                        </Box>
                    </Box>
                    <Box sx={{
                        height: '100%',
                        width: '40%',
                        borderRadius: '16px',
                        backgroundColor: 'white',
                        padding: '18px'
                    }}>
                        <Typography sx={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            fontFamily: 'Montserrat',
                            textAlign: 'center'
                        }}>Ranking Usuarios</Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <List sx={{
                                width: '100%',
                            }}>
                                
                                {users.map((user, index) => {
                                    return (
                                        <>
                                        <ListItem key={index} component="div" disablePadding sx={{
                                            width: '100%',
                                        }}>
                                            <Stack direction={'row'} gap={'10px'} alignItems={'center'} width={'100%'}>
                                                <Box sx={{
                                                    width: '10%'
                                                }}>
                                                    {index + 1}.
                                                </Box>
                                                <ListItemText primary={user.name} sx={{
                                                    width: '100%'
                                                }} />
                                                <Typography fontSize={'10px'} sx={{
                                                    width: '10%',
                                                    fontWeight: 'light',
                                                    fontSize: '16px'
                                                }}>{user.points}</Typography>
                                            </Stack>
                                            
                                        </ListItem>
                                        <Divider component="li" />
                                        </>
                                    )
                                })
                                }
                            </List>
                        </Box>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    )
}