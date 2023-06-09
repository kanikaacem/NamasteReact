import { postRequest } from "../../utils/ApiRequests";
import { Box, Button, Stack, Container, Typography, TextField } from "@mui/material";
import PageTopSection from "../Common/PageTopSection";
import FormLabel from "../Common/FormLabel";
import LoaderScreen from "../Common/LoaderScreen";
import Error from "../../ThemeComponent/Common/Error";

import { CandidateMobileNumberValidation } from "../../Validation/CandidateValidation";
import { Formik, Field, Form } from "formik";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CandidateLogin = () => {
    const navigate = useNavigate();
    const [requestProcessing, setRequestProcessing] = useState('not_initiated');

    const defaultValue = {
        mobile_number: "",
    }
    const getLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        const apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_YOUR_GOOGLE_MAPS_API_KEY}`;

                        fetch(apiUrl, {
                            method: 'POST',
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                const { location } = data;
                                const { lat, lng } = location;
                                console.log(location);
                                resolve({ latitude: lat, longitude: lng });
                            })
                            .catch((error) => {
                                reject(error);
                            });

                        // console.error('Error getting location:', error);
                        // reject(error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
                reject(new Error('Geolocation is not supported.'));
            }
        });
    };
    const handleSubmit = async (values, { setFieldError }) => {
        setRequestProcessing('in_progress');
        const { latitude, longitude } = await getLocation();

        const candidateFormData = {
            mobile: values.mobile_number,
            usertype: "candidate",
            latitude: latitude,
            longitude: longitude,
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
            <PageTopSection TopSectionName="Verify Mobile Number" />

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
                                    <FormLabel LableFor="email_address" LableText="WhatsApp Mobile Number" />
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
                                    }> Send OTP</Button >

                                <Typography sx={{
                                    marginTop: "110px",
                                    fontFamily: "Poppins",
                                    fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem', lg: '1.5rem', xl: '1.5rem' },
                                    fontWeight: '500',
                                    textAlign: "center"
                                }}>
                                    By continue you agree to JobYahan
                                    <span style={{ color: "#0D99FF" }}> Terms & Conditions</span> and
                                    <span style={{ color: "#0D99FF" }}> Privacy & Policy </span>
                                </Typography>

                            </Form>
                        )}
                    </Formik>
                </Box>

            </Container >
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