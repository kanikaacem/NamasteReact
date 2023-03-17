import { Box, Stack, Typography } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';

const DashboardAccountSetting = ({ userName, userEmail, userLastLogin }) => {
    const dispatch = useDispatch();

    return (<>
        <Box sx={{
            position: "absolute",
            top: "75px",
            background: "#FFFFFF",
            right: "10px",
            width: "300px",
            zIndex: "345235"
        }}>
            <Box sx={{ background: "#1f8f75", padding: "20px", height: "70px" }}>
                <Typography component="div" sx={{ fontSize: "20px", color: "#FFFFFF" }}>
                    {userName}
                </Typography>
                <Typography component="div" sx={{ fontSize: "16px", color: "#FFFFFF" }}>
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

                <Stack direction="row" gap={2} sx={{ cursor: "pointer" }}
                >
                    <PersonIcon />
                    <Typography component="div" sx={{ fontSize: "14px" }}>
                        Account Setting
                    </Typography>


                </Stack>

                <Stack direction="row" gap={2} sx={{ cursor: "pointer" }} onClick={() => {

                    dispatch({ type: "LOGOUT" })
                }}>
                    <LogoutIcon />
                    <Typography component="div" sx={{ fontSize: "14px" }}>
                        Logout
                    </Typography>
                </Stack>
            </Stack>

        </Box>

    </>)
}
export default DashboardAccountSetting;