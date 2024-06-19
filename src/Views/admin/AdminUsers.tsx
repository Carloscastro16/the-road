import React, { useEffect, useState } from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import UsersDataTable from "../../Components/Models/Admin/UsersDataTable";
import UserForm from "../../Components/Models/Admin/Forms/UserForm";
import * as usersService from '../../Services/Api/UsersService'
import { User } from "../../Services/Interfaces/Interfaces";

export default function AdminUsers() {
    const emptyUser: User = {
        name: '',
        lastname: '',
        email: '',
        rolename: '',
        creationDate: '',
        points: 0
    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedUser, setSelectedUser] = useState<User>(emptyUser);
    const [users, setUsers] = useState<object[]>();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        setSelectedUser(emptyUser);
    };
    const handleFormSubmit = async (data: User) => {
        try {
            delete data._id
            const response = await usersService.createUser(data);
            console.log(response);
            await handleAddUser();
            handleClose();
            return response;
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    const handleAddUser = async () => {
        await getUsers()
    };
    const getUsers = async () => {
        try {
            const data = await usersService.fetchUsers();
            const newData = data.data;
            setUsers(newData);
        } catch (error) {
            console.error('Error fetching roads:', error);
        } finally {
            console.error('Error fetching roads:');
        }
    };
    useEffect(() => {
        getUsers();
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
                    <UsersDataTable initialData={users}></UsersDataTable>
                </Grid>
            </Grid>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
                <DialogTitle>Agregar Usuario</DialogTitle>
                <DialogContent>
                    <UserForm initialData={selectedUser} onSubmit={handleFormSubmit} isEdit={false} />
                </DialogContent>
            </Dialog>
        </>
    )
}