import { Box, TextField, Typography, Container, Stack, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useState } from "react";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { candidateLoginValidationSchema } from "../../Validation/CandidateValidation";
import Error from "../../ThemeComponent/Common/Error";
import { ThemeButtontype1 } from "../../utils/Theme";

const CandidateLogin = () => {
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

        let CandidateLoginForm = new FormData();
        CandidateLoginForm = {
            email: values.email_address,
            password: values.password
        }
        let response = await fetch(api_url + "/api/users/login", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(CandidateLoginForm)
        })

        if (response.ok) {
            console.log("getting the data");
            response = await response.json();
            // console.log(response);
            if (response.status == '1') {
                dispatch({ type: 'LOGIN', payload: JSON.stringify(response.data) });
            }
            if (response.status == '0') {
                setFieldError("password", "Invalid Credentials")
            }

        }
    }

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/candidate-dashboard"></Navigate>}


        <Box className="CandidateLoginPage">
            <Box sx={{
                width: "60px",
                position: "absolute",
                top: "2%",
                left: "2%",
                zIndex: "34",
                color: "#2B1E44"
            }}>
                <Link to="/">
                    <img src="./assets/companyLogo.png" width="100%" alt="companyLogo" />
                </Link>
            </Box>
            <Box sx={{
                width: "30%",
                position: "absolute",
                top: "40%",
                left: "5%",
                zIndex: "34",
                color: "#2B1E44"
            }}>
                <Typography component="H1"
                    sx={{ fontSize: "30px", fontWeight: "700" }}>
                    Choose a job you love, and you never have to work a day in your life
                </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={4} sx={{ height: "100vh" }} >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        width: { md: "40%", sm: "100%" },
                        backgroundImage: `url("./assets/PGBForm2.png")`,
                        position: "relative",
                        opacity: "0.5"
                    }}>
                </Stack>
                <Box sx={{ width: { md: "60%", sm: "100%" } }} >
                    <Box
                        sx={{
                            borderRadius: "10px",
                            padding: "27px 40px 20px 35px",
                            // borderTop: "5px solid #2B1E44",
                            background: "#FFFFFF",
                            margin: { md: "100px", sm: "0px" },
                            minHeight: "400px"
                        }}>
                        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#2B1E44" }}>
                            Welcome Guest,
                        </Typography>
                        <Typography component="h3" sx={{ fontSize: "50px", color: "#2B1E44" }}>
                            Sign In for JobYahan
                        </Typography>


                        <Box sx={{ margin: "20px 0px" }}>
                            <Formik

                                initialValues={defaultValue}
                                validationSchema={candidateLoginValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="candidateLogin">

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
                                    to="/candidate-register">Register</Link>
                            </Typography>
                        </Typography>
                    </Box>
                </Box>

            </Stack>


        </Box>

    </>)
}

export default CandidateLogin;
