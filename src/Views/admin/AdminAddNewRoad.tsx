import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Stack, Checkbox, FormControlLabel } from '@mui/material';
import { RoadData } from '../../Services/Interfaces/Interfaces';
import * as activityService from '../../Services/Api/ActivitiesService';
import * as roadService from '../../Services/Api/RoadsService';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from "../../Services/Auth/FirebaseAuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Swal from 'sweetalert2';

const CreateRoads: React.FC = () => {
    const navigate = useNavigate();
    const [activities, setActivities] = useState<any[]>([]);
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
    const { routeId } = useParams();
    const [formData, setFormData] = useState<RoadData>({
        title: '',
        easyDescription: '',
        fullDescription: '',
        activities: [],
        duration: '',
        punctuation: 0,
        img: '',
        activityDetails: [],
    });
    const [imageUpload, setImageUpload] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageUpload = (file: File) => {
        setImageUpload(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const uploadFile = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (!file) return resolve('');
            const imageRef = ref(storage, `images/${file.name + v4()}`);
            uploadBytes(imageRef, file)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then((url) => {
                            resolve(url);
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>, activityId: string) => {
        if (event.target.checked) {
            setSelectedActivities([...selectedActivities, activityId]);
        } else {
            setSelectedActivities(selectedActivities.filter(id => id !== activityId));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const imageUrl = imageUpload ? await uploadFile(imageUpload) : formData.img;

        const finalData = {
            ...formData,
            img: imageUrl,
            activities: selectedActivities,
        };

        let res;
        if (routeId) {
            res = await roadService.updateRoadById(finalData);
            if (res.status === 200) {
                Swal.fire({
                    title: 'Ruta Actualizada Correctamente'
                });
            } else {
                Swal.fire({
                    title: 'Hubo un error al Actualizar la actividad'
                });
            }
        } else {
            res = await roadService.createRoad(finalData);
            if (res.status === 200) {
                Swal.fire({
                    title: 'Ruta Creada Correctamente'
                });
            } else {
                Swal.fire({
                    title: 'Hubo un error al Crear la Ruta'
                });
            }
        }

        navigate('/administrador/rutas');
        return res;
    };

    const fetchActivities = async () => {
        const res = await activityService.fetchActivities();
        console.log('actividades:', res.data);
        setActivities(res.data);
        return res;
    };

    const getRoadById = async (id: any) => {
        const res = await roadService.fetchRoadById(id);
        console.log(res.data);
        setFormData(res.data);
        setSelectedActivities(res.data.activities);
        setImagePreview(res.data.img);
        return res;
    };

    const handleGoBack = () => {
        navigate(-1); // Esto te llevará a la página anterior
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    useEffect(() => {
        if (routeId) {
            getRoadById(routeId);
        }
    }, [routeId]);

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '32px',
            paddingInline: '48px'
        }}>
            <Box sx={{
                background: '#fff',
                padding: '24px',
                borderRadius: '10px',
                width: '100%'
            }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box onClick={handleGoBack} sx={{
                        background: '#82C6C1',
                        width: '45px',
                        zIndex: 100,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px',
                        cursor: 'pointer'
                    }}>
                        <ArrowBackIcon sx={{
                            color: '#fff'
                        }}></ArrowBackIcon>
                    </Box>
                    <Typography variant="h4">Formulario de Rutas</Typography>
                    <TextField
                        name="title"
                        label="Título"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        name="easyDescription"
                        label="Descripción Fácil"
                        value={formData.easyDescription}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <TextField
                        name="fullDescription"
                        label="Descripción Completa"
                        value={formData.fullDescription}
                        onChange={handleChange}
                        multiline
                        rows={6}
                        fullWidth
                    />
                    <TextField
                        name="duration"
                        label="Duración"
                        value={formData.duration}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Box>
                        <input
                            type="file"
                            id={`upload-img`}
                            className="upload-image"
                            onChange={(e) => handleImageUpload(e.target.files![0])}
                        />
                        <label htmlFor={`upload-img`} className="upload-image-button">Subir imagen</label>
                    </Box>
                    {imagePreview && (
                        <Box sx={{ marginTop: 2, textAlign: 'center', opacity: .4 }}>
                            <Typography variant="subtitle1">Vista previa de la imagen:</Typography>
                            <img src={imagePreview} alt="Vista previa" style={{ maxWidth: '100%', height: 'auto', width: '40%' }} />
                        </Box>
                    )}
                    <Stack>
                        <Box sx={{
                            marginTop: '16px',
                            marginBottom: '16px',
                        }}>
                            <Typography fontSize={'26px'}>Actividades</Typography>
                        </Box>
                        <Stack sx={{
                            flexDirection: 'row',
                            gap: '32px',
                            flexWrap: 'wrap',
                            mt: '24px',
                            mb: '32px',
                            justifyContent: 'center',
                        }}>
                            {activities.map((card: any, index: any) => (
                                <Box sx={{
                                    p: '10px',
                                    paddingRight: '38px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '20px',
                                    borderRadius: '8px',
                                    background: 'white',
                                    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                                }} key={index}>
                                    <Box sx={{
                                        width: '104px',
                                        height: '82px',
                                        borderRadius: '8px'
                                    }}>
                                        <img src={card.bannerImg} alt={card.title} width={'100%'} height={'100%'} />
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
                                                fontWeight: '400',
                                            }}>{card.questions.length} Preguntas</Typography>
                                        </Stack>
                                    </Stack>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                defaultChecked={selectedActivities.includes(card._id)} // Aquí usamos card._id
                                                onChange={(e) => handleActivityChange(e, card._id)} // Aquí usamos card._id
                                                name={card.title}
                                            />
                                        }
                                        label=""
                                    />
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                    {/* Aquí puedes agregar un formulario similar para activityDetails */}
                    <Button type="submit" variant="contained" color="primary">
                        Enviar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
export default CreateRoads;