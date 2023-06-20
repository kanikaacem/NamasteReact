import { Box, Typography, Button, Container, useMediaQuery } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Error from "../../ThemeComponent/Common/Error";
import FormLabel from "../Common/FormLabel";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const CandidateCredentialsForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const defaultValue = {
        user_credentials: ""
    };
    const handleSubmit = async (values) => {
        navigate("/candidate-requirement", { state: { inputfield: values.user_credentials } });
    };

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const currentLanguage = useSelector(state => state.currentLanguage);
    return (
        <Box className="CandidateCredentialsForm">
            <Helmet>
                <title>Post Jobs & View Candidate Applications</title>
                <meta name="description" content="Employers can sign up and post jobs on JobsYahan. If you’re already signed up with us, log in to check your posted jobs, post more jobs and view candidate applications." />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content="Post Jobs & View Candidate Applications" />
                <meta property="og:image" content="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/logo_og.png" />
                <meta property="og:url" content={`${window.location.origin}/candidate-khoze`} />
            </Helmet>
            <Box sx={{ minHeight: "100vh" }}>
                <Container maxWidth={isDesktop ? "sm" : false} sx={{ padding: "0px" }}>
                    <Box
                        className="CandidateCredentialsTopSection"
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
                            {t('CJ_HEADING')}
                        </Typography>
                        <Typography
                            variant="h1"
                            component="h2"
                            sx={{
                                fontSize: "1rem",
                                marginTop: "10px",
                                textAlign: "center",
                                fontWeight: "500"
                            }}
                        >
                            {t('CJ_HEADING_1')}
                        </Typography>

                        <Box sx={{ position: "absolute", bottom: "-5px" }}>
                            <img
                                src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/candidate_khoze_banner.png"
                                alt="CandidateKhoze"
                            />
                        </Box>
                    </Box>
                    <Box className="CandidateCredentialsForm" sx={{ padding: "30px 20px" }}>
                        <Formik
                            initialValues={defaultValue}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="CandidateCredentialsform">
                                    <Box >
                                        <FormLabel
                                            LableText={t('CJ_USERNAME')}
                                            LableFor="user_credentials"
                                            sx={{ marginBottom: "10px" }}
                                        />
                                        <Field
                                            id="user_credentials"
                                            type="text"
                                            placeholder="Enter Mobile Number or email"
                                            name="user_credentials"
                                            className="custom-text-field"
                                        />
                                        {/* {errors.user_credentials && touched.user_credentials && <Error text={errors.user_credentials} />} */}
                                    </Box>
                                    <Button variant="contained" type="submit" className="OrangeButton">
                                        {t('CJ_BTN_NEXT')}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                        <Typography
                            onClick={() => navigate(`/${currentLanguage}/employer-login`)}
                            sx={{
                                fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" },
                                textAlign: "center",
                                color: "#FF671F",
                                fontWeight: "600",
                                textDecoration: "underline",
                                cursor: "pointer"
                            }}
                        >
                            {t('CJ_LINK_EMP_LOGIN')}
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: "40px",
                                fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" },
                                fontWeight: "500",
                                textAlign: "center"
                            }}
                        >
                            By continuing, you agree to the <a href={`${window.location.origin}/${currentLanguage}/terms-and-conditions`} style={{ color: "#0D99FF", textDecoration: "none" }}>Terms & Conditions</a> and
                            <a href={`${window.location.origin}/${currentLanguage}/privacy-policy`} style={{ color: "#0D99FF", textDecoration: "none" }}>Privacy & Policy</a> of JobsYahan.
                        </Typography>

                    </Box>

                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default CandidateCredentialsForm;
