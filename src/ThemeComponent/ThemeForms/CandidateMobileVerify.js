import { postRequest } from "../../utils/ApiRequests";

import { Box, TextField, Typography, IconButton, Stack, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form } from "formik";

import { OTPValidationSchema, MobileVerifyFormValidationSchema } from "../../Validation/EmployerValidation";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import { useState } from "react";

import HeaderSec from "../Common/HeaderSec";
import ThemeMessage from "../Common/ThemeMessage";



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
        if (response.status == '1')
            setSendOtp(true);
    }
    const handleSubmit2 = async (values, { setFieldError }) => {
        let response = await postRequest("https://backend.jobsyahan.com/api/verifyotp", {
            otp: values.otp
        })
        if (response.status == '1') {
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
                minHeight: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="JobTypePageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                {/* <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" /> */}
                <Stack gap={3} direction="row" justifyContent="space-between"
                    sx={{
                        margin: "50px"
                    }}>
                    <Box sx={{ width: "50%", margin: "0 auto" }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                        }}> Unlimited Job
                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            width: "max-content"
                        }}>
                            Options

                        </Typography>
                        <img src={window.location.origin + "/assets/g54.png"} alt="g54" style={{ margin: "40px 20px" }} />

                    </Box>

                    <Box sx={{ width: "50%" }}>
                        <Box sx={{

                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                            padding: "35px 50px"
                        }}>
                            <Typography component="box" sx={{
                                fontSize: "40px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Verify Mobile No.
                            </Typography>

                        </Box>
                        <Stack direction="column"
                            gap={2}
                            sx={{
                                boxSizing: "border-box",
                                height: "647",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderRadius: "19px",
                                position: "relative",
                                padding: "30px 50px",
                                paddingBottom: "100px"


                            }}>
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

                    </Box>
                </Stack>
            </Stack>
        </Box>


    </>)
}
export default CandidateMobileVerify;