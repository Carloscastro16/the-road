import { Stack } from "@mui/material";
import React from "react"
import IndicatorCharts from "../../Components/Models/Admin/dashboard/Indicators";

export default function AdminDashboard() {
    return (
        <>
            <Stack>
                <IndicatorCharts></IndicatorCharts>
            </Stack>
        </>
    )
}