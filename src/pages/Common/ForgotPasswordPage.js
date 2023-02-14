import { postRequest } from "../../utils/ApiRequests";
import { CheckEmployerEmailExist, ForgotPasswordEmployerEmailURL } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import { emailFormValidationSchema } from "../../Validation/EmployerValidation";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";

import { useParams } from "react-router-dom";
import { useState } from "react";

const ForgotPasswordPage = () => {

    const [emailSend, setEmailSend] = useState(false);


    const defaultValue = {
        email_address: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {
        let response = await postRequest(CheckEmployerEmailExist, {
            email: values.email_address
        });
        ;
        console.log(response);
        let status = response.status;
        if (status == 1) {
            let response2 = await postRequest(ForgotPasswordEmployerEmailURL, {
                email: values.email_address
            });
            // console.log(response=2);
            if (response2.status === '1')
                setEmailSend(true);
        } else {
            setFieldError("email_address", "This email address is not registered with us.");
        }
    }
    return (<>

        <ThemeMessage open={emailSend} setOpen={setEmailSend} message="Email is send to the Specified email Address." type="success" />
        <Box className="ForgotPassword" sx={{ minHeight: "100vh" }}>
            <Box className="ForgotPasswordWrapper" sx={{ padding: "20px", height: `calc(100vh - 40px)` }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack direction="row" gap={2}
                    // sx={{ height: "100%" }}
                    sx={{
                        margin: { "lg": "100px 0px", "md": "100px 0px", "xs": "20px 0px" }
                    }}
                >
                    <Box sx={{
                        width: "50%",
                        padding: "20px",
                        display: { "lg": "block", "md": "block", "xs": "none" }
                    }}>
                        <Stack direction="column" gap={2} alignItems="center" justifyContent="center">
                            <Box>
                                <Typography component="box" sx={{
                                    fontSize: { "lg": "64px", "md": "50px", "xs": "50px" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#4E3A67",
                                    display: "block",
                                    lineHeight: "40px"
                                }}>
                                    Forgot

                                    <Typography component="box" sx={{
                                        fontSize: { "lg": "64px", "md": "50px", "xs": "50px" },
                                        fontFamily: "Work Sans, sans-serif",
                                        fontWeight: "700",
                                        color: "#4E3A67",
                                        display: "block"
                                    }}>
                                        Password ?
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ maxWidth: "400px", height: "400px" }}>
                                <img src={window.location.origin + "/assets/ForgotPassword.png"} width="100%" height="100%" alt="Forgot Password" />
                            </Box>
                        </Stack>

                    </Box>
                    <Box sx={{
                        width: { "lg": "50%", "md": "50%", "xs": "100%" },
                        padding: "20px"
                    }}>
                        <Box
                            sx={{
                                boxSizing: "border-box",
                                // maxWidth: "865px",
                                minHeight: "647",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderRadius: "19px",
                                // position: "absolute",
                                // top: "197px",
                                padding: "30px 50px",
                                paddingBottom: "100px"
                            }}>
                            <Typography component="box" sx={{
                                fontSize: "32px",
                                fontFamily: "Montserrat",
                                display: "block",
                                margin: "20px 0px"
                            }}>
                                Reset Password
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: "16px",
                                fontFamily: "Montserrat",
                                display: "block",
                                margin: "20px 0px"
                            }}>
                                Enter the email address associated with your account and we'll send you a link to reset your password.
                            </Typography>

                            <Formik
                                initialValues={defaultValue}
                                validationSchema={emailFormValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="EmailSignupForm">
                                        <ThemeFInputDiv>
                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="email_address" LableText="Email Address *" />
                                                <Field
                                                    id="email_address"
                                                    error={errors.email_address && touched.email_address}
                                                    as={TextField}
                                                    placeholder="Enter Email Address " type="text" name="email_address" fullWidth />
                                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}
                                            </ThemeFInputDiv>
                                            <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                                <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Continue</ThemeButtonType2>
                                            </Stack>
                                        </ThemeFInputDiv>
                                    </Form>
                                )}
                            </Formik>
                        </Box>

                    </Box>
                </Stack>
            </Box>
        </Box >
    </>)
}

export default ForgotPasswordPage;