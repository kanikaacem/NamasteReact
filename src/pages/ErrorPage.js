import { Box, Stack, Typography } from "@mui/material";
function ErrorPage({ errorMessage }) {
    return (<>
        <Stack className="ErrorPage" alignItems="center" justifyContent="center"
            sx={{
                height: "90vh"
            }}>
            <Box sx={{ width: "500px", height: "500px" }}>
                <img src={window.location.origin + "/assets/ForgotPassword.png"} alt="Error" width="100%" height="100%" />
            </Box>

            <Typography component="box" sx={{ margin: "30px 0px", fontSize: "40px", color: "#4E3A67", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
                {errorMessage}
            </Typography>


        </Stack>
    </>)
}

export default ErrorPage;