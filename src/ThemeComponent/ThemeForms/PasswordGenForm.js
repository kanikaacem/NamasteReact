import { postRequest } from "../../utils/ApiRequests";
import { EmployerSaveEmailAndPassword } from "../../utils/ApiUrls";

import { Box, TextField, Stack, styled, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { PasswordGenFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";

import { ThemeButtontype1 } from "../../utils/Theme";

import { useSelector } from "react-redux";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

const PasswordGenForm = ({ email, setUserId, setPasswordGenForm, setVerifyMobileForm }) => {
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
        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
            Create Password
        </Typography>
        <Formik

            initialValues={defaultValue}
            validationSchema={PasswordGenFormValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form className="PasswordGenerationForm" >
                    <Stack direction="column" gap={2} >

                        <Box className="input-item">
                            <ThemeLabel LableFor="password" LableText="Password" />
                            <Field
                                variant="standard"
                                id="password"
                                as={TextField}
                                placeholder="Enter Password ( eg.KDHI@1234Jkhd )" type="password" name="password" fullWidth />
                            {errors.password && touched.password && <Error text={errors.password} />}
                        </Box>
                        <Box className="input-item">
                            <ThemeLabel LableFor="confirm_password" LableText="Confirm Password" />
                            <Field
                                variant="standard"
                                id="confirm_password"
                                as={TextField}
                                placeholder="Enter Confirm Password ( eg.KDHI@1234Jkhd )" type="password" name="confirm_password" fullWidth />
                            {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}

                        </Box>
                    </Stack>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ThemeButtontype1 variant="contained" type="submit">Next</ThemeButtontype1>
                    </Box>
                </Form>
            )}
        </Formik>
    </>)
}

export default PasswordGenForm;