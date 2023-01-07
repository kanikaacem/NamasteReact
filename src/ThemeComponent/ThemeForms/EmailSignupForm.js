import { Box, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { emailFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { ThemeButtontype1 } from "../../utils/Theme";

import { LoginSocialGoogle } from 'reactjs-social-login';

import { useSelector } from "react-redux";

const EmailSignupForm = ({ email, setEmail, setEmailSignupForm, setPasswordGenForm }) => {

    const api_url = useSelector(state => state.api_url);

    const CLIENT_ID = "346122009616-1gljk4ii4218dajhhjki2cb62v1r1cr0.apps.googleusercontent.com";

    const defaultValue = {
        email_address: ""
    }

    const CheckEmail = async (email) => {
        let response = await fetch(api_url + "/api/employer/checkemail", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                email: email
            }),
        })

        return response;

    }
    const handleSubmit = async (values, { setFieldError }) => {
        let response = await CheckEmail(values.email_address);
        if (response.ok) {
            response = await response.json();
            let status = response.status;
            if (status == 1) {
                setFieldError("email_address", "Email Address is already present.");
            }
            else {
                setEmail(values.email_address);
                setEmailSignupForm(false);
                setPasswordGenForm(true);
            }
        }
    }

    return (<>

        <Box>
            <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                Create Account
            </Typography>
            <Formik

                initialValues={defaultValue}
                validationSchema={emailFormValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form className="EmailSignupForm">

                        <Box className="input-item">
                            <ThemeLabel LableFor="email_address" LableText="Email Address" />
                            <Field
                                id="email_address"
                                error={errors.email_address && touched.email_address}
                                variant="standard"
                                as={TextField}
                                placeholder="Enter Email ID/ Username ( eg. email@gmail.com )" type="text" name="email_address" fullWidth />
                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}
                        </Box>

                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                            <ThemeButtontype1 variant="contained" type="submit">Next</ThemeButtontype1>
                        </Box>

                        <Typography component="h4" sx={{ fontSize: "16px", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                            OR
                        </Typography>

                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                            <LoginSocialGoogle
                                client_id={CLIENT_ID}
                                scope="openid profile email"
                                discoveryDocs="claims_supported"
                                access_type="offline"
                                onResolve={({ provider, data }) => {
                                    setFieldValue("email_address", data.email)
                                }}
                                onReject={err => {
                                    console.log(err);
                                }}
                            >
                                <button type="button" class="signup-with-google-btn" >
                                    Sign up with Google
                                </button>

                            </LoginSocialGoogle>

                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    </>)
}

export default EmailSignupForm;