import { postRequest } from "../../utils/ApiRequests";
import { saveCandidateUserNameAndPasswordURL, CandidateLoginURL, EmailExist } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CandidateRegistrationSchema } from "../../Validation/CandidateValidation";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import ShowMessageToastr from "../../ThemeComponent/Common/ShowMessageToastr";
import Error from '../../ThemeComponent/Common/Error';

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const CandidateRegistration = () => {

    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [showLoginButton, setShowLoginButton] = useState(false);

    const CandidateRegistration = useSelector(state => state.CandidateRegistration);

    const dispatch = useDispatch();
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
        console.log(response)
        if (response.status === '0') {
            setShowLoginButton(true);
            setFieldError("email_id", response.msg);
        }
        else {
            response = await postRequest(saveCandidateUserNameAndPasswordURL, CandidateLoginForm);
            if (response.status == '1') {
                localStorage.setItem("useremail", values.email_id);
                localStorage.setItem("password", values.password)
                localStorage.setItem('auth_token', response.token);
                localStorage.setItem('user', JSON.stringify(response.data));
                document.getElementById("continue").disabled = "true"
                setShowEmailVerifiedMessage(true);
            }
        }

    }


    return (<>

        <ShowMessageToastr value={showEmailVerifiedMessage} handleClose={() => setShowEmailVerifiedMessage(false)}
            message="Email Verification Link is send . "
            messageType="success" />

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
                            Sign Up for JobsYahan
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
                                                            fontSize: "16px"
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

                                        <ThemeButtonType2 id="continue" variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Continue</ThemeButtonType2>
                                    </Stack>

                                </Form>
                            )
                            }
                        </Formik >


                    </Stack>
                </Stack>
            </Stack>

        </Box >


    </>)
}
export default CandidateRegistration;