import { postRequest } from "../../utils/ApiRequests";
import { EmployerSaveEmailAndPassword } from "../../utils/ApiUrls";

import { Box, TextField, Stack, styled, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { PasswordGenFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { ThemeButtontype1, ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";

import { useSelector } from "react-redux";
import { useState } from "react";
const PasswordGenForm = ({ email, setUserId, setPasswordGenForm, setVerifyMobileForm }) => {
    const [sHPassword, setSHPassword] = useState(false);
    const [sHConfirmPassword, setSHConfirmPassword] = useState(false);
    const api_url = useSelector(state => state.api_url);

    const defaultValue = {
        password: "",
        confirm_password: ""
    }

    const handleSubmit = async (values) => {
        let formData = new FormData();
        formData = {
            email: email,
            password: values.password,
        }

        let response = await postRequest(EmployerSaveEmailAndPassword, formData);
        if (response.status == 1) {
            console.log(response);
            localStorage.setItem("auth_token", response.data);
            setPasswordGenForm(false);
            setVerifyMobileForm(true);
        }
        // console.log(response);
        //    if(response.)
        //     console.log(response.data);
        //     localStorage.setItem("auth_token", response.data);
        //     // setUserId(response.data);
        //     // localStorage.setItem("auth_token", response.data);
        //     
        // }
    }
    return (<>
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
                            <ThemeLabel LableFor="password" LableText="Password" />
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
                            <ThemeLabel LableFor="confirm_password" LableText="Confirm Password" />
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
                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Next</ThemeButtonType2>
                    </Stack>

                    {/* <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ThemeButtontype1 variant="contained" type="submit">Next</ThemeButtontype1>
                    </Box> */}
                </Form>
            )}
        </Formik>
    </>)
}

export default PasswordGenForm;