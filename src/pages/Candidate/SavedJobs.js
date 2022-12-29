import { Box, Container, Stack, Typography, Snackbar, Alert, styled } from "@mui/material";

const SavedJobs = () => {
    return (<>
        <Box className="SavedJobsPage">
            <Box sx={{
                background: "#445578",
                margin: "0px 30px",
                padding: "20px 50px"
            }}>
                <Stack direction="row" gap={3} alignItems="center">
                    <Box sx={{ width: "50px" }}>
                        <img src={window.location.origin + "/assets/Download.png"} width="100%" alt="Download" />
                    </Box>

                    <Box sx={{ width: "50%", padding: "20px" }}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "white" }}>
                            Your Saved Jobs
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "25px", color: "white" }}>
                            Keep all your relevant jobs in saved folder, you can Apply/Remove them anytime!!
                        </Typography>

                    </Box>
                </Stack>
            </Box>
        </Box>

    </>)
}

export default SavedJobs;