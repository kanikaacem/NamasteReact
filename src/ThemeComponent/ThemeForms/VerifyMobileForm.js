import { Box, Input, Stack, styled, Typography, Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form } from "formik";

import { OTPValidationSchema, MobileVerifyFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../Common/ButtonType1";

import { useState } from "react";

const VerifyMobileForm = ({ setVerifyMobileForm, setCompanyInfoForm, setMobileNumber }) => {
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
    const defaultValue1 = {
        mobile_number: ""
    }
    const defaultValue2 = {
        otp: ""
    }
    const handleSubmit1 = async (values, { setFieldError }) => {
        setMobileNumber(values.mobile_number);
        setSendOtp(true);
    }
    const handleSubmit2 = async (values, { setFieldError }) => {
        if (values.otp == '1234') {
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
        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
            Verify Mobile Number
        </Typography>
        <Formik

            initialValues={defaultValue1}
            validationSchema={MobileVerifyFormValidationSchema}
            onSubmit={handleSubmit1}
        >
            {({ errors, touched, values, setFieldValue }) => (<Form >

                <Box className="input-item">
                    <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />

                    <Field
                        error={errors.mobile_number && touched.mobile_number}
                        id="mobile_number"
                        as={Input}
                        placeholder="Enter Mobile Number" type="text" name="mobile_number" fullWidth />
                    {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                </Box>

                <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                    <ButtonType1 id="sendOtpButton" ButtonText="Send Otp" />
                </Box>
            </Form>
            )}
        </Formik>
        <br></br><br></br>
        <Formik

            initialValues={defaultValue2}
            validationSchema={OTPValidationSchema}
            onSubmit={handleSubmit2}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form >

                    <Box className="input-item">
                        <ThemeLabel LableFor="otp" LableText="OTP" />

                        <Field
                            error={errors.otp && touched.otp}
                            id="otp"
                            as={Input}
                            placeholder="Enter Otp" type="text" name="otp" fullWidth />
                        {errors.otp && touched.otp && <Error text={errors.otp} />}

                    </Box>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ButtonType1 ButtonText="Verify Otp" />
                    </Box>
                </Form>
            )}
        </Formik>
    </>)
}
export default VerifyMobileForm;