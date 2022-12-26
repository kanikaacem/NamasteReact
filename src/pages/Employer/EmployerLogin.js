import { Input, Box, Typography, Container, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useState } from "react";

import Header from "../../ThemeComponent/Common/Header";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";

const EmployerLogin = () => {

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    const dispatch = useDispatch();
    const [authenticationError, setauthenticationError] = useState("");
    const [showPassword, setshowPassword] = useState(false);
    const defaultValue = {
        email_address: "",
        password: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {

        let EmployerLoginForm = new FormData();
        EmployerLoginForm = {
            email: values.email_address,
            password: values.password
        }
        let response = await fetch(api_url + "/api/employer/loginemployer", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(EmployerLoginForm)
        })

        if (response.ok) {
            response = await response.json();
            console.log(response);
            if (response.status == '1') {
                dispatch({ type: 'LOGIN', payload: JSON.stringify(response.user) });
            }
            if (response.status == '0') {
                setFieldError("password", "Invalid Credentials")
            }

        }
    }

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>}

        <Header />

        <Box className="EmployerLoginPage"
            sx={{
                height: "86vh",
                backgroundColor: "#FAFAFA"
            }}>
            <Container
                sx={{
                    height: "inherit"
                }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={4} >
                    <Box sx={{ width: { md: "60%", sm: "100%" }, padding: { md: "200px 0px", sm: "0px" } }}>
                        <Typography component="span" sx={{ display: { sm: "block", md: "inline" }, textAlign: { sm: "center" } }}>
                            We &hearts;	Recuriting
                        </Typography>
                        <Typography component="H1"
                            sx={{ fontSize: "50px", fontWeight: "700" }}>
                            Hire great
                            <Typography component="span"
                                sx={{ backgroundColor: "#2B1E44", color: "#FFFFFF", fontSize: "50px", borderRadius: "10px", margin: "0px 10px", padding: "5px" }}>
                                tech
                            </Typography>
                            talent
                        </Typography>
                        <Typography component="div"
                            sx={{ margin: "10px 0px", lineHeight: '2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu purus a libero suscipit dictum non nec odio.
                            Integer vitae congue arcu. Curabitur euismod semper turpis ac tincidunt. Curabitur luctus arcu a odio ultricies,
                            ac hendrerit orci ultricies. Quisque vulputate et augue eget ultrices.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tempus augue eu risus semper lacinia.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { md: "40%", sm: "100%" } }} >
                        <Box
                            sx={{
                                borderRadius: "10px",
                                padding: "27px 40px 20px 35px",
                                borderTop: "5px solid #2B1E44",
                                background: "#FFFFFF",
                                margin: { md: "100px 0px", sm: "0px" },
                                minHeight: "400px"
                            }}>
                            <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                                Login
                            </Typography>
                            <Box sx={{ margin: "20px 0px" }}>
                                <Formik

                                    initialValues={defaultValue}
                                    validationSchema={employerLoginValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="EmployerLoginForm">

                                            <Box className="input-item">
                                                <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                <Field
                                                    error={errors.email_address && touched.email_address}
                                                    as={Input}
                                                    id="email_address"
                                                    placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                            </Box>

                                            <Box className="input-item">
                                                <ThemeLabel LableFor="password" LableText="Password" />
                                                <Field
                                                    error={errors.password && touched.password}
                                                    id="password"
                                                    as={Input}
                                                    placeholder="Enter Password" type="password" name="password" fullWidth />
                                                {errors.password && touched.password && <Error text={errors.password} />}


                                            </Box>

                                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                                <ButtonType1 ButtonText="Sign In" />
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>

                            <Typography component="span" sx={{ fontSize: "15px", textAlign: "center", display: "block" }}>
                                Don't have a Account ?
                                <Typography component="span" sx={{ color: "#2B1E44", margin: "0px 4px", cursor: "pointer" }}>
                                    <Link style={{ textDecoration: "none", fontWeight: "500" }}
                                        to="/employer-register">Register</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>

                </Stack>

            </Container>

        </Box>

    </>)

}

export default EmployerLogin;