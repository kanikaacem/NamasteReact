import { postRequest } from "../../utils/ApiRequests";

import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { OTPValidationSchema, MobileVerifyFormValidationSchema } from "../../Validation/EmployerValidation";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import { useState } from "react";

import ThemeMessage from "../Common/ThemeMessage";
import ThemeWebsiteImage from "../Common/ThemeWebsiteImage";
import ThemeMobileImage from "../Common/ThemeMobileImage";
import { t } from "i18next";

const CandidateMobileVerify = () => {
    const [sendOtp, setSendOtp] = useState(false);
    const defaultValue1 = {
        mobile_number: ""
    }
    const defaultValue2 = {
        otp: ""
    }
    const handleSubmit1 = async (values, { setFieldError }) => {

        let response = await postRequest("https://backend.jobsyahan.com/api/sendotp/+91" + values.mobile_number);
        console.log(response)
        if (response.status === '1')
            setSendOtp(true);
        else
            console.log(response)
    }
    const handleSubmit2 = async (values, { setFieldError }) => {
        let response = await postRequest("https://backend.jobsyahan.com/api/verifyotp", {
            otp: values.otp
        })
        if (response.status === '1') {
            window.location.href = window.location.origin + '/candidate-dashboard/job-type';
        }
        else {
            setFieldError("otp", "OTP doesn't match");
        }


    }
    return (<>
        <ThemeMessage open={sendOtp} setOpen={setSendOtp} message="OTP is send to the above number." type="success" />

        <Box className="CandidateMobileVerify"
            sx={{
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="CandidateMobileVerifyPageWrapper"
                sx=
                {{
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>

                <Stack gap={3} direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }}
                    justifyContent="space-between" sx={{
                        margin: { "xs": "0px", "sm": "0px", "md": "0px", "xl": "70px 0px", "lg": "70px 0px" }
                    }}
                >
                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },
                        margin: "0 auto"
                    }}>
                        <Box sx={{ display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" } }}>
                            <Typography component="box" sx={{
                                fontSize: "4rem",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                            }}> {t('UNLIMITED_JOB')}
                                <Typography component="box" sx={{
                                    fontSize: "4rem",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                }}> {t('OPTIONS')}
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" } }}>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "3rem", "md": "3rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                textAlign: "center",
                                margin: "10px 0px"
                            }}> {t('UNLIMITED_JOB_OPTIONS')}
                            </Typography>
                        </Box>

                        <ThemeMobileImage imageUrl="/assets/g54.png" />
                        <ThemeWebsiteImage imageUrl="/assets/g54.png" imageWidth="500px" />
                    </Box>

                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },
                        position: "relative",
                        top: { "xs": '-30px', "sm": "-50px", "md": "-50px", "lg": "0px", "xl": "0px" }

                    }}>
                        <Box sx={{
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                        }}>
                            <Box sx={{
                                padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },
                            }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    {t('VERIFY_MOBILE_NUMBER')}
                                </Typography>
                            </Box>

                            <Stack direction="column"
                                gap={2}
                                sx={{
                                    boxSizing: "border-box",
                                    height: "647",
                                    background: "#FFFFFF",
                                    border: "1px solid #EDEDED",
                                    position: "relative",
                                    padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                    paddingBottom: "100px",
                                    borderBottomLeftRadius: "19px",
                                    borderBottomRightRadius: "19px",
                                }}>
                                <Formik

                                    initialValues={defaultValue1}
                                    validationSchema={MobileVerifyFormValidationSchema}
                                    onSubmit={handleSubmit1}
                                >
                                    {({ errors, touched, values, setFieldValue }) => (
                                        <Form className="CandidateSendOTPForm">
                                            <ThemeFInputDiv sx={{ position: "relative" }}>
                                                <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />
                                                <Stack direction="row" gap={1} alignItems="center">
                                                    <Field
                                                        sx={{ width: { "xs": "83%", "sm": "85%", "md": "85%", "lg": "88%", "xl": "88%" } }}
                                                        error={errors.mobile_number && touched.mobile_number}
                                                        id="mobile_number"
                                                        as={TextField}
                                                        placeholder="Enter Mobile Number (eg. 9313170822 )" type="text" name="mobile_number" />
                                                    <Button
                                                        id="sendOTPButton"
                                                        type="submit"
                                                        sx={{
                                                            position: "absolute",
                                                            top: "50px",
                                                            right: "0px",
                                                            width: "59px",
                                                            height: "59px",
                                                            background: "#FC9A7E",
                                                            borderRadius: "7px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            cursor: "pointer",
                                                            "&:hover": {
                                                                position: "absolute",
                                                                top: "50px",
                                                                right: "0px",
                                                                width: "59px",
                                                                height: "59px",
                                                                background: "#FC9A7E",
                                                                borderRadius: "7px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                cursor: "pointer"
                                                            }

                                                        }}
                                                    > <img src={window.location.origin + "/assets/SendOtp.png"} alt="SendOTP" />
                                                    </Button>
                                                </Stack>
                                                {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}

                                            </ThemeFInputDiv>
                                        </Form>
                                    )}
                                </Formik>

                                <Formik

                                    initialValues={defaultValue2}
                                    validationSchema={OTPValidationSchema}
                                    onSubmit={handleSubmit2}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="VerifyOTPForm">

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="otp" LableText="OTP *" />
                                                <Field
                                                    error={errors.otp && touched.otp}
                                                    id="otp"
                                                    as={TextField}
                                                    placeholder="Verify OTP" type="text" name="otp" fullWidth />
                                                {errors.otp && touched.otp && <Error text={errors.otp} />}
                                            </ThemeFInputDiv>

                                            <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                                <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('VERIFY')}</ThemeButtonType2>
                                            </Stack>
                                        </Form>
                                    )}
                                </Formik>
                            </Stack>
                        </Box>


                    </Box>
                </Stack>
            </Stack>
        </Box >


    </>)
}
export default CandidateMobileVerify;