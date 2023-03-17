import { Box, Stack, Typography } from "@mui/material";

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

            </Stack>
        </Stack>

    </>)
}

export default ChatComponent;