import { Box, Button, Stack, Typography } from "@mui/material";

const ChatComponent = () => {
    return (<>
        <Stack className="ChatComponent"
            sx={{
                padding: "20px",
                boxSizing: "border-box",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid #E1D4F2",
                borderRadius: "19px"
            }}>
            <Stack
                direction="row" className="ChatHeading"
                justifyContent="space-between"
                alignItems="center
                ">
                <Stack direction="row" gap={1} alignItems="center">
                    <Box sx={{ height: "20px" }}>
                        <img src={window.location.origin + "/assets/Chat1.png"} width="100%" height="100%" alt="Chat1" />
                    </Box>
                    <Typography component="div" sx={{ fontSize: "24px", color: "#4E3A67", fontWeight: "600" }}>
                        Your Chats
                    </Typography>
                </Stack>
                <Box sx={{ width: "20px" }}>
                    <img src={window.location.origin + "/assets/Chat2.png"} width="100%" height="100%" alt="Chat2" />
                </Box>

            </Stack>
            <hr></hr>
            <Stack direction="column" gap={2} className="Chats"
                sx={{
                    minHeight: "200px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                No Chat Presents
                {/* <Stack direction="row" gap={2}
                    sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            width: "15%"
                        }}>
                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" width="100%" height="100%" />
                    </Box>
                    <Stack
                        direction="column"
                        sx={{
                            width: "55%"
                        }}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "600" }}>
                            Ritesh Kumar
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "18px", color: "#9B8EAA"
                        }}>
                            Ritesh: hi there is...
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "30%" }}>
                        <Typography component="div" sx={{
                            fontSize: "16px", color: "#9B8EAA", fontWeight: "600"
                        }}>
                            2 Mins ago
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" gap={2}
                    sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            width: "15%"
                        }}>
                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" width="100%" height="100%" />
                    </Box>
                    <Stack
                        direction="column"
                        sx={{
                            width: "55%"
                        }}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "600" }}>
                            Ritesh Kumar
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "18px", color: "#9B8EAA"
                        }}>
                            Ritesh: hi there is...
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "30%" }}>
                        <Typography component="div" sx={{
                            fontSize: "16px", color: "#9B8EAA", fontWeight: "600"
                        }}>
                            2 Mins ago
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" gap={2}
                    sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            width: "15%"
                        }}>
                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" width="100%" height="100%" />
                    </Box>
                    <Stack
                        direction="column"
                        sx={{
                            width: "55%"
                        }}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "600" }}>
                            Ritesh Kumar
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "18px", color: "#9B8EAA"
                        }}>
                            Ritesh: hi there is...
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "30%" }}>
                        <Typography component="div" sx={{
                            fontSize: "16px", color: "#9B8EAA", fontWeight: "600"
                        }}>
                            2 Mins ago
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" gap={2}
                    sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            width: "15%"
                        }}>
                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" width="100%" height="100%" />
                    </Box>
                    <Stack
                        direction="column"
                        sx={{
                            width: "55%"
                        }}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "600" }}>
                            Ritesh Kumar
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "18px", color: "#9B8EAA"
                        }}>
                            Ritesh: hi there is...
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "30%" }}>
                        <Typography component="div" sx={{
                            fontSize: "16px", color: "#9B8EAA", fontWeight: "600"
                        }}>
                            2 Mins ago
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" gap={2}
                    sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            width: "15%"
                        }}>
                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" width="100%" height="100%" />
                    </Box>
                    <Stack
                        direction="column"
                        sx={{
                            width: "55%"
                        }}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "600" }}>
                            Ritesh Kumar
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "18px", color: "#9B8EAA"
                        }}>
                            Ritesh: hi there is...
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "30%" }}>
                        <Typography component="div" sx={{
                            fontSize: "16px", color: "#9B8EAA", fontWeight: "600"
                        }}>
                            2 Mins ago
                        </Typography>
                    </Box>
                </Stack>
                <Button
                    sx={{
                        background: "#F7F0FF",
                        border: "1px solid #E1D4F2",
                        borderRadius: "9px",
                        color: "#4E3A67",
                        "&:hover": {
                            background: "#F7F0FF",
                            border: "1px solid #E1D4F2",
                            borderRadius: "9px",
                            color: "#4E3A67"
                        }
                    }}> See All</Button> */}
            </Stack>
        </Stack>
        {/* <Box>
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
        </Box> */}
    </>)
}

export default ChatComponent;