import { postRequest } from "../../utils/ApiRequests";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { contactUsValidationSchema } from "../../Validation/EmployerValidation";
import FormLabel from "../Common/FormLabel";
import Error from "../../ThemeComponent/Common/Error";
import Header from "../Common/Header";
import Footer from "../../ThemeComponent/Common/Footer";
import HomePageLiteMessage from "../HomePageLiteSection/HomePageLiteMessage";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
const ContactUs = () => {
    const { t } = useTranslation();
    const currentLanguage = useSelector(state => state.currentLanguage);
    const defaultValue = {
        name: "",
        mobile_number: "",
        message: ""
    }
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = async (values, { resetForm }) => {
        // console.log(values);
        const { name, mobile_number, message } = values;
        let SendMessageForm = new FormData();
        SendMessageForm = {
            name: name,
            mobile: mobile_number,
            message: message
        }

        try {
            const api_url = process.env.REACT_APP_BASE_URL + "/api/postcontactusinformation";
            const response = await postRequest(api_url, SendMessageForm);
            if (response.status === "1") {
                setFormSubmitted(true);
                resetForm();
            }

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }
    return (<>
        <Box
            sx={{
                background: "#FCFCFC",
                minHeight: "100vh"

            }}>
            <Helmet>
                <title>Contact JobsYahan via Email, a Phone Call</title>
                <meta name="description" content="Contact JobsYahan via email, a phone call, or visit our office for more information on jobs." />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content="Contact JobsYahan via Email, a Phone Call" />
                <meta property="og:image" content="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/logo_og.png" />
                <meta property="og:url" content={`${window.location.origin}/${currentLanguage}/contact-us`} />
            </Helmet>
            <Header />
            <Box className="ContactUsContent"
                sx={{
                    padding: { "xs": "20px", "sm": "20px", "md": "60px 40px", "lg": "60px 40px", "xl": "60px 40px" },
                    boxSizing: "border-box"
                }}>

                <Stack direction="row" gap={1} >
                    <Box sx={{
                        width: `calc(100vw - 600px)`,
                        display: { "lg": "block", "md": "none", "xs": "none" }
                    }}>
                        <Stack direction="column"
                            justifyContent="center"
                            sx={{
                                maxWidth: "500px",
                                margin: "0 auto",
                                height: "100%"
                            }}>
                            <Typography component="box" sx={{
                                fontSize: "36px",
                                fontWeight: "600",
                                display: "block",
                                lineHeight: "1.2",
                                margin: "10px 0px"
                            }}>
                                {t('CONTACT_DETAILS')}
                            </Typography>

                            <Stack direction="column" gap={2} >

                                <Stack direction="row" gap={1} alignItems="center" >
                                    <img src={window.location.origin + "/assets/Contact2.png"} alt="Contact2" />
                                    <Typography component="box" sx={{
                                        fontSize: "20px",
                                        display: "block",
                                        lineHeight: "1.2"
                                    }}>
                                        contactus@jobsyahan.com
                                    </Typography>
                                </Stack>
                                <Stack direction="row" gap={1} alignItems="center" >
                                    <img src={window.location.origin + "/assets/Contact3.png"} alt="Contact3" />
                                    <Typography component="box" sx={{
                                        fontSize: "20px",
                                        display: "block",
                                        lineHeight: "1.2"
                                    }}>
                                        B-154, B Block, Sector 63, Noida, Uttar Pradesh-201301
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Stack
                        sx={{
                            width: { "lg": "50%", "md": "100%", "xs": "100%" },
                            alignItems: "center"
                        }}
                    >
                        <Stack gap={2} sx={{
                            width: { "xs": "87%", "sm": "87%", "md": "60%", "lg": "60%", "xl": "60%" },
                            background: "#FBF8FF",
                            borderRadius: "19px",
                            padding: { "lg": "50px 100px", "md": "50px 100px", "xs": "10px" }
                        }}>
                            <Typography component="box" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, fontWeight: "700" }}>
                                {t('WE_ARE_HERE_FOR_YOU')}
                            </Typography>
                            <Formik

                                initialValues={defaultValue}
                                validationSchema={contactUsValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="ContactUsForm">

                                        <Box className="FormGroup">
                                            <FormLabel LableText={t('NAME')} LableFor="name" />
                                            <Field id="jobLocation"
                                                type="text" placeholder="Enter your name"
                                                name="name"
                                                className="custom-text-field"
                                                autoComplete="off" />
                                            {errors.name && touched.name && <Error text={errors.name} />}

                                        </Box>
                                        <Box className="FormGroup">
                                            <FormLabel LableText={t('MOBILE_NUMBER')} LableFor="mobile_number" />
                                            <Field id="jobLocation"
                                                type="text" placeholder="Enter your Mobile Number"
                                                name="mobile_number"
                                                className="custom-text-field"
                                                autoComplete="off" />
                                            {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}

                                        </Box>

                                        <Box className="FormGroup">
                                            <FormLabel LableText={t('MESSAGE')} LableFor="message" />
                                            <Field id="message"
                                                as="textarea" placeholder="Enter your message"
                                                name="message"
                                                className="custom-text-field"
                                                autoComplete="off"
                                                rows={4} />
                                            {errors.message && touched.message && <Error text={errors.message} />}

                                        </Box>

                                        <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                            margin: "20px 0px !important"
                                        }} >{t('SEND_MESSAGE')}</Button>

                                    </Form>
                                )}
                            </Formik>

                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <HomePageLiteMessage value={formSubmitted} setValue={setFormSubmitted} message="Your message is successfully submitted." />

            <Footer />
        </Box >
    </>)
}

export default ContactUs;
