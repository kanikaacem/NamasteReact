import { postRequest } from "../../utils/ApiRequests";
import { Box, Container, Button, useMediaQuery } from "@mui/material";

import { Formik, Field, Form } from "formik";
import { EmployerInformationValidation } from "../../Validation/HomepageLiteValidation";
import FormLabel from "../Common/FormLabel";
import Error from "../../ThemeComponent/Common/Error";
import Footer from "../../ThemeComponent/Common/Footer";
import HomePageLiteTopSection from "./HomePageLiteTopSection";
import HPLTopHeadingSection from "./HPLTopHeadingSection";
import HomePageLiteMessage from "./HomePageLiteMessage";

import { useState } from "react";
import { useTranslation } from "react-i18next";
const EmployerInformation = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const defaultValue = {
        fullname: "",
        mobile: "",
        city: "",
        businessType: ""
    }
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const { t } = useTranslation();

    const handleSubmit = async (values, { resetForm }) => {
        const { fullname, mobile, city, businessType } = values;
        let employerInfoForm = new FormData();
        employerInfoForm = {
            fullname,
            mobile,
            city,
            businessType
        }

        try {
            const api_url = process.env.REACT_APP_BASE_URL + "/api/posttempinformation";
            const response = await postRequest(api_url, employerInfoForm);
            if (response.status === "1") {
                setFormSubmitted(true)
                resetForm();
            }

        } catch (error) {
            console.error("Fetch error:", error);
        }

    }
    return (
        <Box className="employerInformationPage">
            <HomePageLiteTopSection />
            <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px" }}>
                <Box sx={{ padding: "20px", background: isDesktop ? "#ffffff" : "#FEF5F1" }} >
                    <HPLTopHeadingSection headingText={t('CANDIDATE_INFORMATION')} />
                    <Formik
                        initialValues={defaultValue}
                        validationSchema={EmployerInformationValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ errors }) => (
                            <Form className="EmployerInformationForm" >
                                <Box className="FormGroup">
                                    <FormLabel LableText={t('NAME_OF_CANDIDATE_SEEKER')} LableFor="fullname" />
                                    <Field id="fullname"
                                        type="text" placeholder="Enter Company Name"
                                        name="fullname"
                                        className="custom-text-field" />
                                    {errors.fullname && <Error text={errors.fullname} />}

                                </Box>
                                <Box className="FormGroup">
                                    <FormLabel LableText={t('CANDIDATE_MOBILE_NUMBER')} LableFor="mobile" />
                                    <Field id="mobile"
                                        type="text" placeholder="Enter Employer Mobile Number"
                                        name="mobile"
                                        className="custom-text-field" />
                                    {errors.mobile && <Error text={errors.mobile} />}

                                </Box>
                                <Box className="FormGroup">
                                    <FormLabel LableText={t('CANDIDATE_CITY')} LableFor="city" />
                                    <Field id="city"
                                        type="text" placeholder="Enter City"
                                        name="city"
                                        className="custom-text-field" />
                                    {errors.city && <Error text={errors.city} />}

                                </Box>
                                <Box className="FormGroup">
                                    <FormLabel LableText={t('WHATA_DO_U_KNOW')} LableFor="businessType" />
                                    <Field id="businessType"
                                        type="text" placeholder="Enter Business"
                                        name="businessType"
                                        className="custom-text-field" />
                                    {errors.businessType && <Error text={errors.businessType} />}

                                </Box>

                                <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                    margin: "20px 0px !important"
                                }} >{t('SUBMIT')}</Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
            <Footer />
            <HomePageLiteMessage value={formSubmitted} setValue={setFormSubmitted} message="Your form is successfully submitted." />

        </Box>
    )
}
export default EmployerInformation;

