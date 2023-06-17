
import { Box, Typography, Stack, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { contactUsValidationSchema } from "../../Validation/EmployerValidation";
import FormLabel from "../Common/FormLabel";
import Error from "../../ThemeComponent/Common/Error";
import FooterHeader from "./FooterHeader";
import { useTranslation } from "react-i18next";
const ContactUs = () => {

    const { t } = useTranslation();
    const defaultValue = {
        name: "",
        mobile_number: "",
        message: ""
    }
    const handleSubmit = (values, { setFieldError }) => {
        console.log(values);
    }
    return (<>
        <Box
            sx={{
                background: "#FCFCFC",
                minHeight: "100vh"

            }}>
            <FooterHeader />
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
                            // boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
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
                                            <FormLabel LableText="Name" LableFor="name" />
                                            <Field id="jobLocation"
                                                type="text" placeholder="Enter your name"
                                                name="name"
                                                className="custom-text-field" />
                                            {errors.name && touched.name && <Error text={errors.name} />}

                                        </Box>
                                        <Box className="FormGroup">
                                            <FormLabel LableText="Mobile Number" LableFor="mobile_number" />
                                            <Field id="jobLocation"
                                                type="text" placeholder="Enter your Mobile Number"
                                                name="mobile_number"
                                                className="custom-text-field" />
                                            {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}

                                        </Box>

                                        <Box className="FormGroup">
                                            <FormLabel LableText="Message" LableFor="message" />
                                            <Field id="message"
                                                as="textarea" placeholder="Enter your message"
                                                name="message"
                                                className="custom-text-field"
                                                rows={4} />
                                            {errors.message && touched.message && <Error text={errors.message} />}

                                        </Box>

                                        <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                            margin: "20px 0px !important"
                                        }} >Send Message</Button>

                                    </Form>
                                )}
                            </Formik>

                        </Stack>
                    </Stack>
                </Stack>
            </Box>





        </Box >
    </>)
}

export default ContactUs;
