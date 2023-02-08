import { postRequest } from "../../utils/ApiRequests";
import { EmployerLoginURL, ReSendEmailVerificationURL } from "../../utils/ApiUrls";

import { TextField, Box, Typography, Stack } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { socialLogin } from "../../utils/Data";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import ShowMessageToastr from "../../ThemeComponent/Common/ShowMessageToastr";
import Error from "../../ThemeComponent/Common/Error";

import { useState, useEffect } from "react";
const EmployerLogin = () => {
    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [sendVerificationLink, setSendVerificationLink] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

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
        localStorage.setItem('useremail', values.email_address);
        localStorage.setItem('password', values.password);
        let response = await postRequest(EmployerLoginURL, EmployerLoginForm);
        if (response.status == '1') {
            if (!response.data.isemailverified) {
                setShowEmailVerifiedMessage(true);
                setIsEmailVerified(true);
                // localStorage.setItem("removeLocalStorageData", true);
            }
            else if (!response.data.ismobileverified) {
                localStorage.setItem("auth_token", response.token);
                localStorage.setItem("removeLocalStorageData", true);
                window.location.href = window.location.origin + "/employer-register";
            }
            else if (response.data.isemailverified && response.data.ismobileverified && response.data.stage == "savememailandpass") {
                localStorage.setItem("removeLocalStorageData", true);
                window.location.href = window.location.origin + "/employer-register";
            }
            else {
                localStorage.setItem("auth_token", response.token);
                localStorage.setItem("action", "login");
                dispatch({ type: 'LOGIN', payload: response.data });
            }

        }
        if (response.status == '0')
            setFieldError("password", response.data);

    }

    const resendEmailVerificationLink = async () => {

        let response = await postRequest(ReSendEmailVerificationURL, {
            email: document.getElementById("email_address").value
        })
        if (response.status == '1') {
            setSendVerificationLink(true);
        }


    }
    useEffect(() => {
        let userData = localStorage.getItem("auth_token");
        let action = localStorage.getItem("action");
        console.log(action);
        const getUserData = async () => {
            let response = await postRequest(EmployerLoginURL, {
                email: localStorage.getItem("useremail"),
                password: localStorage.getItem("password")
            })
            if (response.status == '1') {
                if (!response.data.isemailverified) {
                    setShowEmailVerifiedMessage(true);
                    setIsEmailVerified(true);
                    localStorage.setItem("removeLocalStorageData", true);
                }
                else if (!response.data.ismobileverified) {
                    localStorage.setItem("removeLocalStorageData", true);
                    window.location.href = window.location.origin + "/employer-register";
                }
                else if (response.data.isemailverified && response.data.ismobileverified && response.data.stage == "savememailandpass") {
                    localStorage.setItem("removeLocalStorageData", true);
                    window.location.href = window.location.origin + "/employer-register";
                }
                else {
                    localStorage.setItem("auth_token", response.token)
                    dispatch({ type: 'LOGIN', payload: response.data });
                }
            }
        }

        ((userData != " " && userData != null) && (action != "login" && action != " " && action != null)) && getUserData();

    }, []);
    return (<>
        {isLoggedIn == 'true' && (user && user.employer_type == "employer") && <Navigate to="/employer-dashboard"></Navigate>}
        <ShowMessageToastr value={showEmailVerifiedMessage} handleClose={() => setShowEmailVerifiedMessage(false)} message="Email Address is not verified. Please Verify your email First" messageType="success" />
        <ShowMessageToastr value={sendVerificationLink} handleClose={() => setSendVerificationLink(false)} message="Email Verification link is send" messageType="success" />

        <Box className="EmployerLoginPage"
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g10.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 0px bottom 0px"

            }}>
            <Stack className="EmployerLoginPageInnerWrapper"
                sx=
                {{
                    // width: "100%",
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack direction="row" sx={{ position: "relative", gap: "40px" }}>
                    <Box sx={{
                        width: "60%",
                        display: { 'lg': 'block', 'md': 'none', 'xs': 'none' }
                    }}>
                        <Box sx={{

                            marginTop: "150px",
                            marginLeft: "204px"

                        }}>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FC9A7E",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                                We settle for nothing

                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#FC9A7E",
                                    display: "block"
                                }}>
                                    Less than the BEST
                                </Typography>
                            </Typography>


                            <Typography component="box" sx={{
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                                fontWeight: "800",
                                color: "#FFFFFF",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                We Love Recruiting
                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                                fontWeight: "500",
                                color: "#FFFFFF",
                                display: "block",
                                maxWidth: "695px"
                            }}>
                                Employees get the work they look for through our impactful job portal
                                that is monitored 24x7 for quality, transparency and success. Employers,
                                the other hand, get the unique skills and experience of the champion employees,
                                hired through us, for their growth.

                            </Typography>
                        </Box>
                    </Box>


                    <Stack gap={2} sx={{
                        width: { 'lg': "449px", 'md': '100%', 'xs': '100%' },
                        height: "730px",
                        background: "#FBF8FF",
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: { "lg": "50px 100px", "md": "50px 100px", "xs": "30px" }
                    }}>
                        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
                            Log in
                        </Typography>
                        <Formik

                            initialValues={defaultValue}
                            validationSchema={employerLoginValidationSchema}
                            onSubmit={handleSubmit}
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
                                    <ThemeFInputDiv>
                                        <a href="#" onClick={
                                            () => {
                                                window.location.href = window.location.origin + "/forgot-password/employer";
                                            }
                                        }
                                            style={{ marginTop: "20px" }}>
                                            Forgot Password ?
                                        </a>
                                    </ThemeFInputDiv>
                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        {isEmailVerified && (<>
                                            <a href="#" onClick={
                                                () => {
                                                    resendEmailVerificationLink()
                                                }
                                            }
                                                style={{ textAlign: "center" }}>
                                                Resend Verification Link
                                            </a>

                                        </>)

                                        }

                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined" type="button"
                                            sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + "/employer-register"
                                            }}
                                        >Sign up</ThemeButtonType3>

                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                        {/* <Typography component="span" sx={{ fontSize: "16px", display: "flex" }}>
                            <hr style={{ width: "150px", height: "0px", color: "#DAD9D9" }}></hr> or login in with <hr style={{ width: "150px", height: "0px" }}></hr>
                        </Typography> */}
                        {/* <Stack direction="row" gap={3} justifyContent="center">
                            {
                                socialLogin.map((item) => {
                                    return (<>
                                        <SocialBox key={item.id}>
                                            <img src={item.image_url} alt={item.value} />
                                        </SocialBox>
                                    </>)
                                })
                            }
                        </Stack> */}
                    </Stack>
                </Stack>
            </Stack>

        </Box>
        {/* <Header /> */}

        {/* <Box className="EmployerLoginPage"
            sx={{
                height: "93vh",
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
                                            <ThemeFInputDiv >
                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                    <Field

                                                        size="small"
                                                        error={errors.email_address && touched.email_address}
                                                        as={TextField}
                                                        id="email_address"
                                                        placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                    {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                                </ThemeFInputDiv>
                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="password" LableText="Password" />
                                                    <Field
                                                        size="small"
                                                        error={errors.password && touched.password}
                                                        id="password"
                                                        as={TextField}
                                                        placeholder="Enter Password" type="password" name="password" fullWidth />
                                                    {errors.password && touched.password && <Error text={errors.password} />}
                                                </ThemeFInputDiv>
                                            </ThemeFInputDiv>


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

        </Box> */}
        {/* <Stack direction="column" gap={2} >

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                    <Field
                                                        size="small"
                                                        error={errors.email_address && touched.email_address}
                                                        as={TextField}
                                                        id="email_address"
                                                        placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                    {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                                </Box>

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="password" LableText="Password" />
                                                    <Field
                                                        size="small"
                                                        error={errors.password && touched.password}
                                                        id="password"
                                                        as={TextField}
                                                        placeholder="Enter Password" type="password" name="password" fullWidth />
                                                    {errors.password && touched.password && <Error text={errors.password} />}


                                                </Box>
                                            </Stack> */}

    </>)

}

export default EmployerLogin;