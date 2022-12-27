import { Box, Stack, Typography, Tabs, Tab, TextField } from "@mui/material";

import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Link } from "react-router-dom";

const ChatAssistant = () => {
    return (<>
        <Stack direction="column" gap={3} sx={{ width: "100%" }}>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="center"
                sx={{
                    // background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    borderBottom: "1px solid #d9d9d9"

                }}>
                <MessageIcon></MessageIcon>
                <TextField placeholder="Your Chats" variant="standard" InputProps={{
                    disableUnderline: true,
                }} />
                <SearchIcon></SearchIcon>
            </Stack>

            <Stack direction="row" gap={2} alignItems="center"
                sx={{
                    // background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    borderBottom: "1px solid #d9d9d9"

                }}>
                <Box sx={{ width: "30px" }} >
                    <img src={window.location.origin + "/assets/companyLogo.png"} width="100%" alt="roboLogo"></img>
                </Box>
                <Stack direction="column" alignItems="center" >
                    <Typography component="div" >
                        JobYahan ibot
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "12px" }}>
                        Your Personal Assistant
                    </Typography>
                </Stack>

            </Stack>
        </Stack></>)
}

export default ChatAssistant