import React from "react";
import SearchBar from "../../Components/Models/Admin/SearchBar";
import RoadsDataTable from "../../Components/Models/Admin/RoadsDataTable";
import { Grid } from "@mui/material";

export default function AdminRoutes(){
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
                <RoadsDataTable></RoadsDataTable>
            </Grid>
        </Grid>
    )
}