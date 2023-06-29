import { postRequest } from "../../utils/ApiRequests";
import { Box, Typography, Button, Container, useMediaQuery, Grid } from "@mui/material";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import Error from "../../ThemeComponent/Common/Error";
import FormLabel from "../Common/FormLabel";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Header from "../Common/Header";
import Footer from "../../ThemeComponent/Common/Footer";
const EmployerLogin = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const currentLanguage = useSelector(state => state.currentLanguage);
    const defaultValue = {
        user_email: "",
        password: ""
    };
    const handleSubmit = async (values) => {
        let EmployerLoginForm = new FormData();
        EmployerLoginForm = {
            email: values.user_email,
            password: values.password,
            usertype: "employer"
        }
        try {
            let api_url = "https://backend.jobsyahan.com/api/loginforemployer";
            let response = await postRequest(api_url, EmployerLoginForm);
            if (response.status === '1') {
                localStorage.setItem("userType", "employer");
                dispatch({ type: 'LOGIN', payload: response.token });
            }
        } catch (err) {
            console.log(err)
        }

    };

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
    return (<>
        {isLoggedIn && <Navigate to="/employer-dashboard" />}
        <Box className="EmployerLoginForm">
            <Helmet>
                <title>Post Jobs & View Candidate Applications</title>
                <meta name="description" content="Employers can sign up and post jobs on JobsYahan. If you’re already signed up with us, log in to check your posted jobs, post more jobs and view candidate applications." />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content="Post Jobs & View Candidate Applications" />
                <meta property="og:image" content="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/logo_og.png" />
                <meta property="og:url" content={`${window.location.origin}/${currentLanguage}/employer-login`} />
            </Helmet>
            <Box>
                <Header showButton={false} />
                {isDesktop &&
                    <Grid container sx={{
                        background: `linear-gradient(#ffffff 10% , #f3bb7a )`,
                        height: "inherit",
                        boxSizing: "border-box",
                        padding: "20px"
                    }} >
                        <Grid item lg={6} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Box sx={{ width: "560px" }}>
                                <img
                                    src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/employer_login.png"
                                    width="100%"
                                    height="100%" />
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{
                            boxSizing: "border-box",
                            padding: "50px 200px"
                        }}>

                            <Box className="EmployerLoginFormSection" sx={{
                                border: "1px solid #D8D8D8",
                                borderRadius: "15px",
                                padding: "30px 40px",
                                background: "#ffffff"
                            }}>
                                <Typography
                                    variant="h1"
                                    component="h2"
                                    sx={{
                                        fontSize: "1.5rem",
                                        margin: "20px 0px",
                                        fontWeight: "700",
                                        lineHeight: "1.5"

                                    }}
                                >
                                    {t('EMPR_LOGIN_BANNER')}
                                </Typography>

                                <Formik
                                    initialValues={defaultValue}
                                    validationSchema={employerLoginValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="EmployerLoginForm" >
                                            <Box className="FormGroup">
                                                <FormLabel LableText={t('EMPR_USERNAME')} LableFor="user_email" sx={{ fontSize: "14px !important" }} />
                                                <Field id="user_email"
                                                    type="text" placeholder={t('EMPR_USERNAME')}
                                                    name="user_email"
                                                    className="custom-text-field" />
                                                {errors.user_email && touched.user_email && <Error text={errors.user_email} />}

                                            </Box>
                                            <Box className="FormGroup">
                                                <FormLabel LableText={t('EMPR_PASSWORD')} LableFor="password" sx={{ fontSize: "14px !important" }} />
                                                <Field id="password"
                                                    type="password" placeholder={t('EMPR_PASSWORD')}
                                                    name="password"
                                                    className="custom-text-field" />
                                                {errors.password && touched.password && <Error text={errors.password} />}

                                            </Box>

                                            <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                                margin: "20px 0px !important"
                                            }} >{t('SUBMIT')}</Button>

                                        </Form>

                                    )}

                                </Formik>
                            </Box>
                        </Grid>
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                            <a href="/find-candidates" className="back-button-link">
                                <p>{t('BACK')}</p>
                            </a>
                        </Box>

                    </Grid>}

                {
                    !isDesktop && (
                        <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px" }}>
                            <Box
                                className="EmployerLoginFormTopSection"
                                sx={{
                                    // height: "430px",
                                    padding: "20px 20px 0px",
                                    backgroundImage: "linear-gradient(#ffffff 30%,#f3bb7a )",
                                    position: "relative"
                                }}
                            >
                                {/* <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => { window.history.back(); }} /> */}
                                <Typography
                                    variant="h1"
                                    component="h2"
                                    sx={{
                                        fontSize: "1.3rem",
                                        marginTop: "50px",
                                        textAlign: "center",
                                        fontWeight: "600"
                                    }}
                                >
                                    {t('EMPR_LOGIN_BANNER')}
                                </Typography>
                                <Box sx={{
                                    width: {
                                        "xs": "100%", "sm": "100%",
                                        "md": "450px", "xl": "450px", "lg": "450px"
                                    },
                                    margin: "50px auto 0px"
                                }}>
                                    <img
                                        src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/employer_login.png"
                                        width="100%"
                                        alt="find-candidates"
                                    />
                                </Box>
                            </Box>
                            <Box className="EmployerLoginFormSection" sx={{ padding: "30px 20px" }}>
                                <Formik
                                    initialValues={defaultValue}
                                    validationSchema={employerLoginValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="EmployerLoginForm" >
                                            <Box className="FormGroup">
                                                <FormLabel LableText={t('EMPR_USERNAME')} LableFor="user_email" />
                                                <Field id="user_email"
                                                    type="text" placeholder={t('EMPR_USERNAME')}
                                                    name="user_email"
                                                    className="custom-text-field" />
                                                {errors.user_email && touched.user_email && <Error text={errors.user_email} />}

                                            </Box>
                                            <Box className="FormGroup">
                                                <FormLabel LableText={t('EMPR_PASSWORD')} LableFor="password" />
                                                <Field id="password"
                                                    type="password" placeholder={t('EMPR_PASSWORD')}
                                                    name="password"
                                                    className="custom-text-field" />
                                                {errors.password && touched.password && <Error text={errors.password} />}

                                            </Box>

                                            <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                                margin: "20px 0px !important"
                                            }} >{t('SUBMIT')}</Button>
                                            <a href="/find-candidates" className="back-button-link">
                                                <p>{t('BACK')}</p>
                                            </a>
                                        </Form>

                                    )}

                                </Formik>
                            </Box>

                        </Container>
                    )
                }
            </Box>
            <Footer />
        </Box >
    </>);
};

export default EmployerLogin;
