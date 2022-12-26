import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

const EmployerVerficationPage = () => {
    const { id } = useParams();

    return (<>
        <Box>
            <Container sx={{ height: "100vh" }}>
                <Box sx={{ width: "700px", height: "500px", margin: "0 auto" }}>
                    <img src={window.location.origin + "/assets/EmailVerification.png"} alt="email_verification" width="100%" height="100%" />
                </Box>
                <Stack direction="column" gap={1}>
                    <Typography component="div" sx={{ fontSize: "30px", color: "#2B1E44", textAlign: "center", fontWeight: "600" }}>
                        Verify your email address
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "16px", color: "#2B1E44", textAlign: "center" }}>
                        You've entered abc@gmail.com as the email address for your account.
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "16px", color: "#2B1E44", textAlign: "center" }}>
                        Please verify this email address by clicking button below.
                    </Typography>
                </Stack>
                <Stack justifyContent="center" alignItems="center" sx={{ margin: "20px 0px" }}>
                    <Button variant="contained" sx={{ background: "#2B1E44", width: "fit-content" }}> Verify Your Email</Button>
                </Stack>
            </Container>
        </Box>
    </>)
}

export default EmployerVerficationPage;

