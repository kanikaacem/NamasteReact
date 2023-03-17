import { postRequest } from "../../utils/ApiRequests";
import { EmployerSaveEmailAndPassword } from "../../utils/ApiUrls";

import { TextField, Stack, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { PasswordGenFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import BackButton from "../Common/BackButton";
import Error from "../../ThemeComponent/Common/Error";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import { useState } from "react";

import ThemeMessage from "../Common/ThemeMessage";
const PasswordGenForm = ({ email, setUserId, setEmailSignupForm, setPasswordGenForm, setVerifyMobileForm }) => {
    const [sHPassword, setSHPassword] = useState(false);
    const [sHConfirmPassword, setSHConfirmPassword] = useState(false);

    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const defaultValue = {
        password: "",
        confirm_password: ""
    }

    const handleSubmit = async (values) => {
        console.log(email);

        document.getElementById("next").disabled = "true";
        let formData = new FormData();
        formData = {
            email: email,
            password: values.password,
        }

        let response = await postRequest(EmployerSaveEmailAndPassword, formData);
        if (response.status == 1) {
            console.log(response);
            localStorage.setItem("useremail", email);
            localStorage.setItem("password", values.password)
            localStorage.setItem('auth_token', response.data);
            localStorage.setItem("userid", response._id);
            localStorage.setItem("removeLocalStorageData", true);
            setShowEmailVerifiedMessage(true);

        }
    }

    const GoBack = () => {
        setEmailSignupForm(true);
        setPasswordGenForm(false);
    }


    return (<>
        <ThemeMessage open={showEmailVerifiedMessage} setOpen={
            setShowEmailVerifiedMessage
        } message="Email Verification Link is send . Please verify the Email before going further " type="success" />

        <BackButton GoBack={GoBack} />
        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
            Create Password
        </Typography>

        <Formik

            initialValues={defaultValue}
            validationSchema={PasswordGenFormValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form className="PasswordGenerationForm" >
                    <ThemeFInputDiv>
                        <ThemeFInputDiv sx={{ position: "relative" }}>
                            <ThemeLabel LableFor="password" LableText="Password *" />
                            <Field
                                id="password"
                                as={TextField}
                                placeholder="Enter Password (eg. KDHI@1234Jkhd)" type={sHPassword ? "text" : "password"} name="password" fullWidth />
                            {
                                sHPassword ?
                                    <img style={{
                                        position: "absolute",
                                        top: "66px",
                                        right: "20px",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => setSHPassword(!sHPassword)}
                                        src={window.location.origin + "/assets/Show.png"} width="21px" height="21px" alt="Show" />
                                    :
                                    <img style={{
                                        position: "absolute",
                                        top: "66px",
                                        right: "20px",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => setSHPassword(!sHPassword)}
                                        src={window.location.origin + "/assets/Hide.png"} width="21px" height="21px" alt="Hide" />
                            }
                            {errors.password && touched.password && <Error text={errors.password} />}
                        </ThemeFInputDiv>

                        <ThemeFInputDiv sx={{ position: "relative" }}>
                            <ThemeLabel LableFor="confirm_password" LableText="Confirm Password *" />
                            <Field
                                id="confirm_password"
                                as={TextField}
                                placeholder="Enter Password (eg. KDHI@1234Jkhd)" type={sHConfirmPassword ? "text" : "password"} name="confirm_password" fullWidth />
                            {
                                sHConfirmPassword ?
                                    <img style={{
                                        position: "absolute",
                                        top: "66px",
                                        right: "20px",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => setSHConfirmPassword(!sHConfirmPassword)}
                                        src={window.location.origin + "/assets/Show.png"} width="21px" height="21px" alt="Show" />
                                    :
                                    <img style={{
                                        position: "absolute",
                                        top: "66px",
                                        right: "20px",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => setSHConfirmPassword(!sHConfirmPassword)}
                                        src={window.location.origin + "/assets/Hide.png"} width="21px" height="21px" alt="Hide" />
                            }
                            {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}

                        </ThemeFInputDiv>

                    </ThemeFInputDiv>
                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                        {
                            isEmailVerified && <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontSize: "18px" }}>Resend Verification Link</ThemeButtonType2>
                        }
                        <ThemeButtonType2 variant="contained" id="next" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Next</ThemeButtonType2>
                    </Stack>


                </Form>
            )}
        </Formik>
    </>)
}

export default PasswordGenForm;