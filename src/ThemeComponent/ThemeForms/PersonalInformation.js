
import { Box, Container, Stack, Typography, TextField, Button, Stepper, Step, StepLabel, Input } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { PersonalRegistrationSchema } from "../../Validation/CandidateValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";

import { useState } from "react";
const PersonalInformation = ({ setActiveStep }) => {

    const defaultValue = {
        full_name: "",
        date_of_birth: "",
        permanant_address: "",
        current_location: "",
        email_id: "",
        phone_number: "",
    }

    const [date, setDate] = useState();

    const handleSubmit = async (values) => {
        let formData = new FormData();
        formData = {
            current_location: values.current_location,
            date_of_birth: values.date_of_birth,
            email_id: values.email_id,
            full_name: values.full_name,
            permanant_address: values.permanant_address,

        }
        setActiveStep(1);
    }

    return (<>
        <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", margin: "20px" }}>
            Personal Details
        </Typography>
        <Box sx={{
            height: "700px",
            width: "60%",
            margin: "0 auto",
            borderRadius: "10px",
            padding: "20px",
            background: "#FFFFFF",
            borderTop: "4px solid #2B1E44"
        }}>
            <Formik

                initialValues={defaultValue}
                validationSchema={PersonalRegistrationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form >

                        <Box className="input-item">
                            <ThemeLabel LableFor="full_name" LableText="Full Name" />
                            <Field
                                error={errors.full_name && touched.full_name}
                                as={Input}
                                id="full_name"
                                placeholder="Enter Full Name" type="text" name="full_name" fullWidth />
                            {errors.full_name && touched.full_name && <Error text={errors.full_name} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="date_of_birth" LableText="Date of Birth" />
                            <DatePicker
                                id="date_of_birth"
                                placeholderText={'Date of Birth'}
                                name="date_of_birth"
                                selected={date} onChange={(date) => { setDate(date); setFieldValue("date_of_birth", date) }} />
                            {errors.date_of_birth && touched.date_of_birth && <Error text={errors.date_of_birth} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="email_id" LableText="Email Address" />
                            <Field
                                error={errors.email_id && touched.email_id}
                                as={Input}
                                id="email_id"
                                placeholder="Enter Full Name" type="text" name="email_id" fullWidth />
                            {errors.email_id && touched.email_id && <Error text={errors.email_id} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="permanant_address" LableText="Permanant Address" />
                            <Field
                                error={errors.permanant_address && touched.permanant_address}
                                as="textarea"
                                rows="4"
                                id="permanant_address"
                                placeholder="Enter Permanant Address" type="text" name="permanant_address" fullWidth />
                            {errors.permanant_address && touched.permanant_address && <Error text={errors.permanant_address} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="current_location" LableText="Current Address" />
                            <Field
                                error={errors.current_location && touched.current_location}
                                as="textarea"
                                rows="4"
                                id="current_location"
                                placeholder="Enter Current Address" type="text" name="current_location" fullWidth />
                            {errors.current_location && touched.current_location && <Error text={errors.current_location} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="
                        phone_number" LableText="Phone Number" />
                            <Field
                                error={errors.phone_number && touched.phone_number}
                                as={Input}
                                id="phone_number"
                                placeholder="Enter Current Address" type="text" name="phone_number" fullWidth />
                            {errors.phone_number && touched.phone_number && <Error text={errors.phone_number} />}

                        </Box>





                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                            <ButtonType1 ButtonText="Continue" />
                        </Box>
                    </Form>
                )}
            </Formik>
            {/* <Box sx={{ height: "50px", background: "#E4E4E4" }}>
                <Typography component="h3" sx={{ fontSize: "20px", fontWeight: "600", color: "#000000", display: "flex", alignItem: 'center',justifyContent:"center" }}>
                    Personal Details
                </Typography>
            </Box> */}
        </Box>
    </>)
}

export default PersonalInformation;