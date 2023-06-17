import { Box, Typography, Button, Container, useMediaQuery } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Error from "../../ThemeComponent/Common/Error";
import FormLabel from "../Common/FormLabel";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import { RWebShare } from "react-web-share";
import { useSelector } from "react-redux";
const CandidateCredentialsForm = () => {
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
            {/* <RWebShare
                data={{
                    text: "Like humans, flamingos make friends for life",
                    url: "https://on.natgeo.com/2zHaNup",
                    title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button>Share 🔗</button>
            </RWebShare> */}
            {/* <Helmet>
                <title>Website - Articles - How to SEO</title>
                <meta name="description" content="Want to learn SEO with React? Look no further!" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="How to SEO" />
                <meta property="og:image" content="https://www.example.com/how-to-seo.jpg" />
                <meta property="article:author" content="Jessy" />
                <meta property="article:tag" content="react,seo" />
                <meta property="article:published_time" content="2020-12-31" />

            </Helmet> */}
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
                            Hum aapki requirement ke liye aapse sampark karenge!
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
                                            LableText="Apna phone number ya email Share karein"
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
                                        Next
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
                            Employer Login
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: "40px",
                                fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" },
                                fontWeight: "500",
                                textAlign: "center"
                            }}
                        >
                            By continuing, you agree to JobYahan <span style={{ color: "#0D99FF" }}>Terms & Conditions</span> and{" "}
                            <span style={{ color: "#0D99FF" }}>Privacy & Policy</span>
                        </Typography>

                    </Box>

                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default CandidateCredentialsForm;
