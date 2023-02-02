import { postRequest, PostImageRequest, getRequest } from "../../utils/ApiRequests";

import { Box, TextField, Typography, Snackbar, IconButton, Stack, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form } from "formik";

import { OTPValidationSchema, MobileVerifyFormValidationSchema } from "../../Validation/EmployerValidation";

import { ThemeButtontype1, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import { useState } from "react";

import ReactGA from 'react-ga';
const TRACKING_ID = 'AW-11080443279/gVDECIfG2YkYEI_LyKMp'
ReactGA.initialize(TRACKING_ID)

const VerifyMobileForm = ({ email, setVerifyMobileForm, setCompanyInfoForm, setMobileNumber }) => {
    const [sendOtp, setSendOtp] = useState(false);

    const handleClose = (event) => {
        setSendOtp(false);
    };
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const action2 = (
        <> OK

        </>
    )
    const defaultValue1 = {
        mobile_number: ""
    }
    const defaultValue2 = {
        otp: ""
    }
    const handleSubmit1 = async (values, { setFieldError }) => {
        // console.log(values.mobile_number);
        ReactGA.event({
            category: values.mobile_number,
            action: "test",
            label: "test",
            value: values.mobile_number
        })
        let response = await postRequest("https://13.235.183.204:3001/api/sendotp/+91" + values.mobile_number);
        if (response.status == '1')
            //     // setMobileNumber(values.mobile_number);
            setSendOtp(true);
    }
    const handleSubmit2 = async (values, { setFieldError }) => {
        let response = await postRequest("https://13.235.183.204:3001/api/verifyotp", {
            otp: values.otp
        })
        if (response.status == '1') {
            setVerifyMobileForm(false);
            setCompanyInfoForm(true);
        }
        else {
            setFieldError("otp", "OTP doesn't match");
        }


    }
    return (<>

        <Snackbar
            open={sendOtp}
            autoHideDuration={6000}
            onClose={handleClose}
            message="OTP is send to the above number."
            action={action}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
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
    </>)
}
export default VerifyMobileForm;