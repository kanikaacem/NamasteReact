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
                margin: "10px 0px", 
                fontSize: { "xs": "1rem", "sm": "1rem", "md": "1rem", "lg": "2.5rem", "xl": "2.5rem" }, color: "#4E3A67", fontFamily: "Work Sans, sans- serif", fontWeight: "700"
            }}>
                {errorMessage}
            </Typography>

            <Typography component="box" sx={{ 
                fontSize: { "xs": "1rem", "sm": "1.5rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" }, color: "#4E3A67", fontFamily: "Work Sans, sans-serif" }}>
                {subMessage}
            </Typography>


        </Stack >
    </>)
}

export default ErrorPage;