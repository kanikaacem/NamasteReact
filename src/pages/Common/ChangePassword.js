import { Box, Typography, TextField, Snackbar, Alert } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { ForgotPasswordValidation } from "../../Validation/EmployerValidation";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { useState, useEffect } from "react";

const ChangePassword = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const defaultValue = {
        old_password: "",
        password: "",
        confirm_password: ""
    }

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    const handleSubmit = async (values) => {
        let data = new FormData();
        data = {
            userid: user._id,
            oldpassword: values.old_password,
            newpassword: values.password

        }

        // let response = await fetch(api_url + "/api/employer/changepassword", {
        //     method: "POST",
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify(data),
        // })

        // if (response.ok) {
        //     response = await response.json();
        //     console.log(response);
        //     if (response.status == 1) {
        //         setFormSubmitted(true);
        //     }

        // }


    }

    useEffect(() => {

    }, []);

    return (<>

        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Password is updated.
            </Alert>

        </Snackbar>


        <Box sx={{
            background: "#FFFFFF",
            padding: { "xs": "20px", "sm": "20px", "md": "50px", "lg": "50px", "xl": "50px" },
            borderRadius: "14px",
            border: "1px solid #E1D4F2"
        }}>
            <Typography component="div" sx={{
                color: "#2B1E44",
                textTransform: "capitalize", margin: "10px 0px",
                fontSize: { "sx": "1.6rem", "sm": "1.6rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem" },
                fontFamily: "Work Sans,sans-serif",
                fontWeight: "700"
            }}>
                Change Password
            </Typography>

            <Formik

                initialValues={defaultValue}
                validationSchema={ForgotPasswordValidation}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form className="ChangePasswordForm">
                        <ThemeFInputDiv>
                            <ThemeFInputDiv>
                                <ThemeLabel LableFor="old_password" LableText=" Old Password *" />
                                <Field
                                    id="old_password"
                                    as={TextField}
                                    placeholder="Enter Old Password" type="password" name="old_password" fullWidth />
                                {errors.old_password && touched.old_password && <Error text={errors.old_password} />}
                            </ThemeFInputDiv>

                            <ThemeFInputDiv>
                                <ThemeLabel LableFor="password" LableText=" New Password *" />
                                <Field
                                    id="password"
                                    as={TextField}
                                    placeholder="Enter Password" type="password" name="password" fullWidth />
                                {errors.password && touched.password && <Error text={errors.password} />}
                            </ThemeFInputDiv>

                            <ThemeFInputDiv>
                                <ThemeLabel LableFor="confirm_password" LableText="Confirm Password *" />
                                <Field
                                    id="confirm_password"
                                    as={TextField}
                                    placeholder="Enter Confirm Password" type="password" name="confirm_password" fullWidth />
                                {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}

                            </ThemeFInputDiv>
                        </ThemeFInputDiv>

                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                            <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Change Password</ThemeButtonType2>
                        </Box>

                    </Form>
                )}
            </Formik>
        </Box>

    </>)
}

export default ChangePassword