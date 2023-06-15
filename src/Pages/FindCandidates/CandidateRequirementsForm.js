import { postRequest } from "../../utils/ApiRequests";
import { Box, Button, useMediaQuery, Container } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import PageTopSection from "../Common/PageTopSection";
import HomePageLiteMessage from "../HomePageLiteSection/HomePageLiteMessage";
import FormLabel from "../Common/FormLabel";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const CandidateRequirementsForm = () => {
    const location = useLocation();
    const inputfield = location?.state && location?.state?.inputfield;
    const [formSubmitted, setFormSubmitted] = useState(false);
    const defaultValue = {
        businessname: "",
        businessType: "",
        jobDetails: "",
        jobLocation: "",
        candidateVacancy: ""
    }
    const handleSubmit = async (values, { resetForm }) => {
        const { businessname, businessType, jobDetails, jobLocation, candidateVacancy } = values;
        let candidateRequirementForm = new FormData();
        candidateRequirementForm = {
            inputfield: inputfield,
            businessname,
            businessType,
            jobDetails,
            jobLocation,
            candidateVacancy
        }
        try {
            const api_url = process.env.REACT_APP_BASE_URL + "/api/postinformation";
            const response = await postRequest(api_url, candidateRequirementForm);
            if (response.status === "1") {
                setFormSubmitted(true);
                resetForm();
            }

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

    return (
        <Box className="CandidateRequirementsForm" sx={{ minHeight: "100vh" }} >
            <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px" }}>
                <Box >
                    <PageTopSection TopSectionName="Apni requirement ki jaankari de" />
                    <Box className="CandidateCredentialsForm" sx={{ padding: "20px", background: isDesktop ? "#ffffff" : "#FEF5F1" }} >
                        <Formik

                            initialValues={defaultValue}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="CandidateRequirementForm" >
                                    <Box className="FormGroup">
                                        <FormLabel LableText="Aapke Business ka naam?" LableFor="businessname" />
                                        <Field id="businessname"
                                            type="text" placeholder="Enter Business Name"
                                            name="businessname"
                                            className="custom-text-field" />
                                        {/* {errors.businessname && touched.businessname && <Error text={errors.businessname} />} */}

                                    </Box>
                                    <Box className="FormGroup">
                                        <FormLabel LableText="Aapka Business kya karta hai?" LableFor="businessType" />
                                        <Field id="businessType"
                                            type="text" placeholder="Enter Business Details"
                                            name="businessType"
                                            className="custom-text-field" />
                                        {/* {errors.businessType && touched.businessType && <Error text={errors.businessType} />} */}

                                    </Box>
                                    <Box className="FormGroup">
                                        <FormLabel LableText="Job kya hai?" LableFor="jobDetails" />
                                        <Field id="jobDetails"
                                            type="text" placeholder="Enter Job Details"
                                            name="jobDetails"
                                            className="custom-text-field" />
                                        {/* {errors.jobDetails && touched.jobDetails && <Error text={errors.jobDetails} />} */}

                                    </Box>
                                    <Box className="FormGroup">
                                        <FormLabel LableText="Job kaun se sheher mein hai?" LableFor="jobLocation" />
                                        <Field id="jobLocation"
                                            type="text" placeholder="Enter Job Location"
                                            name="jobLocation"
                                            className="custom-text-field" />
                                        {/* {errors.jobLocation && touched.jobLocation && <Error text={errors.jobLocation} />} */}

                                    </Box>
                                    <Box className="FormGroup">
                                        <FormLabel LableText="Kitne Candidates Chahiye?" LableFor="candidateVacancy" />
                                        <Field id="candidateVacancy"
                                            type="text" placeholder="Enter Candidate Count"
                                            name="candidateVacancy"
                                            className="custom-text-field" />
                                        {/* {errors.candidateVacancy && touched.candidateVacancy && <Error text={errors.candidateVacancy} />} */}

                                    </Box>
                                    <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                        margin: "20px 0px !important"
                                    }} >Submit</Button>
                                </Form>
                            )}
                        </Formik>

                    </Box>

                </Box>
            </Container>
            <Footer />

            <HomePageLiteMessage value={formSubmitted} setValue={setFormSubmitted} />

        </Box >

    )
}
export default CandidateRequirementsForm;