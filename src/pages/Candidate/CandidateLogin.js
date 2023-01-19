import { postRequest } from "../../utils/ApiRequests";
import { CandidateLoginURL } from "../../utils/ApiUrls";

import { Box, TextField, Typography, Container, Stack, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useState } from "react";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { candidateLoginValidationSchema } from "../../Validation/CandidateValidation";
import { socialLogin } from "../../utils/Data";

import Error from "../../ThemeComponent/Common/Error";
import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";

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
        let response = await postRequest(CandidateLoginURL, CandidateLoginForm);
        console.log(response)
        if (response.status == '1') {
            dispatch({ type: 'LOGIN', payload: response });
        }
        if (response.status == '0')
            setFieldError("password", "Invalid Credentials");
    }

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/candidate-dashboard"></Navigate>}

        <Box className="CandidateLoginPage"
            sx={{
                height: "100vh",
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g50.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 4px bottom 0px"

            }}>
            <Stack className="CandidateLoginPageInnerWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>

                    <Box sx={{
                        position: "absolute",
                        top: "90px",
                        left: "204px",
                        width: "800px"
                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "700",
                            color: "#FC9A7E",
                            display: "block",
                            lineHeight: "40px"
                        }}>
                            Choose a job you love,

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FFFFFF",
                                display: "block",
                                margin: "10px 0px",
                                lineHeight: "1.0 !important"
                            }}>
                                and you never have to
                                work a day in your life

                            </Typography>

                        </Typography>


                    </Box>

                    <Stack sx={{
                        width: "449px",
                        height: "730px",
                        background: "#FBF8FF",
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: "50px 100px"
                    }}>
                        <Typography component="box" sx={{ fontSize: "20px", fontFamily: "Work Sans, sans-serif" }}>
                            Welcome Guest,
                        </Typography>
                        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700", marginBottom: "30px" }}>
                            Sign In for JobsYahan
                        </Typography>
                        {/* <Formik

                        // initialValues={defaultValue}
                        // validationSchema={employerLoginValidationSchema}
                        // onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="EmployerLoginForm">
                                    <ThemeFInputDiv >
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_address" LableText="Email Address * " />
                                            <Field
                                                error={errors.email_address && touched.email_address}
                                                as={TextField}
                                                id="email_address"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                        </ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password *" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}
                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>
                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Sign up</ThemeButtonType3>

                                    </Stack>
                                </Form>
                            )}
                        </Formik> */}
                        <Formik
                            initialValues={defaultValue}
                            validationSchema={candidateLoginValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="candidateLogin">

                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                            <Field
                                                error={errors.email_address && touched.email_address}
                                                as={TextField}
                                                id="email_address"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}


                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined"
                                            type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + "/candidate-register"
                                            }}
                                        >Sign up</ThemeButtonType3>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>


                        <Typography component="span" sx={{ fontSize: "16px", display: "flex" }}>
                            <hr style={{ width: "150px", height: "0px", color: "#DAD9D9" }}></hr> or login in with <hr style={{ width: "150px", height: "0px" }}></hr>
                        </Typography>
                        <Stack direction="row" gap={3} justifyContent="center">
                            {
                                socialLogin.map((item) => {
                                    return (<>
                                        <SocialBox key={item.id}>
                                            <img src={item.image_url} alt={item.value} />
                                        </SocialBox>
                                    </>)
                                })
                            }
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

        </Box>


        {/* <Box className="CandidateLoginPage">
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


        </Box> */}

    </>)
}

export default CandidateLogin;
