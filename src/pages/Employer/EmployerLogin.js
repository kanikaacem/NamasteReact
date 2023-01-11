import { postRequest } from "../../utils/ApiRequests";
import { EmployerLoginURL } from "../../utils/ApiUrls";

import { TextField, Box, Typography, Container, Stack, Button, styled } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import Header from "../../ThemeComponent/Common/Header";

import { ThemeButtontype1 } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import Error from "../../ThemeComponent/Common/Error";

const EmployerLogin = () => {

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    const dispatch = useDispatch();
    const user = localStorage.user && JSON.parse(localStorage.user);


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
        let response = await postRequest(EmployerLoginURL, EmployerLoginForm);
        if (response.status == '1') {
            dispatch({ type: 'LOGIN', payload: response });
        }
        if (response.status == '0')
            setFieldError("password", "Invalid Credentials")

    }

    return (<>
        {isLoggedIn == 'true' && (user && user.type == "employer") && <Navigate to="/employer-dashboard"></Navigate>}

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

                                            <Stack direction="column" gap={2} >
                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                    <Field
                                                        variant="standard"
                                                        error={errors.email_address && touched.email_address}
                                                        as={TextField}
                                                        id="email_address"
                                                        placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                    {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                                </Box>

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="password" LableText="Password" />
                                                    <Field
                                                        variant="standard"
                                                        error={errors.password && touched.password}
                                                        id="password"
                                                        as={TextField}
                                                        placeholder="Enter Password" type="password" name="password" fullWidth />
                                                    {errors.password && touched.password && <Error text={errors.password} />}


                                                </Box>
                                            </Stack>

                                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                                <ThemeButtontype1 variant="contained" type="submit">Sign In</ThemeButtontype1>
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