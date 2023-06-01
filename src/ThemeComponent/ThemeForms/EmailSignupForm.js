import { postRequest } from "../../utils/ApiRequests";
import { CheckEmployerEmailExist } from "../../utils/ApiUrls";

import { Box, Typography, TextField, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { emailFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { SocialBox, ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import { socialLogin } from "../../utils/Data";

import { LoginSocialGoogle } from 'reactjs-social-login';

import { useTranslation } from "react-i18next";

const EmailSignupForm = ({ email, setEmail, setEmailSignupForm, setPasswordGenForm, isEmailVerified }) => {


    const CLIENT_ID = "716443310647-ss6mebccjfbjinc0jfa188lnm6vo38o7.apps.googleusercontent.com";
    const { t, i18n } = useTranslation();

    const defaultValue = {
        email_address: email ? email : ""
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
            setFieldError("email_address", "This email is already registered. Kindly Login.");
        } else {
            setEmail(values.email_address);
            setEmailSignupForm(false);
            setPasswordGenForm(true);
        }
    }



    return (<>
        <Typography component="box" sx={{ fontSize: { "xs": "1.6rem", "sm": "2.5rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem" }, fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
            {t('CREATE_ACCOUNT')}
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
                                <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>
                                    {t('NEXT')}</ThemeButtonType2>
                                {isEmailVerified &&
                                    <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600", fontSize: "18px" }}>Resend Verification Link</ThemeButtonType2>
                                }
                            </Stack>

                            <Typography component="span" sx={{
                                fontSize: { "xs": ".7rem", "sm": ".7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                display: "flex",
                                textAlign: "center"
                            }}>
                                <hr style={{ width: "150px", height: "0px", color: "#DAD9D9" }}></hr> {t('OR_SIGN_UP_WITH')} <hr style={{ width: "150px", height: "0px" }}></hr>
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

                                >  <SocialBox sx={{
                                    width: { "xs": "20px", "sm": "30px", "md": "50px", "lg": "50px", "xl": "50px" },
                                    height: { "xs": "20px", "sm": "30px", "md": "50px", "lg": "50px", "xl": "50px" }
                                }}>
                                        <img src={socialLogin[0].image_url} alt={socialLogin[0].value} width="100%" height="100%" />
                                    </SocialBox>

                                </LoginSocialGoogle>

                            </Stack>

                        </ThemeFInputDiv>
                    </Form>
                )}
            </Formik>
        </Box >
    </>)
}

export default EmailSignupForm;