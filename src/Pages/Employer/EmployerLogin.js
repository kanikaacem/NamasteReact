import { postRequest } from "../../utils/ApiRequests";
import { Box, Typography, Button, Container, useMediaQuery } from "@mui/material";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Error from "../../ThemeComponent/Common/Error";
import FormLabel from "../Common/FormLabel";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";
const EmployerLogin = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const defaultValue = {
        user_email: "",
        password: ""
    };
    const handleSubmit = async (values) => {
        let EmployerLoginForm = new FormData();
        EmployerLoginForm = {
            email: values.user_email,
            password: values.password
        }
        try {
            let api_url = "https://backend.jobsyahan.com/api/employer/loginemployer";
            let response = await postRequest(api_url, EmployerLoginForm);
            if (response.status === '1') {
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
            <Box sx={{ minHeight: "100vh" }}>
                <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px" }}>
                    <Box
                        className="EmployerLoginFormTopSection"
                        sx={{
                            height: "430px",
                            padding: "20px",
                            backgroundImage: "linear-gradient(#ffffff 30%,#f3bb7a )",
                            position: "relative"
                        }}
                    >
                        <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => { window.history.back(); }} />
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
                        <Box sx={{ position: "absolute", bottom: "-5px" }}>
                            <img
                                src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/candidate_khoze_banner.png"
                                alt="CandidateKhoze"
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
                                </Form>
                            )}
                        </Formik>
                    </Box>

                </Container>
            </Box>
        </Box>
    </>);
};

export default EmployerLogin;
