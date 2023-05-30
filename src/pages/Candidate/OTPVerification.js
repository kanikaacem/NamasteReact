import { postRequest } from "../../utils/ApiRequests";
import { Box, Button, Stack, Container, Typography, TextField } from "@mui/material";
import PageTopSection from "../Common/PageTopSection";
import Error from "../../ThemeComponent/Common/Error";
import { Formik, Field, Form } from "formik";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
const OTPVerification = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const mobile_number = location?.state && location?.state?.mobile_number;
    const [seconds, setSeconds] = useState(60);

    const otpVerficationFieldStyle = {
        width: "50px",
        height: "40px",
        textAlign: "center",
        "& input": {
            textAlign: "center",
        },
    }
    const defaultValue = {
        otp_digit1: "",
        otp_digit2: "",
        otp_digit3: "",
        otp_digit4: "",
        otp_digit5: "",
        otp_digit6: ""
    };

    const inputRefs = useRef([]);

    const Timer = ({ seconds, setSeconds }) => {
        useEffect(() => {
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    }
                    return prevSeconds;
                });
            }, 1000);

            return () => clearInterval(timer);
        }, [seconds, setSeconds]);

        const formattedTime = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

        return (<span> {formattedTime}</span>)
    }

    const handleSubmit = async (values, { setFieldError }) => {
        let otp = values.otp_digit1 + values.otp_digit2 + values.otp_digit3 + values.otp_digit4 +
            values.otp_digit5 + values.otp_digit6;
        otp = parseInt(otp);
        try {
            const api_url = process.env.REACT_APP_VERIFY_OTP;
            const response = await postRequest(api_url, {
                "mobile": mobile_number,
                "otp": otp

            });
            if (response.status === "1") {
                localStorage.setItem("token", response.token)
                navigate("/job-listing")
            }
            else
                setFieldError("otp_digit1", response.msg);

        } catch (error) {
            // Handle the error
            console.error("Fetch error:", error);
        }
    }

    const ResendOTP = async () => {

        try {
            const api_url = process.env.REACT_APP_GENERATE_OTP;
            const response = await postRequest(api_url, {
                "mobile": mobile_number,
                "usertype": "candidate"

            });
            if (response.status === '1') {
                // Reset the resend timer to 60 seconds
                setSeconds(60);
            }

        } catch (error) {
            console.error("Fetch error:", error);
        }
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
                        Enter the OTP sent to <b>{mobile_number} </b>
                    </Typography>

                    <Formik
                        initialValues={defaultValue}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, values }) => (
                            <Form className="OTPVerificationForm">
                                <Stack direction="row" gap={1}>
                                    {[1, 2, 3, 4, 5, 6].map(index => (
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
                                                if (e.key === "Enter" && index < 6) {

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
                                {errors.otp_digit1 && touched.otp_digit1 && <Error text={errors.otp_digit1} />}

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
                                    OTP valid upto <b><Timer seconds={seconds} setSeconds={setSeconds} />  </b>
                                </Typography>

                                <Typography sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "1rem",
                                    color: "#676767",
                                    marginBottom: "10px"
                                }}>
                                    OTP Not Received <span style={{ color: "#FF671F" }}><span onClick={ResendOTP}><b>Resend OTP</b></span> </span>
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