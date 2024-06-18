import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";

const IndicatorContainer = styled(Box)`
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(279.76deg, rgba(73, 67, 123, 0.5) 0%, rgba(116, 165, 176, 0.5) 99.5%);
  backdropFilter: blur(40px)
`;
export default function IndicatorCharts(){
    return(
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <IndicatorContainer>
                    <Typography fontSize={'24px'} color={'white'}>Usuarios Activos</Typography>
                    <Typography color={'white'}>45</Typography>
                </IndicatorContainer>
            </Grid>
            <Grid item xs={3}>
                <IndicatorContainer>
                    <Typography fontSize={'24px'} color={'white'}>Usuarios Activos</Typography>
                    <Typography color={'white'}>45</Typography>
                </IndicatorContainer>
            </Grid>
            <Grid item xs={3}>
                <IndicatorContainer>
                    <Typography fontSize={'24px'} color={'white'}>Usuarios Activos</Typography>
                    <Typography color={'white'}>45</Typography>
                </IndicatorContainer>
            </Grid>
            <Grid item xs={3}>
                <IndicatorContainer>
                    <Typography fontSize={'24px'} color={'white'}>Usuarios Activos</Typography>
                    <Typography color={'white'}>45</Typography>
                </IndicatorContainer>
            </Grid>
        </Grid>
    )
}