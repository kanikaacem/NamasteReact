import { postRequest } from "../../utils/ApiRequests";
import { Box, Container, Button, useMediaQuery } from "@mui/material";

import { Formik, Field, Form } from "formik";
import { CandidateInformationValidation } from "../../Validation/HomepageLiteValidation";
import FormLabel from "../Common/FormLabel";
import Error from "../../ThemeComponent/Common/Error";
import Footer from "../../ThemeComponent/Common/Footer";
import HomePageLiteTopSection from "./HomePageLiteTopSection";
import HPLTopHeadingSection from "./HPLTopHeadingSection";
import HomePageLiteMessage from "./HomePageLiteMessage";
import { useState } from "react";

const CandidateInformation = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const defaultValue = {
        fullname: "",
        mobile: "",
        city: "",
        workknowledge: ""
    }
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

    const handleSubmit = async (values, { resetForm }) => {
        const { fullname, mobile, city, workknowledge } = values;
        let candidateInfoForm = new FormData();
        candidateInfoForm = {
            fullname,
            mobile,
            city,
            workknowledge
        }

        try {
            const api_url = process.env.REACT_APP_BASE_URL + "/api/postCandidateRequest";
            const response = await postRequest(api_url, candidateInfoForm);
            if (response.status === "1") {
                setFormSubmitted(true);
                resetForm();
            }

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    return (
        <Box className="candidateInformationPage">
            <HomePageLiteTopSection />
            <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px" }}>
                <Box sx={{ padding: "20px", background: isDesktop ? "#ffffff" : "#FEF5F1" }} >
                    <HPLTopHeadingSection headingText="Candidate ki jankari de" />
                    <Formik
                        initialValues={defaultValue}
                        validationSchema={CandidateInformationValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ errors }) => (
                            <Form className="CandidateInformationForm" >
                                <Box className="FormGroup">
                                    <FormLabel LableText="Candidate ka Enter Name" LableFor="fullname" />
                                    <Field id="fullname"
                                        type="text" placeholder="Enter Candidate Name"
                                        name="fullname"
                                        className="custom-text-field" />
                                    {errors.fullname && <Error text={errors.fullname} />}

                                </Box>
                                <Box className="FormGroup">
                                    <FormLabel LableText="Candidate ka Mobile number" LableFor="mobile" />
                                    <Field id="mobile"
                                        type="text" placeholder="Enter Candidate Mobile Number"
                                        name="mobile"
                                        className="custom-text-field" />
                                    {errors.mobile && <Error text={errors.mobile} />}

                                </Box>
                                <Box className="FormGroup">
                                    <FormLabel LableText="Shehar" LableFor="city" />
                                    <Field id="city"
                                        type="text" placeholder="Enter City"
                                        name="city"
                                        className="custom-text-field" />
                                    {errors.city && <Error text={errors.city} />}

                                </Box>
                                <Box className="FormGroup">
                                    <FormLabel LableText="Kya kaam jaante hai" LableFor="workknowledge" />
                                    <Field id="workknowledge"
                                        type="text" placeholder="Enter Work knowledge"
                                        name="workknowledge"
                                        className="custom-text-field" />
                                    {errors.workknowledge && <Error text={errors.workknowledge} />}

                                </Box>

                                <Button variant="contained" type="submit" className="OrangeButton" sx={{
                                    margin: "20px 0px !important"
                                }} >Submit</Button>
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
export default CandidateInformation;
