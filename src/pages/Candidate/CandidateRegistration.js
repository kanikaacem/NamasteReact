import { postRequest } from "../../utils/ApiRequests";
import { saveCandidateUserNameAndPasswordURL, EmailExist } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import { CandidateRegistrationSchema } from "../../Validation/CandidateValidation";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import Error from '../../ThemeComponent/Common/Error';
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import ThemeMobileImage from "../../ThemeComponent/Common/ThemeMobileImage";
const CandidateRegistration = () => {

    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [showLoginButton, setShowLoginButton] = useState(false);

    const { t } = useTranslation();
    const defaultValue = {
        email_id: "",
        password: "",
        confirm_password: "",
    }


    const handleSubmit = async (values, { setFieldError }) => {
        let CandidateLoginForm = new FormData();
        CandidateLoginForm = {
            email: values.email_id,
            password: values.password
        }

        let response = await postRequest(EmailExist, {
            email: values.email_id
        });
        if (response.status === '0') {
            setShowLoginButton(true);
            setFieldError("email_id", response.msg);
        }
        else {
            response = await postRequest(saveCandidateUserNameAndPasswordURL, CandidateLoginForm);
            if (response.status === '1') {
                localStorage.setItem('auth_token', response.token);
                localStorage.setItem('user', JSON.stringify(response.data));
                document.getElementById("continue").disabled = "true"
                setShowEmailVerifiedMessage(true);
            }
        }

    }


    return (<>


        <ThemeMessage open={showEmailVerifiedMessage} setOpen={setShowEmailVerifiedMessage}
            message="Email Verification Link is send ." type="success" />

        <Box className="CandidateLoginPage"
            sx={{
                minHeight: { "xs": "1000px", "sm": "1000px", "md": "100vh", "lg": "100vh", "xl": "100vh" },
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
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack direction={{ 'lg': "row", 'md': 'column', 'xs': 'column' }} sx={{ gap: "40px" }}>

                    <Box sx={{
                        width: { "xs": "100%", "md": "100%", "sm": "100%", "xl": "65%", "lg": "65%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <Box
                            sx={{
                                width: "800px",
                                marginTop: { "xs": "0px", "sm": "0px", "md": "70px", "lg": "70px", "xl": "70px" },
                                textAlign: "center"
                            }}
                        >
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
                                    fontSize: { "xs": "1.2rem", "sm": "2.5rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
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
                    </Box>

                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "35%", "xl": "35%" },
                        position: "relative",
                        top: { "xs": "-45px", "sm": "-50px", "md": "-50px", "lg": "0px", "xl": "0px" }
                    }}>
                        <Stack sx={{
                            height: { "xs": "fit-content", "sm": "fit-content", "md": "730px", "lg": "730px", "xl": "730px" },
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: { "xs": "20px", "sm": "30px", "md": "40px", "lg": "40px", "xl": "50px 80px" }

                        }}>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1rem", "sm": "1.2rem", "md": "1.2rem", "lg": "1.2rem", "xl": "1.2rem" }, fontFamily: "Work Sans, sans-serif"
                            }}>
                                {t('WELCOME_GUEST')}
                            </Typography>
                            <Typography component="box" sx={{ fontSize: { "xs": "1.6rem", "sm": "2.5rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem" }, fontFamily: "Work Sans, sans-serif", fontWeight: "700", marginBottom: "30px" }}>
                                {t('SIGN_UP_FOR_JOBSYAHAN')}
                            </Typography>

                            <Formik

                                initialValues={defaultValue}
                                validationSchema={CandidateRegistrationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="CandidateRegistration">
                                        <ThemeFInputDiv>
                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="email_id" LableText="Email Address *" />
                                                <Field
                                                    error={errors.email_id && touched.email_id}
                                                    as={TextField}
                                                    id="email_id"
                                                    placeholder="Enter Email ID/ Username" type="text" name="email_id" fullWidth />
                                                {errors.email_id && touched.email_id && <Box sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: "20px"
                                                }}>
                                                    <Error text={errors.email_id} />
                                                    {showLoginButton &&
                                                        <ThemeButtonType2

                                                            onClick={() => {
                                                                window.location.href = window.location.origin + "/candidate-login";
                                                            }
                                                            } id="login" variant="contained" type="button" sx={{
                                                                fontFamily: "Work Sans, sans-serif",
                                                                fontWeight: "600",
                                                                width: "fit-content",
                                                                padding: "5px",
                                                                fontSize: "1rem"
                                                            }}>Login</ThemeButtonType2>

                                                    }
                                                </Box>
                                                }


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

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="confirm_password" LableText="Confirm Password *" />
                                                <Field
                                                    error={errors.confirm_password && touched.confirm_password}
                                                    id="confirm_password"
                                                    as={TextField}
                                                    placeholder="Enter Confirm Password" type="password" name="confirm_password" fullWidth />
                                                {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}


                                            </ThemeFInputDiv>
                                        </ThemeFInputDiv>

                                        <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>

                                            <ThemeButtonType2 id="continue" variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('CONTINUE')}</ThemeButtonType2>
                                        </Stack>

                                    </Form>
                                )
                                }
                            </Formik >


                        </Stack>
                    </Box>

                </Stack>
            </Stack>

        </Box >


    </>)
}
export default CandidateRegistration;