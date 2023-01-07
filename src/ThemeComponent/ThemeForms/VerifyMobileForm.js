import { Box, TextField, Typography, Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form } from "formik";

import { OTPValidationSchema, MobileVerifyFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { ThemeButtontype1 } from "../../utils/Theme";

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
            {({ errors, touched, values, setFieldValue }) => (
                <Form className="SendOTPForm">

                    <Box className="input-item">
                        <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />

                        <Field
                            variant="standard"
                            error={errors.mobile_number && touched.mobile_number}
                            id="mobile_number"
                            as={TextField}
                            placeholder="Enter Mobile Number ( eg. 9898989898 )" type="text" name="mobile_number" fullWidth />
                        {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                    </Box>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ThemeButtontype1 variant="contained" type="submit">Send OTP</ThemeButtontype1>
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
                <Form className="VerifyOTPForm">

                    <Box className="input-item">
                        <ThemeLabel LableFor="otp" LableText="OTP" />

                        <Field
                            variant="standard"
                            error={errors.otp && touched.otp}
                            id="otp"
                            as={TextField}
                            placeholder="Enter Otp ( eg. 1234 )" type="text" name="otp" fullWidth />
                        {errors.otp && touched.otp && <Error text={errors.otp} />}

                    </Box>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ThemeButtontype1 variant="contained" type="submit">Verify OTP</ThemeButtontype1>
                    </Box>
                </Form>
            )}
        </Formik>
    </>)
}
export default VerifyMobileForm;