import { Box, Stack, Typography } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';

const DashboardAccountSetting = ({ userName, userEmail, userLastLogin }) => {
    const dispatch = useDispatch();

    return (<>
        <Box sx={{
            position: "absolute",
            top: { "xl": "75px", "lg": "75px", "md": "75px", "sm": "45px", "xs": "45px" },
            background: "#FFFFFF",
            right: "10px",
            width: { "xs": "200px", "sm": "200px", "md": "300px", "xl": "300px", "lg": "300px" },
            zIndex: "345235"
        }}>
            <Box sx={{ background: "#1f8f75", padding: "20px", height: "70px" }}>
                <Typography component="div" sx={{
                    fontSize: {
                        "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px"
                    }, color: "#FFFFFF"
                }}>
                    {userName}
                </Typography>
                <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px", color: "#FFFFFF" } }}>
                    {userEmail}
                </Typography>
            </Box>
            <Box sx={{
                background: "#0a6e56",
                color: "#FFFFFF",
                padding: "5px",
                fontSize: "12px"
            }}>
                Last Login :
                {userLastLogin}

            </Box>

            <Stack gap={2} direction="column" sx={{ background: "#FFFFFF", padding: "20px" }}>

                {/* <Stack direction="row" gap={2} sx={{ cursor: "pointer" }}
                >
                    <PersonIcon />
                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "14px", "lg": "14px", "xl": "14px" } }}>
                        Account Setting
                    </Typography>


                </Stack> */}

                <Stack direction="row" gap={2} sx={{ cursor: "pointer" }} onClick={() => {

                    dispatch({ type: "LOGOUT" })
                }}>
                    <LogoutIcon />
                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "14px", "lg": "14px", "xl": "14px" } }}>
                        Logout
                    </Typography>
                </Stack>
            </Stack>

        </Box >

    </>)
}
export default DashboardAccountSetting;