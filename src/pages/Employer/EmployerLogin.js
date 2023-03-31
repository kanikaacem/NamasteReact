import { postRequest } from "../../utils/ApiRequests";
import { EmployerLoginURL, ReSendEmailVerificationURL } from "../../utils/ApiUrls";


import { TextField, Box, Typography, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import Error from "../../ThemeComponent/Common/Error";

import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";
import { useState } from "react";
const EmployerLogin = () => {
    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [sendVerificationLink, setSendVerificationLink] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const action = useSelector(state => state.action);
    const [registerUser, setRegisterUser] = useState({});
    const dispatch = useDispatch();

    const defaultValue = {
        email_address: "",
        password: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {

        let EmployerLoginForm = new FormData();
        EmployerLoginForm = {
            email: values.email_address,
            password: values.password
        }
        try {
            let response = await postRequest(EmployerLoginURL, EmployerLoginForm);
            if (response.status === '1') {
                setRegisterUser(response.data);

                if (!response.data.isemailverified) {
                    setShowEmailVerifiedMessage(true);
                    setIsEmailVerified(true);
                }
                else if (!response.data.ismobileverified) {
                    localStorage.setItem("auth_token", response.token);
                    dispatch({ type: 'LOGIN_REGISTRATION', payload: response.data });
                }
                else if (response.data.isemailverified && response.data.ismobileverified && response.data.stage === "savememailandpass") {
                    window.location.href = window.location.origin + "/employer-dashboard/company-information";
                }
                else {
                    localStorage.setItem("auth_token", response.token);
                    localStorage.setItem("action", "login");
                    dispatch({ type: 'LOGIN', payload: response.data });
                }

            }

            if (response.status === '0')
                setFieldError("password", response.msg);
        } catch (err) {
            window.location.href = window.location.origin + "/login-error";
        }


    }

    const resendEmailVerificationLink = async () => {

        let response = await postRequest(ReSendEmailVerificationURL, {
            email: document.getElementById("email_address").value
        })
        if (response.status === '1') {
            setSendVerificationLink(true);
        }


    }

    return (<>

        {isLoggedIn === 'true' &&
            (registerUser && registerUser.employer_type === "employer") &&
            registerUser.isemailverified && registerUser.ismobileverified && action === "login" &&
            registerUser.stage === "hrpage" && < Navigate to="/employer-dashboard"></Navigate>
        }

        {isLoggedIn === 'true' && !registerUser.ismobileverified && action === "registration" && < Navigate to="/employer-dashboard/mobile-verify"></Navigate>}

        <ThemeMessage open={showEmailVerifiedMessage} setOpen={setShowEmailVerifiedMessage} message="Email Address is not verified. Please Verify your email First" type="error" />
        <ThemeMessage open={sendVerificationLink} setOpen={setSendVerificationLink} message="Email Verification link is send" type="success" />


        <Box className="EmployerLoginPage"
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g10.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 0px bottom 0px"

            }}>
            <Stack className="EmployerLoginPageInnerWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack direction="row" sx={{ position: "relative", gap: "40px" }}>
                    <Stack sx={{
                        width: "60%",
                        alignItems: "center"
                    }}>
                        <Box sx={{ marginTop: "100px" }}>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FC9A7E",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                                We settle for nothing

                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#FC9A7E",
                                    display: "block"
                                }}>
                                    Less than the BEST
                                </Typography>
                            </Typography>


                            <Typography component="box" sx={{
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                                fontWeight: "800",
                                color: "#FFFFFF",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                We Love Recruiting
                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                                fontWeight: "500",
                                color: "#FFFFFF",
                                display: "block",
                                maxWidth: "695px"
                            }}>
                                Employees get the work they look for through our impactful job portal
                                that is monitored 24x7 for quality, transparency and success. Employers,
                                the other hand, get the unique skills and experience of the champion employees,
                                hired through us, for their growth.

                            </Typography>
                        </Box>
                    </Stack>


                    <Stack gap={2} sx={{
                        minWidth: { 'lg': "449px", 'md': '100%', 'xs': '100%' },
                        maxHeight: "730px",
                        background: "#FBF8FF",
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: { "lg": "50px 100px", "md": "50px 100px", "xs": "30px" }
                    }}>
                        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
                            Log in
                        </Typography>
                        <Formik

                            initialValues={defaultValue}
                            validationSchema={employerLoginValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="EmployerLoginForm">
                                    <ThemeFInputDiv >
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_address" LableText="Email Address * " />
                                            <Field
                                                error={errors.email_address && touched.email_address}
                                                as={TextField}
                                                id="email_address"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                        </ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password *" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}
                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>
                                    <ThemeFInputDiv>

                                        <Link to="/forgot-password/employer" style={{ "margin": "20px 0px" }}>
                                            Forgot Password?
                                        </Link>

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

                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined" type="button"
                                            sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            component={Link}
                                            to="/employer-register"

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

export default EmployerLogin;