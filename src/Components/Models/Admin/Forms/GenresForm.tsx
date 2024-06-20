import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Genre } from "../../../../Services/Interfaces/Interfaces";

export default function GenreForm({ initialData, onSubmit }: any) {
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState<Genre>({
        _id: '',
        title: '',
        cantidad: 0
    });

    useEffect(() => {
        if (initialData) {
            setIsEdit(true)
            setFormData(initialData);
        }else{
            setIsEdit(false)
        }
    }, [initialData]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box
            component="form"
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                p: '10px'
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                helperText="Enter your name"
                id="name"
                name="title"
                label="Nombre"
                value={formData.title}
                onChange={handleInputChange}
                sx={{ 
                    width: '30vw',
                    mt: '8px' 
                }}
            />
            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    );
}