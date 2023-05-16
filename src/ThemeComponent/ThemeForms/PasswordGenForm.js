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

import { useTranslation } from "react-i18next";
const PasswordGenForm = ({ email, setUserId, setEmailSignupForm, setPasswordGenForm, setVerifyMobileForm }) => {
    const [sHPassword, setSHPassword] = useState(false);
    const [sHConfirmPassword, setSHConfirmPassword] = useState(false);

    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);

    const { t } = useTranslation();

    const defaultValue = {
        password: "",
        confirm_password: ""
    }

    const handleSubmit = async (values) => {

        document.getElementById("next").disabled = "true";
        let formData = new FormData();
        formData = {
            email: email,
            password: values.password,
        }

        let response = await postRequest(EmployerSaveEmailAndPassword, formData);
        if (response.status === "1") {
            localStorage.setItem('auth_token', response.data);
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
        <Typography component="box" sx={{ fontSize: { "xs": "1.6rem", "sm": "2.5rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem" }, fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
            {t('CREATE_PASSWORD')}
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
                        <ThemeButtonType2 variant="contained" id="next" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('NEXT')}</ThemeButtonType2>
                    </Stack>


                </Form>
            )}
        </Formik>
    </>)
}

export default PasswordGenForm;