import { getRequest } from "../../utils/ApiRequests";

import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import { useState } from "react";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";
const EmployerVerficationPage = () => {
    const { employerEmail, candidateEmail } = useParams();
    const [emailVerified, setEmailVerified] = useState(false);
    const navigate = useNavigate();
    const VerifyEmail = async () => {
        let api_url = "";
        let redirect_url = "";
        if (employerEmail != undefined) {
            api_url = `https://backend.jobsyahan.com/api/verificationthroughmail/employer?email=${employerEmail}`;
            redirect_url = window.location.origin + "/employer-login";
        }
        if (candidateEmail != undefined) {
            api_url = `https://backend.jobsyahan.com/api/verificationthroughmail/candidate?email=${candidateEmail}`;
            redirect_url = window.location.origin + "/candidate-login";
        }
        let response = await getRequest(api_url);

        if (response.status == '1') {
            setEmailVerified(true);
            setTimeout(() => {
                window.location.href = redirect_url
            }, 8000);
        }

    }
    return (<>
        <ThemeMessage open={emailVerified} setOpen={setEmailVerified}
            message="You have successfully verified your email address. This Page will automatically redirect to Login Page" type="success" />


        <Box>
            <Container sx={{ height: "100vh" }}>
                <Box sx={{
                    width: { "xs": "300px", "sm": "300px", "md": "700px", "lg": "700px", "xl": "700px" }, height: {
                        "xs": "260px", "sm": "260px", "md": "500px", "lg": "500px", "xl": "500px"
                    }, margin: "0 auto"
                }}>
                    <img src={window.location.origin + "/assets/EmailVerification.png"} alt="email_verification" width="100%" height="100%" />
                </Box>
                <Stack direction="column" gap={1}>
                    <Typography component="div" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "30px", "lg": "30px", "xl": "30px" }, color: "#2B1E44", textAlign: "center", fontWeight: "600" }}>
                        Verify your email address
                    </Typography>
                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" }, color: "#2B1E44", textAlign: "center" }}>
                        You've entered  {employerEmail || candidateEmail} as the email address for your account.
                    </Typography>
                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" }, color: "#2B1E44", textAlign: "center" }}>
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

