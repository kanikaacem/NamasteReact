import { Box, Badge, Stack, Typography } from "@mui/material";

const ChatComponent = () => {
    return (<>
        <Box>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                sx={{
                    padding: "10px",
                    borderRadius: "10px",
                    borderBottom: "1px solid #d9d9d9",

                }}>

                <Box sx={{ width: "50px", borderRadius: "50%" }}>
                    <Badge color="secondary" variant="dot"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                        <img src={window.location.origin + "/assets/profile.png"}
                            style={{
                                borderRadius: "50%",
                            }} alt="chat" width="100%" ></img>
                    </Badge>

                </Box>

                <Stack direction="column" alignItems="center" >
                    <Typography component="div" sx={{ fontSize: "12px" }} >
                        Your Name
                    </Typography>
                    <Typography component="div" >
                        Message
                    </Typography>
                </Stack>

                <Stack direction="column" alignItems="center" >
                    <Typography component="div" sx={{ fontSize: "12px" }} >
                        7 days
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    </>)
}

export default ChatComponent;