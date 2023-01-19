import { postRequest } from "../../utils/ApiRequests";
import { CheckEmployerEmailExist } from "../../utils/ApiUrls";

import { Box, Typography, TextField, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { emailFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { SocialBox, ThemeButtontype1, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import { socialLogin } from "../../utils/Data";

import { LoginSocialGoogle } from 'reactjs-social-login';

import { useSelector } from "react-redux";

const EmailSignupForm = ({ email, setEmail, setEmailSignupForm, setPasswordGenForm }) => {

    const api_url = useSelector(state => state.api_url);

    const CLIENT_ID = "346122009616-1gljk4ii4218dajhhjki2cb62v1r1cr0.apps.googleusercontent.com";

    const defaultValue = {
        email_address: ""
    }

    const CheckEmail = async (email) => {
        let formData = new FormData();
        formData = {
            email: email
        }
        let response = await postRequest(CheckEmployerEmailExist, formData);

        return response;

    }
    const handleSubmit = async (values, { setFieldError }) => {
        let response = await CheckEmail(values.email_address);
        let status = response.status;
        if (status == 1) {
            setFieldError("email_address", "Email Address is already present.");
        } else {
            setEmail(values.email_address);
            setEmailSignupForm(false);
            setPasswordGenForm(true);
        }
    }

    return (<>
        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
            Create Account
        </Typography>
        <Box>
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
                                    placeholder="Enter Email ID/ Username " type="text" name="email_address" fullWidth />
                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}
                            </ThemeFInputDiv>
                            <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Next</ThemeButtonType2>
                            </Stack>

                            <Typography component="span" sx={{ fontSize: "16px", display: "flex" }}>
                                <hr style={{ width: "150px", height: "0px", color: "#DAD9D9" }}></hr> or login in with <hr style={{ width: "150px", height: "0px" }}></hr>
                            </Typography>

                            <Stack direction="row" gap={3} justifyContent="center">
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

                                >  <SocialBox >
                                        <img src={socialLogin[0].image_url} alt={socialLogin[0].value} />
                                    </SocialBox>

                                </LoginSocialGoogle>

                                <SocialBox>
                                    <img src={socialLogin[1].image_url} alt={socialLogin[1].value} />
                                </SocialBox>

                                <SocialBox>
                                    <img src={socialLogin[2].image_url} alt={socialLogin[2].value} />
                                </SocialBox>

                            </Stack>

                        </ThemeFInputDiv>
                    </Form>
                )}
            </Formik>

            {/* <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                <ThemeButtontype1 variant="contained" type="submit">Next</ThemeButtontype1>
            </Box> */}

            {/* <Typography component="h4" sx={{ fontSize: "16px", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                OR
            </Typography> */}

            {/* <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
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

            </Box> */}
        </Box>
    </>)
}

export default EmailSignupForm;