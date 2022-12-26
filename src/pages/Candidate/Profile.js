import { Box, Container, Stack, Typography, TextField, Button } from "@mui/material";

import { useOutletContext } from "react-router-dom";
const Profile = () => {
    const user = useOutletContext();
    console.log(user.email);
    return (<>
        <Stack direction="row" gap={3}>
            <Stack direction="column" gap={1} alignItems="center"
                sx={{ width: "20%", background: "#e5e6e7", height: "100vh", padding: "20px" }}>
                <Box sx={{ width: "200px" }}>
                    <img src={window.location.origin + "/assets/ProfileImage.png"} alt="ProfileImage" width="100%"></img>
                </Box>

                <Typography component="h3" sx={{ fontSize: "16px" }}>
                    {user.email}
                </Typography>


            </Stack>
            <Box sx={{ width: "70%" }}> Item 2</Box>
        </Stack></>)
}
export default Profile;