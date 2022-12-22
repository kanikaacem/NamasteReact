import { Box, Typography, Input, Snackbar, Alert } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { ForgotPasswordValidation } from "../../Validation/EmployerValidation";

import { useSelector } from 'react-redux';

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";

import { useState, useEffect } from "react";

const ChangePassword = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

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

        let response = await fetch(api_url + "/api/employer/changepassword", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            response = await response.json();
            console.log(response);
            if (response.status == 1) {
                setFormSubmitted(true);
            }

        }


    }

    useEffect(() => {

    }, []);

    return (<>
        {/* <Typography component="div" sx={{ fontWeight: "600", fontSize: "30px", margin: "30px" }}>
                Change Password
            </Typography> */}

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
            padding: "20px",
            borderRadius: "10px",
            borderTop: "4px solid #2B1E44"
        }}>
            <Formik

                initialValues={defaultValue}
                validationSchema={ForgotPasswordValidation}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form >

                        <Box className="input-item">
                            <ThemeLabel LableFor="old_password" LableText=" Old Password" />

                            <Field
                                id="old_password"
                                as={Input}
                                placeholder="Enter Old Password" type="password" name="old_password" fullWidth />
                            {errors.old_password && touched.old_password && <Error text={errors.old_password} />}
                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="password" LableText=" New Password" />

                            <Field
                                id="password"
                                as={Input}
                                placeholder="Enter Password" type="password" name="password" fullWidth />
                            {errors.password && touched.password && <Error text={errors.password} />}
                        </Box>
                        <Box className="input-item">

                            <ThemeLabel LableFor="confirm_password" LableText="Confirm Password" />
                            <Field
                                id="confirm_password"
                                as={Input}
                                placeholder="Enter Confirm Password" type="password" name="confirm_password" fullWidth />
                            {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}

                        </Box>

                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                            <ButtonType1 ButtonText="Update Password" />
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>

    </>)
}

export default ChangePassword