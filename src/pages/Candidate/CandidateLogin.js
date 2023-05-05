import { postRequest } from "../../utils/ApiRequests";
import { CandidateLoginURL, ReSendCandidateEmailVerificationURL } from "../../utils/ApiUrls";

import { Box, TextField, Typography, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { candidateLoginValidationSchema } from "../../Validation/CandidateValidation";

import Error from "../../ThemeComponent/Common/Error";
import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";

import { useState, } from "react";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";
import ThemeMobileImage from "../../ThemeComponent/Common/ThemeMobileImage";

import { useTranslation } from "react-i18next";

const CandidateLogin = () => {
    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [sendVerificationLink, setSendVerificationLink] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    // const user = useSelector(state => state.user);
    const action = useSelector(state => state.action);
    const [registerUser, setRegisterUser] = useState({});

    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();


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

        try {
            let response = await postRequest(CandidateLoginURL, CandidateLoginForm);
            if (response.status == '1') {
                setRegisterUser(response.data);

                localStorage.setItem("auth_token", response.token);
                localStorage.setItem("userType", "candidate")
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

            if (response.status === '0') {
                setFieldError("password", "Something Went Wrong");

            }
        } catch (err) {
            setFieldError("password", "Something Went Wrong");
        }
    }

    const resendEmailVerificationLink = async () => {

        let response = await postRequest(ReSendCandidateEmailVerificationURL, {
            email: document.getElementById("email_address").value
        })
        if (response.status === '1') {
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
                backgroundImage: {
                    "xs": "", "sm": "", "md": "", "lg": "url('../assets/g50.png')", "xl": "url('../assets/g50.png')"
                },
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 4px bottom 0px"

            }}>
            <Stack className="CandidateLoginPageInnerWrapper"
                sx=
                {{
                    padding: { "xs": "15px", "sm": "20px 50px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },

                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} gap={2} sx={{ position: "relative" }}>

                    <Stack sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "65%", "xl": "65%" },
                        alignItems: "center",
                    }}>
                        <Box sx={{
                            width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "800px", "xl": "800px" },
                            marginTop: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "100px", "xl": "100px" },
                            textAlign: "center"

                        }}>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.2rem", "sm": "2.5rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: { "xs": "400", "sm": "400", "md": "400", "lg": "700", "xl": "700" },
                                color: "#FC9A7E",
                                display: "block",
                                lineHeight: "40px"
                            }}>
                                {t('CHOOSE_A_JOB_YOU_LOVE')}

                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.6rem", "sm": "4rem", "md": "4rem", "lg": "4rem", "xl": "4rem" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#FFFFFF",
                                    display: "block",
                                    margin: { "xs": "0px 0px 10px 0px", "sm": "0px 0px 10px 0px", "md": "0px 0px 10px 0px", "lg": "10px 0px", "xl": "10px 0px" },
                                    lineHeight: "1.0 !important"
                                }}>
                                    {t('AND_YOU_NEVER_HAVE_TO_WORK_A_DAY_IN_YOUR_LIFE')}
                                </Typography>

                            </Typography>
                            <ThemeMobileImage imageUrl="/assets/g10Mobile.png" />
                        </Box>
                    </Stack>
                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "35%", "xl": "35%" },
                        position: "relative",
                        top: { "xs": "-15px", "sm": "-15px", "md": "-15px", "lg": "0px", "xl": "0px" }
                    }}>
                        <Stack sx={{
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: { "xs": "20px", "sm": "30px", "md": "40px", "lg": "40px", "xl": "50px 100px" }
                        }}>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1rem", "sm": "1.2rem", "md": "1.2rem", "lg": "1.2rem", "xl": "1.2rem" }, fontFamily: "Work Sans, sans-serif"
                            }}>
                                {t('WELCOME_GUEST')}
                            </Typography>
                            <Typography component="box" sx={{ fontSize: { "xs": "1.6rem", "sm": "2.5rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem" }, fontFamily: "Work Sans, sans-serif", fontWeight: "700", marginBottom: "30px" }}>
                                {t('SIGN_IN_FOR_JOBYAHAN')}
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
                                                <ThemeLabel LableFor="email_address" LableText={t('EMAIL_ADDRESS')} />
                                                <Field
                                                    error={errors.email_address && touched.email_address}
                                                    as={TextField}
                                                    id="email_address"
                                                    placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="password" LableText={t('PASSWORD')} />
                                                <Field
                                                    error={errors.password && touched.password}
                                                    id="password"
                                                    as={TextField}
                                                    placeholder="Enter Password" type="password" name="password" fullWidth />
                                                {errors.password && touched.password && <Error text={errors.password} />}


                                            </ThemeFInputDiv>
                                        </ThemeFInputDiv>
                                        <Box sx={{
                                            fontSize: { "xs": "0.6rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                            margin: { "xs": "10px 0px", "sm": "20px 0px", "md": "20px 0px", "lg": "20px 0px", "xl": "20px 0px" }
                                        }}>
                                            <Link to="/forgot-password/candidate" >
                                                {t('FORGOT_PASSWORD')}
                                            </Link>
                                        </Box>


                                        <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>

                                            {isEmailVerified && (<>
                                                <a href="#" onClick={
                                                    () => {
                                                        resendEmailVerificationLink()
                                                    }
                                                }
                                                    style={{ textAlign: "center" }}>
                                                    {t('RESEND_VERIFICATION_LINK')}
                                                </a>

                                            </>)

                                            }

                                            <ThemeButtonType2 variant="contained" type="submit" id="log_in" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('LOGIN')}</ThemeButtonType2>
                                            <ThemeButtonType3 variant="outlined"
                                                type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                                component={Link}
                                                to="/candidate-register"

                                            >{t('SIGNUP')}</ThemeButtonType3>
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

export default CandidateLogin;
