import { postRequest } from "../../utils/ApiRequests";
import { ResetPasswordEmployerEmailURL } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import { PasswordGenFormValidationSchema } from "../../Validation/EmployerValidation";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";

import { useParams } from "react-router-dom";
import { useState } from "react";

const ResetPasswordPage = ({ user }) => {
    const { token } = useParams();
    const [sHPassword, setSHPassword] = useState(false);
    const [sHConfirmPassword, setSHConfirmPassword] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);
    const defaultValue = {
        password: "",
        confirm_password: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {
        let api_url = user === "employer" && ResetPasswordEmployerEmailURL;
        let response = await postRequest(api_url + token, {
            password: values.password
        });
        if (response.status === '1') {
            setPasswordChanged(true);
        }
        if (response.status === '0') {
            setFieldError("confirm_password", "Token is expired !!!.");
        }
        // ;
        // console.log(response);
        // let status = response.status;
        // if (status == 1) {
        //     let response2 = await postRequest(ForgotPasswordEmailURL, {
        //         email: values.email_address
        //     });
        //     // console.log(response=2);
        //     if (response2.status === '1')
        //         setEmailSend(true);
        // } else {
        //     setFieldError("email_address", "This email address is not registered with us.");
        // }
    }
    return (<>

        <ThemeMessage open={passwordChanged} setOpen={setPasswordChanged} message="Password Changed Successfully." type="success" />
        <Box className="ForgotPassword" sx={{ minHeight: "100vh" }}>
            <Box className="ForgotPasswordWrapper" sx={{ padding: "20px", height: `calc(100vh - 40px)` }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack direction="row" gap={2} sx={{ height: "100%" }} >
                    <Stack direction="column" alignItems="center" justifyContent="center" gap={3} sx={{ width: "50%", padding: "20px" }}>
                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#4E3A67",
                                display: "block",
                                lineHeight: "40px"
                            }}>
                                Forgot

                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#4E3A67",
                                    display: "block"
                                }}>
                                    Password ?
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ width: "500px", height: "500px" }}>
                            <img src={window.location.origin + "/assets/ForgotPassword.jpg"} width="100%" height="100%" alt="Forgot Password" />
                        </Box>
                    </Stack>
                    <Box sx={{ width: "50%", padding: "20px" }}>
                        <Box
                            sx={{
                                boxSizing: "border-box",
                                width: "865px",
                                height: "647",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderRadius: "19px",
                                position: "absolute",
                                top: "197px",
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



                            <Formik

                                initialValues={defaultValue}
                                validationSchema={PasswordGenFormValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="ResetPassword" >
                                        <ThemeFInputDiv>
                                            <ThemeFInputDiv sx={{ position: "relative" }}>
                                                <ThemeLabel LableFor="password" LableText="Password *" />
                                                <Field
                                                    id="password"
                                                    as={TextField}
                                                    placeholder="Enter Password (eg. KDHI@1234Jkhd)" type={sHPassword ? "text" : "password"} name="password" fullWidth />
                                                {
                                                    sHPassword ?
                                                        <img style={{
                                                            position: "absolute",
                                                            top: "66px",
                                                            right: "20px",
                                                            cursor: "pointer"
                                                        }}
                                                            onClick={() => setSHPassword(!sHPassword)}
                                                            src={window.location.origin + "/assets/Show.png"} width="21px" height="21px" alt="Show" />
                                                        :
                                                        <img style={{
                                                            position: "absolute",
                                                            top: "66px",
                                                            right: "20px",
                                                            cursor: "pointer"
                                                        }}
                                                            onClick={() => setSHPassword(!sHPassword)}
                                                            src={window.location.origin + "/assets/Hide.png"} width="21px" height="21px" alt="Hide" />
                                                }
                                                {errors.password && touched.password && <Error text={errors.password} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ position: "relative" }}>
                                                <ThemeLabel LableFor="confirm_password" LableText="Confirm Password *" />
                                                <Field
                                                    id="confirm_password"
                                                    as={TextField}
                                                    placeholder="Enter Password (eg. KDHI@1234Jkhd)" type={sHConfirmPassword ? "text" : "password"} name="confirm_password" fullWidth />
                                                {
                                                    sHConfirmPassword ?
                                                        <img style={{
                                                            position: "absolute",
                                                            top: "66px",
                                                            right: "20px",
                                                            cursor: "pointer"
                                                        }}
                                                            onClick={() => setSHConfirmPassword(!sHConfirmPassword)}
                                                            src={window.location.origin + "/assets/Show.png"} width="21px" height="21px" alt="Show" />
                                                        :
                                                        <img style={{
                                                            position: "absolute",
                                                            top: "66px",
                                                            right: "20px",
                                                            cursor: "pointer"
                                                        }}
                                                            onClick={() => setSHConfirmPassword(!sHConfirmPassword)}
                                                            src={window.location.origin + "/assets/Hide.png"} width="21px" height="21px" alt="Hide" />
                                                }
                                                {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}

                                            </ThemeFInputDiv>

                                        </ThemeFInputDiv>
                                        <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>

                                            <ThemeButtonType2 variant="contained" id="next" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>submit</ThemeButtonType2>
                                        </Stack>


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

export default ResetPasswordPage;