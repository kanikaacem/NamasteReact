import { Box, Container, Stack, Typography, Button, Snackbar, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useState } from "react";
const EmployerVerficationPage = () => {
    const { employerEmail, candidateEmail } = useParams();
    let email = '';
    // const query = useSearchParams();
    // const email = "kanika.np@acem.edu.in"
    const [emailVerified, setEmailVerified] = useState(false);

    const api_url = useSelector(state => state.api_url);
    const VerifyEmail = async () => {
        let formData = new FormData();
        formData = {
            email: email
        }
        let response = await fetch(api_url + "/api/admin/verificationthroughmail", {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            response = await response.json();
            if (response.status == 1) {
                setEmailVerified(true);
            }

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

