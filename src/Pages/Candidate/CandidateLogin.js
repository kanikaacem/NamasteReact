import { postRequest } from "../../utils/ApiRequests";
import { Box, Button, Stack, Container, Typography, TextField } from "@mui/material";
import PageTopSection from "../Common/PageTopSection";
import FormLabel from "../Common/FormLabel";
import LoaderScreen from "../Common/LoaderScreen";
import Error from "../../ThemeComponent/Common/Error";

import { CandidateMobileNumberValidation } from "../../Validation/CandidateValidation";
import { Formik, Field, Form } from "formik";
import { getLocation } from "../../utils/function";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import Footer from "../../ThemeComponent/Common/Footer";
const CandidateLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const jobId = location?.state && location?.state?.jobid;
    const [requestProcessing, setRequestProcessing] = useState('not_initiated');
    const currentLanguage = localStorage.getItem("locale");

    const { t } = useTranslation();

    const defaultValue = {
        mobile_number: "",
    }

    const handleSubmit = async (values, { setFieldError }) => {
        setRequestProcessing('in_progress');
        const { latitude, longitude } = await getLocation();

        const candidateFormData = {
            inputdata: values.mobile_number,
            usertype: "candidate",
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            jobid: jobId,
        };


        try {
            const api_url = process.env.REACT_APP_GENERATE_OTP;
            const response = await postRequest(api_url, candidateFormData);
            if (response.status === '1')
                // Handle the fetched data
                navigate('/otp-verification', { state: { mobile_number: values.mobile_number } });
        } catch (error) {
            // Handle the error
            console.error("Fetch error:", error);
        }

    }


    return (<>
        <Box className="CandidateLoginPage" sx={{
            height: "100vh",
            display: requestProcessing === "not_initiated" ? "block" : "none"
        }}>
            <PageTopSection TopSectionName={t('VERIFY_MOBILE_NUMBER')} showBackButton={true} backURL={`${window.location.origin}/job-listing`} />

            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>

                <Box className="CandidateLoginSection" sx={{
                    padding: "24px 20px"

                }}>
                    <Formik
                        initialValues={defaultValue}
                        validationSchema={CandidateMobileNumberValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="CandidateLoginForm">
                                <Stack direction="column" gap={2}>
                                    <FormLabel LableFor="email_address" LableText={t('WHATSAPP_MOBILE_NUMBER')} />
                                    <Field
                                        sx={{
                                            "& fieldset": { border: 'none' },
                                        }}
                                        error={errors.mobile_number && touched.mobile_number}
                                        as={TextField}
                                        id="mobile_number"
                                        type="text"
                                        name="mobile_number"
                                        fullWidth
                                        InputProps={{
                                            placeholder: "Enter Mobile Number",
                                            style: { color: "#999999", fontWeight: 400 },
                                        }}
                                    />
                                    {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                                </Stack>
                                <Button variant="contained"
                                    type="submit"
                                    sx={{
                                        background: "#FF671F",
                                        borderRadius: "33px",
                                        textTransform: "capitalize",
                                        margin: "30px 0px",
                                        width: "100%",
                                        height: "43px",
                                        fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                                        "&:hover": {
                                            background: "#FF671F",
                                        }
                                    }
                                    }> {t('SEND_OTP')}</Button >

                                <Typography
                                    sx={{
                                        marginTop: "40px",
                                        fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" },
                                        fontWeight: "500",
                                        textAlign: "center"
                                    }}
                                >
                                    By continuing, you agree to the <a href={`${window.location.origin}/${currentLanguage}/terms-and-conditions`} style={{ color: "#0D99FF", textDecoration: "none" }}>Terms & Conditions</a> and
                                    <a href={`${window.location.origin}/${currentLanguage}/privacy-policy`} style={{ color: "#0D99FF", textDecoration: "none" }}> Privacy & Policy</a> of JobsYahan.
                                </Typography>

                            </Form>
                        )}
                    </Formik>
                </Box>

            </Container >
            <Footer />
        </Box >

        <Box className="LoaderScreenPage" sx={{
            height: "100vh",
            display: requestProcessing === "in_progress" ? "block" : "none"
        }}>
            <LoaderScreen />
        </Box >

    </>)
}

export default CandidateLogin;