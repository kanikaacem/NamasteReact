import { getRequest } from "../../utils/ApiRequests";

import { Box, Container, Stack, Typography, Button, Snackbar, Alert } from "@mui/material";
import { useParams } from "react-router-dom";

import { useState } from "react";
const EmployerVerficationPage = () => {
    const { employerEmail, candidateEmail } = useParams();
    const [emailVerified, setEmailVerified] = useState(false);

    const VerifyEmail = async () => {
        let api_url = "";
        let redirect_url = "";
        if (employerEmail != undefined) {
            api_url = `https://13.235.183.204:3001/api/verificationthroughmail/employer?email=${employerEmail}`;
            redirect_url = window.location.origin + "/employer-login";
        }
        if (candidateEmail != undefined) {
            api_url = `https://13.235.183.204:3001/api/verificationthroughmail/candidate?email=${candidateEmail}`;
            redirect_url = window.location.origin + "/candidate-login";
        }
        let response = await getRequest(api_url);

        // console.log(response.status)
        if (response.status == '1') {
            window.location.href = redirect_url;
        }

    }
    return (<>

        <Snackbar
            open={emailVerified}
            autoHideDuration={6000} onClose={() => setEmailVerified(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={() => setEmailVerified(false)} severity="success" sx={{ width: '100%' }}>
                Your Email is verified.
            </Alert>

        </Snackbar>
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
                        You've entered  {employerEmail || candidateEmail} as the email address for your account.
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "16px", color: "#2B1E44", textAlign: "center" }}>
                        Please verify this email address by clicking button below.
                    </Typography>
                </Stack>
                <Stack justifyContent="center" alignItems="center" sx={{ margin: "20px 0px" }}>
                    <Button variant="contained" sx={{ background: "#2B1E44", width: "fit-content" }} onClick={VerifyEmail}> Verify Your Email</Button>
                </Stack>
            </Container>
        </Box>
    </>)
}

export default EmployerVerficationPage;

