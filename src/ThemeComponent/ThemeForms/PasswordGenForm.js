import { Box, Input, Stack, styled, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { PasswordGenFormValidationSchema } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../Common/ButtonType1";

import { useDispatch, useSelector } from 'react-redux';
import { gridColumnPositionsSelector, gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

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

        let response = await fetch(api_url + "/api/employer/savelogindetail", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            response = await response.json();
            // console.log(response);
            setUserId(response.data);
            setPasswordGenForm(false);
            setVerifyMobileForm(true);
        }
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

                    <Box className="input-item">
                        <ThemeLabel LableFor="password" LableText="Password" />

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
                        <ButtonType1 ButtonText="Next" />
                    </Box>
                </Form>
            )}
        </Formik>
    </>)
}

export default PasswordGenForm;