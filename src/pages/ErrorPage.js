import { Box, Stack, Typography } from "@mui/material";
function ErrorPage({ errorMessage, subMessage }) {
    return (<>
        <Stack className="ErrorPage" alignItems="center" justifyContent="center" >
            <Box sx={{
                width: { "xs": "300px", "sm": "500px", "md": "500px", "lg": "500px", "xl": "500px" },
                height: { "xs": "300px", "sm": "500px", "md": "500px", "lg": "500px", "xl": "500px" }
            }}>
                <img src={window.location.origin + "/assets/ForgotPassword.png"} alt="Error" width="100%" height="100%" />
            </Box>

            <Typography component="box" sx={{
                margin: "10px 0px", fontSize: { "xs": "26px", "sm": "40px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontFamily: "Work Sans, sans- serif", fontWeight: "700"
            }}>
                {errorMessage}
            </Typography>

            <Typography component="box" sx={{ fontSize: { "xs": "16px", "sm": "24px", "md": "24px", "lg": "24px", "xl": "24px" }, color: "#4E3A67", fontFamily: "Work Sans, sans-serif" }}>
                {subMessage}
            </Typography>


        </Stack >
    </>)
}

export default ErrorPage;