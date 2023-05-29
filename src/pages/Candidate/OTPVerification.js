import { Box, Button, Stack, Container, Typography, TextField } from "@mui/material";
import PageTopSection from "../Common/PageTopSection";
// import FormLabel from "../Common/FormLabel";
// import LoaderScreen from "../Common/LoaderScreen";
// import Error from "../../ThemeComponent/Common/Error";

// import { CandidateMobileNumberValidation } from "../../Validation/CandidateValidation";
import { Formik, Field, Form } from "formik";

import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
const OTPVerification = () => {
    const navigate = useNavigate();
    const [requestProcessing, setRequestProcessing] = useState('not_initiated');

    const otpVerficationFieldStyle = {
        width: "50px",
        height: "40px !important",
        textAlign: "center"
    }
    const defaultValue = {
        otp_digit1: "",
        otp_digit2: "",
        otp_digit3: "",
        otp_digit4: ""
    };

    const inputRefs = useRef([]);

    const handleSubmit = async (values, { setFieldError }) => {
        setRequestProcessing('in_progress');
        console.log(requestProcessing)
        setTimeout(() => {
            navigate('/otp-verification')
            //  setRequestProcessing('complete');
        }, 10000)
    }


    return (<>
        <Box className="CandidateLoginPage" sx={{
            height: "100vh",
        }}>
            <PageTopSection TopSectionName="OTP Verification" />

            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>

                <Box className="CandidateLoginSection" sx={{
                    padding: "20px"

                }}>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "1rem",
                        color: "#676767",
                        marginBottom: "10px"
                    }}>
                        Enter the OTP sent to <b>811102223 </b>
                    </Typography>

                    <Formik
                        initialValues={defaultValue}
                        // validationSchema={}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, values }) => (
                            <Form className="OTPVerificationForm">
                                <Stack direction="row" gap={1}>
                                    {[1, 2, 3, 4].map(index => (
                                        <Field
                                            key={index}
                                            sx={otpVerficationFieldStyle}
                                            as={TextField}
                                            id={`otp_digit${index}`}
                                            type="text"
                                            name={`otp_digit${index}`}
                                            fullWidth
                                            inputRef={el => {
                                                inputRefs.current[index] = el;
                                            }}
                                            onKeyDown={e => {
                                                if (e.key === "Enter" && index < 4) {

                                                    e.preventDefault(); // Prevent form submission on "Enter" key press
                                                    const nextInput = document.getElementById(`otp_digit${index + 1}`);
                                                    nextInput.focus();
                                                }
                                            }}
                                            inputProps={{
                                                sx: {
                                                    background: touched[`otp_digit${index}`] ? "#F6EBE5 !important" : "#F5F6F9 !important",
                                                    // Add more styles here as needed
                                                },
                                            }}
                                        />
                                    ))}
                                </Stack>
                                <Button variant="contained"
                                    disabled={Object.values(values).some((value) => value === "")} // Disable button if any OTP field is empty

                                    type="submit"
                                    sx={{
                                        background: "#FF671F",
                                        borderRadius: "33px",
                                        textTransform: "capitalize",
                                        margin: "20px 0px",
                                        width: "100%",
                                        fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                                        color: Object.values(values).some((value) => value === "") ? "#000000 !important" : "#ffffff",
                                        fontWeight: "700",
                                        "&:hover": {
                                            background: "#FF671F",
                                        }
                                    }
                                    }>Confirm</Button >

                                <Typography sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "1rem",
                                    color: "#676767",
                                    marginBottom: "10px"
                                }}>
                                    OTP valid upto <b>01:00 </b>
                                </Typography>

                                <Typography sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "1rem",
                                    color: "#676767",
                                    marginBottom: "10px"
                                }}>
                                    OTP Not Received <span style={{ color: "#FF671F" }}><b>Resend OTP</b> </span>
                                </Typography>

                            </Form>
                        )}
                    </Formik>
                </Box>

            </Container >
        </Box >

    </>)
}

export default OTPVerification;