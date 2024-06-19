import React, { useEffect, useState } from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import GenresDataTable from "../../Components/Models/Admin/GenresDataTable";
import GenreForm from "../../Components/Models/Admin/Forms/GenresForm";
import { Genre } from "../../Services/Interfaces/Interfaces";
import * as genreService from '../../Services/Api/GenresService'
export default function AdminGenres() {
    const emptyGenre: Genre = {
        _id: '',
        title: '',
        cantidad: 0,
    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedGenre, setSelectedGenre] = useState<Genre>(emptyGenre);
    const [open, setOpen] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    const handleClose = () => {
        setOpen(false);
        setSelectedGenre(emptyGenre);
    };
    const handleFormSubmit = async (data: Genre) => {
        try {
            delete data._id
            const response = await genreService.createGenre(data);
            console.log(response);
            await getGenres();
            handleClose();
            return response;
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    const getGenres = async () => {
        try {
            const data = await genreService.fetchGenres();
            const newData = data.data;
            setGenres(newData);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.error('Error fetching roads:');
        }
    };
    useEffect(() => {
        getGenres();
    }, []);
    return (
        <>
            <Grid container spacing={2} sx={{
                width: '100%',
                paddingInline: '42px',
                mt: '24px',
            }}>
                <Grid item xs={12} >
                    <Grid container spacing={3}>
                        <Grid item xs={10}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                background: 'white',
                                borderRadius: '10px',
                                paddingTop: '8px',
                                paddingBottom: '16px',
                                paddingInline: '20px',
                            }}>
                                <TextField id="standard-basic" label="Buscar..." variant="standard" sx={{
                                    width: '100%',
                                }} />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={() => { setOpen(true) }} variant="contained" sx={{
                                width: "100%",
                                height: "100%",
                                fontSize: "24px",
                            }}>
                                Agregar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <GenresDataTable initialData={genres}></GenresDataTable>
                </Grid>
            </Grid>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
                <DialogTitle>Agregar Genero</DialogTitle>
                <DialogContent>
                    <GenreForm initialData={selectedGenre} onSubmit={handleFormSubmit} />
                </DialogContent>
            </Dialog>
        </>
    )
}