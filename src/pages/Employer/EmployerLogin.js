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
import ThemeMobileImage from "../../ThemeComponent/Common/ThemeMobileImage";
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
                backgroundImage: {
                    "xs": "", "sm": "", "md": "", "lg": "url('../assets/g10.png')", "xl": "url('../assets/g10.png')"
                },
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 0px bottom 0px"

            }}>
            <Stack className="EmployerLoginPageInnerWrapper"
                sx=
                {{
                    padding: { "xs": "20px", "sm": "20px 50px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }}
                    sx={{ gap: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "40px", "xl": "40px" } }}>
                    <Stack sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "65%", "xl": "65%" },
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            marginTop: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "100px", "xl": "100px" }
                            , textAlign: { "xs": "center", "sm": "center", "md": "center", "lg": "start", "xl": "start" }
                        }}>
                            <Box sx={{ display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" } }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1rem", "sm": "2rem", "md": "2rem", "lg": "2rem", "xl": "2rem" },
                                    fontFamily: "Montserrat",
                                    color: "#FC9A7E",
                                    display: "block",
                                    margin: "10px"
                                }}>
                                    We Love Recruiting
                                </Typography>
                            </Box>
                            <Box sx={{ display: { "xs": "none", "sm": "block", "md": "block", "lg": "none", "xl": "none" } }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "lg": "4rem", "xl": "4rem" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: { "xs": "#FFFFFF", "sm": "#FFFFFF", "md": "#FFFFFF", "lg": "#FC9A7E", "xl": "#FC9A7E" },
                                    display: "block",
                                }}>
                                    We settle for nothing Less than the BEST
                                </Typography>
                            </Box>

                            <Box sx={{ display: { "xs": "block", "sm": "none", "md": "none", "lg": "block", "xl": "block" } }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "lg": "4rem", "xl": "4rem" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: { "xs": "#FFFFFF", "sm": "#FFFFFF", "md": "#FFFFFF", "lg": "#FC9A7E", "xl": "#FC9A7E" },
                                    display: "block",
                                    lineHeight: "0.3"
                                }}>
                                    We settle for nothing


                                    <Typography component="span" sx={{
                                        fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "lg": "4rem", "xl": "4rem" },
                                        fontFamily: "Work Sans, sans-serif",
                                        fontWeight: "700",
                                        color: { "xs": "#FFFFFF", "sm": "#FFFFFF", "md": "#FFFFFF", "lg": "#FC9A7E", "xl": "#FC9A7E" },
                                        display: "block"
                                    }}>
                                        Less than the BEST
                                    </Typography>
                                </Typography>
                            </Box>


                            <Box sx={{ display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" } }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1rem", "sm": "1.5rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "800",
                                    color: "#FFFFFF",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    We Love Recruiting
                                </Typography>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": ".75rem", "sm": "1.5rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
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

                            <ThemeMobileImage imageUrl="/assets/g10Mobile.png" />

                        </Box>
                    </Stack>

                    <Box className="EmployerLoginForm" sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "35%", "xl": "35%" },
                        position: "relative",
                        top: { "xs": '-11px', "sm": "-25px", "md": "-50px", "lg": "0px", "xl": "0px" }
                    }}>
                        <Stack gap={2} sx={{
                            maxHeight: "730px",
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: { "xs": "20px", "sm": "30px", "md": "40px", "lg": "40px", "xl": "100px 120px" }
                        }}>
                            <Typography component="box" sx={{
                                fontSize: {
                                    "xs": "1.6rem", "sm": "2.5rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem"
                                }, fontFamily: "Work Sans, sans-serif", fontWeight: "700"
                            }}>
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

                                            <Box sx={{
                                                fontSize: { "xs": "0.6rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                                margin: { "xs": "10px 0px", "sm": "20px 0px", "md": "20px 0px", "lg": "20px 0px", "xl": "20px 0px" }
                                            }}>
                                                <Link to="/forgot-password/employer"  >
                                                    Forgot Password?
                                                </Link>
                                            </Box>

                                        </ThemeFInputDiv>
                                        <Stack sx={{
                                            width: "100%", margin: {
                                                "xs": "20px 0px", "sm": "40px 0px", "md": "40px 0px", "lg": "40px 0px", "xl": "40px 0px"
                                            }, gap: "20px"
                                        }}>
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
                    </Box>
                </Stack>
            </Stack>

        </Box >


    </>)

}

export default EmployerLogin;