import { Grid } from "@mui/material";
import News from "../../Components/Models/Students/News";
import BestRoutes from "../../Components/Models/Students/BestRoutes";
import ActivitiesList from "../../Components/Models/Students/ActivitiesLists";
import React from "react";
export default function StudentsDashboard(){
    return(
        <Grid container spacing={2} sx={{
            paddingInline: '42px',
            mt:'32px'
        }}>
            <Grid item xs={12} >
                <News></News>
            </Grid>
            <Grid item xs={12}>
                <BestRoutes></BestRoutes>
            </Grid>
            <Grid item xs={12}>
                <ActivitiesList></ActivitiesList>
            </Grid>
        </Grid>
    )
}