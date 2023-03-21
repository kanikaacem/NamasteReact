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
            // setVerifyMobileForm(false);
            // setCompanyInfoForm(true);
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
                    "url('../assets/g10.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 0px bottom 0px"

            }}>
            <Stack className="FormTemplateWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>

                <Stack direction={{ 'lg': "row", 'md': 'column', 'xs': 'column' }} sx={{ gap: "40px" }}>

                    <Box sx={{
                        width: { 'lg': "60%", 'md': '100%', 'xs': '100%' },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <Box
                            sx={{
                                width: `calc(60 % - 20px)`,

                            }}
                        >
                            <Typography component="box" sx={{
                                fontSize: "36px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#FFFFFF",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Direct Hiring App for
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FC9A7E",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                                Founders, Business

                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#FC9A7E",
                                    display: "block"
                                }}>
                                    Owners and HRs.
                                </Typography>
                            </Typography>

                            <img src={window.location.origin + "/assets/g10.png"} alt="g10" />
                        </Box>
                    </Box>
                    <Stack
                    >

                        <Stack gap={2} sx={{
                            width: { "lg": "449px", "md": "85%", "xs": "85%" },
                            height: "730px",
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: { 'lg': "50px 100px", 'md': '50px', 'xs': '50px' }

                        }}>
                            <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
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
                                                placeholder="Enter Mobile Number (eg. 9313170822 )" type="text" name="mobile_number" />
                                            <Button
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
        </Box>

    </>)
}
export default VerifyMobileForm;