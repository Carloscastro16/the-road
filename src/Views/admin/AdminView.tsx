import { Box } from "@mui/material";
import AdminSidebar from "../../Components/Models/Admin/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminView(){
    return ( 
        <Box sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <AdminSidebar></AdminSidebar>
            <Box sx={{
                width: '100%',
            }}>
                <Outlet></Outlet>
            </Box>
        </Box>
    )
}