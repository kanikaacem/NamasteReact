import { Box, Stack, Typography } from "@mui/material";
function ErrorPage({ errorMessage, subMessage }) {
    return (<>
        <Stack className="ErrorPage" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
            <Box sx={{ width: "500px", height: "500px" }}>
                <img src={window.location.origin + "/assets/ForgotPassword.png"} alt="Error" width="100%" height="100%" />
            </Box>

            <Typography component="box" sx={{ margin: "10px 0px", fontSize: "40px", color: "#4E3A67", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
                {errorMessage}
            </Typography>

            <Typography component="box" sx={{ fontSize: "24px", color: "#4E3A67", fontFamily: "Work Sans, sans-serif" }}>
                {subMessage}
            </Typography>


        </Stack>
    </>)
}

export default ErrorPage;