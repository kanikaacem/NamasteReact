import { postRequest } from "../../utils/ApiRequests";
import { CandidateLoginURL, ReSendCandidateEmailVerificationURL } from "../../utils/ApiUrls";

import { Box, TextField, Typography, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { candidateLoginValidationSchema } from "../../Validation/CandidateValidation";

import Error from "../../ThemeComponent/Common/Error";
import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";

import { useState, } from "react";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";
const CandidateLogin = () => {
    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [sendVerificationLink, setSendVerificationLink] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    // const user = useSelector(state => state.user);
    const action = useSelector(state => state.action);
    const [registerUser, setRegisterUser] = useState({});

    const dispatch = useDispatch();

    const defaultValue = {
        email_address: "",
        password: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {
        let CandidateLoginForm = new FormData();
        CandidateLoginForm = {
            email: values.email_address,
            password: values.password
        }

        let response = await postRequest(CandidateLoginURL, CandidateLoginForm);

        if (response.status == '1') {
            setRegisterUser(response.data);

            localStorage.setItem("auth_token", response.token);
            if (response.data.isemailverified && response.data.ismobileverified)
                dispatch({ type: 'LOGIN', payload: response.data });

            else if (!response.data.ismobileverified) {
                dispatch({ type: 'LOGIN_REGISTRATION', payload: response.data });
            }

            else {
                setShowEmailVerifiedMessage(true);
                setIsEmailVerified(true);
                document.getElementById("log_in").disabled = "true";

            }
        }
        if (response.status === '0' && Object.keys(response.data).length === 0)
            window.location.href = window.location.origin + "/login-error";

        if (response.status == '0')
            setFieldError("password", response.data);
    }

    const resendEmailVerificationLink = async () => {

        let response = await postRequest(ReSendCandidateEmailVerificationURL, {
            email: document.getElementById("email_address").value
        })
        if (response.status == '1') {
            setSendVerificationLink(true);
            setIsEmailVerified(false);
        }


    }


    return (<>
        {isLoggedIn == 'true' && registerUser.ismobileverified && registerUser.isemailverified && action === "login" && < Navigate to="/candidate-dashboard"></Navigate>}
        {isLoggedIn == 'true' && !registerUser.ismobileverified && action === "registration" && < Navigate to="/candidate-dashboard/mobile-verify"></Navigate>}
        <ThemeMessage open={showEmailVerifiedMessage} setOpen={setShowEmailVerifiedMessage}
            message="Email Address is not verified. Please Verify your email First" type="error" />

        <ThemeMessage open={sendVerificationLink} setOpen={setSendVerificationLink}
            message="Email Verification Link is send ." type="success" />

        <Box className="CandidateLoginPage"
            sx={{
                minHeight: "100vh",
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g50.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 4px bottom 0px"

            }}>
            <Stack className="CandidateLoginPageInnerWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>

                    <Box sx={{
                        position: "absolute",
                        top: "90px",
                        left: "204px",
                        width: "800px"
                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "700",
                            color: "#FC9A7E",
                            display: "block",
                            lineHeight: "40px"
                        }}>
                            Choose a job you love,

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FFFFFF",
                                display: "block",
                                margin: "10px 0px",
                                lineHeight: "1.0 !important"
                            }}>
                                and you never have to
                                work a day in your life

                            </Typography>

                        </Typography>


                    </Box>

                    <Stack sx={{
                        width: "449px",
                        height: "730px",
                        background: "#FBF8FF",
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: "50px 100px"
                    }}>
                        <Typography component="box" sx={{ fontSize: "20px", fontFamily: "Work Sans, sans-serif" }}>
                            Welcome Guest,
                        </Typography>
                        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700", marginBottom: "30px" }}>
                            Sign In for JobsYahan
                        </Typography>

                        <Formik
                            initialValues={defaultValue}
                            validationSchema={candidateLoginValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="candidateLogin">

                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                            <Field
                                                error={errors.email_address && touched.email_address}
                                                as={TextField}
                                                id="email_address"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}


                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>

                                    <ThemeFInputDiv>
                                        <a href="#" onClick={
                                            () => {
                                                window.location.href = window.location.origin + "/forgot-password/candidate";
                                            }
                                        }
                                            style={{ marginTop: "20px" }}>
                                            Forgot Password ?
                                        </a>
                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>

                                        {isEmailVerified && (<>
                                            <a href="#" onClick={
                                                () => {
                                                    resendEmailVerificationLink()
                                                }
                                            }
                                                style={{ textAlign: "center" }}>
                                                Resend Verification Link
                                            </a>

                                        </>)

                                        }

                                        <ThemeButtonType2 variant="contained" type="submit" id="log_in" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined"
                                            type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + "/candidate-register"
                                            }}
                                        >Sign up</ThemeButtonType3>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>

                    </Stack>
                </Stack>
            </Stack>

        </Box>


    </>)
}

export default CandidateLogin;
