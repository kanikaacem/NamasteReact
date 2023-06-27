import { postRequest } from "../../utils/ApiRequests";
import { Box, Button, Stack, Container, Typography, TextField } from "@mui/material";
import PageTopSection from "../Common/PageTopSection";
import { Formik, Field, Form } from "formik";
import Error from "../../ThemeComponent/Common/Error";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import JobApplyWeb from '../Common/JobApplyWeb';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Footer from "../../ThemeComponent/Common/Footer";
const OTPVerification = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const mobile_number = location?.state && location?.state?.mobile_number;
    const currentLanguage = useSelector(state => state.currentLanguage);
    const [seconds, setSeconds] = useState(60);
    const [openJobApplyModal, setOpenJobApplyModal] = useState(false);

    const { t } = useTranslation();
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
        // otp_digit5: "",
        // otp_digit6: ""
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

    const submitProfileDetailsForm = async(values) => {
        const { name, age, gender, qualification } = values;
    
        let ApplyJobForm = new FormData();
        ApplyJobForm = {
          fullname: name,
          age: age,
          gender: gender, 
          education: qualification
        }
        try {
          const api_url = process.env.REACT_APP_APPLY_JOB;
          const response = await postRequest(api_url, ApplyJobForm);
          if (response.status === '1') {
            setOpenJobApplyModal(false);
            navigate("/job-listing", { state: {jobstatus: response.jobstatus }});
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }

    const handleSubmit = async (values, { setFieldError }) => {
        let otp = values.otp_digit1 + values.otp_digit2 + values.otp_digit3 + values.otp_digit4;
        try {
            const api_url = process.env.REACT_APP_VERIFY_OTP;
            const response = await postRequest(api_url, {
                "inputdata": mobile_number,
                "usertype": "candidate",
                "otp": otp
            });
            if (response.status === "1") {
                localStorage.setItem("auth_token", response.token)
                if (response.stage === 'DETAILSNEED') {
                    setOpenJobApplyModal(true)
                } else if (response.stage === 'BACKTOPREVIOUSPAGE') {
                    navigate("/job-listing", {state: {jobstatus: response.jobstatus }})
                }
            }
            else
                setFieldError("otp_digit1", response.msg);

        } catch (error) {
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
            <PageTopSection TopSectionName={t('OTP_VERIFICATION')} showBackButton={true} backURL={`${window.location.origin}/candidate-login`} />

            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>

                <Box className="CandidateLoginSection" sx={{
                    padding: "20px"

                }}>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "1rem",
                        color: "#676767",
                        marginBottom: "20px"
                    }}>
                        {currentLanguage === "hi" ?
                            <> <b>{mobile_number}</b> {t('ENTER_OTP_SEND_TO')} </> :
                            <>{t('ENTER_OTP_SEND_TO')} <b>{mobile_number} </b></>
                        }
                    </Typography>

                    <Formik
                        initialValues={defaultValue}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, values, setFieldError }) => (
                            <Form className="OTPVerificationForm">
                                <Stack direction="row" gap={1} sx={{ height: "65px" }}>
                                    {[1, 2, 3, 4].map(index => (
                                        <Field
                                            key={index}
                                            error={!!errors[`otp_digit${index}`]}// Access the error for each field dynamically
                                            sx={otpVerficationFieldStyle}
                                            as={TextField}
                                            id={`otp_digit${index}`}
                                            type="text"
                                            name={`otp_digit${index}`}
                                            fullWidth
                                            inputRef={el => {
                                                inputRefs.current[index] = el;
                                            }}
                                            inputProps={{
                                                sx: {
                                                    background: touched[`otp_digit${index}`] ? "#F6EBE5 !important" : "#F5F6F9 !important",
                                                    // Add more styles here as needed
                                                },
                                                maxLength: 1, // Limit input to a single character
                                                inputMode: "numeric",
                                                pattern: "[0-9]",
                                                onInput: (e) => {
                                                    e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                                    if (e.target.value) inputRefs.current[index + 1].focus();
                                                },
                                            }}
                                        />
                                    ))}

                                </Stack>
                                {errors.otp_digit1 && touched.otp_digit1 && <Error text={errors.otp_digit1} />}

                                <Typography sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "1rem",
                                    color: "#676767",
                                    margin: "20px 0px"
                                }}>
                                    OTP valid upto <span><img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/timeline.png" alt="TimeLine" /></span> <b><Timer seconds={seconds} setSeconds={setSeconds} />  </b>
                                </Typography>

                                <Button variant="contained"
                                    disabled={Object.values(values).some((value) => value === "")} // Disable button if any OTP field is empty
                                    type="submit"
                                    sx={{
                                        background: "#FF671F",
                                        borderRadius: "33px",
                                        textTransform: "capitalize",
                                        width: "100%",
                                        height: "43px",
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
                                    marginTop: "36px"
                                }}>
                                    {t('OTP_NOT_RECEIVED')} <span style={{ color: "#FF671F", cursor: "pointer" }} onClick={ResendOTP}><b>{t('RESEND_OTP')}</b></span>
                                </Typography>

                            </Form>
                        )}
                    </Formik>
                </Box>

            </Container >
            <Footer />

        </Box >
        <JobApplyWeb openJobApplyModal={openJobApplyModal} setOpenJobApplyModal={setOpenJobApplyModal} submitProfileDetailsForm={submitProfileDetailsForm} />
    </>)
}

export default OTPVerification;