import { Box, Button, Stack, Container, Typography, TextField } from "@mui/material";
import PageTopSection from "../Common/PageTopSection";
import FormLabel from "../Common/FormLabel";
import LoaderScreen from "../Common/LoaderScreen";
import Error from "../../ThemeComponent/Common/Error";

// import { CandidateMobileNumberValidation } from "../../Validation/CandidateValidation";
import { Formik, Field, Form } from "formik";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CandidateLogin = () => {
    const navigate = useNavigate();
    const [requestProcessing, setRequestProcessing] = useState('not_initiated');
    const defaultValue = {
        mobile_number: "",
    }

    const handleSubmit = async (values, { setFieldError }) => {
        setRequestProcessing('in_progress');
        console.log(requestProcessing)
        setTimeout(() => {
            navigate('/otp-verification')
            //  setRequestProcessing('complete');
        }, 5000)
    }


    return (<>
        <Box className="CandidateLoginPage" sx={{
            height: "100vh",
            display: requestProcessing === "not_initiated" ? "block" : "none"
        }}>
            <PageTopSection TopSectionName="Verify Mobile Number" />

            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>
                <Box className="CandidateLoginSection" sx={{
                    padding: "20px"

                }}>
                    <Formik
                        initialValues={defaultValue}
                        // validationSchema={CandidateMobileNumberValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="CandidateLoginForm">
                                <Stack direction="column" gap={1}>
                                    <FormLabel LableFor="email_address" LableText="WhatsApp Mobile Number" />
                                    <Field
                                        sx={{
                                            "& fieldset": { border: 'none' },
                                        }}
                                        error={errors.mobile_number && touched.mobile_number}
                                        as={TextField}
                                        id="mobile_number"
                                        placeholder="Enter Mobile Number" type="text" name="mobile_number" fullWidth />
                                    {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                                </Stack>
                                <Button variant="contained"
                                    type="submit"
                                    sx={{
                                        background: "#FF671F",
                                        borderRadius: "33px",
                                        textTransform: "capitalize",
                                        margin: "20px 0px",
                                        width: "100%",
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
                                    <span style={{ color: "#0D99FF" }}>Privacy & Policy </span>
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