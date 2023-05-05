
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { contactUsValidationSchema } from "../../Validation/EmployerValidation";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import { useState } from "react";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import Error from "../../ThemeComponent/Common/Error";

import { useTranslation } from "react-i18next";
const ContactUs = () => {
    const [message, SetMessage] = useState(" ");

    const { t, i18n } = useTranslation();
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
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g8.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 200px bottom 0px",
                minHeight: "100vh"

            }}>
            <Box sx={{ padding: { "xs": "10px", "sm": "10px", "md": "20px", "lg": "20px", "xl": "20px" } }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
            </Box>

            <Stack
                direction="row"
                gap={1}

                sx={{
                    padding: "45px 0px"
                }}

            >
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
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "600",
                            color: "#FFFFFF",
                            display: "block",
                            lineHeight: "1.2",
                            margin: "10px 0px"
                        }}>
                            {t('CONTACT_DETAILS')}
                        </Typography>

                        <Stack direction="column" gap={2} >
                            <Stack direction="row" gap={1} alignItems="center" >
                                <img src={window.location.origin + "/assets/Contact1.png"} alt="Contact1" />
                                <Typography component="box" sx={{
                                    fontSize: "20px",
                                    fontFamily: "Work Sans, sans-serif",
                                    color: "#FFFFFF",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    +91 98076 46578
                                </Typography>
                                <img src={window.location.origin + "/assets/Contact4.png"} alt="Contact4" />
                            </Stack>
                            <Stack direction="row" gap={1} alignItems="center" >
                                <img src={window.location.origin + "/assets/Contact2.png"} alt="Contact2" />
                                <Typography component="box" sx={{
                                    fontSize: "20px",
                                    fontFamily: "Work Sans, sans-serif",
                                    color: "#FFFFFF",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    jobsyahan@gmail.com
                                </Typography>
                                <img src={window.location.origin + "/assets/Contact4.png"} alt="Contact4" />
                            </Stack>
                            <Stack direction="row" gap={1} alignItems="center" >
                                <img src={window.location.origin + "/assets/Contact3.png"} alt="Contact3" />
                                <Typography component="box" sx={{
                                    fontSize: "20px",
                                    fontFamily: "Work Sans, sans-serif",
                                    color: "#FFFFFF",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    B-154 B Block, Sector 63 Noida India 201301
                                </Typography>
                            </Stack>

                        </Stack>

                        <hr style={{
                            width: "100%",
                            margin: "20px 0px"
                        }}></hr>

                        <Stack direction="row" gap={2}>
                            <Box>
                                <img src={window.location.origin + "/assets/ContactS1.png"} alt="ContactS1" />
                            </Box>
                            <Box>
                                <img src={window.location.origin + "/assets/ContactS2.png"} alt="ContactS2" />
                            </Box>
                            <Box>
                                <img src={window.location.origin + "/assets/ContactS3.png"} alt="ContactS3" />
                            </Box>
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
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: { "lg": "50px 100px", "md": "50px 100px", "xs": "10px" }
                    }}>
                        <Typography component="box" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
                            {t('WE_ARE_HERE_FOR_YOU')}
                        </Typography>
                        <Formik

                            initialValues={defaultValue}
                            validationSchema={contactUsValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, setFieldValue }) => (
                                <Form className="EmployerLoginForm">
                                    <ThemeFInputDiv >
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="name" LableText="Name * " />
                                            <Field
                                                error={errors.name && touched.name}
                                                as={TextField}
                                                id="name"
                                                placeholder="Enter your name" type="text" name="name" fullWidth />
                                            {errors.name && touched.name && <Error text={errors.name} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="mobile_number" LableText="Mobile No. * " />
                                            <Field
                                                error={errors.mobile_number && touched.mobile_number}
                                                as={TextField}
                                                id="mobile_number"
                                                placeholder="Enter your mobile Number" type="text" name="mobile_number" fullWidth />
                                            {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="message" LableText="Your Message *" />
                                            <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                                <TextField
                                                    error={errors.message && touched.message}
                                                    sx={{ width: "100%", background: "#F4ECFF" }}
                                                    placeholder="Enter your Message"
                                                    multiline
                                                    rows={5}
                                                    maxRows={5}
                                                    onChange={(event) => {
                                                        setFieldValue("message", event.target.value);
                                                        SetMessage(event.target.value)
                                                    }}
                                                />
                                            </Box>

                                            {errors.message && touched.message && <Error text={errors.message} />}

                                        </ThemeFInputDiv>

                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('SEND_MESSAGE')}</ThemeButtonType2>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>

                    </Stack>
                </Stack>
            </Stack>

        </Box >
    </>)
}

export default ContactUs;
