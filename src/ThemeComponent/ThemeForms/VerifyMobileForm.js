import { postRequest } from "../../utils/ApiRequests";

import { Box, TextField, Typography, Snackbar, IconButton, Stack, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form } from "formik";

import { OTPValidationSchema, MobileVerifyFormValidationSchema } from "../../Validation/EmployerValidation";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import { useState } from "react";

import ThemeMessage from "../Common/ThemeMessage";
import ThemeMobileImage from "../Common/ThemeMobileImage";
import ReactGA from 'react-ga';
const TRACKING_ID = 'AW-11080443279/gVDECIfG2YkYEI_LyKMp'
ReactGA.initialize(TRACKING_ID)

const VerifyMobileForm = () => {
    const [sendOtp, setSendOtp] = useState(false);
    const defaultValue1 = {
        mobile_number: ""
    }
    const defaultValue2 = {
        otp: ""
    }
    const handleSubmit1 = async (values, { setFieldError }) => {
        ReactGA.event({
            category: values.mobile_number,
            action: "test",
            label: "test",
            value: values.mobile_number
        })
        let response = await postRequest("https://backend.jobsyahan.com/api/sendotp/+91" + values.mobile_number);
        if (response.status == '1')
            setSendOtp(true);
    }
    const handleSubmit2 = async (values, { setFieldError }) => {
        let response = await postRequest("https://backend.jobsyahan.com/api/verifyotp", {
            otp: values.otp
        })
        if (response.status == '1') {
            window.location.href = window.location.origin + "/employer-dashboard/company-information";
        }
        else {
            setFieldError("otp", "OTP doesn't match");
        }


    }
    return (<>
        <ThemeMessage open={sendOtp} setOpen={setSendOtp}
            message="OTP is send to the above number ." type="success" />

        <Box className="FormTemplate"
            sx={{
                minHeight: "100vh",
                background: "#2B1E44",
                backgroundImage:
                {
                    "xs": "none", "sm": "none", "md": "none",
                    "lg": "url('../assets/g10.png')", "xl": "url('../assets/g10.png')"
                },
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 0px bottom 0px"

            }}>
            <Stack className="FormTemplateWrapper"
                sx=
                {{
                    padding: { "xs": "20px", "sm": "20px 50px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>

                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }}
                    sx={{
                        gap: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "40px", "xl": "40px" }
                    }}>

                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "60%", "xl": "60%" },
                        display: "flex",
                        justifyContent: "center",
                        marginTop: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "200px", "xl": "200px" }

                    }}>
                        <Box
                            sx={{
                                width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "65%", "xl": "65%" },
                                textAlign: { "xs": "center", "sm": "center", "md": "center", "lg": "start", "xl": "start" }

                            }}
                        >
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1rem", "sm": "2rem", "md": "2rem", "xl": "2rem", "lg": "2rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: { "xs": "#FC9A7E", "sm": "#FC9A7E", "md": "#FC9A&E", "lg": "#FFFFFF", "xl": "#FFFFFF" },
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Direct Hiring App for
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "3rem", "md": "3rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: { "xs": "#FFFFFF", "sm": "#FFFFFF", "md": "#FFFFFF", "lg": "#FC9A7E", "xl": "#FC9A7E" },
                                display: "block",
                                lineHeight: "1"
                            }}>
                                Founders, Business

                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.6rem", "sm": "3rem", "md": "3rem", "xl": "4rem", "lg": "4rem" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: { "xs": "#FFFFFF", "sm": "#FFFFFF", "md": "#FFFFFF", "lg": "#FC9A7E", "xl": "#FC9A7E" },
                                    display: "block",
                                    lineHeight: "1"

                                }}>
                                    Owners and HRs.
                                </Typography>
                            </Typography>
                            <ThemeMobileImage imageUrl="/assets/g10Mobile.png" />

                        </Box>
                    </Box>
                    <Stack sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "35%", "xl": "35%" },
                        position: "relative",
                        top: { "xs": '-11px', "sm": "-25px", "md": "-50px", "lg": "0px", "xl": "0px" }
                    }}>
                        <Stack gap={2} sx={{
                            height: { "xs": "fit-content", "sm": "fit-content", "md": "600px", "lg": "600px", "xl": "600px" },
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: { "xs": "20px", "sm": "30px", "md": "40px", "lg": "40px", "xl": "100px 120px" }

                        }}>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "1.6rem", "md": "2.5rem", "xl": "2.5rem", "lg": "2.5rem" }
                                , fontFamily: "Work Sans, sans-serif", fontWeight: "700"
                            }}>
                                Verify Mobile No.
                            </Typography>

                            <Formik

                                initialValues={defaultValue1}
                                validationSchema={MobileVerifyFormValidationSchema}
                                onSubmit={handleSubmit1}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="SendOTPForm">
                                        <ThemeFInputDiv sx={{ position: "relative" }}>
                                            <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />
                                            <Field
                                                style={{ width: "80%" }}
                                                error={errors.mobile_number && touched.mobile_number}
                                                id="mobile_number"
                                                as={TextField}
                                                placeholder="Enter Mobile No. (eg. 9313170822)" type="text" name="mobile_number" />
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
                                {({ errors, touched, values, setFieldValue }) => (
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
                                            <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Verify</ThemeButtonType2>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>

                        </Stack>
                    </Stack>


                </Stack>
            </Stack>
        </Box >

    </>)
}
export default VerifyMobileForm;