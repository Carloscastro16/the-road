import React from "react";
import { Grid } from "@mui/material";
import ActivitiesList from "../../Components/Models/Students/ActivitiesLists";

export default function StudentsActivities(){
    return (
        <Grid container spacing={2} sx={{
            paddingInline: '42px',
            mt: '32px'
        }}>
            <Grid item xs={12} >
                <ActivitiesList></ActivitiesList>
            </Grid>
            <Grid item xs={12}>
                <ActivitiesList></ActivitiesList>
            </Grid>
        </Grid>
    )
}