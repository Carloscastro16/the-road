import React from "react"
import { Box } from "@mui/material";
import news1 from '../../../assets/images/news1.png'
import news2 from '../../../assets/images/news2.png'
import news3 from '../../../assets/images/news3.png'
export default function News(){
    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px'
        }}>
            <Box sx={{
                        backgroundImage: `url(${news1})`,
                        height: '203px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px'
                    }}>

            </Box>
            <Box sx={{
                        backgroundImage: `url(${news2})`,
                        height: '203px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px'
                    }}>

            </Box>
            <Box sx={{
                        backgroundImage: `url(${news3})`,
                        height: '203px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px'
                    }}>

            </Box>
        </Box>
    )
}