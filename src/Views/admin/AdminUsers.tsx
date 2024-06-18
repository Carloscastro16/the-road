import React from "react";
import SearchBar from "../../Components/Models/Admin/SearchBar";
import { Grid } from "@mui/material";
import UsersDataTable from "../../Components/Models/Admin/UsersDataTable";

export default function AdminUsers(){
    return (
        <Grid container spacing={2} sx={{
            width: '100%',
            paddingInline: '42px',
            mt:'24px',
        }}>
            <Grid item xs={12} >
                <SearchBar></SearchBar>
            </Grid>
            <Grid item xs={12}>
                <UsersDataTable></UsersDataTable>
            </Grid>
        </Grid>
    )
}